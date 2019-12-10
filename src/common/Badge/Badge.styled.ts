import styled from "styled-components";

export const Badge = styled.div`
  padding: 3px 10px;
  color: ${props => props.theme.colorWhite};
  font-size: 14px;
  font-weight: 700;
  border-radius: 5px;
  background: ${props => props.theme.colorSecondary};
  display: inline;
`;
