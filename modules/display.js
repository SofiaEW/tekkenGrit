import { Assassin, Warrior } from "./Characters.js";

function displayWarrior() {
  const fighter1Div = document.createElement("div");
  const fighter2Div = document.createElement("div");
  const fighter1Moves = document.createElement("div");
  const fighter2Moves = document.createElement("div");
  fighter1Moves.classList.add("flex");
  fighter2Moves.classList.add("flex");
  new Warrior();
  createAndAppendEl("h3", player1, fighter1Div);
  createAndAppendEl("p", Warrior.health, fighter1Div);
  createAndAppendEl("img", "./img/", warriorImg, fighter1Div);
  fighter1Div.append(fighter1Moves);
  createAndAppendEl("button", "Knuckles", knuckles, fighter1Moves);
  createAndAppendEl("button", "Uppercut", uppercut, fighter1Moves);
  createAndAppendEl("button", "Special", warriorSpec, fighter1Moves);
  createAndAppendEl("button", "Ultimate", warriorUlt, fighter1Moves);
}

function displayAssassin() {
  const fighter1Div = document.createElement("div");
  const fighter2Div = document.createElement("div");
  const fighter1Moves = document.createElement("div");
  const fighter2Moves = document.createElement("div");
  fighter1Moves.classList.add("flex");
  fighter2Moves.classList.add("flex");
  new Assassin();
  createAndAppendEl("h3", player1, playerName, fighter1Div);
  createAndAppendEl("p", Assassin.health, assassinHP, fighter1Div);
  createAndAppendEl("img", "./img/", assasinImg, fighter1Div);
  fighter1Div.append(fighter1Moves);
  createAndAppendEl("button", "Dagger", daggerBtn, fighter1Moves);
  createAndAppendEl("button", "Legsweep", legsweepBtn, fighter1Moves);
  createAndAppendEl("button", "Special", assassinSpec, fighter1Moves);
  createAndAppendEl("button", "Ultimate", assassinUlt, fighter1Moves);
}

function createAndAppendEl(type, content, addId, container) {
  const element = document.createElement(type);
  element.id = addId;
  container.append(element);
  if (type === "img") {
    element.src = content;
  } else {
    element.innerHTMl = content;
  }
  return element;
}

export { displayAssassin, displayWarrior };
