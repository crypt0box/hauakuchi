import { MessageResponse } from "@/hooks/useFetchMessages";
import { atom } from "jotai";

export const newMessageAtom = atom<MessageResponse | undefined>(undefined);
