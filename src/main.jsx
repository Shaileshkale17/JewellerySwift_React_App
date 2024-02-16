import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./containers/Home/Home.jsx";
import "./main.css";
import Trending from "./containers/Trending/Trending.jsx";
import Loader from "./containers/loader/Loader.jsx";
// seding the Data to localstorage
import OfferData from "./DataContainers/OfferData.js";
import ImageData from "./DataContainers/ImageData.js";
import upcomingJewellery from "./DataContainers/upcomingJewellery.js";
import Bridal from "./containers/Bridal/Bridal.jsx";
import Error from "./containers/Error/Error";
import SingleProduct from "./containers/Product/SingleProduct.jsx";
import Products from "./containers/Uploading/products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/Trending",
        element: <Trending />,
      },
      {
        path: "/Bridal",
        element: <Bridal />,
      },
      {
        path: "/Designers",
        element: <Trending />,
      },
      {
        path: "/TimePieces",
        element: <Trending />,
      },
      {
        path: "/Jewellery",
        element: <Trending />,
      },
      {
        path: "/Services",
        element: <Trending />,
      },
      {
        path: "/Contact",
        element: <Trending />,
      },
      {
        path: "/About",
        element: <Loader />,
      },
      {
        path: "/:id",
        element: <SingleProduct />,
      },
      {
        path: "/:Trending/:id",
        element: <SingleProduct />,
      },
      {
        path: "/Uploading",
        element: <Products />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
