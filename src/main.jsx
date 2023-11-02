import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";

import "./index.css";
import "./app.css";
import { RouterProvider } from "react-router-dom";
import myCreateRoute from "./Router/Router";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
    <ThemeProvider>
        <RouterProvider router={myCreateRoute}></RouterProvider>
    </ThemeProvider>
      </AuthProvider>
  </React.StrictMode>
);
