
// You can write more code here

/* START OF COMPILED CODE */

class GameMainPanel extends Phaser.Scene {

	constructor() {
		super("GameMainPanel");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// welcomescreen
		this.add.image(982, 531, "welcomescreen");

		// playnow
		const playnow = this.add.image(985, 853, "playnow");
		playnow.scaleX = 0.8;
		playnow.scaleY = 0.8;

		// inventory_img
		this.add.image(199, 905, "inventory-img");

		// reward_icon
		this.add.image(1818, 198, "reward-icon");

		// recruit_btn
		this.add.image(1635, 64, "recruit-btn");

		// settings_icon
		this.add.image(1833, 66, "settings-icon");

		// wallet
		this.add.image(231, 64, "wallet");

		// text_1
		const text_1 = this.add.text(190, 54, "", {});
		text_1.text = "2000";
		text_1.setStyle({ "fontSize": "26px", "fontStyle": "bold" });

		// story_icon
		this.add.image(1780, 875, "story-icon");

		this.playnow = playnow;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	playnow;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		const soundObj=new SoundManager(this);
		this.playnow.setInteractive();
		this.playnow.on('pointerdown',()=>{
			soundObj.playSound(soundObj.clickSound);
			this.scene.stop("GameMainPanel")
			this.scene.start('SelectBattleground');
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
