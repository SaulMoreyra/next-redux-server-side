import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import menu from "./menu/reducer";
import token from "./token/reducer";

const combinedReducer = combineReducers({
  menu,
  token,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) return { ...state, ...action.payload };
  return combinedReducer(state, action);
};

export default reducer;
