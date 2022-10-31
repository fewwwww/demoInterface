import { FETCH_DATA, POST_DATA } from "../middlewares/api";

const dispatchAction = (method, types, endpoint, schema, data = null) => {
  if (![FETCH_DATA, POST_DATA].includes(method)) {
    throw new Error(`${method} is not supported!`);
  }
  if (method === POST_DATA && !data) {
    throw new Error(`${method}: request data is required!`);
  }

  return data
    ? {
        [method]: {
          types,
          endpoint,
          schema,
          data,
        },
      }
    : {
        [method]: {
          types,
          endpoint,
          schema,
        },
      };
};

export default dispatchAction;
