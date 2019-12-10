import React from "react";
import { listingData } from "../../types/listingData";
import Badge from "../Badge/Badge";

interface IProps {
  data: listingData;
}

const TableItem = React.forwardRef((props: IProps, ref: any) => {
  const { data } = props;

  return (
    <tr ref={ref} style={{ padding: 20 }}>
      <td>
        <Badge>{data.id}</Badge>
      </td>
      <td>{data.name}</td>
      <td>{data.city}</td>
      <td>{data.totalIncome}</td>
      <td>{data.averageIncome}</td>
      <td>{data.lastMonthIncome}</td>
    </tr>
  );
});

export default TableItem;
