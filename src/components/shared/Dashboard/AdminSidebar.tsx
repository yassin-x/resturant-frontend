import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Pages, Routes } from "@/constants/enums";
import { useAuth } from "@/features/Auth/hooks/useAuthStore";
import { NavLink, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const { user, isOwner } = useAuth();
  const location = useLocation();
  return (
    <Sidebar variant="inset" side="right">
      <SidebarHeader>
        <h2 className="font-medium">
          {isOwner ? "مالك المطعم" : "الموظف"}:{" "}
          <span className="font-bold">{user?.fullName}</span>
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>الإدارة</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                className="w-full"
                asChild
                isActive={
                  location.pathname === `/${Routes.ADMIN}/${Pages.ADD_ITEM}`
                }
              >
                <NavLink to={`/${Routes.ADMIN}/${Pages.ADD_ITEM}`}>
                  إضافة صنف
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                className="w-full"
                isActive={
                  location.pathname === `/${Routes.ADMIN}/${Pages.UPDATE_ITEM}`
                }
              >
                <NavLink to={`/${Routes.ADMIN}/${Pages.UPDATE_ITEM}`}>
                  تحديث صنف
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full" asChild>
              <NavLink to="/" className={"element-center"}>
                {" "}
                الرجوع إلى الموقع{" "}
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
