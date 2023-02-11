import { RouteObject } from "react-router-dom";
import { Route } from "./components/Route";
import { HomePage } from "@pages/Home";
import { AboutPage } from "@pages/About";

export const config: RouteObject[] = [
  {
    path: "/",
    element: (
      <Route>
        <HomePage />
      </Route>
    ),
  },
  {
    path: "/about",
    element: (
      <Route>
        <AboutPage />
      </Route>
    ),
  },
];
