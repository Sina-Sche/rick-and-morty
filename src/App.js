import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import { Character } from "./components/Character";
import { Characters } from "./components/Characters";
import { getCharacters } from "./utils/api";
import Search from "./components/Search";
import Button from "./components/button";

function App() {
  let lastName = null;
  let nextPage = null;

  const header = Header();

  const characterContainer = Characters();
  const loadMoreButton = Button({
    innerText: "Load more",
    onclick: () => {
      loadCharacters(lastName, nextPage);
    },
  });

  const main = createElement("main", {
    className: "main",
    children: [characterContainer, loadMoreButton],
  });
  async function loadCharacters(name, page) {
    const characters = await getCharacters(name, page);
    const characterElements = characters.results.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );
    characterContainer.append(...characterElements);
    //define variable nextPage = ask JSON-file: is next truthy? then match value of digit(d) +means it can be 2 digits [chooses first number in array]
    nextPage = characters.info.next?.match(/\d+/)[0];
    //loadMoreButton disabled if characters.info.next = falsy
    loadMoreButton.disabled = !characters.info.next;
    //search function needs to match last searched name
    lastName = name;
  }
  // Reappend loadMoreButton to avoid scrolling
  main.append(loadMoreButton);

  const search = Search({
    onchange: (value) => {
      characterContainer.innerHTML = "";
      loadCharacters(value);
    },
  });
  loadCharacters();
  const container = createElement("div", {
    children: [header, search, main],
  });

  window.addEventListener("scroll", () => {
    const offsetY =
      loadMoreButton.offsetParent.offsetHeight - window.innerHeight - 200;
    if (offsetY < window.pageYOffset) {
      loadMoreButton.click();
    }
  });
  return container;
}

export default App;
