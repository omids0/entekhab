import { render, screen } from "@testing-library/react";

import { mockResponse } from "./__mocks__/apollo";
import CharactersList from "./pages/characters-list";
import { BrowserRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/react-testing";
import store from "./redux/store";
import { Provider } from "react-redux";

const MockCharactersList = () => {
  return (
    <BrowserRouter>
      <MockedProvider mocks={mockResponse} addTypename={false}>
        <Provider store={store}>
          <CharactersList />
        </Provider>
      </MockedProvider>
    </BrowserRouter>
  );
};

describe("CharactersList", () => {
  it("should fetch and render element", async () => {
    render(<MockCharactersList />);

    const elementMap = await screen.findByTestId("characterItem");
    expect(elementMap).toBeInTheDocument();
  });
});
