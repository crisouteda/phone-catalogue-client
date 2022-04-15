import React, { memo, useState } from "react";
import { Modal, Text } from "../../components";
import { CustomInput, PrimaryButton } from "../globals";
import { ModalContent } from "./RegisterModal.styled";
import { useContextActions, useContextState } from "../../context";
import { ErrorLabel } from "../globals/GlobalComponents.styled";

export const RegisterModal = memo(() => {
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
  };

  if (!openAuth) return null;

  return (
    <Modal>
      <ModalContent>
        <Text large bold text={isSignUp ? "Sign up" : "Log in"} />
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
          text="Finalize"
          handleOnClick={handleFinalize}
          disabled={!email || !password}
          loading={signInLoading || signUpLoading}
        />
        {signUpError && <ErrorLabel>{JSON.stringify(signUpError)}</ErrorLabel>}
        {signInError && <ErrorLabel>{JSON.stringify(signInError)}</ErrorLabel>}
        <PrimaryButton
          text={isSignUp ? "Already have an account" : "Back to register"}
          handleOnClick={() => setIsSignUp(!isSignUp)}
        />
      </ModalContent>
    </Modal>
  );
});
