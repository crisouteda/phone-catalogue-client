import React, { memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import InnerImageZoom from "react-inner-image-zoom";
import {
  Modal,
  Text,
  PrimaryButton,
  CustomInput,
  ErrorLabel,
} from "../../components";
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
  const {
    phone,
    deletePhoneLoading,
    deletePhoneError,
    updatePhone,
    updatePhoneLoading,
    updatePhoneError,
  } = useContextState();
  const {
    handleGetPhone,
    handleUpdatePhone,
    handleDeletePhone,
    handleClearPhone,
  } = useContextActions();
  const [phoneInfo, setPhoneInfo] = useState(phone);
  const [isEdit, setIsEdit] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    setPhoneInfo(phone);
  }, [phone]);

  useEffect(() => {
    if (phone && updatePhone) {
      setIsEdit(false);
      handleGetPhone(phone.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatePhone]);

  if (!phone) return null;

  const { name, imageFileName } = phone;

  const handleClose = () => {
    handleClearPhone();
    setIsEdit(false);
    setSearchParams({});
  };

  return (
    <Modal className="phone-modal" setClose={handleClose}>
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
          {isEdit && (
            <>
              <PrimaryButton
                text="Update item"
                alignSelf="flex-start"
                loading={updatePhoneLoading}
                handleOnClick={() => handleUpdatePhone(phoneInfo)}
              />
              {updatePhoneError && <ErrorLabel>{updatePhoneError}</ErrorLabel>}
            </>
          )}

          {!isEdit && (
            <>
              <PrimaryButton
                text="Delete item"
                alignSelf="flex-start"
                loading={deletePhoneLoading}
                handleOnClick={() => handleDeletePhone(phone.id)}
              />
              {deletePhoneError && <ErrorLabel>{deletePhoneError}</ErrorLabel>}
            </>
          )}
        </div>
      </ModalContent>
    </Modal>
  );
});
