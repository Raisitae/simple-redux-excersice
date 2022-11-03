const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "COUNT_INCRESE":
      return {
        ...state,
        count: state.count + 1,
      };
    case "COUNT_DECRESE":
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - 1,
        };
      } else {
        return {
          ...state,
          count: 0,
        };
      }
    default:
      return state;
  }
};
