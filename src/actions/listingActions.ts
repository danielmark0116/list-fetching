import { ActionTypes } from "./actionTypes";
import * as types from "./actionTypes";
import { Dispatch } from "redux";
import axios from "axios";
import { apiUrl, corsUrl } from "../config";
import {
  totalIncome,
  averageIncome,
  lastMonthIncome
} from "../utils/incomeEval";
import { listingData } from "../types/listingData";
import { sortFieldType, sortValueType } from "../types/sortTypes";

export const listingGetAll = (payload: listingData[] = []): ActionTypes => ({
  type: types.LISTING_GET_ALL,
  payload
});

export const listingSort = (payload: listingData[] = []): ActionTypes => ({
  type: types.LISTING_SORT,
  payload
});

export const listingPaginate = (payload: listingData[] = []): ActionTypes => ({
  type: types.LISTING_PAGINATE,
  payload
});

export const listingPending = (payload: string = ""): ActionTypes => ({
  type: types.LISTING_PENDING,
  payload
});

export const listingSuccess = (payload: string = ""): ActionTypes => ({
  type: types.LISTING_SUCCESS,
  payload
});

export const listingFail = (payload: string = ""): ActionTypes => ({
  type: types.LISTING_FAIL,
  payload
});

export const listingCount = (payload: number = 0): ActionTypes => ({
  type: types.LISTING_TOTAL_COUNT,
  payload
});

export const listingItemsPerPage = (payload: number = 20): ActionTypes => ({
  type: types.LISTING_ITEMS_PER_PAGE,
  payload
});

// THUNKS
export const listingGetAllThunk = (limit: number = 0, skip: number = 10) => {
  return async (dispatch: Dispatch<ActionTypes | any>) => {
    dispatch(listingPending("Fetching data from API..."));

    try {
      let response = await axios.get(`${corsUrl}${apiUrl}/companies`);

      const limitedData = response.data;

      let incomeRequests = limitedData.map((data: any) =>
        axios.get(`${corsUrl}${apiUrl}/incomes/${data.id}`)
      );

      let incomeResponse = await axios.all(incomeRequests);

      const listingDetails = await incomeResponse.map((x: any) => x.data);

      const finalData = limitedData.map((data: any) => ({
        ...data,
        lastMonthIncome: lastMonthIncome(
          listingDetails.find((item: any) => item.id === data.id)["incomes"]
        ),
        averageIncome: averageIncome(
          listingDetails.find((item: any) => item.id === data.id)["incomes"]
        ),
        totalIncome: totalIncome(
          listingDetails.find((item: any) => item.id === data.id)["incomes"]
        )
      }));

      dispatch(listingCount(response.data.length));
      dispatch(listingGetAll(finalData));
      dispatch(listingFilteringThunk(finalData, limit, skip));
      dispatch(listingSuccess("Successfully fetched data form the API"));
    } catch (e) {
      dispatch(listingFail(e.message));
    }
  };
};

export const listingFilteringThunk = (
  listings: listingData[],
  limit: number = 0,
  skip: number = 10,
  sortField: sortFieldType = null,
  sortValue: sortValueType = null,
  searchString: string = ""
) => {
  return async (dispatch: Dispatch<any>) => {
    let paginatedListings: listingData[] = [];
    let filteredByText: listingData[] = [];

    if (searchString.length > 0) {
      filteredByText = await listings.filter((item: listingData) => {
        if (
          Object.values(item)
            .map((item: any) => item.toString().toLowerCase())
            .some((value: any) => new RegExp(searchString, "gi").test(value))
        ) {
          return true;
        }
        return false;
      });
    } else {
      filteredByText = listings;
    }

    if (!sortField) {
      paginatedListings = await filteredByText.slice(limit, skip);
    } else {
      let sorted = await filteredByText.sort((a: any, b: any) => {
        switch (sortValue) {
          case "desc":
            if (sortField === "name" || sortField === "city") {
              const nameA = a[sortField].toLowerCase();
              const nameB = b[sortField].toLowerCase();

              return nameB.localeCompare(nameA);
            } else {
              return b[sortField] - a[sortField];
            }
          case "asc":
            if (sortField === "name" || sortField === "city") {
              const nameA = a[sortField].toLowerCase();
              const nameB = b[sortField].toLowerCase();

              return nameA.localeCompare(nameB);
            } else {
              return a[sortField] - b[sortField];
            }
          default:
            return a[sortField] - b[sortField];
        }
      });

      paginatedListings = sorted.slice(limit, skip);
    }

    dispatch(listingCount(filteredByText.length));
    dispatch(listingPaginate(paginatedListings));
  };
};

export const listingSortThunk = (listings: listingData[]) => {
  return async (dispatch: Dispatch<any>) => {
    let sortedData = await listings.sort(
      (a: listingData, b: listingData) => a.id - b.id
    );

    dispatch(listingSort(sortedData));
  };
};

export const listingUpdateItemsPerPageThunk = (itemsPerPage: number) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(listingItemsPerPage(itemsPerPage));
  };
};
