import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import exampleReducer from "./reducers/exampleReducer";
import recepieReducer from "./reducers/recepieReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  example: exampleReducer,
  recepie: recepieReducer,
});

export default rootReducer;
