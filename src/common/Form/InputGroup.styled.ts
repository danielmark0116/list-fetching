import styled from "styled-components";

export const InputGroup = styled.div`
  width: auto;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${props => props.theme.colorWhite};
  border-radius: ${props => props.theme.borderRadius}px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

  i {
    color: ${props => props.theme.colorSecondary};
    font-size: 20px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  width: auto;
  min-width: 85%;
  border: none;
  font-family: inherit;
  font-size: 18px;
  color: ${props => props.theme.colorDark};

  @media (max-width: ${props => props.theme.bpL}px) {
    min-width: 75%;
  }

  @media (max-width: ${props => props.theme.bpS}px) {
    min-width: 60%;
  }

  &::placeholder {
    color: ${props => props.theme.colorLight};
  }

  &:focus {
    outline: none;
  }
`;

export const InputButton = styled.button`
  background: transparent;
  padding: 10px 20px;
  border: none;
  color: ${props => props.theme.colorPrimary};
  font-family: inherit;
  font-size: 18px;

  @media (max-width: ${props => props.theme.bpS}px) {
    font-size: 15px;
    padding: 5px 10px;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus,
  &:active {
    outline: none;
  }
`;
