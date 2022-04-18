import React, { memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ModalContent } from "./CreateModal.styled";
import { IPhone } from "../../types";
import { PrimaryButton, ErrorText, Modal, CustomInput } from "../globals";
import { useContextActions, useContextState } from "../../context";
import {
  initialObject,
  formHelper,
  ERROR_CREATE,
  CREATE_ITEM_BUTTON,
} from "../../constants";
import {
  CheckLinkHTTPS,
  CheckNotEmptyString,
  handleDisabled,
} from "../../helpers";

export const CreateModal = memo(({ setClose }: { setClose: () => void }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();
  const [phoneInfo, setPhoneInfo] = useState<IPhone>(initialObject);
  const { handleCreatePhone } = useContextActions();
  const { createPhone, createPhoneLoading, createPhoneError } =
    useContextState();

  useEffect(() => {
    if (createPhone) {
      setClose();
      setSearchParams({ id: createPhone?.id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createPhone]);

  const formErrors: { [key: string]: string } = {
    name: CheckNotEmptyString(phoneInfo["name"]),
    thumbnailFileName: CheckLinkHTTPS(phoneInfo["thumbnailFileName"]),
    price: CheckNotEmptyString(phoneInfo["price"]),
  };

  const disabled = handleDisabled(formErrors);

  return (
    <Modal className="create-modal" setClose={setClose}>
      <ModalContent>
        {Object.keys(phoneInfo).map((key) => (
          <CustomInput
            id={key}
            key={key}
            label={formHelper[key]?.required ? `${key} - required*` : `${key}`}
            required={formHelper[key]?.required}
            type={formHelper[key]?.type}
            pattern={formHelper[key]?.pattern}
            value={phoneInfo[key]}
            onChange={(e) => setPhoneInfo((c: any) => ({ ...c, [key]: e }))}
            error={formErrors[key]}
          />
        ))}
        <PrimaryButton
          text={CREATE_ITEM_BUTTON}
          loading={createPhoneLoading}
          disabled={disabled}
          handleOnClick={() => handleCreatePhone(phoneInfo)}
        />
        <ErrorText
          text={createPhoneError?.message || ERROR_CREATE}
          condition={createPhoneError}
        />
      </ModalContent>
    </Modal>
  );
});
