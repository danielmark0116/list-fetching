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

export const listingGetAll = (payload: listingData[] = []): ActionTypes => ({
  type: types.LISTING_GET_ALL,
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
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(listingPending("Fetching data from API..."));

    try {
      let response = await axios.get(`${corsUrl}${apiUrl}/companies`);

      const limitedData = response.data.slice(limit, skip);

      let incomeRequests = limitedData.map((data: any) =>
        axios.get(`${corsUrl}${apiUrl}/incomes/${data.id}`)
      );

      let incomeResponse = await axios.all(incomeRequests);

      const listingDetails = incomeResponse.map((x: any) => x.data);

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
      dispatch(listingSuccess("Successfully fetched data form the API"));
    } catch (e) {
      dispatch(listingFail(e.message));
    }
  };
};

export const listingUpdateItemsPerPageThunk = (itemsPerPage: number) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(listingItemsPerPage(itemsPerPage));
  };
};
