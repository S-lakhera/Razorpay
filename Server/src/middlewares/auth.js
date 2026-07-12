import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { asyncHandler } from "./asyncHandler.js";
import ApiError from "../utils/ApiError.js";

const protect = asyncHandler(async (req, res, next) => {
  let token = req.cookies.token;

  if (!token) {
    throw new ApiError(401, "Not authorized to access this route");
  }

  const decoded = jwt.verify(token, env.JWT_SECRET);
  req.user = { id: decoded.id };
  next();
});

export default protect;
