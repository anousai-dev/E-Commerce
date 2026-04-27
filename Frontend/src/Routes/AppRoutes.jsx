import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import ShopPage from "../pages/Shop";
import Cart from "../pages/Cart";
import History from "../pages/History";
import Checkout from "../pages/Checkout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Layoutmain from "../Components/Layout/Layoutmain";
import LayoutAdmin from "../Components/Layout/LayoutAdmin";

import Dashboard from "../pages/admin/Dashboard";
import Category from "../pages/admin/Category";
import Product from "../pages/admin/Product";
import Manage from "../pages/admin/Manage";
import HomeUser from "../pages/user/HomeUser";
import LayoutUser from "../Components/Layout/LayoutUser";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layoutmain />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path:"/admin",
    element: <LayoutAdmin />,
    children:[
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path:"product",
        element: <Product />,
      },
      {
        path:"manage",
        element: <Manage />,
      }
    ],
  },
  {
    path: "/user",
    element: <LayoutUser/>,
    children: [
      {
        index: true,
        element: <HomeUser/>
      },
    ],
  }

]);

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
};
export default AppRoutes;
