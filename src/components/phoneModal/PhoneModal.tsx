import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { Modal, Text } from "../../components";
import { ModalContent } from "./PhoneModal.styled";
import { useContextState } from "../../context";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

export const PhoneModal = () => {
  const { phone } = useContextState();

  if (!phone) return null;

  const { name, imageFileName, thumbnailFileName, id, ...rest } = phone;

  return (
    <Modal>
      <ModalContent>
        <Text text={name} large bold isTitle />
        {imageFileName && (
          <InnerImageZoom
            width={300}
            src={imageFileName}
            className="phone-image"
          />
        )}
        <div className="vertical-list">
          {Object.keys(rest).map((key: string) =>
            rest[key] ? (
              <>
                <Text text={key} bold />
                <Text text={rest[key]} secondary />
              </>
            ) : (
              <></>
            )
          )}
        </div>
      </ModalContent>
    </Modal>
  );
};
