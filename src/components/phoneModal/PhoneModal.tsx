import React, { memo, useEffect, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { Modal, Text, PrimaryButton, CustomInput } from "../../components";
import { ModalContent } from "./PhoneModal.styled";
import { useContextState, useContextActions } from "../../context";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

const requiredKeys = [
  "screen",
  "memory",
  "manufacturer",
  "processor",
  "price",
  "description",
  "color",
];

export const PhoneModal = memo(() => {
  const { phone } = useContextState();
  const { handleUpdatePhone, handleDeletePhone } = useContextActions();
  const [phoneInfo, setPhoneInfo] = useState(phone);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setPhoneInfo(phone);
  }, [phone]);

  if (!phone) return null;
  const { name, imageFileName } = phone;

  return (
    <Modal className="phone-modal">
      <ModalContent>
        <Text text={name} large bold isTitle />
        {imageFileName && (
          <InnerImageZoom src={imageFileName} className="phone-image" />
        )}
        <div className="vertical-list">
          <PrimaryButton
            text={isEdit ? "Stop Edit" : "Edit information"}
            handleOnClick={() => setIsEdit(!isEdit)}
            alignSelf="flex-start"
          />
          {requiredKeys.map(
            (key: string) =>
              !!phone[key] &&
              (isEdit ? (
                <CustomInput
                  id={key}
                  label={key}
                  type="text"
                  key={key}
                  value={phoneInfo && phoneInfo[key] ? phoneInfo[key] : ""}
                  onChange={(e) =>
                    setPhoneInfo((c: any) => ({ ...c, [key]: e }))
                  }
                />
              ) : (
                <>
                  <Text text={key} bold key={`key-${key}`} />
                  <Text text={phone[key]} secondary key={`value-${key}`} />
                </>
              ))
          )}
          {isEdit ? (
            <PrimaryButton
              text="Update item"
              alignSelf="flex-start"
              handleOnClick={() => handleUpdatePhone(phoneInfo)}
            />
          ) : (
            <PrimaryButton
              text="Delete item"
              alignSelf="flex-start"
              handleOnClick={() => handleDeletePhone(phone.id)}
            />
          )}
        </div>
      </ModalContent>
    </Modal>
  );
});
