import styled, { keyframes } from "styled-components";

interface CustomTextProps {
  readonly bold: boolean;
  readonly large: boolean;
  readonly secondary: boolean;
  readonly isTitle: boolean;
}

export const CustomText = styled.span<CustomTextProps>`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-size: ${(props) => (props.large ? "24px" : "16px")};
  color: ${(props) =>
    props.secondary ? props.theme.body : props.theme.secondary};
  text-decoration: none;
  margin: 4px 0px;
  flex-basis: ${(props) => props.isTitle && "100%"};
  text-align: ${(props) => props.isTitle && "center"};
  width: ${(props) => props.isTitle && "100%"};
  white-space: ${(props) => props.isTitle && "nowrap"};
  overflow: ${(props) => props.isTitle && "hidden"};
  text-overflow: ${(props) => props.isTitle && "ellipsis"};

  &:first-letter {
    text-transform: uppercase;
  }
`;

interface CustomFlexProps {
  readonly vertical: boolean;
}

export const CustomFlex = styled.div<CustomFlexProps>`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  flex-wrap: wrap;
  justify-content: center;
  gap: 5%;
`;

interface CustomButtonProps {
  readonly alignSelf?: string;
}

export const CustomButton = styled.button<CustomButtonProps>`
  background ${(props) => props.theme.secondary};
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  padding: 8px 20px;
  margin: 20px 0px;

  color: ${(props) => props.theme.bg};
  font-size: 1.4rem;

  align-self: ${(props) => props.alignSelf && props.alignSelf};
  display: flex;

  .loading {
    margin-left: 12px;
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;

export const Label = styled.label<CustomButtonProps>`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  font-weight: bold;
  align-self: flex-start;
  color: ${(props) => props.theme.secondary};

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const ErrorLabel = styled(Label)`
  color: ${(props) => props.theme.error};
  transition: visibility 0.3s linear, opacity 0.3s linear;
  margin-bottom: 8px;
  display: flex;

  svg {
    margin-right: 4px;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  background: ${(props) => props.theme.bg_accent};
  border: 0px;
  border-radius: 4px;
  color: ${(props) => props.theme.body};
  padding: 11px;
  width: 100%;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  transition: all 0.1s ease-in-out;
  margin: 10px 0;
  &::placeholder {
    color: ${(props) => props.theme.primary};
  }
  &:hover {
    outline: 1px solid ${(props) => props.theme.shadow};
  }
  &:disabled {
    box-shadow: none;
  }
  &:invalid {
    outline: 1px solid ${(props) => props.theme.error};
  }
`;

const Jump = keyframes`
0%, 80%, 100% { 
  -webkit-transform: scale(0);
  transform: scale(0);
} 40% { 
  -webkit-transform: scale(2.0);
  transform: scale(2.0);
}
`;

export const CustomLoadingDots = styled.div`
  display: flex;
  .dot1,
  .dot2,
  .dot3 {
    background: #fff;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin: 10px;
  }

  .dot1 {
    animation: ${Jump} 1.6s -0.32s linear infinite;
    background: ${(props) => props.theme.primary};
  }
  .dot2 {
    animation: ${Jump} 1.6s -0.16s linear infinite;
    background: ${(props) => props.theme.success};
  }
  .dot3 {
    animation: ${Jump} 1.6s linear infinite;
    background: ${(props) => props.theme.secondary};
  }
`;

export const CustomSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.bg_accent};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${(props) => props.theme.bg};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${(props) => props.theme.bg};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
