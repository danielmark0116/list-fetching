import { ActionTypes } from "../actions/actionTypes";
import * as types from "../actions/actionTypes";
import { requestData } from "../types/requestData";

interface initState {
  listing: String;
  requestData: requestData;
}

const initState: initState = {
  listing: "hello",
  requestData: { pending: false, success: false, error: false, msg: "" }
};

export function listingReducer(state = initState, action: ActionTypes) {
  switch (action.type) {
    case types.LISTING_GET_ALL:
      return { ...state };
    case types.LISTING_PENDING:
      return { ...state };
    case types.LISTING_SUCCESS:
      return { ...state };
    case types.LISTING_FAIL:
      return { ...state };
    default:
      return { ...state };
  }
}
