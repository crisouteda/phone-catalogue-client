import React, { memo } from "react";
import { StyledHeader } from "./Header.styled";

export const Header = memo(({ title }: { title: string }) => (
  <StyledHeader>{title}</StyledHeader>
));
