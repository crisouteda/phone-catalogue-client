import React, { memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ModalContent } from "./CreateModal.styled";
import { IPhone } from "../../types";
import { PrimaryButton, ErrorText, Modal, CustomInput } from "../globals";
import { useContextActions, useContextState } from "../../context";

const initialObject: IPhone = {
  name: "",
  thumbnailFileName: "",
  screen: "",
  memory: "",
  manufacturer: "",
  processor: "",
  price: "",
  description: "",
  color: "",
  id: "",
};

const required = ["name", "thumbnailFileName", "price"];

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

  return (
    <Modal className="phone-modal" setClose={setClose}>
      <ModalContent>
        {Object.keys(phoneInfo).map((key) => (
          <CustomInput
            id={key}
            label={required.includes(key) ? `${key} - required *` : key}
            type={key === "thumbnailFileName" ? "url" : "text"}
            pattern={key === "thumbnailFileName" ? "https://.*" : undefined}
            value={phoneInfo[key]}
            onChange={(e) => setPhoneInfo((c: any) => ({ ...c, [key]: e }))}
          />
        ))}
        <PrimaryButton
          text="Create Item"
          loading={createPhoneLoading}
          disabled={
            !phoneInfo["name"] ||
            !phoneInfo["thumbnailFileName"] ||
            !phoneInfo["price"]
          }
          handleOnClick={() => handleCreatePhone(phoneInfo)}
        />
        <ErrorText
          text={createPhoneError?.message || "Error creating the item"}
          condition={createPhoneError}
        />
      </ModalContent>
    </Modal>
  );
});
