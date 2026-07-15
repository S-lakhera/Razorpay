import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/mainLayout";
import { Home } from "../pages/home/Home";
import { Product } from "../pages/products/Product";
import { Login } from "../pages/login/Login";
import { Register } from "../pages/register/Register";

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
