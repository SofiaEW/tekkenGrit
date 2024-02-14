export default class Fighter {
  health;
  name;
  constructor(health, name) {
    this.health = health;
    this.name = name;
  }

  lost(player) {
    mainContainer.innerHTML = "";
    const ko = document.getElementById("KO");
    const winner = document.getElementById("winner");
    ko.classList.remove("hide");
    winner.innerText = player;
  }
  specialAttack(opponent) {
    opponent.health -= this.specialPower;
    this.ultCount++;
  }
  ultimateAttack(opponent) {
    opponent.health -= this.ultimatePower;
  }
}
