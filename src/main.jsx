import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Country from "../src/Component/Country.jsx";
import Home from "../src/Component/Home.jsx";

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