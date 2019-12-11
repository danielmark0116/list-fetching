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
      <>
        {activePage > 3 && (
          <Button
            active={false}
            disabled={activePage === 1}
            onClick={() => clickAction(1)}
          >
            First
          </Button>
        )}

        {activePage > 1 && (
          <Button
            active={false}
            disabled={activePage === 1}
            onClick={() => clickAction(activePage - 1)}
          >
            {"<"}
          </Button>
        )}
        {noOfPages > 7 && activePage > 3 && <p>...</p>}

        {[...Array(noOfPages)].map((item, index) => {
          const indexP = index + 1;

          if (
            (indexP < activePage + 3 && indexP > activePage - 3) ||
            noOfPages < 8
          ) {
            return (
              <Button
                onClick={() => clickAction(index + 1)}
                key={index}
                active={activePage === index + 1}
              >
                {index + 1}
              </Button>
            );
          } else {
            return null;
          }
        })}

        {noOfPages > 7 && activePage < noOfPages - 2 && <p>...</p>}

        {activePage < noOfPages && (
          <Button
            active={false}
            disabled={activePage === noOfPages}
            onClick={() => clickAction(activePage + 1)}
          >
            {">"}
          </Button>
        )}

        {activePage < noOfPages - 2 && (
          <Button
            active={false}
            disabled={activePage === noOfPages}
            onClick={() => clickAction(noOfPages)}
          >
            Last
          </Button>
        )}
      </>
    </Center>
  );
};

export default Pagination;
