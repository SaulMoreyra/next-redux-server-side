import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import menu from "./menu/reducer";
import token from "./token/reducer";

const combinedReducer = combineReducers({
  menu,
  token,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };

    // console.log("NEXTSTATE", nextState.menu);
    return nextState;
  } else {
    const reducer = combinedReducer(state, action);
    console.log("REDUCER", reducer.menu);
    return reducer;
  }
};

export default reducer;
