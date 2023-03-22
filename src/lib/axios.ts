import Axios from "axios";

export const serverAxios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  headers: {
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    Authorization: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    "Content-Type": "application/json",
    Prefer: "return=minimal",
  },
});

export const clientAxios = Axios.create({
  headers: {
    "Content-Type": "application/json",
    Prefer: "return=minimal",
  },
});
