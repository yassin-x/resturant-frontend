import { NavLink, useLocation } from "react-router-dom";
import type { LinkProp } from ".";
import { cn } from "@/lib/utils";

export default function Nav({ links }: { links: LinkProp[] }) {
  const pathname = useLocation().pathname;

  return (
    <nav className="hidden lg:flex">
      <li className="flex items-center gap-3">
        {links.map((link) => {
          return (
            <ul className="select-none">
              <NavLink
                to={link.to}
                className={cn(
                  "text-md font-medium transition-colors hover:text-primary",
                  pathname === link.to
                    ? "text-primary border-2 rounded-full px-2 py-1 backdrop-blur-xl shadow-md border-primary/50"
                    : "text-muted-foreground",
                )}
              >
                {link.title}
              </NavLink>
            </ul>
          );
        })}
      </li>
    </nav>
  );
}
