import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as notifications } from "react-notification-system-redux";

const createReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    notifications,
  });

export default createReducer;
