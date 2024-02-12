import Fighter from "./modules/Fighter.js";
import { Warrior, Assassin } from "./modules/Characters.js";
import { displayAssassin, displayWarrior } from "./modules/display.js";
const mainContainer = document.querySelector("#mainContainer");
let player1, player2;
const formEl = document.querySelector("#gameForm");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  player1 = document.querySelector("#p1Name").value;
  player2 = document.querySelector("#p2Name").value;
  const characterOptPlayer1 = document.getElementById("player1Character").value;
  const characterOptPlayer2 = document.getElementById("player2Character").value;
  mainContainer.innerHTML = "";
  if (characterOptPlayer1 === "Warrior") {
    displayWarrior(player1);
  } else if (characterOptPlayer1 === "Assassin") {
    displayAssassin(player1);
  }

  if (characterOptPlayer2 === "Warrior") {
    displayWarrior(player2);
  } else if (characterOptPlayer2 === "Assassin") {
    displayAssassin(player2);
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
