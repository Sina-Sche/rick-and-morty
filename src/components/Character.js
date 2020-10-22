import { createElement } from "../utils/elements";
import "./character.css";

export function Character({ name, imgSrc, gender }) {
  const avatar = createElement("img", {
    className: "character__img",
    src: imgSrc,
    alt: name,
  });
  const title = createElement("div", {
    className: "character__title",
    innerText: name,
  });

  const container = createElement("article", {
    className: "character",
    children: [title, avatar, gender],
  });

  return container;
}
