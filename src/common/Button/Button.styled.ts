import styled from "styled-components";

interface IProps {
  active: Boolean;
}

export const Button = styled.button<IProps>`
  padding: 10px;
  margin: 5px;
  min-height: 40px;
  min-width: 40px;
  font-family: 16px;
  font-weight: 700;
  font-family: inherit;
  border-radius: 50px;
  background: ${props =>
    props.active ? props.theme.colorPrimary : "transparent"};
  border: 1px solid;
  border-color: ${props =>
    props.active ? props.theme.colorWhite : props.theme.colorBorder};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  color: ${props =>
    props.active ? props.theme.colorWhite : props.theme.colorPrimary};
  transition: ${props => props.theme.transition};

  &:hover {
    color: ${props => props.theme.colorPrimary};
    background: ${props => props.theme.colorWhite};
    cursor: pointer;
    border-color: ${props => props.theme.colorPrimary};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  }

  &:focus,
  &:active {
    outline: none;
  }
`;
