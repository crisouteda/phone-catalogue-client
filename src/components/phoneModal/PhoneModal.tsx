import React from "react";
import { Modal } from "../../components";
import { ModalContent } from "./PhoneModal.styled";
import { useContextState } from "../../context";

export const PhoneModal = () => {
  const { phone } = useContextState();

  return (
    <Modal>
      <ModalContent>hola</ModalContent>
    </Modal>
  );
};
