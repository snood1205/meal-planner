import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import {Layout} from "./layout";
import {Meals} from "./components/meals";
import {MealShow} from "./components/meals/show";
import {NewMeal} from "./components/meals/new";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "meals",
        element: <Meals/>
      },
      {
        path: "meals/:mealId",
        element: <MealShow/>
      },
      {
        path: "meals/new",
        element: <NewMeal />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
