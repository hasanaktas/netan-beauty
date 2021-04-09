import React from "react";
import { Navigate } from "react-router-dom";
import { MainLayout, AdminLayout } from "layouts";
//Pages
import HomePage from "./home";
import AboutPage from "./about";
import ContactPage from "./contact";
import SSSPage from "./sss";
import FdaPage from "./fda";
import ProductPage from "./product";
import ProductsPage from "./products";
import NotFoundPage from "./notFound";
import LoginPage from "./login";

//Admin Pages
import AdminAboutPage from "./admin/about";
import AdminContactPage from "./admin/contact";
import AdminProductsPage from "./admin/products";
import AdminProductPage from "./admin/product";
import AdminHomePage from "./admin/home";
import AdminFdaPage from "./admin/fda";
import AdminSSSPage from "./admin/sss";
const routes = (isLoggedIn) => [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/sss", element: <SSSPage /> },
      { path: "/iletisim", element: <ContactPage /> },
      { path: "/hakkimizda", element: <AboutPage /> },
      { path: "/fda", element: <FdaPage /> },
      { path: "/urunler", element: <ProductsPage /> },
      { path: "/urun/:productId", element: <ProductPage /> },
      { path: "404", element: <NotFoundPage /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/admin",
    element: isLoggedIn ? <AdminLayout /> : <Navigate to="/login" />,
    children: [
      { path: "/", element: <Navigate to="/admin/home" /> },
      { path: "/home", element: <AdminHomePage /> },
      { path: "/about", element: <AdminAboutPage /> },
      { path: "/fda", element: <AdminFdaPage /> },
      { path: "/contact", element: <AdminContactPage /> },
      { path: "/sss", element: <AdminSSSPage /> },
      { path: "/products", element: <AdminProductsPage /> },
      { path: "/product/:productId", element: <AdminProductPage /> },

      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/login",
    element: !isLoggedIn ? <LoginPage /> : <Navigate to="/admin" />,
  },
];

export default routes;
