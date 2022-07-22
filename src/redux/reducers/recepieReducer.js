const defaultState = { listResep: [], currentResep: null };

const recepieReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return {
        ...state,
        loading: false,
      };
    }
    // DEFAULT
    default: {
      return state;
    }
  }
};

export default recepieReducer;
