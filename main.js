import Fighter from "./modules/Fighter.js";
import { Warrior, Assassin } from "./modules/Characters.js";
import {
	displayAssassinForP1,
	displayAssassinForP2,
	displayWarriorForP1,
	displayWarriorForP2,
	displayP1win,
	displayP2win,
} from "./modules/display.js";

const mainContainer = document.querySelector("#mainContainer");
let player1, player2, warrior1, warrior2;

const formEl = document.querySelector("#gameForm");
formEl.addEventListener("submit", (event) => {
	event.preventDefault();
	player1 = document.querySelector("#p1Name").value;
	player2 = document.querySelector("#p2Name").value;
	const characterOptPlayer1 = document.getElementById("player1Character").value;
	const characterOptPlayer2 = document.getElementById("player2Character").value;
	mainContainer.innerHTML = "";
	if (characterOptPlayer1 === "Warrior") {
		displayWarriorForP1(player1);
		document.getElementById("warriorUlt1").classList.add("hide");
	} else if (characterOptPlayer1 === "Assassin") {
		displayAssassinForP1(player1);

		document.getElementById("assassinUlt1").classList.add("hide");
	}

	if (characterOptPlayer2 === "Warrior") {
		displayWarriorForP2(player2);
		document.getElementById("warriorUlt2").classList.add("hide");
	} else if (characterOptPlayer2 === "Assassin") {
		displayAssassinForP2(player2);
		document.getElementById("assassinUlt2").classList.add("hide");
	}
	nextTurnP1();
});
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

const warrior1HP = document.getElementById("warrior1HP");
const warrior2HP = document.getElementById("warrior2HP");
const assassin1HP = document.getElementById("assassin1HP");
const assassin2HP = document.getElementById("assassin2HP");

if (warrior1HP.innerText == 0 || assassin1HP.innerText == 0) {
	displayP2win();
}
// console.log(warrior1.health);
