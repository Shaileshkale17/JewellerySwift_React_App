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
import "./main.css"
import Trending from "./containers/Trending/Trending.jsx";
import Loader from "./containers/loader/loader.jsx";
// seding the Data to localstorage
import OfferData from "./DataContainers/OfferData.js";
import ImageData from "./DataContainers/ImageData.js";





// const router = createBrowserRouter(
//   createRoutesFromElements(
//   <Route path="/" element={<Layout/>}>
//     <Router path="/" element={<Home/>} />

//   </Route>
// ))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: async () => <Loader />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: async () => <Loader />,
      },
      {
        path: "/Trending",
        element: <Trending />,
        loader: async () => <Loader />,
      },
      {
        path: "/Bridal",
        element: <Trending />,
        loader: async () => <Loader />,
      },
      {
        path: "/Designers",
        element: <Trending />,
        loader: async () => <Loader />,
      },
      {
        path: "/TimePieces",
        element: <Trending />,
        loader: async () => <Loader />,
      },
      {
        path: "/Jewellery",
        element: <Trending />,
        loader: async () => <Loader />,
      },
      {
        path: "/Services",
        element: <Trending />,
        loader: async () => <Loader />,
      },
      {
        path: "/Contact",
        element: <Trending />,
        loader: async () => <Loader />,
      },
      {
        path: "/About",
        element: <Loader />,
        loader: async () => <Loader />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
