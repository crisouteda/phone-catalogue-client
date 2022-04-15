import React, { memo, useState } from "react";
import { Modal, CustomInput } from "..";
import { ModalContent } from "./CreateModal.styled";
import { IPhone } from "../../types";

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

const required = ["name", "thumbnailFileName"];

export const CreateModal = memo(({ setClose }: { setClose: () => void }) => {
  const [phoneInfo, setPhoneInfo] = useState(initialObject);

  return (
    <Modal
      className="phone-modal"
      // setClose={setClose}
    >
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
      </ModalContent>
    </Modal>
  );
});
