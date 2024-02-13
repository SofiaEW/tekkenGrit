import { Assassin, Warrior } from "./Characters.js";
const mainContainer = document.querySelector("#mainContainer");
let p1, p2, nameP1, nameP2, fighterDiv;
const selectP1 = document.getElementById("player1Character").value;
const selectP2 = document.getElementById("player2Character").value;

function displayPlayerOne(p1) {
  if (selectP1 === "Warrior") {
    const fighterDiv = document.createElement("div");
    fighterDiv.classList.add("flexBox");
    const fighterMoves = document.createElement("div");
    fighterMoves.classList.add("flex", "fighter1Moves");
    createAndAppendEl("h1", "", "player1name", fighterDiv);
    createAndAppendEl("p", p1.health, "assassin2HP", fighterDiv);
    createAndAppendEl("img", "./img/", "warriorImg", fighterDiv);
    fighterDiv.append(fighterMoves);
    createAndAppendEl("button", "Knuckles", "knucklesBtn", fighterMoves);
    createAndAppendEl("button", "Uppercut", "uppercutBtn", fighterMoves);
    createAndAppendEl("button", "Special", "warriorSpec", fighterMoves);
    createAndAppendEl("button", "Ultimate", "player1Ult", fighterMoves);
    mainContainer.append(fighterDiv);
  } else if (selectP1 === "Assassin") {
    const fighterDiv = document.createElement("div");
    fighterDiv.classList.add("flexBox");
    const fighterMoves = document.createElement("div");
    fighterMoves.classList.add("flex", "fighter1Moves");
    createAndAppendEl("h1", "", "player1name", fighterDiv);
    createAndAppendEl("p", p1.health, "assassin1HP", fighterDiv);
    createAndAppendEl("img", "./img/", "assasinImg", fighterDiv);
    fighterDiv.append(fighterMoves);
    createAndAppendEl("button", "Dagger", "daggerBtn", fighterMoves);
    createAndAppendEl("button", "Legsweep", "legsweepBtn", fighterMoves);
    createAndAppendEl("button", "Special", "assassinSpec", fighterMoves);
    createAndAppendEl("button", "Ultimate", "player1Ult", fighterMoves);
    mainContainer.append(fighterDiv);
  } else console.log("ayo fel");
}

function displayPlayerTwo(p2) {
  if (selectP2 === "Warrior") {
    const fighterDiv = document.createElement("div");
    fighterDiv.classList.add("flexBox");
    const fighterMoves = document.createElement("div");
    fighterMoves.classList.add("flex", "fighter2Moves");
    createAndAppendEl("h1", "", "player2name", fighterDiv);
    createAndAppendEl("p", p2.health, "warrior2HP", fighterDiv);
    createAndAppendEl("img", "./img/", "warriorImg", fighterDiv);
    fighterDiv.append(fighterMoves);
    createAndAppendEl("button", "Knuckles", "knucklesBtn", fighterMoves);
    createAndAppendEl("button", "Uppercut", "uppercutBtn", fighterMoves);
    createAndAppendEl("button", "Special", "warriorSpec", fighterMoves);
    createAndAppendEl("button", "Ultimate", "player2Ult", fighterMoves);
    mainContainer.append(fighterDiv);
  } else if (selectP2 === "Assassin") {
    const fighterDiv = document.createElement("div");
    fighterDiv.classList.add("flexBox");
    const fighterMoves = document.createElement("div");
    fighterMoves.classList.add("flex", "fighter2Moves");
    createAndAppendEl("h1", "", "player2name", fighterDiv);
    createAndAppendEl("p", p2.health, "assassin1HP", fighterDiv);
    createAndAppendEl("img", "./img/", "assasinImg", fighterDiv);
    fighterDiv.append(fighterMoves);
    createAndAppendEl("button", "Dagger", "daggerBtn", fighterMoves);
    createAndAppendEl("button", "Legsweep", "legsweepBtn", fighterMoves);
    createAndAppendEl("button", "Special", "assassinSpec", fighterMoves);
    createAndAppendEl("button", "Ultimate", "player2Ult", fighterMoves);
    mainContainer.append(fighterDiv);
  } else console.log("ayo fel");
  console.log(selectP1, selectP2);
}

