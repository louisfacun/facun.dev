"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { EllipsisIcon, MoonIcon, SunIcon } from "@/app/components/icons";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // Loading icon
  if (!mounted)
    return (
      <div className="p-2">
        <EllipsisIcon />
      </div>
    );

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 transition-transform duration-300 hover:rotate-45 hover:bg-gray-200 hover:dark:bg-gray-700"
    >
      {resolvedTheme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeSwitcher;
