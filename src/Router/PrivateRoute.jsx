import React from "react";
// import { Spinner } from "@material-tailwind/react";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {  Navigate, useLocation } from "react-router-dom";
import { DefaultSpinner } from "../Provider/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  // console.log(user, loading);
  if (loading) {
    return <DefaultSpinner></DefaultSpinner>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/logIn" replace></Navigate>;
};

export default PrivateRoute;
