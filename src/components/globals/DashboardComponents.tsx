import React, { memo, useState } from "react";
import { ErrorIcon, LoadingIcon } from "../../assets";

import {
  CustomText,
  CustomFlex,
  CustomButton,
  Label,
  ErrorLabel,
  Input,
  InputBox,
  CustomLoadingDots,
  CustomSwitch,
} from "./GlobalComponents.styled";

export const Text = memo(
  ({
    text,
    large = false,
    bold = false,
    secondary = false,
    isTitle = false,
    loading = false,
    ...rest
  }: {
    text?: string;
    large?: boolean;
    bold?: boolean;
    secondary?: boolean;
    isTitle?: boolean;
    rest?: any;
    loading?: boolean;
  }) => {
    return (
      <CustomText
        large={large}
        bold={bold}
        secondary={secondary}
        isTitle={isTitle}
        {...rest}
      >
        {loading ? <LoadingDots /> : text}
      </CustomText>
    );
  }
);

export const ErrorText = memo(
  ({ text, condition }: { text?: string; condition?: boolean }) => {
    if (!condition) return null;
    return (
      <ErrorLabel>
        <ErrorIcon />
        {text}
      </ErrorLabel>
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
      {loading && (
        <span className="loading">
          <LoadingIcon />
        </span>
      )}
    </CustomButton>
  )
);

export const CustomInput = memo(
  ({
    type,
    value,
    label,
    required,
    id,
    onChange,
    error,
    pattern,
  }: {
    type?: string;
    value?: string;
    label?: string;
    required?: boolean;
    id?: string;
    onChange: (e: string) => void;
    error?: string;
    pattern?: string;
  }) => {
    const [focus, setFocus] = useState(false);

    if (!id) throw new Error("specify an id for each input");
    return (
      <InputBox>
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          required={required}
          type={type}
          value={!value ? "" : value}
          onChange={(e: any) => onChange(e.target.value)}
          pattern={pattern}
          onFocus={() => setFocus(true)}
        />
        {error && focus && (
          <ErrorLabel data-testid={id + "_error"} htmlFor={id}>
            {error}
          </ErrorLabel>
        )}
      </InputBox>
    );
  }
);

export const LoadingDots = memo(() => (
  <CustomLoadingDots>
    <div className="dot1" />
    <div className="dot2" />
    <div className="dot3" />
  </CustomLoadingDots>
));

export const ToggleButton = memo(
  ({ setState, id }: { setState: (e: boolean) => void; id: string }) => (
    <CustomSwitch id={id}>
      <input
        type="checkbox"
        onChange={(e) => {
          setState(!e.target.checked);
        }}
      />
      <span className="slider round" />
    </CustomSwitch>
  )
);
