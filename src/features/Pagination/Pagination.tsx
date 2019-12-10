import React from "react";
import { Center } from "../../common/Center/Center.styled";
import { Button } from "../../common/Button/Button.styled";

interface IProps {
  activePage: number;
  noOfPages: number;
  clickAction: Function;
}

const Pagination = (props: IProps) => {
  const { activePage, noOfPages, clickAction } = props;

  return (
    <Center>
      {[...new Array(noOfPages)].map((page: any, index: number) => (
        <Button onClick={() => clickAction(index + 1)} key={index}>
          {index + 1}
        </Button>
      ))}
    </Center>
  );
};

export default Pagination;
