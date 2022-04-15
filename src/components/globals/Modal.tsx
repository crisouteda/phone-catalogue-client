import React, { memo } from "react";
import { useSearchParams } from "react-router-dom";
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setSearchParams] = useSearchParams();

    const handleClose = setClose ? () => setClose() : () => setSearchParams({});

    return (
      <ModalWrapper className={className}>
        <div className="modal-page-background" />
        <div className="modal-content">
          <button className="close-button" onClick={handleClose}>
            <CloseIcon />
          </button>
          {children}
        </div>
      </ModalWrapper>
    );
  }
);
