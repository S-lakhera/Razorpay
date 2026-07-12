import { asyncHandler } from "../../middlewares/asyncHandler.js";
import * as ProductService from "./product.service.js";

const createProduct = asyncHandler(async (req, res) => {
  const product = await ProductService.createProduct(req.body);
  return res
    .status(201)
    .json({ message: "Product created successfully", product });
});

const getAllProducts = asyncHandler(async (req, res) => {
  const { name } = req.query;
  const products = await ProductService.getAllProducts(name);
  return res
    .status(200)
    .json({ message: "Products fetched successfully", products });
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await ProductService.getProductById(req.params.id);
  return res
    .status(200)
    .json({ message: "Product fetched successfully", product });
});


const updateProduct = asyncHandler(async (req, res) => {
  const product = await ProductService.updateProduct(req.params.id, req.body);
  return res
    .status(200)
    .json({ message: "Product updated successfully", product });
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await ProductService.deleteProduct(req.params.id);
  return res
    .status(200)
    .json({ message: "Product deleted successfully", product });
});

export {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
