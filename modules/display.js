import { Assassin, Warrior } from "./Characters.js";
const mainContainer = document.querySelector("#mainContainer");
let player1, player2;

async function displayWarriorForP1() {
  const fighter1Div = document.createElement("div");
  fighter1Div.classList.add("flexBox");
  const fighter1Moves = document.createElement("div");
  fighter1Moves.classList.add("flex");
  new Warrior();
  createAndAppendEl("h3", player1, "playername", fighter1Div);
  createAndAppendEl("p", Warrior.health, "warriorHP", fighter1Div);
  createAndAppendEl("img", "./img/", "warriorImg", fighter1Div);
  fighter1Div.append(fighter1Moves);
  createAndAppendEl("button", "Knuckles", "knuckles", fighter1Moves);
  createAndAppendEl("button", "Uppercut", "uppercut", fighter1Moves);
  createAndAppendEl("button", "Special", "warriorSpec", fighter1Moves);
  createAndAppendEl("button", "Ultimate", "warriorUlt", fighter1Moves);
  mainContainer.append(fighter1Div);
}
async function displayWarriorForP2() {
  const fighter2Div = document.createElement("div");
  fighter2Div.classList.add("flexBox");
  const fighter2Moves = document.createElement("div");
  fighter2Moves.classList.add("flex");
  new Warrior();
  createAndAppendEl("h3", "yo", "playername", fighter2Div);
  createAndAppendEl("p", Warrior.health, "warriorHP", fighter2Div);
  createAndAppendEl("img", "./img/", "warriorImg", fighter2Div);
  fighter2Div.append(fighter2Moves);
  createAndAppendEl("button", "Knuckles", "knuckles", fighter2Moves);
  createAndAppendEl("button", "Uppercut", "uppercut", fighter2Moves);
  createAndAppendEl("button", "Special", "warriorSpec", fighter2Moves);
  createAndAppendEl("button", "Ultimate", "warriorUlt", fighter2Moves);
  mainContainer.append(fighter2Div);
}

async function displayAssassinForP1() {
  const fighter1Div = document.createElement("div");
  fighter1Div.classList.add("flexBox");
  const fighter1Moves = document.createElement("div");
  fighter1Moves.classList.add("flex");
  new Assassin();
  createAndAppendEl("h3", "yi", "playerName", fighter1Div);
  createAndAppendEl("p", Assassin.health, "assassinHP", fighter1Div);
  createAndAppendEl("img", "./img/", "assasinImg", fighter1Div);
  fighter1Div.append(fighter1Moves);
  createAndAppendEl("button", "Dagger", "daggerBtn", fighter1Moves);
  createAndAppendEl("button", "Legsweep", "legsweepBtn", fighter1Moves);
  createAndAppendEl("button", "Special", "assassinSpec", fighter1Moves);
  createAndAppendEl("button", "Ultimate", "assassinUlt", fighter1Moves);
  mainContainer.append(fighter1Div);
}
async function displayAssassinForP2() {
  const fighter2Div = document.createElement("div");
  fighter2Div.classList.add("flexBox");
  const fighter2Moves = document.createElement("div");
  fighter2Moves.classList.add("flex");
  new Assassin();
  createAndAppendEl("h3", "player2", "playerName", fighter2Div);
  createAndAppendEl("p", Assassin.health, "assassinHP", fighter2Div);
  createAndAppendEl("img", "./img/", "assasinImg", fighter2Div);
  fighter2Div.append(fighter2Moves);
  createAndAppendEl("button", "Dagger", "daggerBtn", fighter2Moves);
  createAndAppendEl("button", "Legsweep", "legsweepBtn", fighter2Moves);
  createAndAppendEl("button", "Special", "assassinSpec", fighter2Moves);
  createAndAppendEl("button", "Ultimate", "assassinUlt", fighter2Moves);
  mainContainer.append(fighter2Div);
}

async function createAndAppendEl(type, content, addId, container) {
  const element = document.createElement(type);
  element.innerText = content;
  element.id = addId;
  container.append(element);
  if (type === "img") {
    element.src = content;
  } else {
    element.innerHTMl = content;
  }
  return element;
}
console.log(createAndAppendEl);

export {
  displayAssassinForP1,
  displayAssassinForP2,
  displayWarriorForP1,
  displayWarriorForP2,
};
