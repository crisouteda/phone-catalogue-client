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
  height: 100%;
  animation: 0.5s ease-in-out ${OpenModal};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .phone-image {
    margin-right: 40px;
  }

  .vertical-list {
    display: flex;
    flex-direction: column;
    width: 50%;
    min-width: 200px;
  }
`;
