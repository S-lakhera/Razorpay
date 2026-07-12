import dotenv from "dotenv";
dotenv.config();

export const env = Object.freeze({
  PORT: process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN,
  NODE_ENV: process.env.NODE_ENV,
});
