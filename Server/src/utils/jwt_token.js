import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, env.JWT_SECRET, {
    expiresIn: env.JWT_COOKIE_EXPIRES_IN,
  });
};

export default generateToken;
