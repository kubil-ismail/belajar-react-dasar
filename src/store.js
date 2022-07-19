import { combineReducers, createStore } from "redux";

const defaultState = {
  loading: true,
  profile: null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_PROFILE": {
      return {
        ...state,
        profile: { ...action.data },
      };
    }
    case "SET_USERS": {
      return {
        ...state,
        users: { ...action.data },
      };
    }
    // DEFAULT
    default: {
      return state;
    }
  }
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

const recepieReducer = (
  state = { listResep: [], currentResep: null },
  action
) => {
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

const rootReducer = combineReducers({
  auth: authReducer,
  example: exampleReducer,
  recepie: recepieReducer,
});

// Redux: Store
const store = createStore(rootReducer);

// Exports
export default store;
