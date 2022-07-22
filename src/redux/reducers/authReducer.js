import axios from "axios";

const defaultState = {
  loading: false,
  isError: false,
  errorMsg: null,
  profile: null,
  token: null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_PROFILE": {
      return {
        ...state,
        profile: { ...action.data },
      };
    }
    case "SET_TOKEN": {
      return {
        ...state,
        token: action.data,
      };
    }
    case "SET_USERS": {
      return {
        ...state,
        users: { ...action.data },
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        loading: action.data,
      };
    }
    case "SET_ERROR": {
      return {
        ...state,
        errorMsg: action.data?.errorMsg,
        isError: action.data?.isError,
      };
    }
    case "SET_LOGOUT": {
      return {
        ...state,
        loading: false,
        isError: false,
        errorMsg: null,
        profile: null,
        token: null,
      };
    }
    // DEFAULT
    default: {
      return state;
    }
  }
};

const initLogin = (dispatch) => {
  dispatch({
    type: "SET_LOADING",
    data: true,
  });

  dispatch({
    type: "SET_ERROR",
    data: {
      errorMsg: "",
      isError: false,
    },
  });
};

const authRequest = ({ email, password }) => {
  return (dispatch) => {
    initLogin(dispatch);

    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, {
        email,
        password,
      })
      .then((res) => {
        dispatch({
          type: "SET_LOADING",
          data: false,
        });

        dispatch({
          type: "SET_ERROR",
          data: {
            errorMsg: null,
            isError: false,
          },
        });

        dispatch({
          type: "SET_TOKEN",
          data: res?.data?.token,
        });

        dispatch({
          type: "SET_PROFILE",
          data: res?.data?.user,
        });
      })
      .catch((err) => {
        dispatch({
          type: "SET_ERROR",
          data: {
            errorMsg: err?.response?.data ?? "Something wrong with our server",
            isError: true,
          },
        });
      })
      .finally(() => {
        dispatch({
          type: "SET_LOADING",
          data: false,
        });
      });
  };
};

export { authReducer, authRequest };
