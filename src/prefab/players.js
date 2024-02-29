
// You can write more code here

/* START OF COMPILED CODE */

class players extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// players
		const players = scene.add.container(0, 0);
		this.add(players);

		// commontankbg
		const commontankbg = scene.add.image(0, 0, "commontankbg");
		players.add(commontankbg);

		// playerImg
		const playerImg = scene.add.image(0, -5, "_MISSING");
		players.add(playerImg);

		this.players = players;
		this.commontankbg = commontankbg;
		this.playerImg = playerImg;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Container} */
	players;
	/** @type {Phaser.GameObjects.Image} */
	commontankbg;
	/** @type {Phaser.GameObjects.Image} */
	playerImg;

	/* START-USER-CODE */

	// Write your code here.
	setData(data){
		this.playerImg.setTexture(data);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
