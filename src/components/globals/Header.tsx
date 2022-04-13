import React, { memo } from "react";
import { StyledHeader } from "./Header.styled";
import { PrimaryButton } from "./DashboardComponents";

export const Header = memo(({ title }: { title: string }) => (
  <StyledHeader>
    {title}
    <PrimaryButton text={"Sign Up"} alignSelf="flex-end" />
  </StyledHeader>
));
