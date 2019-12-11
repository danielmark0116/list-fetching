import styled from "styled-components";

export const Spinner = styled.div`
  width: 100px;
  height: 100px;
  margin: 40px auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  i {
    font-size: 40px;
    color: ${props => props.theme.colorPrimary};
    animation: rotate 1s ease-out 0s infinite forwards;
  }
`;
