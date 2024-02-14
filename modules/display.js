const mainContainer = document.querySelector("#mainContainer");
const selectP1 = document.getElementById("player1Character").value;
const selectP2 = document.getElementById("player2Character").value;
function displayPlayerOne(p1) {
  if (selectP1 === "Warrior") {
    const player1Div = document.querySelector(".player1Div");
    const fighterDiv = document.createElement("div");
    fighterDiv.classList.add("flexBox");
    const fighterMoves = document.createElement("div");
    fighterMoves.classList.add("flex", "player1Moves");
    createAndAppendEl("h1", "", "player1name", fighterDiv);
    createAndAppendEl("p", p1.health, "player1HP", fighterDiv);
    createAndAppendEl("img", "./img/", "warriorImg", fighterDiv);
    player1Div.append(fighterMoves);
    createAndAppendEl("button", "Knuckles", "knucklesBtn", fighterMoves);
    createAndAppendEl("button", "Uppercut", "uppercutBtn", fighterMoves);
    createAndAppendEl("button", "Special", "warriorSpecBtn", fighterMoves);
    createAndAppendEl("button", "Ultimate", "player1Ult", fighterMoves);
    player1Div.append(fighterDiv);
  } else if (selectP1 === "Assassin") {
    const player1Div = document.querySelector(".player1Div");
    const fighterDiv = document.createElement("div");
    fighterDiv.classList.add("flexBox");
    const fighterMoves = document.createElement("div");
    fighterMoves.classList.add("flex", "player1Moves");
    createAndAppendEl("h1", "", "player1name", fighterDiv);
    createAndAppendEl("p", p1.health, "player1HP", fighterDiv);
    createAndAppendEl("img", "./img/", "assasinImg", fighterDiv);
    player1Div.append(fighterMoves);
    createAndAppendEl("button", "Dagger", "daggerBtn", fighterMoves);
    createAndAppendEl("button", "Legsweep", "legsweepBtn", fighterMoves);
    createAndAppendEl("button", "Special", "assassinSpec", fighterMoves);
    createAndAppendEl("button", "Ultimate", "player1Ult", fighterMoves);
    player1Div.append(fighterDiv);
  } else console.log("ayo fel");
}

function displayPlayerTwo(p2) {
  if (selectP2 === "Warrior") {
    const player2Div = document.querySelector(".player2Div");
    const fighterDiv = document.createElement("div");
    fighterDiv.classList.add("flexBox");
    const fighterMoves = document.createElement("div");
    fighterMoves.classList.add("flex", "player2Moves");
    createAndAppendEl("h1", "", "player2name", fighterDiv);
    createAndAppendEl("p", p2.health, "player2HP", fighterDiv);
    createAndAppendEl("img", "./img/", "warriorImg", fighterDiv);
    player2Div.append(fighterMoves);
    createAndAppendEl("button", "Knuckles", "knucklesBtn", fighterMoves);
    createAndAppendEl("button", "Uppercut", "uppercutBtn", fighterMoves);
    createAndAppendEl("button", "Special", "warriorSpecBtn", fighterMoves);
    createAndAppendEl("button", "Ultimate", "player2Ult", fighterMoves);
    player2Div.append(fighterDiv);
  } else if (selectP2 === "Assassin") {
    const player2Div = document.querySelector(".player2Div");
    const fighterDiv = document.createElement("div");
    fighterDiv.classList.add("flexBox");
    const fighterMoves = document.createElement("div");
    fighterMoves.classList.add("flex", "player2Moves");
    createAndAppendEl("h1", "", "player2name", fighterDiv);
    createAndAppendEl("p", p2.health, "player2HP", fighterDiv);
    createAndAppendEl("img", "./img/", "assasinImg", fighterDiv);
    player2Div.append(fighterMoves);
    createAndAppendEl("button", "Dagger", "daggerBtn", fighterMoves);
    createAndAppendEl("button", "Legsweep", "legsweepBtn", fighterMoves);
    createAndAppendEl("button", "Special", "assassinSpec", fighterMoves);
    createAndAppendEl("button", "Ultimate", "player2Ult", fighterMoves);
    player2Div.append(fighterDiv);
  } else console.log("ayo fel");
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

export { displayPlayerOne, displayPlayerTwo };
