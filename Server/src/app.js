import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/errorHandler.js";
import userRouter from "./modules/user/user.routes.js";
import productRouter from "./modules/product/product.routes.js";
import cartRouter from "./modules/cart/cart.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world" });
});

// user routes
app.use("/api/user", userRouter);

// product routes
app.use("/api/products", productRouter);

// cart routes
app.use("/api/cart", cartRouter);

// global error handler
app.use(errorHandler);

export default app;
