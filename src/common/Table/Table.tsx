import React from "react";
import { Table } from "./Table.styled";

interface IProps {
  children: React.ReactChild;
  tableRef: any;
}

const TableComponent = (props: IProps) => {
  const { children, tableRef } = props;

  return <Table ref={tableRef}>{children}</Table>;
};

export default TableComponent;
