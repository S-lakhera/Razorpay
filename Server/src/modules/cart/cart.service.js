import * as CartRepo from "./cart.repository.js";
import Product from "../../models/product.js";
import ApiError from "../../utils/ApiError.js";

const calculateTotal = (cart) => {
  return cart.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
};

async function getCart(userId) {
  let cart = await CartRepo.findCartByUserId(userId);
  if (!cart) {
    cart = await CartRepo.createCart(userId);
  }
  return cart;
}

async function addItemToCart(userId, productId, quantity) {
  let cart = await CartRepo.findCartByUserId(userId);
  if (!cart) {
    cart = await CartRepo.createCart(userId);
  }

  const product = await Product.findById(productId);
  if (!product) throw new ApiError(404, "Product not found");

  const itemIndex = cart.items.findIndex(
    (item) => item.product._id.toString() === productId,
  );

  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ product: productId, quantity });
  }

  await cart.populate("items.product");
  cart.totalAmount = calculateTotal(cart);

  await cart.save();
  return cart;
}

async function updateItemQuantity(userId, productId, quantity) {
  let cart = await CartRepo.findCartByUserId(userId);
  if (!cart) throw new ApiError(404, "Cart not found");

  const itemIndex = cart.items.findIndex(
    (item) => item.product._id.toString() === productId,
  );

  if (itemIndex > -1) {
    cart.items[itemIndex].quantity = quantity;
    cart.totalAmount = calculateTotal(cart);
    await cart.save();
    return cart;
  } else {
    throw new ApiError(404, "Item not found in cart");
  }
}

async function removeItemFromCart(userId, productId) {
  let cart = await CartRepo.findCartByUserId(userId);
  if (!cart) throw new ApiError(404, "Cart not found");

  cart.items = cart.items.filter(
    (item) => item.product._id.toString() !== productId,
  );

  cart.totalAmount = calculateTotal(cart);
  await cart.save();
  return cart;
}

async function clearCart(userId) {
  let cart = await CartRepo.findCartByUserId(userId);
  if (!cart) throw new ApiError(404, "Cart not found");

  cart.items = [];
  cart.totalAmount = 0;
  await cart.save();
  return cart;
}

export {
  getCart,
  addItemToCart,
  updateItemQuantity,
  removeItemFromCart,
  clearCart,
};
