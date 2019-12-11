import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectorListing,
  selectorListingCount,
  selectorListingCountPerPage,
  selectorListingRequestData,
  selectorListingSorted
} from "../../reducers/listingReducer";
import TableItem from "../../common/TableItem/TableItem";
import { listingData } from "../../types/listingData";
import TableHeader from "../TableHeader/TableHeader";
import Table from "../../common/Table/Table";
import Pagination from "../Pagination/Pagination";
import {
  listingGetAllThunk,
  listingFilteringThunk
} from "../../actions/listingActions";
import { requestData } from "../../types/requestData";
import { sortValueType, sortFieldType } from "../../types/sortTypes";
import SearchBar from "../SearchBar/SearchBar";
import { TableContainer } from "../../common/TableContainer/TableContainer.styled";
import { slideOut } from "../../animations/slideAnimation";

const IncomeList = () => {
  const listings: listingData[] = useSelector(selectorListing);
  const sortedListings: listingData[] = useSelector(selectorListingSorted);
  const listingRequestData: requestData = useSelector(
    selectorListingRequestData
  );
  const listingCount: number = useSelector(selectorListingCount);
  const listingsPerPage: number = useSelector(selectorListingCountPerPage);
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState(1);
  const [sortValue, setSortValue] = useState<sortValueType>(null);
  const [sortField, setSortField] = useState<sortFieldType>(null);
  const [searchString, setSearchString] = useState<string>("");

  const { pending, error, success } = listingRequestData;

  const initSkip = 0;
  const initLimit = listingsPerPage;

  const tableRef = React.createRef<HTMLTableElement>();

  useEffect(() => {
    dispatch(listingGetAllThunk(initSkip, initLimit));
  }, [""]);

  useEffect(() => {
    const skip = (activePage - 1) * listingsPerPage;
    const limit = listingsPerPage * activePage;

    dispatch(
      listingFilteringThunk(
        listings,
        skip,
        limit,
        sortField,
        sortValue,
        searchString
      )
    );
  }, [activePage, sortValue, sortField, searchString]);

  return (
    <>
      <SearchBar
        inputHandler={(text: string) => setSearchString(text)}
        inputValue={searchString}
        submitAction={(searchStr: string) => {
          setSearchString(searchStr);
          setActivePage(1);
        }}
      ></SearchBar>
      {pending && <p>Loading...</p>}
      {sortedListings.length === 0 && success && <p>No records...</p>}
      {sortedListings.length > 0 && success && (
        <>
          <TableContainer>
            <Table tableRef={tableRef}>
              <>
                <thead>
                  <TableHeader
                    clickAction={(
                      sortField: sortFieldType,
                      sortValue: sortValueType
                    ) => {
                      setSortField(sortField);
                      setSortValue(sortValue);
                      setActivePage(1);
                    }}
                    sortField={sortField}
                    sortValue={sortValue}
                  ></TableHeader>
                </thead>
                <tbody>
                  {sortedListings.map((item: listingData, index: number) => (
                    <TableItem
                      ref={(ref: any) => ref && slideOut(ref, index)}
                      key={index}
                      data={item}
                    ></TableItem>
                  ))}
                </tbody>
              </>
            </Table>
          </TableContainer>
          <Pagination
            activePage={activePage}
            noOfPages={Math.ceil(listingCount / listingsPerPage)}
            clickAction={(pageNumber: number) => {
              // slideIn(tableRef.current, () => {
              //   setActivePage(pageNumber);
              // });
              setActivePage(pageNumber);
            }}
          />
        </>
      )}
    </>
  );
};

export default IncomeList;
