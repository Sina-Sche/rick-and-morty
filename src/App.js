import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import { Character } from "./components/Character";
import { Characters } from "./components/Characters";
import { getCharactersByName } from "./utils/api";

function App() {
  const header = Header();
  const characterContainer = Characters();
  const main = createElement("main", {
    className: "main",
    children: [characterContainer],
  });
  async function loadCharacters(name) {
    const namecharacters = await getCharactersByName(name);
    const characterElements = namecharacters.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );
    characterContainer.innerHTML = "";
    characterContainer.append(...characterElements);
  }
  const searchBar = createElement("input", {
    onchange: (event) => loadCharacters(event.target.value),
  });

  loadCharacters();
  const container = createElement("div", {
    children: [header, searchBar, main],
  });
  return container;
}

export default App;
