import "./header.css";
import { createElement } from "../utils/elements";
import imgSrc from "../assets/rickandmorty.png";

function Header() {
  const logo = createElement("img", {
    className: "logo__img",
    src: imgSrc,
  });
  const header = createElement("header", {
    className: "header",
    children: [logo],
  });
  return header;
}

export default Header;
