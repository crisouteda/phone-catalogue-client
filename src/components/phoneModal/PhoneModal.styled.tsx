import styled, { keyframes } from "styled-components";
import { WidthThreshold } from "../../constants";

const OpenModal = keyframes` 
  0% {
    transform: translateY(-5%);
    opacity: 0;
  }

   100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
  margin: 40px;
  height: 100%;
  animation: 0.5s ease-in-out ${OpenModal};

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .phone-image {
    height: auto;
    max-height: 700px;
    width: auto;
    max-width: 250px;
  }

  .iiz__hint {
    bottom: initial;
  }

  .vertical-list {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 65%;
    min-width: 200px;
  }

  > * {
    &:first-child {
      margin-bottom: 20px;
    }
  }

  @media (max-width: ${WidthThreshold}) {
    .vertical-list {
      width: 90%;
    }
  }
`;
