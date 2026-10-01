import { compose, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { rootReducers } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
 key: "root",
 storage,
 blacklist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);
const middlewares = [
 process.env.NODE_ENV === "development" && logger,
 thunk,
].filter(Boolean);
const composeEnchancer =
 (process.env.NODE_ENV !== "production" &&
  window &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
 compose;

const composedEnchancers = composeEnchancer(applyMiddleware(...middlewares));
export const store = createStore(
 persistedReducer,
 undefined,
 composedEnchancers,
);

export const persistor = persistStore(store);