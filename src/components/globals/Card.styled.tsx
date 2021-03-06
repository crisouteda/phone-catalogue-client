import styled, { keyframes } from "styled-components";

const LoadingState = (props: any) => keyframes`
0% {
  background-color: ${props.theme.bg_accent_opacity40};
}
`;

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
    max-height: 75%;
    width: 160px;
    background-color: ${(props) => props.theme.bg_accent};
    animation: ${LoadingState} 1s infinite alternate;
    transition: 0.3s;
    border-radius: 4px;
    border: 0;
    outline: 0;

    text-align: center;
  }

  .image-placeholder {
    background-color: ${(props) => props.theme.bg_accent};
    animation: ${LoadingState} 1s infinite alternate;
    border-radius: 8px;
    width: 160px;
    height: 70%;
  }

  .card-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: calc(100% - 16px);
    height: 52px;
    background: ${(props) => props.theme.bg_accent};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 8px;
  }

  &:hover {
    .card-image {
      width: 168px;
      height: 218px;
      transition: 0.3s;
    }
  }
`;
