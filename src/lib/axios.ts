import Axios from "axios";

export const serverAxios = Axios.create({
  baseURL: process.env.SUPABASE_URL,
  headers: {
    apikey: process.env.SUPABASE_ANON_KEY,
    Authorization: process.env.SUPABASE_ANON_KEY,
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
