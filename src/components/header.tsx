"use client";

import { ArrowBigDown, PanelsTopLeft } from "lucide-react";
import { ModeToggle } from "./modeToggle";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full px-20 py-6 text-xl">
      <nav className="flex justify-between *:flex">
        <div>
          <PanelsTopLeft className="mr-1" />
          <h1>Personal</h1>
        </div>
        <ul className="space-x-8">
          <li>About Me</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact Me</li>
        </ul>
        <div className="space-x-6">
          <Button
            variant={"secondary"}
            className="bg-foreground text-background hover:bg-background hover:text-foreground"
          >
            Resume <ArrowBigDown />
          </Button>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
