import { Pages, Routes } from "@/constants/enums";
import Layout from "@/features/Auth/components/Layout";
import Signin from "@/pages/auth/signin";
import Signup from "@/pages/auth/signup";
import { Route } from "react-router-dom";

export const AuthRoutes = (
  <Route path={`/${Routes.AUTH}`} element={<Layout />}>
    <Route path={Pages.SIGNIN} element={<Signin />} />
    <Route path={Pages.SIGNUP} element={<Signup />} />
  </Route>
);
