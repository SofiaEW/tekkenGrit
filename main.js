import Fighter from "./modules/Fighter.js";
import { Warrior, Assassin } from "./modules/Characters.js";

function createAndAppendEl(type, content, container) {
  const element = document.createElement(type);
  container.append(element);
  if (type === "img") {
    element.src = content;
  } else {
    element.innerHTMl = content;
  }
  return element;
}
