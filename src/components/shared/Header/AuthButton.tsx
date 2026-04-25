import { buttonVariants } from "@/components/ui/button";
import { useAuth } from "@/features/Auth/hooks/useAuthStore";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

export default function AuthButton() {
  const { isAuth } = useAuth();
  return (
      <div
        className={cn(
          "flex items-center justify-between gap-2",
          isAuth && "hidden",
        )}
      >
        <NavLink
          to="/auth/signin"
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          تسجيل الدخول
        </NavLink>
        <NavLink
          to="/auth/signup"
          className={cn(buttonVariants({ variant: "default" }))}
        >
          انشاء حساب
        </NavLink>
      </div>
  );
}
