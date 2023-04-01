import { MessageResponse } from "@/hooks/useFetchMessages";
import { atom } from "jotai";

export const messageAtom = atom<MessageResponse | undefined>(undefined);

export const ogpTitleAtom = atom<string | undefined>(undefined);
