import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchAPI, postAPI } from "./middlewares/api";
import rootReducer from "./modules";

let store;

if (
  process.env.NODE_ENV !== "production" &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, fetchAPI, postAPI))
  );
} else {
  store = createStore(rootReducer, applyMiddleware(thunk, fetchAPI, postAPI));
}

export default store;
