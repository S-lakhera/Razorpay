import * as ProductRepo from "./product.repository.js";
import ApiError from "../../utils/ApiError.js";

async function createProduct(data) {
  return await ProductRepo.createProduct(data);
}

async function getAllProducts(searchQuery) {
  return await ProductRepo.findAllProducts(searchQuery);
}

async function getProductById(id) {
  const product = await ProductRepo.findProductById(id);
  if (!product) {
    throw new ApiError(404, "Product not found");
  }
  return product;
}


async function updateProduct(id, data) {
  const product = await ProductRepo.updateProductById(id, data);
  if (!product) {
    throw new ApiError(404, "Product not found");
  }
  return product;
}

async function deleteProduct(id) {
  const product = await ProductRepo.deleteProductById(id);
  if (!product) {
    throw new ApiError(404, "Product not found");
  }
  return product;
}

export {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
