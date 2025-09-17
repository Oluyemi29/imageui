"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  // 2. Wrap HeroUIProvider at the root of your app
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute={"class"} >
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
};
export default Provider;
