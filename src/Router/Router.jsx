import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import MainLayout from "../layout/MainLayout/MainLayout";
import LogIn from "../Pages/LogIn/LogIn";
import SingUp from "../Pages/SingUp/SingUp";

const myCreateRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>
      },
      {
        path: "/signUp",
        element: <SingUp></SingUp>
      },
      {
        path: "/donations/:id",
      },
    ],
  },
]);

export default myCreateRoute;
