import React, { memo } from "react";
import { LoadingIcon } from "../../assets";

import {
  CustomText,
  CustomFlex,
  CustomButton,
  Label,
  ErrorLabel,
  Input,
  InputBox,
} from "./GlobalComponents.styled";

export const Text = memo(
  ({
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
  }
);

export const Flex = memo(
  ({
    children,
    vertical = false,
  }: {
    children: React.ReactNode;
    vertical?: boolean;
  }) => <CustomFlex vertical={vertical}>{children}</CustomFlex>
);

export const PrimaryButton = memo(
  ({
    text,
    handleOnClick,
    alignSelf,
    disabled,
    loading,
  }: {
    text: string;
    handleOnClick?: () => void;
    alignSelf?: string;
    disabled?: boolean;
    loading?: boolean;
  }) => (
    <CustomButton
      onClick={handleOnClick}
      alignSelf={alignSelf}
      disabled={disabled}
    >
      {text}
      <span className="loading">{loading && <LoadingIcon />}</span>
    </CustomButton>
  )
);

export const CustomInput = ({
  type,
  value,
  label,
  id,
  onChange,
  error,
  pattern,
}: {
  type?: string;
  value?: string;
  label?: string;
  id?: string;
  onChange: (e: string) => void;
  error?: string;
  pattern?: string;
}) => {
  if (!id) throw new Error("specify an id for each input");
  return (
    <InputBox>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={!value ? "" : value}
        onChange={(e: any) => onChange(e.target.value)}
        pattern={pattern}
      />
      {error && (
        <ErrorLabel data-testid={id + "_error"} htmlFor={id}>
          {error}
        </ErrorLabel>
      )}
    </InputBox>
  );
};
