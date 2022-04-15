import React, { memo } from "react";
import { StyledHeader } from "./Header.styled";
import { PrimaryButton } from "./DashboardComponents";
import { useSearchParams } from "react-router-dom";
import { useContextState, useContextActions } from "../../context";

export const Header = memo(({ title }: { title: string }) => {
  const [_, setSearchParams] = useSearchParams();
  const { isAuth } = useContextState();
  const { handleLogOut } = useContextActions();

  const handleOnClick = () => {
    if (isAuth) {
      return handleLogOut();
    } else {
      return setSearchParams({ register: "true" });
    }
  };
  return (
    <StyledHeader>
      <span className="title">{title}</span>
      <PrimaryButton
        text={isAuth ? "Log Out" : "Sign Up"}
        alignSelf="flex-end"
        handleOnClick={handleOnClick}
      />
    </StyledHeader>
  );
});