// async function displayWarriorForP1(player1) {
//   const fighter1Div = document.createElement("div");
//   fighter1Div.classList.add("flexBox");
//   fighter1Moves = document.createElement("div");
//   fighter1Moves.classList.add("flex", "fighter1Moves");
//   warrior1 = new Warrior();
//   createAndAppendEl("h1", player1, "playername", fighter1Div);
//   createAndAppendEl("p", warrior1.health, "warrior1HP", fighter1Div);
//   createAndAppendEl("img", "./img/", "warriorImg", fighter1Div);
//   fighter1Div.append(fighter1Moves);
//   createAndAppendEl("button", "Knuckles", "knuckles", fighter1Moves);
//   createAndAppendEl("button", "Uppercut", "uppercut", fighter1Moves);
//   createAndAppendEl("button", "Special", "warriorSpec", fighter1Moves);
//   createAndAppendEl("button", "Ultimate", "warriorUlt1", fighter1Moves);
//   mainContainer.append(fighter1Div);
// }
// async function displayWarriorForP2(player2) {
//   const fighter2Div = document.createElement("div");
//   fighter2Div.classList.add("flexBox");
//   fighter2Moves = document.createElement("div");
//   fighter2Moves.classList.add("flex", "fighter2Moves");
//   warrior2 = new Warrior();
//   createAndAppendEl("h1", player2, "playername", fighter2Div);
//   createAndAppendEl("p", warrior2.health, "warrior2HP", fighter2Div);
//   createAndAppendEl("img", "./img/", "warriorImg", fighter2Div);
//   fighter2Div.append(fighter2Moves);
//   createAndAppendEl("button", "Knuckles", "knuckles", fighter2Moves);
//   createAndAppendEl("button", "Uppercut", "uppercut", fighter2Moves);
//   createAndAppendEl("button", "Special", "warriorSpec", fighter2Moves);
//   createAndAppendEl("button", "Ultimate", "warriorUlt2", fighter2Moves);
//   mainContainer.append(fighter2Div);
// }

// async function displayAssassinForP1(player1) {
//   const fighter1Div = document.createElement("div");
//   fighter1Div.classList.add("flexBox");
//   fighter1Moves = document.createElement("div");
//   fighter1Moves.classList.add("flex", "fighter1Moves");
//   assassin1 = new Assassin();
//   createAndAppendEl("h1", player1, "playername", fighter1Div);
//   createAndAppendEl("p", assassin1.health, "assassin1HP", fighter1Div);
//   createAndAppendEl("img", "./img/", "assasinImg", fighter1Div);
//   fighter1Div.append(fighter1Moves);
//   createAndAppendEl("button", "Dagger", "daggerBtn", fighter1Moves);
//   createAndAppendEl("button", "Legsweep", "legsweepBtn", fighter1Moves);
//   createAndAppendEl("button", "Special", "assassinSpec", fighter1Moves);
//   createAndAppendEl("button", "Ultimate", "assassinUlt1", fighter1Moves);
//   mainContainer.append(fighter1Div);
// }
// async function displayAssassinForP2(player2) {
//   const fighter2Div = document.createElement("div");
//   fighter2Div.classList.add("flexBox");
//   fighter2Moves = document.createElement("div");
//   fighter2Moves.classList.add("flex", "fighter2Moves");
//   assassin2 = new Assassin();
//   createAndAppendEl("h1", player2, "playername", fighter2Div);
//   createAndAppendEl("p", assassin2.health, "assassin2HP", fighter2Div);
//   createAndAppendEl("img", "./img/", "assasinImg", fighter2Div);
//   fighter2Div.append(fighter2Moves);
//   createAndAppendEl("button", "Dagger", "daggerBtn", fighter2Moves);
//   createAndAppendEl("button", "Legsweep", "legsweepBtn", fighter2Moves);
//   createAndAppendEl("button", "Special", "assassinSpec", fighter2Moves);
//   createAndAppendEl("button", "Ultimate", "assassinUlt2", fighter2Moves);
//   mainContainer.append(fighter2Div);
// }
function nextTurnP1() {
  const fighter1 = document.querySelector(".fighter1Moves");
  const fighter2 = document.querySelector(".fighter2Moves");
  fighter1.classList.remove("hide");
  fighter2.classList.add("hide");
}
function nextTurnP2() {
  const fighter1 = document.querySelector(".fighter1Moves");
  const fighter2 = document.querySelector(".fighter2Moves");
  fighter1.classList.add("hide");
  fighter2.classList.remove("hide");
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
  // displayAssassinForP1,
  // displayAssassinForP2,
  // displayWarriorForP1,
  // displayWarriorForP2,
  displayPlayerOne,
  displayPlayerTwo,
  nextTurnP1,
  nextTurnP2,
};
