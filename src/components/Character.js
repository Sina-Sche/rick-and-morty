import { createElement } from "../utils/elements";
import "./character.css";

export function Character({ name, imgSrc }) {
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

  const container = createElement("article", {
    className: "character",
    children: [title, avatar],
  });

  return container;
}
