import Cart from "../../models/cart.js";

async function findCartByUserId(userId) {
  return await Cart.findOne({ user: userId }).populate("items.product");
}

async function createCart(userId) {
  return await Cart.create({ user: userId, items: [], totalAmount: 0 });
}

export { findCartByUserId, createCart };
