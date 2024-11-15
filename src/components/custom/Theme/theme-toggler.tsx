"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  // Function to switch the theme
  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleTheme = () => {
    //@ts-ignore
    if (document.startViewTransition) {
      //@ts-ignore
      document.startViewTransition(switchTheme);
    } else {
      switchTheme();
    }
  };

  useEffect(() => {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <Button
      onClick={toggleTheme} // Use toggleTheme to ensure view transition support
      variant="ghost"
      size="icon"
      className="relative rounded-full"
    >
      <SunIcon
        className={`h-[1.2rem] w-[1.2rem] transition-transform ${
          theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <MoonIcon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-transform ${
          theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
