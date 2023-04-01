import { MessageResponse } from "@/hooks/useFetchMessages";
import { serverAxios } from "@/lib/axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await serverAxios.get<MessageResponse[]>(
    `/rest/v1/messages?select=*&id=eq.${req.query.id}`
  );
  const data = response.data[0];
  res.status(200).json(data);
}
