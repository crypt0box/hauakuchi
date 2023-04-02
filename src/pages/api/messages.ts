import { MessageResponse } from "@/hooks/useFetchMessages";
import { serverAxios } from "@/lib/axios";
import { supabase } from "@/lib/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const response = await serverAxios.get<MessageResponse[]>(
      "/rest/v1/messages?order=created_at.desc&limit=20&select=*"
    );
    const data = response.data;
    res.status(200).json(data);
  }
  if (req.method === "POST") {
    const response = await supabase.from("messages").insert(req.body).select();
    const data = response.data?.[0];
    res.status(200).json(data);
  }
}
