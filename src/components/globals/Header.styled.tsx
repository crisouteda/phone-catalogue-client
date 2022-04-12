import styled from "styled-components";

export const StyledHeader = styled.div`
  background: ${(props) => props.theme.primary};
  height: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: Montserrat, sans-serif;
  font-style: normal;
  color: ${(props) => props.theme.bg};
  font-size: 2rem;
  font-weight: 700;
`;
