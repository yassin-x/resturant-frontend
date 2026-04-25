import { PublicRoute } from "@/components/shared/GuardRoute";
import type { LinkProp } from "@/components/shared/Header";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <PublicRoute>
      <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-bl-[200px]" />
          <div className="absolute inset-0 rounded-bl-[200px] bg-primary">
            <div className="absolute left-20 top-10 z-10">
              <h2 className="font-extrabold text-2xl text-white">
                مطعم الجوكر
              </h2>
            </div>
            <div className="absolute right-10 bottom-10 z-10">
              <Navbar />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col py-10">
          <div className="flex-1 flex items-center justify-center px-8">
            <div className="w-full max-w-md">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </PublicRoute>
  );
}

function Navbar() {
  const NavLinks: LinkProp[] = [
    { to: "/", title: "الرئيسية" },
    { to: "/menu", title: "قائمة الطعام" },
    { to: "/about", title: "من نحن" },
    { to: "/contact", title: "اتصل بنا" },
  ];
  return (
    <nav className="flex items-center justify-center space-x-6">
      {NavLinks.map((link) => (
        <Link
          key={link.title}
          to={link.to}
          className="text-white opacity-80 hover:opacity-100 hover:underline transition-opacity duration-200"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
