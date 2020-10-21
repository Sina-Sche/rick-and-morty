import "./header.css";
import { createElement } from "../utils/elements";

function Header() {
  const title = createElement("h1", {
    innerText: "Rick and Morty Characters",
  });

  const header = createElement("header", {
    className: "header",
    children: [title],
  });
  return header;
}

export default Header;
