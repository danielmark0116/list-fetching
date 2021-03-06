import { listingData } from "../types/listingData";

export const LISTING_GET_ALL = "LISTING_GET_ALL";
export const LISTING_PENDING = "LISTING_PENDING";
export const LISTING_SUCCESS = "LISTING_SUCCESS";
export const LISTING_FAIL = "LISTING_FAIL";

export const LISTING_TOTAL_COUNT = "LISTING_TOTAL_COUNT";
export const LISTING_ITEMS_PER_PAGE = "LISTING_ITEMS_PER_PAGE";

export const LISTING_SORT = "LISTING_SORT";
export const LISTING_PAGINATE = "LISTING_PAGINATE";

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

interface listingTotalCountActionType {
  type: typeof LISTING_TOTAL_COUNT;
  payload: number;
}

interface listingItemsPerPageActionType {
  type: typeof LISTING_ITEMS_PER_PAGE;
  payload: number;
}

interface listingSortActionType {
  type: typeof LISTING_SORT;
  payload: listingData[];
}

interface listingPaginateActionType {
  type: typeof LISTING_PAGINATE;
  payload: listingData[];
}

export type ActionTypes =
  | listingGetAllActionType
  | listingPendingActionType
  | listingSuccessActionType
  | listingFailActionType
  | listingTotalCountActionType
  | listingItemsPerPageActionType
  | listingSortActionType
  | listingPaginateActionType;
