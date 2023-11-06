import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import MainLayout from "../layout/MainLayout/MainLayout";
import LogIn from "../Pages/LogIn/LogIn";
import SingUp from "../Pages/SingUp/SingUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

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
        path: "/checkout/:id",
        element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/bookings",
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>,
      },
    ],
  },
]);

export default myCreateRoute;
