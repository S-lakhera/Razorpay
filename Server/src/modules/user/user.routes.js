import { Router } from "express";
import * as UserController from "./user.controller.js";
import protect from "../../middlewares/auth.js";

const router = Router();

/**
 * @description Create a new user
 * @route POST /api/user/register
 * @access public
 * @requires name, email, password
 */
router.post("/register", UserController.createUser);

/**
 * @description Login a user
 * @route POST /api/user/login
 * @access public
 * @requires email, password
 */
router.post("/login", UserController.loginUser);

/**
 * @description Logout a user
 * @route POST /api/user/logout
 * @access protected
 */
router.post("/logout", protect, UserController.logoutUser);

/**
 * @description Get user profile
 * @route GET /api/user/profile
 * @access protected
 */
router.get("/profile", protect, UserController.getProfile);

export default router;
