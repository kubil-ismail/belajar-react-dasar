import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const persistConfig = {
  key: "celciusCoffe",
  //   blacklist: ['example'],
  whitelist: ["auth"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(...[thunk, logger])
);
const persistor = persistStore(store);

// Exports
export { store, persistor };
