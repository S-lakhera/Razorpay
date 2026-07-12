import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default:
        "https://cdn.pixabay.com/photo/2017/08/10/12/57/ebook-2620823_1280.jpg",
    },
    stock: {
      type: Number,
      required: true,
      default: 1,
    },
    category: {
      type: String,
      required: true,
      enum: ["electronics", "clothing", "books", "other"],
    },
    ratings: {
      type: Number,
      required: true,
      default: 3,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
