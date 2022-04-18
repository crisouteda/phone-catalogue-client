import {
  ERROR_NOT_HTTPS_URL,
  ERROR_EMPTY_REQUIRED_INPUT,
} from "../constants/content";

export const CheckLinkHTTPS = (url: string) => {
  var expression =
    /^(https:\/\/www\.|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi;
  var regex = new RegExp(expression);
  if (url.match(regex)) {
    return "";
  } else {
    return ERROR_NOT_HTTPS_URL;
  }
};

export const CheckNotEmptyString = (text: string) => {
  if (text) {
    return "";
  } else {
    return ERROR_EMPTY_REQUIRED_INPUT;
  }
};

export const handleDisabled = (obj: { [key: string]: string }) =>
  !!Object.values(obj).find((val) => val !== "");

export const priceHelper = (price: string) => {
  const priceHelper = price?.replace(/About /g, "");
  return priceHelper;
};
