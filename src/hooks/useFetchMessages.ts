import { clientAxios } from "@/lib/axios";
import { Database } from "database.types";
import { useQuery } from "react-query";

export type MessageResponse = Database["public"]["Tables"]["messages"]["Row"];
export const useFetchMessages = () => {
  const getMessages = () => clientAxios.get<MessageResponse[]>("/api/message");
  const { data, isLoading } = useQuery("messages", getMessages, {
    // enabled: false,
  });
  const res = data?.data;
  return { res, isLoading };
};
