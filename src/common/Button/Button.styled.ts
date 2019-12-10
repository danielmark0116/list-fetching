import styled from "styled-components";

export const Button = styled.button`
  padding: 10px;
  margin: 5px;
  min-width: 35px;
  /* font-weight: 700; */
  font-family: inherit;
  border-radius: 50px;
  background: ${props => props.theme.colorWhite};
  border: 1px solid ${props => props.theme.colorPrimary};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  color: ${props => props.theme.colorPrimary};
  transition: ${props => props.theme.transition};

  &:hover {
    color: ${props => props.theme.colorWhite};
    background: ${props => props.theme.colorPrimary};
    cursor: pointer;
  }
`;
