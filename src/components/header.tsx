"use client";
import { ModeToggle } from "./modeToggle";

;
export function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <ModeToggle />
    </header>
  );
}
