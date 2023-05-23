import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./components/pages/LandingPage";
import { Animals } from "./components/Animals";
import { Error } from "./components/pages/Error";
import { AnimalView } from "./components/AnimalView";
import { animalLoader } from "./loaders/AnimalLoader";
import { AllAnimals } from "./components/pages/AllAnimals";
import { AnimalDetailPage } from "./components/pages/AnimalDetailpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
    errorElement: <Error></Error>,
    loader: animalLoader,
  },
  {
    path: "/animals",
    element: <AllAnimals></AllAnimals>,
    loader: animalLoader,
  },
  {
    path: "/animals/:id",
    element: <AnimalDetailPage></AnimalDetailPage>,
    loader: animalLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
