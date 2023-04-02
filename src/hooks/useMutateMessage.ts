import { clientAxios } from "@/lib/axios";
import { Database } from "database.types";

type MessageRequest = Database["public"]["Tables"]["messages"]["Insert"];

export const useMutateMessage = () => {
  const postMessage = (params: MessageRequest) =>
    clientAxios.post("/api/messages", params);

  return { postMessage };
};
