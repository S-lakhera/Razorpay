import { Router } from "express";
import * as CartController from "./cart.controller.js";
import protect from "../../middlewares/auth.js";

const router = Router();

router.use(protect);

/**
 * @description Get the current user's cart
 * @route GET /api/cart
 * @access private
 */
router.get("/", CartController.getCart);

/**
 * @description Add an item to the cart
 * @route POST /api/cart
 * @access private
 * @body { productId, quantity }
 */
router.post("/", CartController.addItemToCart);

/**
 * @description Update quantity of an item in the cart
 * @route PUT /api/cart/:productId
 * @access private
 * @body { quantity }
 * @params { productId }
 */
router.put("/:productId", CartController.updateItemQuantity);

/**
 * @description Remove an item from the cart
 * @route DELETE /api/cart/:productId
 * @access private
 */
router.delete("/:productId", CartController.removeItemFromCart);

/**
 * @description Clear the entire cart
 * @route DELETE /api/cart
 * @access private
 */
router.delete("/", CartController.clearCart);

export default router;
