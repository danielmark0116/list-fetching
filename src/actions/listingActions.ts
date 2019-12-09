import { ActionTypes } from "./actionTypes";
import * as types from "./actionTypes";

export const listingGetAll = (payload: string = ""): ActionTypes => ({
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

// THUNKS
