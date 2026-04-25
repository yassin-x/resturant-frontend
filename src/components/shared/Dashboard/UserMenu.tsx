import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutButton } from "@/features/Auth/components/LogoutButton";
import { useAuth } from "@/features/Auth/hooks/useAuthStore";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

export function UserMenu() {
  const { user, isStaff } = useAuth();
  return (
    <div className={cn("flex items-cecnter gap-2", !user && "hidden")}>
      <DropdownMenu dir={`rtl`} modal={false}>
        <DropdownMenuTrigger>
          <Button variant="ghost" className="relative w-10 h-10 rounded-full">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="text-muted-foreground bg-accent">
                {user?.fullName?.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          <DropdownMenuLabel className="text-center font-medium text-sm">
            {user?.fullName}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>الملف الشخصي</DropdownMenuItem>
          {isStaff && (
            <DropdownMenuItem>
              <NavLink to="/admin">لوحة التحكم</NavLink>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>طلباتي</DropdownMenuItem>
          <DropdownMenuItem>إعدادات</DropdownMenuItem>
          <DropdownMenuSeparator />
          <LogoutButton className="w-full" variant="destructive" size="sm" />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
