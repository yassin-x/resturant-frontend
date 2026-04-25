import { Pages, Routes } from "@/constants/enums";
import Layout from "@/features/Admin/components/Layout";
import LayoutItem from "@/features/Admin/components/LayoutItem";
import Admin from "@/pages/admin";
import AddItem from "@/pages/admin/add-item";
import UpdateItem from "@/pages/admin/update-item";
import UpdateItemId from "@/pages/admin/update-item/[id]";
import { Route } from "react-router-dom";

export const AdminRoutes = (
  <Route path={`/${Routes.ADMIN}`} element={<Layout />}>
    <Route index element={<Admin />} />
    <Route path={Pages.ADD_ITEM} element={<AddItem />} />
    <Route path={Pages.UPDATE_ITEM} element={<LayoutItem />}>
      <Route index element={<UpdateItem />} />
      <Route path=":id" element={<UpdateItemId />} />
    </Route>
  </Route>
);
