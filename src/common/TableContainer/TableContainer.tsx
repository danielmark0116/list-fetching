import React from "react";

interface IProps {
  children: React.ReactChild;
}

const TableContainer = (props: IProps) => {
  const { children } = props;

  return <table>{children}</table>;
};

export default TableContainer;
