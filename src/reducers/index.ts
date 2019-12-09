import { combineReducers } from "redux";
import { listingReducer } from "./listingReducer";

export const rootReducer = combineReducers({
  listing: listingReducer
});

export type AppState = ReturnType<typeof rootReducer>;
