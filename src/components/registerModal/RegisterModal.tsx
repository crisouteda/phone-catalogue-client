import React, { memo, useState } from "react";
import { Modal, Text } from "../../components";
import { CustomInput, PrimaryButton } from "../globals";
import { ModalContent } from "./RegisterModal.styled";
import { useContextActions } from "../../context";

export const RegisterModal = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);

  const { handleSignIn, handleSignUp } = useContextActions();

  const handleFinalize = () => {
    if (isSignUp) {
      handleSignUp(email, password);
    } else {
      handleSignIn(email, password);
    }
  };

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
        />
        <PrimaryButton
          text={isSignUp ? "Already have an account" : "Back to register"}
          handleOnClick={() => setIsSignUp(!isSignUp)}
        />
      </ModalContent>
    </Modal>
  );
});
