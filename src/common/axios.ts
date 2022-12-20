import ax from "axios";

const axios = ax.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "key": process.env.NEXT_PUBLIC_API_KEY,
    "Access-Control-Allow-Origin": true,
  },
});

export default axios;