import { axios } from "@/lib/axios";
import { Database } from "database.types";
import { useMutation } from "react-query";

type MessageRequest = Database["public"]["Tables"]["messages"]["Insert"];

export const useMutateMessage = () => {
  const _post = (params: MessageRequest) =>
    axios.post("/rest/v1/messages", params);

  const mutation = useMutation((params: MessageRequest) => _post(params));
  const postMessage = (params: MessageRequest) => mutation.mutate(params);
  return { postMessage };
};
