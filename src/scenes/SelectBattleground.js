
// You can write more code here

/* START OF COMPILED CODE */

class SelectBattleground extends Phaser.Scene {

	constructor() {
		super("SelectBattleground");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// backgroundContainer
		const backgroundContainer = this.add.container(0, 0);

		// regionbackground
		const regionbackground = this.add.image(960, 540, "regionbackground");
		backgroundContainer.add(regionbackground);

		// slideprevbtn
		const slideprevbtn = this.add.image(749, 863, "slideprevbtn");
		backgroundContainer.add(slideprevbtn);

		// slidenextbtn
		const slidenextbtn = this.add.image(1195, 863, "slidenextbtn");
		backgroundContainer.add(slidenextbtn);

		// select_btn
		const select_btn = this.add.image(973, 863, "select-btn");
		backgroundContainer.add(select_btn);

		// SliderContainer
		const sliderContainer = this.add.container(0, 0);
		backgroundContainer.add(sliderContainer);

		// Battle_Bg
		const battle_Bg = this.add.image(961, 512, "Desert");
		battle_Bg.scaleX = 0.7;
		battle_Bg.scaleY = 0.6;
		sliderContainer.add(battle_Bg);

		// battleframeimg
		const battleframeimg = this.add.image(967, 509, "battleframeimg");
		sliderContainer.add(battleframeimg);

		// next_btn
		const next_btn = this.add.image(1800, 28, "next-btn");
		backgroundContainer.add(next_btn);

		this.backgroundContainer = backgroundContainer;
		this.regionbackground = regionbackground;
		this.slideprevbtn = slideprevbtn;
		this.slidenextbtn = slidenextbtn;
		this.select_btn = select_btn;
		this.sliderContainer = sliderContainer;
		this.battle_Bg = battle_Bg;
		this.next_btn = next_btn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	backgroundContainer;
	/** @type {Phaser.GameObjects.Image} */
	regionbackground;
	/** @type {Phaser.GameObjects.Image} */
	slideprevbtn;
	/** @type {Phaser.GameObjects.Image} */
	slidenextbtn;
	/** @type {Phaser.GameObjects.Image} */
	select_btn;
	/** @type {Phaser.GameObjects.Container} */
	sliderContainer;
	/** @type {Phaser.GameObjects.Image} */
	battle_Bg;
	/** @type {Phaser.GameObjects.Image} */
	next_btn;

	/* START-USER-CODE */

	// Write your code here
	imageName=["Desert","Grassland","Snow"]
	currentImage=0;
	create() {
		const soundObj=new SoundManager(this);
		this.editorCreate();
		this.slidenextbtn.setInteractive();
		this.slidenextbtn.on("pointerdown", () => {
			soundObj.playSound(soundObj.clickSound);
			if (this.currentImage != this.imageName.length - 1) {
				this.currentImage++;
				console.log(this.currentImage)
				this.battle_Bg.setTexture(this.imageName[this.currentImage]);
				this.sliderContainer.add(this.battle_Bg)
				const battleframeimg = this.add.image(967, 509, "battleframeimg");
				this.sliderContainer.add(battleframeimg);

			}
		});

		this.slideprevbtn.setInteractive();
		this.slideprevbtn.on("pointerdown", () => {
			soundObj.playSound(soundObj.clickSound);
			if (this.currentImage >= 0&&(!(this.currentImage<=0))) {
				this.currentImage--;
				console.log(this.currentImage)
				this.battle_Bg.setTexture(this.imageName[this.currentImage]);
				this.sliderContainer.add(this.battle_Bg);
				const battleframeimg = this.add.image(967, 509, "battleframeimg");
				this.sliderContainer.add(battleframeimg);
			}
		});


		this.select_btn.setInteractive().on("pointerdown", () => {

			soundObj.playSound(soundObj.clickSound);
			const warzone=new WarZoneScene();
			warzone.getBattlegroundImg(this.battle_Bg.texture.key);
		});

		this.next_btn.setInteractive().on("pointerdown",()=>{
			this.scene.stop("SelectBattleground");
			this.scene.start("TroopSelection");
		})

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
