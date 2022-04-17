import styled, { keyframes } from "styled-components";

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
  width: 90%;
  animation: 0.5s ease-in-out ${OpenModal};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
