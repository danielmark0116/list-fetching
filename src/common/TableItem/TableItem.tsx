import React from "react";
import { listingData } from "../../types/listingData";

interface IProps {
  data: listingData;
}

const TableItem = (props: IProps) => {
  const { data } = props;

  return (
    <tr style={{ padding: 20 }}>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.city}</td>
      <td>{data.totalIncome}</td>
      <td>{data.averageIncome}</td>
      <td>{data.lastMonthIncome}</td>
    </tr>
  );
};

export default TableItem;
