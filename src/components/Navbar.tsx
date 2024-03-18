"use client";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Home,
  Layers,
  Lightbulb,
  PackagePlus,
  Phone,
  User2,
} from "lucide-react";
import { buttonVariants } from "./ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const items = [
    { name: "Home", icon: <Home />, link: "/" },
    { name: "about", icon: <User2 />, link: "/about" },
    { name: "skills", icon: <Lightbulb />, link: "/skills" },
    { name: "projects", icon: <Layers />, link: "/projects" },
    { name: "work", icon: <Briefcase />, link: "/education" },
    { name: "more", icon: <PackagePlus />, link: "/more" },
    { name: "contact", icon: <Phone />, link: "/contact" },
  ];

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`shadow-md fixed top-0 right-0 left-0  m-auto border-b    p-2 bg-transparent   flex-row items-center justify-center gap-3 transition ease-in-out delay-150   max-sm:gap-1 ${
        scrolling ? "hidden" : "flex"
      }`}
    >
      {items.map((itm) => {
        return (
          <TooltipProvider key={itm.name} delayDuration={10}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={itm.link}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "flex flex-col  ",
                    pathname === itm.link ? "bg-secondary" : ""
                  )}
                >
                  {itm.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{itm.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default Navbar;
