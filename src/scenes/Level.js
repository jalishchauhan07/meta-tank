
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// banner_img
		this.add.image(960, 540, "banner-img");

		// sign_in
		const sign_in = this.add.image(951, 823, "sign_in");
		sign_in.scaleX = 0.7609504130733408;
		sign_in.scaleY = 0.7124523793585569;

		// selectWallet
		const selectWallet = new SelectWallet(this, 901, 548);
		this.add.existing(selectWallet);
		selectWallet.scaleX = 1;
		selectWallet.scaleY = 1;

		this.sign_in = sign_in;
		this.selectWallet = selectWallet;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	sign_in;
	/** @type {SelectWallet} */
	selectWallet;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		this.sign_in.setInteractive();
		const soundObj=new SoundManager(this);
		this.sign_in.on('pointerdown',()=>{
			soundObj.playSound(soundObj.clickSound);
			this.selectWallet.backgroundContainer.setVisible(true);
		})
		this.selectWallet.metamask_btn.setInteractive();
		this.selectWallet.metamask_btn.on('pointerdown',()=>{
			soundObj.playSound(soundObj.clickSound);
			this.scene.stop("Level");
			this.scene.start('GameMainPanel',GameMainPanel);
		});

		this.selectWallet.trust_wallet_btn.setInteractive();
		this.selectWallet.trust_wallet_btn.on('pointerdown',()=>{
			soundObj.playSound(soundObj.clickSound);
			this.scene.stop("Level");
			this.scene.start('GameMainPanel',GameMainPanel);
		})

		this.selectWallet.coin_base_btn.setInteractive();
		this.selectWallet.coin_base_btn.on('pointerdown',()=>{
			soundObj.playSound(soundObj.clickSound);
			this.scene.stop("Level");
			this.scene.start('GameMainPanel',GameMainPanel);
		})

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
