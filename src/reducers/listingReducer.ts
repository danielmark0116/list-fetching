import { ActionTypes } from "../actions/actionTypes";
import * as types from "../actions/actionTypes";
import { requestData } from "../types/requestData";
import { listingData } from "../types/listingData";

interface initState {
  listing: listingData[];
  requestData: requestData;
}

const initState: initState = {
  listing: [],
  requestData: { pending: false, success: false, error: false, msg: "" }
};

export function listingReducer(state = initState, action: ActionTypes) {
  switch (action.type) {
    case types.LISTING_GET_ALL:
      return { ...state, listing: action.payload };
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
