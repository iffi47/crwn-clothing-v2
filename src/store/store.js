import { compose, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { rootReducers } from "./root-reducer";

const middlewares =[logger];
const composedEnchancers = compose(applyMiddleware(...middlewares))
export const store = createStore(rootReducers, undefined, composedEnchancers);