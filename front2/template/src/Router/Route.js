import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Add from "../Pages/Add/Add";
import Detale from "../Pages/Detale/Detale";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/detale/:id",
    element: <Detale/>,
  },
  {
    path: "/detale",
    element: <Detale/>,
  },
  {
    path: "/add",
    element: <Add/>,
  },
]);

export default router