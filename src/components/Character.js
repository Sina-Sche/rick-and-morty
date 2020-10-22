import { createElement } from "../utils/elements";
import starActiveSrc from "../assets/staractive.svg";
import starInactiveSrc from "../assets/starinactive.svg";
import "./character.css";

export function Character({ name, imgSrc, isFavourite }) {
  const avatar = createElement("img", {
    className: "character__img",
    src: imgSrc,
    alt: name,
    loading: "lazy",
  });
  const title = createElement("div", {
    className: "character__title",
    innerText: name,
  });

  const favouriteImg = createElement("img", {
    className: "favourite__img",
    src: isFavourite ? starActiveSrc : starInactiveSrc,
  });

  const favouriteBtn = createElement("button", {
    className: "favourite__btn",
    onclick: () => {
      // onclick: variable with current favorites -> verwandeln in JSON
      //get favorites from localStorage ||or empty, if there are no favs yet
      let currentFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );

      //condition: currentFavorites already contain selected name,
      const isFavorite = currentFavorites.includes(name);
      //if this is true, then take the currentFavourites and filter them, by removing the name of the selected favourite
      if (isFavorite) {
        currentFavorites = currentFavorites.filter(
          //!== strict inequality operator - favourite can not be equal to name
          (favorite) => favorite !== name
        );

        //if selected name is not yet a favourite, then push name to array
      } else {
        currentFavorites.push(name);
      }
      localStorage.setItem("favourites", JSON.stringify(currentFavorites));
      favouriteImg.src = !isFavourite ? starActiveSrc : starInactiveSrc;
    },

    children: [favouriteImg],
  });

  const header = createElement("div", {
    className: "character__header",
    children: [title, favouriteBtn],
  });

  const container = createElement("article", {
    className: "character",
    children: [header, avatar],
  });

  return container;
}
