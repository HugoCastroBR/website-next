"use client"
import * as React from "react";
import { ThemeProvider  } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export default function Providers({ children, ...props }: ThemeProviderProps) {
  return <ThemeProvider {...props} attribute="class">{children}</ThemeProvider>;
}
