import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import createReducer from "./reducers";

export const history = createBrowserHistory({
  basename: "/",
  hashType: "noslash",
});

const middlewares = [thunk, routerMiddleware(history)];
const enhancers = [applyMiddleware(...middlewares)];

/* If Redux DevTools Extension is installed us it, otherwise use Redux compose */
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  createReducer(history),
  composeEnhancers(...enhancers)
);

export default store;
