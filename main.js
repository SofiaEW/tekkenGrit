import { Warrior, Assassin } from "./modules/Characters.js";
import {
  displayPlayerOne,
  displayPlayerTwo,
  nextTurnP1,
  nextTurnP2,
  // warriorAttacks,
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
  console.log(p1, p2);
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
  document.getElementById("player1name").innerText = nameP1;
  document.getElementById("player2name").innerText = nameP2;
  document.getElementById("player1Ult").classList.add("hide");
  document.getElementById("player2Ult").classList.add("hide");

  // nextTurnP1();
});
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
      event.preventDefault();
    });
    uppercutBtn.addEventListener("click", (event) => {
      attacker.uppercutAttack(reciever);
      updateHP.innerText = reciever.health;
      event.preventDefault();
    });
    specialBtn.addEventListener("click", (event) => {
      attacker.specialAttack(reciever);
      updateHP.innerText = reciever.health;
      event.preventDefault();
    });
    ultimateBtn.addEventListener("click", (event) => {
      attacker.ultimateAttack(reciever);
      updateHP.innerText = reciever.health;
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
      event.preventDefault();
    });
    legsweepBtn.addEventListener("click", (event) => {
      attacker.legSweepAttack(reciever);
      updateHP.innerText = reciever.health;
      event.preventDefault();
    });
    specialBtn.addEventListener("click", (event) => {
      attacker.specialAttack(reciever);
      updateHP.innerText = reciever.health;
      event.preventDefault();
    });
    ultimateBtn.addEventListener("click", (event) => {
      attacker.ultimateAttack(reciever);
      updateHP.innerText = reciever.health;
      event.preventDefault();
    });
  }, 300);
}
// if (event) {
//   knuckles1Btn.addEventListener("click", (event) => {
//     p1.knucklesAttack(p2);
//     console.log(event);
//     event.preventDefault();
//   });
// }
const knuckles2Btn = document.getElementById("knuckles2Btn");
const uppercut1Btn = document.getElementById("uppercut1Btn");
const uppercut2Btn = document.getElementById("uppercut2Btn");
const warrior1SpecBtn = document.getElementById("warrior1Spec");
const warrior2SpecBtn = document.getElementById("warrior2Spec");
const dagger1Btn = document.getElementById("dagger1Btn");
const dagger2Btn = document.getElementById("dagger2Btn");
const legsweep1Btn = document.getElementById("legsweep1Btn");
const legsweep2Btn = document.getElementById("legsweep2Btn");
const assassin1Spec = document.getElementById("assassin1Spec");
const assassin2Spec = document.getElementById("assassin2Spec");

// if(p1.health ===0){p1.lost(nameP1)}else if(p2.health===0){p2.lost(nameP2)}
