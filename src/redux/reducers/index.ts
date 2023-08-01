import { AnyAction } from "redux";

export const getAllCharactersReducers = (state = [], action: AnyAction) => {
  switch (action.type) {
    case "GET_ALL_CHARACTERS":
      return [action.payload];
    default:
      return state;
  }
};
