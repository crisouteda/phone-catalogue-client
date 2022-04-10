import React from "react";

import { CustomText, CustomFlex } from "./DashboardComponents.styled";

export const Text = ({
  text,
  large = false,
  bold = false,
  secondary = false,
  ...rest
}: {
  text?: string;
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

export const Flex = ({
  children,
  vertical = false,
}: {
  children: React.ReactNode;
  vertical?: boolean;
}) => <CustomFlex vertical={vertical}>{children}</CustomFlex>;
