import { config } from "dotenv";
config();

export const {
  PORT,
  BASE_CLIENT_URL,
  BASE_SERVER_URL,
  BASE_API_URL,
  MONGO_URI,
  CAT_API_KEY,
} = process.env;
