import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import menu from "./menu/reducer";
import token from "./token/reducer";

const combinedReducer = combineReducers({
  menu,
  token,
});

/* const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
}; */

export default combinedReducer;
