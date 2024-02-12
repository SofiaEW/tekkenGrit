import { Assassin, Warrior } from "./Characters.js";
const mainContainer = document.querySelector("#mainContainer");
let player1, player2;

async function displayWarriorForP1(player1) {
  const fighter1Div = document.createElement("div");
  fighter1Div.classList.add("flexBox");
  const fighter1Moves = document.createElement("div");
  fighter1Moves.classList.add("flex");
  const warrior1 = new Warrior();
  createAndAppendEl("h1", player1, "playername", fighter1Div);
  createAndAppendEl("p", warrior1.health, "warriorHP", fighter1Div);
  createAndAppendEl("img", "./img/", "warriorImg", fighter1Div);
  fighter1Div.append(fighter1Moves);
  createAndAppendEl("button", "Knuckles", "knuckles", fighter1Moves);
  createAndAppendEl("button", "Uppercut", "uppercut", fighter1Moves);
  createAndAppendEl("button", "Special", "warriorSpec", fighter1Moves);
  createAndAppendEl("button", "Ultimate", "warriorUlt", fighter1Moves);
  mainContainer.append(fighter1Div);
}
async function displayWarriorForP2(player2) {
  const fighter2Div = document.createElement("div");
  fighter2Div.classList.add("flexBox");
  const fighter2Moves = document.createElement("div");
  fighter2Moves.classList.add("flex");
  const warrior2 = new Warrior();
  createAndAppendEl("h1", player2, "playername", fighter2Div);
  createAndAppendEl("p", warrior2.health, "warriorHP", fighter2Div);
  createAndAppendEl("img", "./img/", "warriorImg", fighter2Div);
  fighter2Div.append(fighter2Moves);
  createAndAppendEl("button", "Knuckles", "knuckles", fighter2Moves);
  createAndAppendEl("button", "Uppercut", "uppercut", fighter2Moves);
  createAndAppendEl("button", "Special", "warriorSpec", fighter2Moves);
  createAndAppendEl("button", "Ultimate", "warriorUlt", fighter2Moves);
  mainContainer.append(fighter2Div);
}

async function displayAssassinForP1(player1) {
  const fighter1Div = document.createElement("div");
  fighter1Div.classList.add("flexBox");
  const fighter1Moves = document.createElement("div");
  fighter1Moves.classList.add("flex");
  const assassin1 = new Assassin();
  createAndAppendEl("h1", player1, "playername", fighter1Div);
  createAndAppendEl("p", assassin1.health, "assassinHP", fighter1Div);
  createAndAppendEl("img", "./img/", "assasinImg", fighter1Div);
  fighter1Div.append(fighter1Moves);
  createAndAppendEl("button", "Dagger", "daggerBtn", fighter1Moves);
  createAndAppendEl("button", "Legsweep", "legsweepBtn", fighter1Moves);
  createAndAppendEl("button", "Special", "assassinSpec", fighter1Moves);
  createAndAppendEl("button", "Ultimate", "assassinUlt", fighter1Moves);
  mainContainer.append(fighter1Div);
}
async function displayAssassinForP2(player2) {
  const fighter2Div = document.createElement("div");
  fighter2Div.classList.add("flexBox");
  const fighter2Moves = document.createElement("div");
  fighter2Moves.classList.add("flex");
  const assassin2 = new Assassin();
  createAndAppendEl("h1", player2, "playername", fighter2Div);
  createAndAppendEl("p", assassin2.health, "assassinHP", fighter2Div);
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
  element.id = addId;
  container.append(element);

  if (addId === "playername") {
    element.innerText = content;
  } else {
    if (type === "img") {
      element.src = content;
    } else {
      element.innerText = content;
    }
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
