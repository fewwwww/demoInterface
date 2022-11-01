const initialState = {
  error: null,
  message: null,
};

export const types = {
  CLEAR_ERROR: "APP/CLEAR_ERROR",
};

export const actions = {
  clearError: () => ({
    type: types.CLEAR_ERROR,
  }),
};

const reducer = (state = initialState, action) => {
  const { type, error, message } = action;
  if (type === types.CLEAR_ERROR) {
    return { ...state, error: null, message: null };
  } else if (error) {
    return { ...state, error: error, message: message };
  }
  return state;
};

/***********************************************************************************************************************
 * 													SELECTORS 														   *
 * *********************************************************************************************************************/

export const getErrorMeg = (state) => {
  return state.app.error;
};

export const getErrorCode = (state) => {
  return state.app.code;
};

export default reducer;
