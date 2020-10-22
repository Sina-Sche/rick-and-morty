import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import { Character } from "./components/Character";
import { Characters } from "./components/Characters";
import { getCharacters } from "./utils/api";
import Search from "./components/Search";

function App() {
  const header = Header();
  const characterContainer = Characters();
  const nextButton = createElement("button", {
    innerText: "Load more",
    onclick: () => alert("Load more"),
  });
  const main = createElement("main", {
    className: "main",
    children: [characterContainer, nextButton],
  });
  async function loadCharacters(name) {
    const characters = await getCharacters(name);
    const characterElements = characters.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
        gender: character.gender,
      })
    );
    characterContainer.innerHTML = "";
    characterContainer.append(...characterElements);
  }

  const search = Search({
    onchange: (value) => loadCharacters(value),
  });
  loadCharacters();
  const container = createElement("div", {
    children: [header, search, main],
  });
  return container;
}

export default App;
