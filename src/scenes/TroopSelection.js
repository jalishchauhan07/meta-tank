
// You can write more code here

/* START OF COMPILED CODE */

class TroopSelection extends Phaser.Scene {

	constructor() {
		super("TroopSelection");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// backgroundContainer
		const backgroundContainer = this.add.container(0, 0);

		// troopsframe
		const troopsframe = this.add.image(960, 540, "troopsframe");
		backgroundContainer.add(troopsframe);

		// back_to_home_btn
		const back_to_home_btn = this.add.image(172, 34, "back-to-home-btn");
		backgroundContainer.add(back_to_home_btn);

		// select_team_btn
		const select_team_btn = this.add.image(1764, 42, "select-team-btn");
		backgroundContainer.add(select_team_btn);

		// plus_img_1
		const plus_img_1 = this.add.image(1280, 272, "plus-img");
		plus_img_1.scaleX = 1.1;
		plus_img_1.scaleY = 1.1;
		backgroundContainer.add(plus_img_1);

		// plus_img_2
		const plus_img_2 = this.add.image(1627, 272, "plus-img");
		plus_img_2.scaleX = 1.1;
		plus_img_2.scaleY = 1.1;
		backgroundContainer.add(plus_img_2);

		// plus_img
		const plus_img = this.add.image(942, 272, "plus-img");
		plus_img.scaleX = 1.1;
		plus_img.scaleY = 1.1;
		backgroundContainer.add(plus_img);

		// stats
		const stats = this.add.image(341, 852, "stats");
		backgroundContainer.add(stats);

		// mytroops_btn
		const mytroops_btn = this.add.image(1290, 520, "mytroops-btn");
		backgroundContainer.add(mytroops_btn);

		// select_btn
		const select_btn = this.add.image(328, 970, "select-btn");
		select_btn.scaleX = 0.6;
		select_btn.scaleY = 0.6;
		backgroundContainer.add(select_btn);

		// troopsContainer
		const troopsContainer = this.add.container(0, 0);
		backgroundContainer.add(troopsContainer);

		// troops_bg
		const troops_bg = this.add.image(1270, 783, "troops-bg");
		troops_bg.scaleX = 1.4191834706105837;
		troops_bg.scaleY = 1.2946627122598597;
		troopsContainer.add(troops_bg);

		// playerProfiles
		const playerProfiles = this.add.container(748, 593);
		troopsContainer.add(playerProfiles);

		// players_0
		const players_0 = new players(this, 181, 139);
		playerProfiles.add(players_0);

		// players_1
		const players_1 = new players(this, 391, 139);
		playerProfiles.add(players_1);

		// players_2
		const players_2 = new players(this, 601, 139);
		playerProfiles.add(players_2);

		// players_3
		const players_3 = new players(this, 811, 139);
		playerProfiles.add(players_3);

		// players_4
		const players_4 = new players(this, 181, 349);
		playerProfiles.add(players_4);

		// players_5
		const players_5 = new players(this, 181, 559);
		playerProfiles.add(players_5);

		// players_6
		const players_6 = new players(this, 181, 769);
		playerProfiles.add(players_6);

		// players_7
		const players_7 = new players(this, 391, 349);
		playerProfiles.add(players_7);

		// players_8
		const players_8 = new players(this, 601, 349);
		playerProfiles.add(players_8);

		// players_9
		const players_9 = new players(this, 811, 349);
		playerProfiles.add(players_9);

		// players_10
		const players_10 = new players(this, 391, 559);
		playerProfiles.add(players_10);

		// players_11
		const players_11 = new players(this, 601, 559);
		playerProfiles.add(players_11);

		// players_12
		const players_12 = new players(this, 811, 559);
		playerProfiles.add(players_12);

		// players_13
		const players_13 = new players(this, 391, 769);
		playerProfiles.add(players_13);

		// players_14
		const players_14 = new players(this, 601, 769);
		playerProfiles.add(players_14);

		// players_15
		const players_15 = new players(this, 811, 769);
		playerProfiles.add(players_15);

		// scroll_frame
		const scroll_frame = this.add.image(1753, 762, "scroll-frame");
		backgroundContainer.add(scroll_frame);

		// slide_indicator_1
		const slide_indicator_1 = this.add.image(1753, 650, "slide-indicator");
		backgroundContainer.add(slide_indicator_1);

		// img_1
		const img_1 = this.add.image(939, 265, "_MISSING");
		img_1.visible = false;
		backgroundContainer.add(img_1);

		// img_2
		const img_2 = this.add.image(1279, 265, "_MISSING");
		img_2.visible = false;
		backgroundContainer.add(img_2);

		// img_3
		const img_3 = this.add.image(1625, 265, "_MISSING");
		img_3.visible = false;
		backgroundContainer.add(img_3);

		// SelectTroops
		const selectTroops = this.add.container(0, 0);

		// privew_frame
		const privew_frame = this.add.image(329, 449, "privew-frame");
		selectTroops.add(privew_frame);

		// Troops
		const troops = this.add.image(325, 424, "_MISSING");
		troops.scaleX = 1.5;
		troops.scaleY = 1.5;
		troops.visible = false;
		selectTroops.add(troops);


		this.soundObj=new SoundManager(this);
		this.backgroundContainer = backgroundContainer;
		this.select_team_btn = select_team_btn;
		this.plus_img_1 = plus_img_1;
		this.plus_img_2 = plus_img_2;
		this.plus_img = plus_img;
		this.select_btn = select_btn;
		this.troopsContainer = troopsContainer;
		this.troops_bg = troops_bg;
		this.playerProfiles = playerProfiles;
		this.players_0 = players_0;
		this.players_1 = players_1;
		this.players_2 = players_2;
		this.players_3 = players_3;
		this.players_4 = players_4;
		this.players_5 = players_5;
		this.players_6 = players_6;
		this.players_7 = players_7;
		this.players_8 = players_8;
		this.players_9 = players_9;
		this.players_10 = players_10;
		this.players_11 = players_11;
		this.players_12 = players_12;
		this.players_14 = players_14;
		this.players_15 = players_15;
		this.scroll_frame = scroll_frame;
		this.slide_indicator_1 = slide_indicator_1;
		this.img_1 = img_1;
		this.img_2 = img_2;
		this.img_3 = img_3;
		this.selectTroops = selectTroops;
		this.troops = troops;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	backgroundContainer;
	/** @type {Phaser.GameObjects.Image} */
	select_team_btn;
	/** @type {Phaser.GameObjects.Image} */
	plus_img_1;
	/** @type {Phaser.GameObjects.Image} */
	plus_img_2;
	/** @type {Phaser.GameObjects.Image} */
	plus_img;
	/** @type {Phaser.GameObjects.Image} */
	select_btn;
	/** @type {Phaser.GameObjects.Container} */
	troopsContainer;
	/** @type {Phaser.GameObjects.Image} */
	troops_bg;
	/** @type {Phaser.GameObjects.Container} */
	playerProfiles;
	/** @type {players} */
	players_0;
	/** @type {players} */
	players_1;
	/** @type {players} */
	players_2;
	/** @type {players} */
	players_3;
	/** @type {players} */
	players_4;
	/** @type {players} */
	players_5;
	/** @type {players} */
	players_6;
	/** @type {players} */
	players_7;
	/** @type {players} */
	players_8;
	/** @type {players} */
	players_9;
	/** @type {players} */
	players_10;
	/** @type {players} */
	players_11;
	/** @type {players} */
	players_12;
	/** @type {players} */
	players_14;
	/** @type {players} */
	players_15;
	/** @type {Phaser.GameObjects.Image} */
	scroll_frame;
	/** @type {Phaser.GameObjects.Image} */
	slide_indicator_1;
	/** @type {Phaser.GameObjects.Image} */
	img_1;
	/** @type {Phaser.GameObjects.Image} */
	img_2;
	/** @type {Phaser.GameObjects.Image} */
	img_3;
	/** @type {Phaser.GameObjects.Container} */
	selectTroops;
	/** @type {Phaser.GameObjects.Image} */
	troops;

	/* START-USER-CODE */

	// Write your code here

	scroll_bar() {
		this.slide_indicator_1.setInteractive();
		this.input.setDraggable(this.slide_indicator_1);
		this.slide_indicator_1.on("drag", (pointer) => {

			if (pointer.isDown) {
				this.slide_indicator_1.y += pointer.velocity.y / 5;
				this.playerProfiles.y -= pointer.velocity.y / 5;
				this.playerProfiles.y = Phaser.Math.Clamp(
					this.playerProfiles.y,
					105,
					835
					
				);

				this.slide_indicator_1.y = Phaser.Math.Clamp(
					this.slide_indicator_1.y,
					652,
					868
				);
			}

		});

		const shape = this.make.graphics().fillRect(748, 598, 901, 359);
		const mask = shape.createGeometryMask();
		this.playerProfiles.setMask(mask);
	}

	create() {

		this.editorCreate();
		this.scroll_bar();

		//console.log(this.playerProfiles.getAll())

			// this.players_0.setSize(100, 100).setInteractive().on('pointerdown', () => {

			// 	console.log(this.players_0.playerImg.texture.key)
			// })

		// this.playerProfiles.list[2].playerImg.texture.iCardId = data.iCard;
		let keys=["popup-tank1","popup-tank2","popup-tank3"]
		for (let i = 0; i < this.playerProfiles.list.length; i++) {
				this.playerProfiles.list[i].setData(keys[Math.floor(Math.random()*3)])

		}
		for(let obj of this.playerProfiles.getAll()){
			//console.log(obj)
			obj.setSize(100,100).setInteractive().on("pointerdown",()=>{
				this.soundObj.playSound(this.soundObj.clickSound);
				if(this.troops.visible==false){
					this.troops.setVisible(true);
				}
				this.troops.setTexture(obj.playerImg.texture.key)
			});
		}
		var i=0;
		const arr=[]
		this.select_btn.setInteractive().on('pointerdown',()=>{
			this.soundObj.playSound(this.soundObj.clickSound);
			if(this.troops.texture.key!="__MISSING"){
				if(i!=3&&!(i>3)){
				arr[i]=this.troops.texture.key;
				console.log(arr[i])
				if(i==0|| arr[i]!=arr[i-1]&&i<3){
				i++;
				const s="img_"+i;
				if(this[s].visible==false){
					this[s].visible=true;
				}
				this[s].setTexture(this.troops.texture.key);
				}

			}
			}
		});


		

		this.select_team_btn.setInteractive().on("pointerdown",()=>{
			this.soundObj.playSound(this.soundObj.clickSound);
			const warzone=new WarZoneScene();
			warzone.getPlayersData(arr);
			this.scene.stop("TroopSelection");
			this.scene.start("WarZoneScene");
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
