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
  }

  .close-button {
    color: ${(props) => props.theme.secondary};
    border: 0;
    background: none;
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;
