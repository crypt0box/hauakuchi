import { messagesAtom } from "@/atoms";
import { clientAxios } from "@/lib/axios";
import { Database } from "database.types";
import { useSetAtom } from "jotai";
import { useQuery } from "react-query";

export type MessageResponse = Database["public"]["Tables"]["messages"]["Row"];
export const useFetchMessages = () => {
  const setMessages = useSetAtom(messagesAtom);
  const getMessages = () => clientAxios.get<MessageResponse[]>("/api/messages");
  const { data, isLoading } = useQuery("messages", getMessages, {});
  const res = data?.data || [];
  setMessages(res);
  return { res, isLoading };
};
