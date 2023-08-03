export const getAllCharactersAction = (data: Record<string, string>[]) => ({
  type: "GET_ALL_CHARACTERS",
  payload: data,
});
