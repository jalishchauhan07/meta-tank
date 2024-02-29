
// You can write more code here

/* START OF COMPILED CODE */

class LifeLine extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// life_energy
		const life_energy = scene.add.rectangle(-64, 0, 128, 128);
		life_energy.scaleY = 0.2;
		life_energy.setOrigin(0, 0.5);
		life_energy.isFilled = true;
		life_energy.fillColor = 91137;
		this.add(life_energy);

		// power
		const power = scene.add.rectangle(-64, 0, 128, 128);
		power.scaleY = 0.2;
		power.setOrigin(0, 0.5);
		power.isFilled = true;
		power.fillColor = 3125255;
		this.add(power);

		// life
		const life = scene.add.text(0, 0, "", {});
		life.setOrigin(0.5, 0.5);
		life.text = "100/100";
		life.setStyle({ "fontSize": "20px", "fontStyle": "bold" });
		this.add(life);

		this.life_energy = life_energy;
		this.power = power;
		this.life = life;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	life_energy;
	/** @type {Phaser.GameObjects.Rectangle} */
	power;
	/** @type {Phaser.GameObjects.Text} */
	life;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
