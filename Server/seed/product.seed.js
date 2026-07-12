import mongoose from "mongoose";
import Product from "../src/models/product.js";
import { env } from "../src/config/env.js";

const URL =
  "https://dummyjson.com/products?limit=80&skip=50&select=title,description,price,thumbnail,stock,category,rating";

const categoryMap = {
  smartphones: "electronics",
  laptops: "electronics",
  tablets: "electronics",
  "mobile-accessories": "electronics",

  "mens-shirts": "clothing",
  "mens-shoes": "clothing",
  "mens-watches": "clothing",
  "womens-bags": "clothing",
  "womens-dresses": "clothing",
  "womens-jewellery": "clothing",
  "womens-shoes": "clothing",
  "womens-watches": "clothing",
  tops: "clothing",

  books: "books",
};

await mongoose.connect(env.MONGODB_URL);

const response = await fetch(URL);

const data = await response.json();

const products = data.products.map((product) => ({
  name: product.title,
  description: product.description,
  price: product.price,
  image: product.thumbnail,
  stock: product.stock,
  ratings: product.rating,
  category: categoryMap[product.category] || "other",
}));

await Product.deleteMany();

await Product.insertMany(products);

console.log(`${products.length} Products Seeded`);

process.exit();
