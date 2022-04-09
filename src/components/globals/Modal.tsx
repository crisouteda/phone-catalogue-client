import React from "react";
import { ModalWrapper } from "./Modal.styled";
import { CloseIcon } from "../../assets";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <ModalWrapper>
      <div className="modal-page-background" />
      <div className="modal-content">
        <button className="close-button">
          <CloseIcon />
        </button>
        {children}
      </div>
    </ModalWrapper>
  );
};
