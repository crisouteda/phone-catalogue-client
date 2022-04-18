import React, { memo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useContextActions, useContextState } from "../../context";
import { Modal, Text } from "../../components";
import { CustomInput, PrimaryButton } from "../globals";
import {
  SIGN_UP_BUTTON,
  LOG_IN_BUTTON,
  SEND_AUTH_DATA_BUTTON,
  FROM_SIGNUP_TO_SIGNIN_TEXT,
  FROM_SIGNIN_TO_SIGNUP_TEXT,
} from "../../constants";
import { ModalContent } from "./RegisterModal.styled";
import { ErrorLabel } from "../globals/GlobalComponents.styled";

export const RegisterModal = memo(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);

  const { handleSignIn, handleSignUp } = useContextActions();
  const {
    openAuth,
    signInLoading,
    signUpLoading,
    signUpError,
    signInError,
    isAuth,
  } = useContextState();

  const handleFinalize = () => {
    if (isSignUp) {
      handleSignUp(email, password);
    } else {
      handleSignIn(email, password);
    }
    setSearchParams({});
  };

  if (!openAuth || isAuth) return null;

  return (
    <Modal setClose={() => setSearchParams({})} className="register-modal">
      <ModalContent>
        <Text large bold text={isSignUp ? SIGN_UP_BUTTON : LOG_IN_BUTTON} />
        <CustomInput
          label="email"
          id="email"
          value={email}
          onChange={setEmail}
        />
        <CustomInput
          label="password"
          id="password"
          value={password}
          onChange={setPassword}
          type="password"
        />
        <PrimaryButton
          text={SEND_AUTH_DATA_BUTTON}
          handleOnClick={handleFinalize}
          disabled={!email || !password}
          loading={signInLoading || signUpLoading}
        />
        {signUpError && <ErrorLabel>{JSON.stringify(signUpError)}</ErrorLabel>}
        {signInError && <ErrorLabel>{JSON.stringify(signInError)}</ErrorLabel>}
        <PrimaryButton
          text={
            isSignUp ? FROM_SIGNUP_TO_SIGNIN_TEXT : FROM_SIGNIN_TO_SIGNUP_TEXT
          }
          handleOnClick={() => setIsSignUp(!isSignUp)}
        />
      </ModalContent>
    </Modal>
  );
});
