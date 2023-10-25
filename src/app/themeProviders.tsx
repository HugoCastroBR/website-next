"use client"
import * as React from "react";
import { ThemeProvider  } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { MantineProvider, createTheme, localStorageColorSchemeManager } from '@mantine/core';
import useStore from "@/hooks/useStore";


export default function ThemeProviders({ children, ...props }: ThemeProviderProps) {

  const {states} = useStore()

  const returnColorTheme = (value: boolean) => {
    return value ? 'dark' : 'light'
  }

  return (
      <MantineProvider forceColorScheme={returnColorTheme(states.App.darkMode)}>
        <ThemeProvider {...props} attribute="class">
          {children}
        </ThemeProvider>
      </MantineProvider>
  );
}
