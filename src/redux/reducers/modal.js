import { SET_MODAL } from "../actions/actionTypes";

const initialState = {
  modal: false,
};

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL:
      return { modal: action.payload };
    default:
      return state;
  }
};
