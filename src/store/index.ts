import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer, AppState } from "../reducers";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { ActionTypes } from "../actions/actionTypes";
import { devTools } from "../config";

const middleware = devTools
  ? compose(
      applyMiddleware(thunk as ThunkMiddleware<AppState, ActionTypes>),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
  : compose(applyMiddleware(thunk as ThunkMiddleware<AppState, ActionTypes>));

export const store = createStore(rootReducer, middleware);
