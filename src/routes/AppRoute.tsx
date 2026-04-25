import Home from "@/pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AuthRoutes } from "./AuthRoute";
import { AdminRoutes } from "./AdminRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      {AuthRoutes}
      {AdminRoutes}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </>,
  ),
);
