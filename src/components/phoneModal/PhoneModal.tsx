import React from "react";
import { Modal } from "../../components";
import { ModalContent } from "./PhoneModal.styled";
import { useContextState } from "../../context";

export const PhoneModal = () => {
  const { phone } = useContextState();

  if (!phone) return null;

  return (
    <Modal>
      <ModalContent>hola</ModalContent>
    </Modal>
  );
};
