import React from "react";

interface IProps {
  activePage: number;
  noOfPages: number;
  clickAction: Function;
}

const Pagination = (props: IProps) => {
  const { activePage, noOfPages, clickAction } = props;

  return (
    <div>
      {[...new Array(noOfPages)].map((page: any, index: number) => (
        <button
          style={
            activePage === index + 1
              ? { backgroundColor: "red" }
              : { backgroundColor: "green" }
          }
          onClick={() => clickAction(index + 1)}
          key={index}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
