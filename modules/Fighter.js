export default class Fighter {
	#health;
	constructor(health) {
		this.#health = health;
	}
}

class Fighter1 extends Fighter {}
