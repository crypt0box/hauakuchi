import { MessageResponse } from "@/hooks/useFetchMessages";
import { serverAxios } from "@/lib/axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MessageResponse[]>
) {
  if (req.method === "GET") {
    const data = await serverAxios.get<MessageResponse[]>(
      "/rest/v1/messages?select=*"
    );
    const response = data.data;
    res.status(200).json(response);
  }
  if (req.method === "POST") {
    await serverAxios.post("/rest/v1/messages", req.body);
    res.status(200);
  }
}
