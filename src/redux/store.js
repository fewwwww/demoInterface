import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {fetchAPI, postAPI, viewContract} from "./middlewares/api";
import rootReducer from "./modules";

let store;

if (
  process.env.NODE_ENV !== "production" &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, fetchAPI, postAPI, viewContract))
  );
} else {
  store = createStore(rootReducer, applyMiddleware(thunk, fetchAPI, postAPI, viewContract));
}

export default store;
