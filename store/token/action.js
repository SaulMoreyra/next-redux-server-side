export const tokenActionTypes = {
  TOKEN: "TOKEN",
};

export const addToken = (payload) => async (dispatch) => {
  dispatch({ type: tokenActionTypes.TOKEN, payload: payload });
};
