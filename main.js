import Fighter from "./modules/Fighter.js";
import { Warrior, Assassin } from "./modules/Characters.js";
import {
  // displayAssassinForP1,
  // displayAssassinForP2,
  // displayWarriorForP1,
  // displayWarriorForP2,
  displayPlayerOne,
  displayPlayerTwo,
  nextTurnP1,
  nextTurnP2,
} from "./modules/display.js";

const mainContainer = document.querySelector("#mainContainer");
let p1, p2;

const formEl = document.querySelector("#gameForm");
// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   player1 = document.querySelector("#p1Name").value;
//   player2 = document.querySelector("#p2Name").value;
//   const characterOptPlayer1 = document.getElementById("player1Character").value;
//   const characterOptPlayer2 = document.getElementById("player2Character").value;
//   mainContainer.innerHTML = "";

//   if (characterOptPlayer1 === "Warrior") {
//     displayWarriorForP1(player1);
//     document.getElementById("warriorUlt1").classList.add("hide");
//     console.log(warrior1);
//   } else if (characterOptPlayer1 === "Assassin") {
//     displayAssassinForP1(player1);

//     document.getElementById("assassinUlt1").classList.add("hide");
//   }

//   if (characterOptPlayer2 === "Warrior") {
//     displayWarriorForP2(player2);
//     document.getElementById("warriorUlt2").classList.add("hide");
//   } else if (characterOptPlayer2 === "Assassin") {
//     displayAssassinForP2(player2);
//     document.getElementById("assassinUlt2").classList.add("hide");
//   }
//   nextTurnP1();
// });

// // inpur från form
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

  console.log(nameP1, nameP2);

  console.log(p1, p2);
  console.log(selectP1, selectP2);
  nextTurnP1();
});

// // samma för p2

// displayPlayerOne(p1)
// if(p1.type === 'warrior')
// p1.daggerAttack(p2)
// function hideUlt(player) {
//   if (player === p1) {
//     const hideUltP1 = document.getElementById("player1Ult");
//     hideUltP1.classList.add("hide");
//   } else if (player === p2) {
//     const hideUltP2 = document.getElementById("player2Ult");
//     hideUltP2.classList.add("hide");
//   }
// }
