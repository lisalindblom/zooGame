import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Animals } from "./pages/Animals";
import { Error } from "./pages/Error";
import { AnimalView } from "./pages/AnimalView";
import { animalLoader } from "./loaders/AnimalLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
    errorElement: <Error></Error>,
    loader: animalLoader,
  },
  {
    path: "/animals",
    element: <Animals></Animals>,
    loader: animalLoader,
  },
  {
    path: "/animals/:id",
    element: <AnimalView></AnimalView>,
    loader: animalLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
