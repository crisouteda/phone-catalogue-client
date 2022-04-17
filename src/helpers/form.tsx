export const CheckLinkHTTPS = (url: string) => {
  var expression =
    /^(https:\/\/www\.|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi;
  var regex = new RegExp(expression);
  if (url.match(regex)) {
    return "";
  } else {
    return "For securify reasons, the urls must start with https://";
  }
};

export const CheckNotEmptyString = (text: string) => {
  if (text) {
    return "";
  } else {
    return "Required field cannot be empty.";
  }
};

export const handleDisabled = (obj: { [key: string]: string }) =>
  !!Object.values(obj).find((val) => val !== "");
