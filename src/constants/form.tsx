import { IPhone, IForm } from "../types";

export const initialObject: IPhone = {
  name: "",
  thumbnailFileName: "",
  price: "",
  screen: "",
  memory: "",
  manufacturer: "",
  processor: "",
  description: "",
  color: "",
  id: "",
};

export const formHelper: { [key: string]: IForm } = {
  name: {
    required: true,
    type: "text",
  },
  thumbnailFileName: {
    required: true,
    type: "url",
    pattern: "https://.*",
  },
  price: {
    required: true,
    type: "text",
  },
  screen: { required: false, type: "text" },
  memory: { required: false, type: "text" },
  manufacturer: { required: false, type: "text" },
  processor: { required: false, type: "text" },
  description: { required: false, type: "text" },
  color: { required: false, type: "text" },
  id: { required: false, type: "text" },
};
