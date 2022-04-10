import React from "react";
import { useSearchParams } from "react-router-dom";
import { ModalWrapper } from "./Modal.styled";
import { CloseIcon } from "../../assets";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  return (
    <ModalWrapper>
      <div className="modal-page-background" />
      <div className="modal-content">
        <button
          className="close-button"
          onClick={() => {
            setSearchParams({});
          }}
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </ModalWrapper>
  );
};
