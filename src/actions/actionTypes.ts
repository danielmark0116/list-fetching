import { listingData } from "../types/listingData";

export const LISTING_GET_ALL = "LISTING_GET_ALL";
export const LISTING_PENDING = "LISTING_PENDING";
export const LISTING_SUCCESS = "LISTING_SUCCESS";
export const LISTING_FAIL = "LISTING_FAIL";

interface listingGetAllActionType {
  type: typeof LISTING_GET_ALL;
  payload: listingData[];
}

interface listingPendingActionType {
  type: typeof LISTING_PENDING;
  payload: string;
}

interface listingSuccessActionType {
  type: typeof LISTING_SUCCESS;
  payload: string;
}

interface listingFailActionType {
  type: typeof LISTING_FAIL;
  payload: string;
}

export type ActionTypes =
  | listingGetAllActionType
  | listingPendingActionType
  | listingSuccessActionType
  | listingFailActionType;
