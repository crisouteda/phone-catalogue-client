import React, { memo, useState } from "react";
import { Modal, CustomInput } from "..";
import { ModalContent } from "./CreateModal.styled";
import { IPhone } from "../../types";
import { PrimaryButton } from "../globals";
import { useContextActions } from "../../context";

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
  const [phoneInfo, setPhoneInfo] = useState<IPhone>(initialObject);
  const { handleCreatePhone } = useContextActions();

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
          disabled={
            !phoneInfo["name"] ||
            !phoneInfo["thumbnailFileName"] ||
            !phoneInfo["price"]
          }
          handleOnClick={() => handleCreatePhone(phoneInfo)}
        />
      </ModalContent>
    </Modal>
  );
});
