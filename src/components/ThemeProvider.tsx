"use client";
import React from "react";
import { useTheme } from "next-themes";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { useEffect, useState } from "react";

const ThemeProvider = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div>
      <Dropdown>
        <DropdownTrigger className="bg-slate-50">
          {theme === "dark" ? (
            <IoMoon className="text-black" />
          ) : (
            <IoSunny className="text-black" />
          )}
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem onClick={() => setTheme("light")} key="light">
            Light
          </DropdownItem>
          <DropdownItem onClick={() => setTheme("dark")} key="dark">
            Dark
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ThemeProvider;
