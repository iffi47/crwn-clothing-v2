import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utlis/reducer.utils";

export const setIsCartOpen = (boolean) => {
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
 };