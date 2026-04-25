import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import AuthButton from "./AuthButton";
import { UserMenu } from "../Dashboard";

export interface LinkProp {
  to: string;
  title: string;
}

export default function Header() {
  const NavLinks: LinkProp[] = [
    { to: "/", title: "الرئيسية" },
    { to: "#menu", title: "قائمة الطعام" },
  ];
  return (
    <header className="p-2 w-full">
      <div className="flex items-center justify-between container p-2">
        <div className="flex items-center">
          <NavLink to="/">
            <h2 className="text-2xl font-bold text-primary select-none">
              مطعم الجوكر
            </h2>
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <Nav links={NavLinks} />
          <MobileNav links={NavLinks} />
          <AuthButton />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
