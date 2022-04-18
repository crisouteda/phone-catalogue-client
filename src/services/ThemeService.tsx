import React from "react";
import { ThemeProvider } from "styled-components";
import { colors } from "../constants";
import { useContextState } from "../context";

export function ThemeService({ children }: { children: JSX.Element }) {
  const { colorTheme } = useContextState();
  const themeColors = colorTheme ? colors[colorTheme] : "red light";
  return <ThemeProvider theme={themeColors}>{children}</ThemeProvider>;
}
