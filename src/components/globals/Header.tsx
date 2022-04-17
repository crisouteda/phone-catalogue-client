import React, { memo } from "react";
import { useSearchParams } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import { PrimaryButton } from "./DashboardComponents";
import { HEADER_TITLE, SIGN_UP_BUTTON, LOG_OUT_BUTTON } from "../../constants";

import { useContextState, useContextActions } from "../../context";

export const Header = memo(() => {
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
      <span className="title">{HEADER_TITLE}</span>
      {!isAuth && (
        <PrimaryButton
          text={SIGN_UP_BUTTON}
          alignSelf="flex-end"
          handleOnClick={() => setSearchParams({ register: "true" })}
        />
      )}
      {isAuth && (
        <PrimaryButton
          text={LOG_OUT_BUTTON}
          alignSelf="flex-end"
          handleOnClick={handleSignOut}
        />
      )}
    </StyledHeader>
  );
});
