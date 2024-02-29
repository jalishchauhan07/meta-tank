
// You can write more code here

/* START OF COMPILED CODE */

class SelectWallet extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -62, y ?? -20);

		// backgroundContainer
		const backgroundContainer = scene.add.container(62, 20);
		this.add(backgroundContainer);

		// wallete_bg
		const wallete_bg = scene.add.image(0, 0, "wallete-bg");
		backgroundContainer.add(wallete_bg);

		// metamask_btn
		const metamask_btn = scene.add.image(13, -236, "metamask-btn");
		metamask_btn.scaleX = 0.9;
		metamask_btn.scaleY = 0.9;
		backgroundContainer.add(metamask_btn);

		// trust_wallet_btn
		const trust_wallet_btn = scene.add.image(13, -46, "trust-wallet-btn");
		trust_wallet_btn.scaleX = 0.9;
		trust_wallet_btn.scaleY = 0.9;
		backgroundContainer.add(trust_wallet_btn);

		// coin_base_btn
		const coin_base_btn = scene.add.image(13, 144, "coin-base-btn");
		coin_base_btn.scaleX = 0.9;
		coin_base_btn.scaleY = 0.9;
		backgroundContainer.add(coin_base_btn);

		// text_1
		const text_1 = scene.add.text(-209, 262, "", {});
		text_1.text = "PLEASE SELECT TO CONNECT WITH THIS APP";
		text_1.setStyle({ "fontSize": "20px", "fontStyle": "bold" });
		backgroundContainer.add(text_1);

		this.backgroundContainer = backgroundContainer;
		this.metamask_btn = metamask_btn;
		this.trust_wallet_btn = trust_wallet_btn;
		this.coin_base_btn = coin_base_btn;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Container} */
	backgroundContainer;
	/** @type {Phaser.GameObjects.Image} */
	metamask_btn;
	/** @type {Phaser.GameObjects.Image} */
	trust_wallet_btn;
	/** @type {Phaser.GameObjects.Image} */
	coin_base_btn;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
