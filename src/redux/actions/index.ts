export const getAllCharactersAction = () => async (dispatch: any) => {
  dispatch({ type: "GET_ALL_CHARACTERS", payload: dispatch });
};
