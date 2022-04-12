import styled from "styled-components";

import { WidthThreshold } from "../../constants";

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
