import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.url,
  headers: {
    apikey: process.env.apikey,
  },
});
