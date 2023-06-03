import { MessageResponse } from "@/hooks/useFetchMessages";
import { serverAxios } from "@/lib/axios";
import { supabase } from "@/lib/supabase";
import type { NextApiRequest, NextApiResponse } from "next";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextRequest } from "next/server";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

const ratelimit = new Ratelimit({
  redis: redis,
  // 10分間に5回までリクエストを受け付ける
  limiter: Ratelimit.slidingWindow(5, "10 m"),
  analytics: true,
  /**
   * Optional prefix for the keys used in redis. This is useful if you want to share a redis
   * instance with other applications and want to avoid key collisions. The default prefix is
   * "@upstash/ratelimit"
   */
  prefix: "@upstash/ratelimit",
});

export default async function handler(req: NextRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const response = await serverAxios.get<MessageResponse[]>(
      "/rest/v1/messages?order=created_at.desc&limit=20&select=*"
    );
    const data = response.data;
    res.status(200).json(data);
  }
  if (req.method === "POST") {
    const { success } = await ratelimit.limit(req.ip || "127.0.0.1");
    if (!success) {
      return res.status(429).json({
        message: "Too many requests",
      });
    }

    const response = await supabase.from("messages").insert(req.body).select();
    const data = response.data?.[0];
    res.status(200).json(data);
  }
}
