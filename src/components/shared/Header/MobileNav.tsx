import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { LinkProp } from ".";
import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function MobileNav({ links }: { links: LinkProp[] }) {
  return (
    <nav className="lg:hidden">
      <Sheet>
        <SheetTrigger className={cn(buttonVariants({ variant: "secondary" }))}>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="font-bold select-none">مطعم جوكر</SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col gap-2">
            {links.map((link) => {
              return (
                <li key={link.to}>
                  <SheetClose asChild>
                    <a href={link.to} className="block p-2 select-none">
                      {link.title}
                    </a>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
