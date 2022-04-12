import styled, { keyframes } from "styled-components";

import { WidthThreshold } from "../../constants";

export const StyledCard = styled.div`
  width: 220px;
  height: 304px;
  padding-top: 28px;
  margin-bottom: 32px;
  border-radius: 6px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  .card-image {
    height: 70%;
    width: 160px;
    background-color: ${(props) => props.theme.bg_accent};
    border: 0;
    outline: 0;

    text-align: center;
  }

  .card-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 52px;
    background: ${(props) => props.theme.bg_accent};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  &:hover {
    .card-image {
      width: 168px;
      transition: 0.3s;
    }
  }
`;