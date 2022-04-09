import React from "react";
import { StyledHeader } from "./Header.styled";

export const Header = ({ title }: { title: string }) => (
  <StyledHeader>{title}</StyledHeader>
);
