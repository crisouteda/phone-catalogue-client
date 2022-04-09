import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ContextProvider } from "../context";
import { colors } from "../constants";
//import { useSelector } from "react-redux";

interface ThemeProps {
  theme: { [title: string]: string };
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: ThemeProps) => props.theme.bg};
  }
`;

export function ThemeService({ children }: { children: React.ReactNode }) {
  const theme = "red light"; // useSelector(state => state.device.theme);
  const themeColors = colors[theme];
  return (
    <ContextProvider>
      <ThemeProvider theme={themeColors}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ContextProvider>
  );
}
