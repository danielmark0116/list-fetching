import styled from "styled-components";

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 10px;
  width: 100%;
  transition: ${props => props.theme.transition};
  color: ${props => props.theme.colorDark};

  @media (max-width: ${props => props.theme.bpM}px) {
    width: fit-content;
  }

  thead {
    text-align: left;

    th {
      padding: 5px 25px;
      position: relative;
      font-weight: 700;

      &:hover {
        cursor: pointer;
      }

      span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;

        i {
          font-size: 10px;
          color: ${props => props.theme.colorWhite};
          padding: 5px;
          border-radius: 5px;
          background: ${props => props.theme.colorDark};
        }
      }
    }
  }

  tbody {
    tr {
      background: ${props => props.theme.colorBg};
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
      border-radius: ${props => props.theme.borderRadius}px;
      transition: ${props => props.theme.transition};

      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        background: ${props => props.theme.colorWhite};
        color: ${props => props.theme.colorPrimary};

        td {
          border-color: ${props => props.theme.colorBorder};

          &:first-of-type,
          &:last-of-type {
            border-color: ${props => props.theme.colorBorder};
          }
        }
      }

      td {
        padding: 15px 25px;
        margin: 0;
        min-width: 100px;
        border-top: 1px solid;
        border-bottom: 1px solid;
        border-color: ${props => props.theme.colorLight};
        color: inherit;

        &:first-of-type {
          border-bottom-left-radius: ${props => props.theme.borderRadius}px;
          border-top-left-radius: ${props => props.theme.borderRadius}px;
          border-left: 1px solid;
        }

        &:last-of-type {
          border-bottom-right-radius: ${props => props.theme.borderRadius}px;
          border-top-right-radius: ${props => props.theme.borderRadius}px;
          border-right: 1px solid;
        }

        &:first-of-type,
        &:last-of-type {
          border-color: ${props => props.theme.colorLight};
        }
      }
    }
  }
`;
