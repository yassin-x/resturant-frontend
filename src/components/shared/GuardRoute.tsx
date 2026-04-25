import { Pages, Routes } from "@/constants/enums";
import { useAuth } from "@/features/Auth/hooks/useAuthStore";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  redirectTo?: string;
}

export function ProtactedRoute({
  children,
  redirectTo = `/${Routes.AUTH}/${Pages.SIGNIN}`,
}: Props) {
  const { isAuth, loading, user } = useAuth();
  const location = useLocation();
  const [initialCheck, setInitialCheck] = useState(false);

  useEffect(() => {
    if (loading) {
      setInitialCheck(false);
    }
  }, [loading]);

  if (initialCheck && loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuth) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  if (user) {
    // Redirect to verify account page if user is not verified
    return (
      <Navigate to={`/${Routes.HOME}`} state={{ from: location }} replace />
    );
  }

  return isAuth && user && <>{children}</>;
}

export function PublicRoute({
  children,
  redirectTo = `${Routes.HOME}`,
}: Props) {
  const { isAuth, loading, user } = useAuth();
  const [initialCheck, setInitialCheck] = useState(true);
  useEffect(() => {
    if (!loading) {
      setInitialCheck(false);
    }
  }, [loading]);

  if (initialCheck && loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isAuth && user) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
}
