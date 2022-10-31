const createReducer = (name, initialState) => {
  return (state = initialState, action) => {
    console.log(action);
    if (action.response && action.response[name]) {
      return { ...state, ...action.response[name] };
    }
    return state;
  };
};

export default createReducer;
