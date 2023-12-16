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
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/Trending",
        element: <Trending />,
      },
      {
        path: "/Bridal",
        element: <Trending />,
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
        element: <Trending />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
