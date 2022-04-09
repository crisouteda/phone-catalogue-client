import styled from "styled-components";

import { WidthThreshold } from "../../constants";

interface CustomTextProps {
  readonly bold: boolean;
  readonly large: boolean;
  readonly secondary: boolean;
}

export const CustomText = styled.span<CustomTextProps>`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-size: ${(props) => (props.large ? "24px" : "16px")};
  color: ${(props) =>
    props.secondary ? props.theme.text_01 : props.theme.primary};
  text-decoration: none;
  margin: 4px 0px;
`;
