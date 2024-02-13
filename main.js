import { Warrior, Assassin } from "./modules/Characters.js";
import {
  displayPlayerOne,
  displayPlayerTwo,
  nextTurnP1,
  nextTurnP2,
} from "./modules/display.js";

const mainContainer = document.querySelector("#mainContainer");
let p1, p2;

const formEl = document.querySelector("#gameForm");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameP1 = document.querySelector("#p1Name").value;
  const nameP2 = document.querySelector("#p2Name").value;
  const selectP1 = document.getElementById("player1Character").value;
  const selectP2 = document.getElementById("player2Character").value;
  mainContainer.innerHTML = "";
  console.log(selectP1, selectP2);

  if (selectP1 === "Warrior") {
    p1 = new Warrior(nameP1);
    displayPlayerOne(p1);
  } else {
    p1 = new Assassin(nameP1);
    displayPlayerOne(p1);
  }
  if (selectP2 === "Warrior") {
    p2 = new Warrior(nameP2);
    displayPlayerTwo(p2);
  } else {
    p2 = new Assassin(nameP2);
    displayPlayerTwo(p2);
  }

  document.getElementById("player1name").innerText = nameP1;
  document.getElementById("player2name").innerText = nameP2;
  document.getElementById("player1Ult").classList.add("hide");
  document.getElementById("player2Ult").classList.add("hide");

  nextTurnP1();
});

// if(p1.health ===0){p1.lost(nameP1)}else if(p2.health===0){p2.lost(nameP2)}
