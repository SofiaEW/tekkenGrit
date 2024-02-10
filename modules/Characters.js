import Fighter from "./Fighter.js";

// ! Warrior
class Warrior extends Fighter {
  knuckles = 20;
  uppercut = 25;
  special = 35;
  ultimate = 50;
  ultCount = 0;
  constructor(health) {
    super(health);
    this.health = 150;
  }
  knuckles() {
    Assassin.health -= this.knuckles;
    this.ultCount++;
  }
  uppercut() {
    Assassin.health -= this.uppercut;
    this.ultCount++;
  }
  special() {
    Assassin.health -= this.special;
    this.ultCount++;
  }
  ultimate() {
    Assassin.health -= this.ultimate;
  }
}
// ! Assassin
class Assassin extends Fighter {
  dagger = 20;
  legSweep = 25;
  special = 35;
  ultimate = 50;
  ultCount = 0;
  constructor(health) {
    super(health);
    this.health = 120;
  }
  dagger() {
    Warrior.health -= this.dagger;
    this.ultCount++;
  }
  legSweep() {
    Warrior.health -= this.legSweep;
    this.ultCount++;
  }
  special() {
    Warrior.health -= this.special;
    this.ultCount++;
  }
  ultimate() {
    Warrior.health -= this.ultimate;
  }
}
export { Warrior, Assassin };
