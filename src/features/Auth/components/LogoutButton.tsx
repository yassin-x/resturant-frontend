import { Button } from "@/components/ui/button";
import { useAuth } from "../hooks/useAuthStore";

interface LogoutButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function LogoutButton({
  variant = "outline",
  size = "default",
  className,
}: LogoutButtonProps) {
  const { user, signOut, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleLogout}
      disabled={loading}
    >
      {loading ? "جاري تسجيل الخروج..." : "تسجيل الخروج"}
    </Button>
  );
}
