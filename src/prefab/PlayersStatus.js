
// You can write more code here

/* START OF COMPILED CODE */

class PlayersStatus extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.visible = false;

		// popup_frame
		const popup_frame = scene.add.image(0, 0, "popup-frame");
		this.add(popup_frame);

		// status
		const status = scene.add.text(7, 0, "", {});
		this.add(status);

		this.status = status;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Text} */
	status;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
