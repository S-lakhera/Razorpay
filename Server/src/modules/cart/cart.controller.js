import { asyncHandler } from "../../middlewares/asyncHandler.js";
import * as CartService from "./cart.service.js";

const getCart = asyncHandler(async (req, res) => {
  const cart = await CartService.getCart(req.user.id);
  return res.status(200).json({ message: "Cart fetched successfully", cart });
});

const addItemToCart = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
  const cart = await CartService.addItemToCart(
    req.user.id,
    productId,
    quantity || 1,
  );
  return res.status(200).json({ message: "Item added to cart", cart });
});

const updateItemQuantity = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;
  const cart = await CartService.updateItemQuantity(
    req.user.id,
    productId,
    quantity,
  );
  return res.status(200).json({ message: "Cart updated successfully", cart });
});

const removeItemFromCart = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const cart = await CartService.removeItemFromCart(req.user.id, productId);
  return res.status(200).json({ message: "Item removed from cart", cart });
});

const clearCart = asyncHandler(async (req, res) => {
  const cart = await CartService.clearCart(req.user.id);
  return res.status(200).json({ message: "Cart cleared successfully", cart });
});

export {
  getCart,
  addItemToCart,
  updateItemQuantity,
  removeItemFromCart,
  clearCart,
};
