export default class Fighter {
  health;
  name;
  constructor(health, name) {
    this.health = health;
    this.name = name;
  }

  won(player) {
    mainContainer.style.display = "none";
    const ko = document.getElementById("KO");
    const winner = document.getElementById("winner");
    ko.classList.remove("hide");
    winner.innerText = player;
    // return;
  }
  specialAttack(opponent) {
    opponent.health -= this.specialPower;
    this.ultCount++;
  }
  ultimateAttack(opponent) {
    opponent.health -= this.ultimatePower;
  }
}
