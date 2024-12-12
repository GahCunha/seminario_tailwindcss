import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, PanelsTopLeft } from "lucide-react";

export function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger className="block lg:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex">
            <PanelsTopLeft className="mr-1" />
            <p>Personal</p>
          </SheetTitle>
          <SheetDescription className="text-left">
            <ul className="space-y-4 mt-4">
              <li>About Me</li>
              <li>Skills</li>
              <li>Project</li>
              <li>Contact Me</li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
