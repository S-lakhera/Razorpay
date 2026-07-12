import { Router } from "express";
import * as ProductController from "./product.controller.js";
import protect from "../../middlewares/auth.js";

const router = Router();

/**
 * @description Get all products
 * @route GET /api/products
 * @access public
 */
router.get("/", ProductController.getAllProducts);

/**
 * @description Get a product by id
 * @route GET /api/products/:id
 * @access public
 */
router.get("/:id", ProductController.getProductById);

/**
 * @description Protect all routes below
 * @access private
 */
router.use(protect);

/**
 * @description Create a new product
 * @route POST /api/products
 * @access private
 * @body {name, description, price, image, stock, category}
 */
router.post("/", ProductController.createProduct);

/**
 * @description Update a product
 * @route PUT /api/products/:id
 * @access private
 * @body {name, description, price, image, stock, category}
 */
router.put("/:id", ProductController.updateProduct);

/**
 * @description Delete a product
 * @route DELETE /api/products/:id
 * @access private
 */
router.delete("/:id", ProductController.deleteProduct);

export default router;
