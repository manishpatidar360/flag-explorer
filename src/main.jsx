import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Country from "./Component/country";
import Home from "./Component/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/:country", 
            element: <Country />,  
        },
        {
            path: "/", 
            element: <Home />,  
        }
      ]
    },
  ]);

const root = createRoot(document.querySelector("#root"))
root.render(
    <RouterProvider router={router} />
)