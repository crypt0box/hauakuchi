import { clientAxios } from "@/lib/axios";
import { shuffleArray } from "@/utils/shuffleArray";
import { Database } from "database.types";
import { useQuery } from "react-query";

export type MessageResponse = Database["public"]["Tables"]["messages"]["Row"];
export const useFetchMessages = () => {
  const getMessages = () => clientAxios.get<MessageResponse[]>("/api/messages");
  const { data, isLoading } = useQuery("messages", getMessages, {});
  const res = data?.data || [];
  const shuffled = shuffleArray(res);
  return { res: shuffled, isLoading };
};
