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
  }

  knucklesAttack() {
    Assassin.health -= this.knucklesPower;
    this.ultCount++;
  }

  uppercutAttack() {
    Assassin.health -= this.uppercutPower;
    this.ultCount++;
  }
  specialAttack() {
    Assassin.health -= this.specialPower;
    this.ultCount++;
  }
  ultimateAttack() {
    Assassin.health -= this.ultimatePower;
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
  daggerAttack() {
    Warrior.health -= this.daggerPower;
    this.ultCount++;
  }
  legSweepAttack() {
    Warrior.health -= this.legSweepPower;
    this.ultCount++;
  }
  specialAttack() {
    Warrior.health -= this.specialPower;
    this.ultCount++;
  }
  ultimateAttack() {
    Warrior.health -= this.ultimatePower;
  }
}
export { Warrior, Assassin };
