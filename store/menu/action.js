export const menuActionTypes = {
  MENU: "MENU",
};

export const addMenu = (payload) => async (dispatch) => {
  dispatch({ type: menuActionTypes.MENU, payload: payload });
};
