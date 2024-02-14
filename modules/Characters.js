import Fighter from "./Fighter.js";

// ! Warrior
class Warrior extends Fighter {
  knucklesPower = 20;
  uppercutPower = 25;
  specialPower = 35;
  ultimatePower = 50;
  ultCount = 0;
  health = 150;
  constructor(name) {
    super(name);
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
}
// ! Assassin
class Assassin extends Fighter {
  daggerPower = 20;
  legSweepPower = 25;
  specialPower = 35;
  ultimatePower = 50;
  ultCount = 0;
  health = 120;
  constructor(name) {
    super(name);
    this.name = name;
  }
  daggerAttack(opponent) {
    opponent.health -= this.daggerPower;
    this.ultCount++;
  }
  legSweepAttack(opponent) {
    opponent.health -= this.legSweepPower;
    this.ultCount++;
  }
}
export { Warrior, Assassin };

// const s = "#jlk";
// s.concat("lalalla");

// const rand = Math.random();
