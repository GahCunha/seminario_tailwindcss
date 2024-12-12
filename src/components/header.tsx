"use client";

import { ArrowBigDown, PanelsTopLeft } from "lucide-react";
import { ModeToggle } from "./modeToggle";
import { Button } from "./ui/button";
import { MenuMobile } from "./menuMobile";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background px-4 py-6 text-xl lg:px-20">
      <nav className="flex justify-between *:flex">
        <div>
          <PanelsTopLeft className="mr-1" />
          <h1>Personal</h1>
        </div>
        <ul className="space-x-8 *:hidden *:lg:flex">
          <li>About Me</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact Me</li>
        </ul>
        <div className="space-x-6">
          <Button
            variant={"secondary"}
            className="hidden bg-foreground text-background hover:bg-background hover:text-foreground lg:flex"
          >
            Resume <ArrowBigDown />
          </Button>
          <ModeToggle />
          <MenuMobile />
        </div>
      </nav>
    </header>
  );
}
