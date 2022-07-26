import { menuActionTypes } from "./action";

const manuInitialState = {
  menu: [],
};

export default function reducer(state = manuInitialState, action) {
  switch (action.type) {
    case menuActionTypes.MENU:
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
}
