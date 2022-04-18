import React, { memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import { PrimaryButton, ToggleButton } from "./DashboardComponents";
import { HEADER_TITLE, SIGN_UP_BUTTON, LOG_OUT_BUTTON } from "../../constants";

import { useContextState, useContextActions } from "../../context";

export const Header = memo(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();
  const { isAuth } = useContextState();
  const { handleLogOut, handleColorTheme } = useContextActions();
  const [isLight, setIsLight] = useState(true);

  const handleSignOut = () => {
    handleLogOut();
    setSearchParams({});
  };

  useEffect(() => {
    const theme = isLight ? "red light" : "red dark";
    handleColorTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLight]);

  return (
    <StyledHeader>
      <span className="title">{HEADER_TITLE}</span>
      <div className="button-wrapper">
        <ToggleButton setState={setIsLight} />
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
      </div>
    </StyledHeader>
  );
});
