import Fighter from "./modules/Fighter.js";
import { Warrior, Assassin } from "./modules/Characters.js";
import { displayAssassin, displayWarrior } from "./modules/display.js";
const mainContainer = document.querySelector("#mainContainer");

const formEl = document.querySelector("#gameForm");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const player1 = document.querySelector("#p1Name").value;
  const player2 = document.querySelector("#p2Name").value;
  const characterOpt = document.querySelector("#characterOpt").options.value;
  //! if(player1){}
  if (characterOpt === "warrior") {
    displayWarrior();
  } else if (characterOpt === "assassin") {
    displayAssassin();
  }
  mainContainer.append(fighter1Div);
  mainContainer.append(fighter2Div);
  event.preventDefault();
});

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
