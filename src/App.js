import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import { Character } from "./components/Character";
import { Characters } from "./components/Characters";
import { getCharactersbyName } from "./utils/api";

function App() {
  const header = Header();
  const characterContainer = Characters();
  const main = createElement("main", {
    className: "main",
    children: [characterContainer],
  });
  async function loadCharacters() {
    const namecharacters = await getCharactersbyName("rick");
    const characterElements = namecharacters.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );
    characterContainer.append(...characterElements);
  }

  loadCharacters();
  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
