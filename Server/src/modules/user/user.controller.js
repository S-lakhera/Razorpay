import { asyncHandler } from "../../middlewares/asyncHandler.js";
import * as UserService from "./user.service.js";
import * as UserRepo from "./user.repository.js";
import { env } from "../../config/env.js";

const setCookie = (res, token) => {
  res.cookie("token", token, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: env.NODE_ENV === "production" ? "strict" : "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });
};

/**
 * @description Create a new user
 * @route POST /api/user/register
 * @access public
 * @requires name, email, password
 */
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const { user, token } = await UserService.createUser({
    name,
    email,
    password,
  });

  setCookie(res, token);

  return res.status(201).json({ message: "User created successfully", user });
});

/**
 * @description Login a user
 * @route POST /api/user/login
 * @access public
 * @requires email, password
 */

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const { user, token } = await UserService.loginUser({ email, password });

  setCookie(res, token);

  return res.status(200).json({ message: "User logged in successfully", user });
});

/**
 * @description Logout a user
 * @route POST /api/user/logout
 * @access protected
 */
const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "User logged out successfully" });
});

/**
 * @description Get user profile
 * @route GET /api/user/profile
 * @access protected
 */
const getProfile = asyncHandler(async (req, res) => {
  const user = await UserRepo.findById(req.user.id);
  return res
    .status(200)
    .json({ message: "User profile fetched successfully", user });
});

export { createUser, loginUser, logoutUser, getProfile };
