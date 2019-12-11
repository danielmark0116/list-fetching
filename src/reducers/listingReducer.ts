import { ActionTypes } from "../actions/actionTypes";
import * as types from "../actions/actionTypes";
import { requestData } from "../types/requestData";
import { listingData } from "../types/listingData";
import { AppState } from ".";

export const selectorListing = (state: AppState): listingData[] =>
  state.listing.listing;
export const selectorListingSorted = (state: AppState): listingData[] =>
  state.listing.sortedListing;
export const selectorListingRequestData = (state: AppState): requestData =>
  state.listing.requestData;
export const selectorListingCount = (state: AppState): number =>
  state.listing.count;
export const selectorListingCountPerPage = (state: AppState): number =>
  state.listing.listingsPerPage;

interface initState {
  listing: listingData[];
  sortedListing: listingData[];
  requestData: requestData;
  count: number;
  listingsPerPage: number;
}

const initState: initState = {
  listing: [],
  sortedListing: [],
  requestData: { pending: false, success: false, error: false, msg: "" },
  count: 0,
  listingsPerPage: 10
};

export function listingReducer(state = initState, action: ActionTypes) {
  switch (action.type) {
    case types.LISTING_ITEMS_PER_PAGE:
      return { ...state, listingsPerPage: action.payload };
    case types.LISTING_TOTAL_COUNT:
      return { ...state, count: action.payload };
    case types.LISTING_GET_ALL:
      return { ...state, listing: action.payload };
    case types.LISTING_PAGINATE:
      return { ...state, sortedListing: action.payload };
    case types.LISTING_SORT:
      return { ...state, sortedListing: action.payload };
    case types.LISTING_PENDING:
      return {
        ...state,
        requestData: {
          pending: true,
          success: false,
          error: false,
          msg: action.payload
        }
      };
    case types.LISTING_SUCCESS:
      return {
        ...state,
        requestData: {
          pending: false,
          success: true,
          error: false,
          msg: action.payload
        }
      };
    case types.LISTING_FAIL:
      return {
        ...state,
        requestData: {
          pending: false,
          success: false,
          error: true,
          msg: action.payload
        }
      };
    default:
      return { ...state };
  }
}
