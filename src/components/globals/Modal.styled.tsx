import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .modal-page-background {
    position: absolute;
    background: ${(props) => props.theme.bg_accent_opacity70};
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }

  .modal-content {
    z-index: 20;
    width: 100%;
    max-width: 900px;
    height: 100%;
    max-height: 600px;
    border-radius: 8px;
    background: ${(props) => props.theme.bg};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      background: ${(props) => props.theme.secondary_opacity40};
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${(props) => props.theme.secondary};
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }
  }

  .close-button {
    color: ${(props) => props.theme.secondary};
    border: 0;
    background: none;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    width: 48px;
    height: 48px;
  }
`;
