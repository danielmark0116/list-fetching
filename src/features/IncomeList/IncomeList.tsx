import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectorListing,
  selectorListingCount,
  selectorListingCountPerPage,
  selectorListingRequestData
} from "../../reducers/listingReducer";
import TableItem from "../../common/TableItem/TableItem";
import { listingData } from "../../types/listingData";
import TableHeader from "../TableHeader/TableHeader";
import TableContainer from "../../common/TableContainer/TableContainer";
import Pagination from "../Pagination/Pagination";
import { listingGetAllThunk } from "../../actions/listingActions";
import { requestData } from "../../types/requestData";

const IncomeList = () => {
  const [activePage, setActivePage] = useState(1);
  const listings: listingData[] = useSelector(selectorListing);
  const listingRequestData: requestData = useSelector(
    selectorListingRequestData
  );
  const listingCount: number = useSelector(selectorListingCount);
  const listingsPerPage: number = useSelector(selectorListingCountPerPage);
  const dispatch = useDispatch();

  const { pending, error, success } = listingRequestData;

  useEffect(() => {
    dispatch(
      listingGetAllThunk(
        (activePage - 1) * listingsPerPage,
        listingsPerPage * activePage
      )
    );
  }, [activePage]);

  if (pending) return <p>loading</p>;

  return (
    <>
      <TableContainer>
        <>
          <thead>
            <TableHeader></TableHeader>
          </thead>
          <tbody>
            {listings.map((item: listingData, index: number) => (
              <TableItem key={index} data={item}></TableItem>
            ))}
          </tbody>
        </>
      </TableContainer>
      <Pagination
        activePage={activePage}
        noOfPages={Math.ceil(listingCount / listingsPerPage)}
        clickAction={setActivePage}
      />
    </>
  );
};

export default IncomeList;
