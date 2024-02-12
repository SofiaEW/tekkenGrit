import Fighter from "./modules/Fighter.js";
import { Warrior, Assassin } from "./modules/Characters.js";
import {
  displayAssassinForP1,
  displayAssassinForP2,
  displayWarriorForP1,
  displayWarriorForP2,
} from "./modules/display.js";
const mainContainer = document.querySelector("#mainContainer");
let player1, player2;

const formEl = document.querySelector("#gameForm");
formEl.addEventListener("submit", (event) => {
  player1 = document.querySelector("#p1Name").value;
  player2 = document.querySelector("#p2Name").value;
  const characterOptPlayer1 = document.getElementById("player1Character").value;
  const characterOptPlayer2 = document.getElementById("player2Character").value;
  mainContainer.innerHTML = "";
  if (characterOptPlayer1 === "Warrior") {
    displayWarriorForP1();
  } else if (characterOptPlayer1 === "Assassin") {
    displayAssassinForP1();
  }

  if (characterOptPlayer2 === "Warrior") {
    displayWarriorForP2();
  } else if (characterOptPlayer2 === "Assassin") {
    displayAssassinForP2();
  }
  console.log(player1, characterOptPlayer1);
  event.preventDefault();
});
