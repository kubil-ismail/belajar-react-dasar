const defaultState = {
  loading: true,
  profile: null,
};

const exampleReducer = (state = defaultState, action) => {
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

export default exampleReducer;
