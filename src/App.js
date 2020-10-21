import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import { Character } from "./components/Character";
import { Characters } from "./components/Characters";
import { getCharacterById } from "./utils/api";

function App() {
  const header = Header();
  const characters = Characters();
  const main = createElement("main", {
    className: "main",
    children: [characters],
  });

  async function getCharacters() {
    const firstCharacter = await getCharacterById(5);
    const secondCharacter = await getCharacterById(2);
    characters.append(
      Character({
        name: firstCharacter.name,
        imgSrc: firstCharacter.image,
      }),
      Character({
        name: secondCharacter.name,
        imgSrc: secondCharacter.image,
      })
    );
  }
  getCharacters();
  const container = createElement("div", { children: [header, main] });
  return container;
}
export default App;
