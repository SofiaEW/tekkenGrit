import { Warrior, Assassin } from "./modules/Characters.js";
import { displayPlayerOne, displayPlayerTwo } from "./modules/display.js";

const mainContainer = document.querySelector("#mainContainer");
let p1, p2, nameP1;
let formSubmitted = false;
const formEl = document.querySelector("#gameForm");
const player1Div = document.createElement("div");
const player2Div = document.createElement("div");
player1Div.classList.add("player1Div");
player2Div.classList.add("player2Div");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameP1 = document.querySelector("#p1Name").value;
  const nameP2 = document.querySelector("#p2Name").value;
  const selectP1 = document.getElementById("player1Character").value;
  const selectP2 = document.getElementById("player2Character").value;

  mainContainer.innerHTML = "";
  mainContainer.append(player1Div, player2Div);

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

  if (selectP1 === "Warrior") {
    warriorAttacks(p1, p2, player2HP);
  } else if (selectP1 === "Assassin") {
    assassinAttacks(p1, p2, player2HP);
  }
  if (selectP2 === "Warrior") {
    warriorAttacks(p2, p1, player1HP);
  } else if (selectP2 === "Assassin") {
    assassinAttacks(p2, p1, player1HP);
  }
  console.log(player1HP, player2HP);
  document.getElementById("player1name").innerText = nameP1;
  document.getElementById("player2name").innerText = nameP2;

  document.getElementById("player1Ult").classList.add("hide");
  document.getElementById("player2Ult").classList.add("hide");

  formSubmitted = true;
});
function winner() {
  setTimeout(() => {
    const player1Health = document.getElementById("player1HP").innerText;
    const player2Health = document.getElementById("player2HP").innerText;
    const nameP1 = document.querySelector("#player1name").innerText;
    const nameP2 = document.querySelector("#player2name").innerText;

    if (formSubmitted === true) {
      if (player2Health <= 0) {
        p1.won(nameP1);
      } else if (player1Health <= 0) {
        p2.won(nameP2);
      } else console.log("not yet dead");
    }
  }, 50);
}

function warriorAttacks(attacker, reciever, HP) {
  setTimeout(() => {
    const knucklesBtn = document.getElementById("knucklesBtn");
    const uppercutBtn = document.getElementById("uppercutBtn");
    const specialBtn = document.getElementById("warriorSpecBtn");
    const ultimateBtn = document.getElementById("player1Ult");
    const updateHP = HP;
    knucklesBtn.addEventListener("click", (event) => {
      attacker.knucklesAttack(reciever);
      updateHP.innerText = reciever.health;
      console.log(updateHP);

      winner();
      event.preventDefault();
    });
    uppercutBtn.addEventListener("click", (event) => {
      attacker.uppercutAttack(reciever);
      updateHP.innerText = reciever.health;
      winner();
      event.preventDefault();
    });
    specialBtn.addEventListener("click", (event) => {
      attacker.specialAttack(reciever);
      updateHP.innerText = reciever.health;
      winner();
      event.preventDefault();
    });
    ultimateBtn.addEventListener("click", (event) => {
      attacker.ultimateAttack(reciever);
      updateHP.innerText = reciever.health;
      winner();

      event.preventDefault();
    });
  }, 300);
}
function assassinAttacks(attacker, reciever, HP) {
  setTimeout(() => {
    const daggerBtn = document.getElementById("daggerBtn");
    const legsweepBtn = document.getElementById("legsweepBtn");
    const specialBtn = document.getElementById("assassinSpec");
    const ultimateBtn = document.getElementById("player1Ult");

    const updateHP = HP;
    daggerBtn.addEventListener("click", (event) => {
      attacker.daggerAttack(reciever);
      updateHP.innerText = reciever.health;
      winner();
      event.preventDefault();
    });
    legsweepBtn.addEventListener("click", (event) => {
      attacker.legSweepAttack(reciever);
      updateHP.innerText = reciever.health;
      winner();

      event.preventDefault();
    });
    specialBtn.addEventListener("click", (event) => {
      attacker.specialAttack(reciever);
      updateHP.innerText = reciever.health;
      winner();

      event.preventDefault();
    });
    ultimateBtn.addEventListener("click", (event) => {
      attacker.ultimateAttack(reciever);
      updateHP.innerText = reciever.health;
      winner();

      event.preventDefault();
    });
  }, 300);
}
// function nextTurn() {
//   const player1Moves = document.querySelector(".player1Moves");
//   const player2Moves = document.querySelector(".player2Moves");
//   const hide = document.querySelector(".hide");
//   if (player2Div.contains(player2Moves) && player2Moves.contains(hide)) {
//     player2Moves.classList.add("hide");
//     player1Moves.classList.remove("hide");
//   } else if (player1Div.contains(player1Moves) && player1Moves.contains(hide)) {
//     player1Moves.classList.add("hide");
//     player2Moves.classList.remove("hide");
//   } else console.log("hello xd");
// }
