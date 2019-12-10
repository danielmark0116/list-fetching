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

  const iconClass = () => {
    switch (sortValue) {
      case "asc":
        return "fas fa-chevron-up";
      case "desc":
        return "fas fa-chevron-down";
      default:
        return "fas fa-chevron-down";
    }
  };

  return (
    <tr>
      <th onClick={() => clickAction("id", generateSortValue(sortValue, "id"))}>
        ID
        {sortField === "id" && (
          <span>
            <i className={iconClass()}></i>
          </span>
        )}
      </th>
      <th
        onClick={() =>
          clickAction("name", generateSortValue(sortValue, "name"))
        }
      >
        Name
        {sortField === "name" && (
          <span>
            <i className={iconClass()}></i>
          </span>
        )}
      </th>
      <th
        onClick={() =>
          clickAction("city", generateSortValue(sortValue, "city"))
        }
      >
        City
        {sortField === "city" && (
          <span>
            <i className={iconClass()}></i>
          </span>
        )}
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
        {sortField === "totalIncome" && (
          <span>
            <i className={iconClass()}></i>
          </span>
        )}
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
        {sortField === "averageIncome" && (
          <span>
            <i className={iconClass()}></i>
          </span>
        )}
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
        {sortField === "lastMonthIncome" && (
          <span>
            <i className={iconClass()}></i>
          </span>
        )}
      </th>
    </tr>
  );
};

export default TableHeader;
