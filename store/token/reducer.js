import { tokenActionTypes } from "./action";

const manuInitialState = {
  token: "",
};

export default function reducer(state = manuInitialState, action) {
  switch (action.type) {
    case tokenActionTypes.TOKEN:
      return {
        token: action.payload,
      };
    default:
      return state;
  }
}
