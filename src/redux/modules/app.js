const initialState = {
  error: null,
  code: null,
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
  const { type, error, code } = action;
  if (type === types.CLEAR_ERROR) {
    return { ...state, error: null, code: null };
  } else if (error) {
    return { ...state, error: error, code: code };
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
