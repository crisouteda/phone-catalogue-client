import React from "react";

import { CustomText } from "./DashboardComponents.styled";

export const Text = ({
  text,
  large = false,
  bold = false,
  secondary = false,
  ...rest
}: {
  text: string;
  large?: boolean;
  bold?: boolean;
  secondary?: boolean;
}) => {
  return (
    <CustomText large={large} bold={bold} secondary={secondary} {...rest}>
      {text}
    </CustomText>
  );
};
