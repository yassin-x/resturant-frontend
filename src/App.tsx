import { RouterProvider } from "react-router-dom";
import { ReactQueryProvider } from "./lib/react-query";
import { router } from "./routes/AppRoute";
import { Toaster } from "sonner";
import { useAuth } from "./features/Auth/hooks/useAuthStore";
import { useEffect } from "react";

export default function App() {
  const { profile, isAuth } = useAuth();
  useEffect(() => {
    if (isAuth) {
      profile();
    }
  }, [profile, isAuth]);
  return (
    <ReactQueryProvider>
      <RouterProvider router={router} />
      <Toaster
        richColors
        position="top-center"
        duration={3000}
        closeButton={true}
        dir={"rtl"}
      />
    </ReactQueryProvider>
  );
}
