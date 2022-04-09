import React from "react";
import { ThemeProvider } from "styled-components";
import { colors } from "../constants";
//import { useSelector } from "react-redux";

export function ThemeService({ children }: { children: JSX.Element }) {
  const theme = "red light"; // useSelector(state => state.device.theme);
  const themeColors = colors[theme];
  return <ThemeProvider theme={themeColors}>{children}</ThemeProvider>;
}
