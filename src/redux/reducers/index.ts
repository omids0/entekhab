export const getAllCharactersReducers = (
  state = {},
  { payload, type }: any
) => {
  switch (type) {
    case "GET_ALL_CHARACTERS":
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
};
