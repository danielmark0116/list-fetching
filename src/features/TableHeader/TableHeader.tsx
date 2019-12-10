import React from "react";
import { sortValueType, sortFieldType } from "../../types/sortTypes";

interface IProps {
  clickAction: Function;
  sortValue: sortValueType;
  sortField: sortFieldType;
}

const TableHeader = (props: IProps) => {
  const { clickAction, sortField, sortValue } = props;

  const generateSortValue = (
    sortValue: sortValueType,
    prevField: sortFieldType
  ): sortValueType => {
    if (prevField !== sortField) {
      return "asc";
    }

    switch (sortValue) {
      case "asc":
        return "desc";
      case "desc":
        return "asc";
      case null:
        return "asc";
      default:
        return null;
    }
  };

  return (
    <tr>
      <th onClick={() => clickAction("id", generateSortValue(sortValue, "id"))}>
        ID
      </th>
      <th
        onClick={() =>
          clickAction("name", generateSortValue(sortValue, "name"))
        }
      >
        Name
      </th>
      <th
        onClick={() =>
          clickAction("city", generateSortValue(sortValue, "city"))
        }
      >
        City
      </th>
      <th
        onClick={() =>
          clickAction(
            "totalIncome",
            generateSortValue(sortValue, "totalIncome")
          )
        }
      >
        Total Income
      </th>
      <th
        onClick={() =>
          clickAction(
            "averageIncome",
            generateSortValue(sortValue, "averageIncome")
          )
        }
      >
        Average Income
      </th>
      <th
        onClick={() =>
          clickAction(
            "lastMonthIncome",
            generateSortValue(sortValue, "lastMonthIncome")
          )
        }
      >
        Last Month Income
      </th>
    </tr>
  );
};

export default TableHeader;
