import styled from "styled-components";
import { WidthThreshold } from "../../constants";

export const StyledHeader = styled.div`
  background: ${(props) => props.theme.primary};
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: Montserrat, sans-serif;
  font-style: normal;
  color: ${(props) => props.theme.bg};
  font-size: 2rem;
  font-weight: 700;

  .title {
    margin-bottom: -32px;
  }

  @media (max-width: ${WidthThreshold}) {
    .title {
      margin-bottom: 0;
    }
  }
`;
