import Character from "./pages/character";
import CharactersList from "./pages/characters-list";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharactersList />} />
      <Route path="/:id" element={<Character />} />
    </Routes>
  );
}

export default App;
