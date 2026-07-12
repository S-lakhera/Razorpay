import Product from "../../models/product.js";

async function createProduct(data) {
  return await Product.create(data);
}

async function findAllProducts(searchQuery) {
  const filter = {};
  if (searchQuery) {
    filter.name = { $regex: searchQuery, $options: "i" };
  }
  return await Product.find(filter);
}

async function findProductById(id) {
  return await Product.findById(id);
}

async function updateProductById(id, data) {
  return await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
}

async function deleteProductById(id) {
  return await Product.findByIdAndDelete(id);
}

export {
  createProduct,
  findAllProducts,
  findProductById,
  updateProductById,
  deleteProductById,
};
