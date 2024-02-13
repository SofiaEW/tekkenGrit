import Fighter from "./Fighter.js";

// ! Warrior
class Warrior extends Fighter {
	knucklesPower = 20;
	uppercutPower = 25;
	specialPower = 35;
	ultimatePower = 50;
	ultCount = 0;

	constructor(health, name) {
		super(health, name);
		this.health = 150;
		this.name = name;
	}

	knucklesAttack(opponent) {
		opponent.health -= this.knucklesPower;
		this.ultCount++;
	}

	uppercutAttack(opponent) {
		opponent.health -= this.uppercutPower;
		this.ultCount++;
	}
	specialAttack(opponent) {
		opponent.health -= this.specialPower;
		this.ultCount++;
	}
	ultimateAttack(opponent) {
		opponent.health -= this.ultimatePower;
	}
}
// ! Assassin
class Assassin extends Fighter {
	daggerPower = 20;
	legSweepPower = 25;
	specialPower = 35;
	ultimatePower = 50;
	ultCount = 0;
	constructor(health) {
		super(health);
		this.health = 120;
	}
	daggerAttack(opponent) {
		opponent.health -= this.daggerPower;
		this.ultCount++;
	}
	legSweepAttack(opponent) {
		opponent.health -= this.legSweepPower;
		this.ultCount++;
	}
	specialAttack(opponent) {
		opponent.health -= this.specialPower;
		this.ultCount++;
	}
	ultimateAttack(opponent) {
		opponent.health -= this.ultimatePower;
	}
}
export { Warrior, Assassin };

// const s = "#jlk";
// s.concat("lalalla");

// const rand = Math.random();
