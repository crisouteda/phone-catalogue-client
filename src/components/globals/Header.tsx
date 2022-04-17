import React, { memo } from "react";
import { StyledHeader } from "./Header.styled";
import { PrimaryButton } from "./DashboardComponents";
import { useSearchParams } from "react-router-dom";

import { useContextState, useContextActions } from "../../context";

export const Header = memo(({ title }: { title: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();
  const { isAuth } = useContextState();
  const { handleLogOut } = useContextActions();

  const handleSignOut = () => {
    handleLogOut();
    setSearchParams({});
  };

  return (
    <StyledHeader>
      <span className="title">{title}</span>
      {!isAuth && (
        <PrimaryButton
          text={"Sign Up"}
          alignSelf="flex-end"
          handleOnClick={() => setSearchParams({ register: "true" })}
        />
      )}
      {isAuth && (
        <PrimaryButton
          text={"Log Out"}
          alignSelf="flex-end"
          handleOnClick={handleSignOut}
        />
      )}
    </StyledHeader>
  );
});
