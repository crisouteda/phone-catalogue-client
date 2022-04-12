import React from "react";

import { CustomText, CustomFlex } from "./GlobalComponents.styled";

export const Text = ({
  text,
  large = false,
  bold = false,
  secondary = false,
  isTitle = false,
  ...rest
}: {
  text?: string;
  large?: boolean;
  bold?: boolean;
  secondary?: boolean;
  isTitle?: boolean;
  rest?: any;
}) => {
  return (
    <CustomText
      large={large}
      bold={bold}
      secondary={secondary}
      isTitle={isTitle}
      {...rest}
    >
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
