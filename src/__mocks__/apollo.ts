import { GET_CHARACTERS } from "../pages/characters-list";

export const mockResponse = [
  {
    request: {
      query: GET_CHARACTERS,
    },
    result: {
      data: {
        characters: {
          results: [
            {
              id: "1",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              name: "Rick Sanchez",
            },
          ],
        },
      },
    },
  },
];
