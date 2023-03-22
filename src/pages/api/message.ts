import { MessageResponse } from "@/hooks/useFetchMessages";
import { serverAxios } from "@/lib/axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const response = await serverAxios.get<MessageResponse[]>(
      "/rest/v1/messages?order=created_at.desc&select=*"
    );
    const data = response.data;
    res.status(200).json(data);
  }
  if (req.method === "POST") {
    const response = await serverAxios.post("/rest/v1/messages", req.body);
    res.status(200).json(response.data);
  }
}
