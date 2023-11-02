"use client"
import store from "@/store";
import * as React from "react";
import { Provider } from "react-redux";
import ThemeProviders from "./themeProviders";
import { ThemeProviderProps } from "next-themes/dist/types";
import AuthProvider from "./authProvider";

interface ProvidersProps  {
  children: React.ReactNode;
}

export default function Providers({ children, ...props }: ThemeProviderProps) {

  

  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProviders {...props}>
          {children}
        </ThemeProviders>
      </AuthProvider>
    </Provider>
  );
}
