export default class Fighter {
	health;
	name;
	constructor(health, name) {
		this.health = health;
		this.name = name;
	}

	lost(player) {
		ko();
	}
}
