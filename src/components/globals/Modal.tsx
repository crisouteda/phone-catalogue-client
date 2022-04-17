import React, { memo } from "react";
import { ModalWrapper } from "./Modal.styled";
import { CloseIcon } from "../../assets";

export const Modal = memo(
  ({
    children,
    className,
    setClose,
  }: {
    children?: React.ReactNode;
    className?: string;
    setClose?: () => void;
  }) => {
    return (
      <ModalWrapper className={className}>
        <div className="modal-page-background" onClick={setClose} />
        <div className="modal-content">
          <button className="close-button" onClick={setClose}>
            <CloseIcon />
          </button>
          {children}
        </div>
      </ModalWrapper>
    );
  }
);
