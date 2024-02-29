
// You can write more code here
/* START OF COMPILED CODE */

class WarZoneScene extends Phaser.Scene {

	constructor() {
		super("WarZoneScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// BackgroundContainer
		const backgroundContainer = this.add.container(7, 4);
		backgroundContainer.scaleX = 1.9270887021228456;
		backgroundContainer.scaleY = 3.6081499633319702;

		// bg_img
		const bg_img = this.add.image(496, 151, "Desert");
		bg_img.scaleX = 0.8;
		bg_img.scaleY = 0.39;
		backgroundContainer.add(bg_img);

		// player_1
		const player_1 = this.add.image(261, 123, "popup-tank2");
		player_1.scaleY = 0.6;
		backgroundContainer.add(player_1);

		// player_2
		const player_2 = this.add.image(101, 158, "popup-tank2");
		player_2.scaleY = 0.6;
		backgroundContainer.add(player_2);

		// player_3
		const player_3 = this.add.image(353, 235, "popup-tank2");
		player_3.scaleY = 0.6;
		backgroundContainer.add(player_3);

		// player_4
		const player_4 = this.add.image(811, 124, "popup-tank2");
		player_4.scaleY = 0.6;
		player_4.flipX = true;
		backgroundContainer.add(player_4);

		// player_5
		const player_5 = this.add.image(599, 159, "popup-tank2");
		player_5.scaleY = 0.6;
		player_5.flipX = true;
		backgroundContainer.add(player_5);

		// player_6
		const player_6 = this.add.image(884, 236, "popup-tank2");
		player_6.scaleY = 0.6;
		player_6.flipX = true;
		backgroundContainer.add(player_6);

		// life_btn
		const life_btn = this.add.image(167, 66, "life-btn");
		life_btn.scaleX = 0.6;
		life_btn.scaleY = 0.3;
		backgroundContainer.add(life_btn);

		// shield_btn
		const shield_btn = this.add.image(127, 66, "shield-btn");
		shield_btn.scaleX = 0.6;
		shield_btn.scaleY = 0.3;
		backgroundContainer.add(shield_btn);

		// bomb_btn_1
		const bomb_btn_1 = this.add.image(87, 66, "bomb-btn_1");
		bomb_btn_1.scaleX = 0.6;
		bomb_btn_1.scaleY = 0.3;
		backgroundContainer.add(bomb_btn_1);

		// bomb_btn
		const bomb_btn = this.add.image(767, 66, "bomb-btn_1");
		bomb_btn.scaleX = 0.6;
		bomb_btn.scaleY = 0.3;
		backgroundContainer.add(bomb_btn);

		// shield_btn_1
		const shield_btn_1 = this.add.image(807, 66, "shield-btn");
		shield_btn_1.scaleX = 0.6;
		shield_btn_1.scaleY = 0.3;
		backgroundContainer.add(shield_btn_1);

		// life_btn_1
		const life_btn_1 = this.add.image(847, 66, "life-btn");
		life_btn_1.scaleX = 0.6;
		life_btn_1.scaleY = 0.3;
		backgroundContainer.add(life_btn_1);

		// wallet
		const wallet = this.add.image(487, 38, "wallet");
		wallet.scaleX = 0.25;
		wallet.scaleY = 0.4;
		backgroundContainer.add(wallet);

		// wallet_1
		const wallet_1 = this.add.image(485, 53, "wallet");
		wallet_1.scaleX = 0.7;
		wallet_1.scaleY = 0.3;
		backgroundContainer.add(wallet_1);

		// wallet_2
		const wallet_2 = this.add.image(722, 32, "wallet");
		wallet_2.scaleX = 0.8;
		wallet_2.scaleY = 0.3;
		backgroundContainer.add(wallet_2);

		// wallet_3
		const wallet_3 = this.add.image(248, 32, "wallet");
		wallet_3.scaleX = 0.8;
		wallet_3.scaleY = 0.3;
		backgroundContainer.add(wallet_3);

		// settings_icon
		const settings_icon = this.add.image(866, 33, "settings-icon");
		settings_icon.scaleX = 0.6;
		settings_icon.scaleY = 0.3;
		backgroundContainer.add(settings_icon);

		// homeicon
		const homeicon = this.add.image(111, 33, "homeicon");
		homeicon.scaleX = 0.8;
		homeicon.scaleY = 0.45;
		backgroundContainer.add(homeicon);

		// displayTime
		const displayTime = this.add.text(478, 27, "", {});
		displayTime.scaleX = 1.5;
		displayTime.text = "9";
		backgroundContainer.add(displayTime);

		// lifeLine_1
		const lifeLine_1 = new LifeLine(this, 261, 186);
		lifeLine_1.scaleX = 1;
		lifeLine_1.scaleY = 0.5;
		backgroundContainer.add(lifeLine_1);

		// lifeLine_2
		const lifeLine_2 = new LifeLine(this, 99, 217);
		lifeLine_2.scaleX = 1;
		lifeLine_2.scaleY = 0.5;
		backgroundContainer.add(lifeLine_2);

		// lifeLine_3
		const lifeLine_3 = new LifeLine(this, 352, 287);
		lifeLine_3.scaleX = 1;
		lifeLine_3.scaleY = 0.5;
		backgroundContainer.add(lifeLine_3);

		// lifeLine_4
		const lifeLine_4 = new LifeLine(this, 754, 178);
		lifeLine_4.scaleX = 1;
		lifeLine_4.scaleY = 0.5;
		backgroundContainer.add(lifeLine_4);

		// lifeLine_5
		const lifeLine_5 = new LifeLine(this, 594, 221);
		lifeLine_5.scaleX = 1;
		lifeLine_5.scaleY = 0.5;
		backgroundContainer.add(lifeLine_5);

		// lifeLine_6
		const lifeLine_6 = new LifeLine(this, 825, 291);
		lifeLine_6.scaleX = 1;
		lifeLine_6.scaleY = 0.5;
		backgroundContainer.add(lifeLine_6);

		// turnPlayer
		const turnPlayer = this.add.text(443, 46, "", {});
		turnPlayer.text = "\n";
		turnPlayer.setStyle({ "align": "center", "fontStyle": "bold" });
		backgroundContainer.add(turnPlayer);

		// glow_card
		const glow_card = this.add.image(263, 120, "glow-card");
		glow_card.scaleX = 0.8;
		glow_card.scaleY = 0.49;
		glow_card.visible = false;
		backgroundContainer.add(glow_card);

		// red_glow
		const red_glow = this.add.image(434, 218, "red-glow");
		red_glow.scaleX = 0.8;
		red_glow.scaleY = 0.49;
		red_glow.visible = false;
		backgroundContainer.add(red_glow);

		// turnStatus
		const turnStatus = this.add.text(437, 45, "", {});
		turnStatus.setStyle({ "fontStyle": "bold" });
		backgroundContainer.add(turnStatus);

		// fire
		const fire = this.add.image(437, 114, "fire");
		fire.scaleX = 0.2;
		fire.scaleY = 0.2;
		fire.visible = false;
		backgroundContainer.add(fire);

		// damaged_tank
		const damaged_tank = this.add.sprite(426, 147, "damaged-tank");
		damaged_tank.scaleX = 0.4;
		damaged_tank.scaleY = 0.2;
		damaged_tank.visible = false;
		backgroundContainer.add(damaged_tank);

		// exposion0
		const exposion0 = this.add.sprite(849, 233, "exposion", 0);
		exposion0.scaleY = 0.6;
		exposion0.visible = false;
		backgroundContainer.add(exposion0);

		// playersStatus
		const playersStatus = new PlayersStatus(this, 144, -78);
		playersStatus.scaleX = 0.5;
		playersStatus.scaleY = 0.3;
		backgroundContainer.add(playersStatus);

		// shield
		const shield = this.add.image(263, 133, "shield");
		shield.scaleX = 0.9;
		shield.scaleY = 0.5;
		shield.visible = false;
		backgroundContainer.add(shield);

		this.backgroundContainer = backgroundContainer;
		this.bg_img = bg_img;
		this.player_1 = player_1;
		this.player_2 = player_2;
		this.player_3 = player_3;
		this.player_4 = player_4;
		this.player_5 = player_5;
		this.player_6 = player_6;
		this.life_btn = life_btn;
		this.shield_btn = shield_btn;
		this.bomb_btn_1 = bomb_btn_1;
		this.bomb_btn = bomb_btn;
		this.shield_btn_1 = shield_btn_1;
		this.life_btn_1 = life_btn_1;
		this.wallet = wallet;
		this.wallet_1 = wallet_1;
		this.wallet_2 = wallet_2;
		this.wallet_3 = wallet_3;
		this.settings_icon = settings_icon;
		this.homeicon = homeicon;
		this.displayTime = displayTime;
		this.lifeLine_1 = lifeLine_1;
		this.lifeLine_2 = lifeLine_2;
		this.lifeLine_3 = lifeLine_3;
		this.lifeLine_4 = lifeLine_4;
		this.lifeLine_5 = lifeLine_5;
		this.lifeLine_6 = lifeLine_6;
		this.turnPlayer = turnPlayer;
		this.glow_card = glow_card;
		this.red_glow = red_glow;
		this.turnStatus = turnStatus;
		this.fire = fire;
		this.damaged_tank = damaged_tank;
		this.exposion0 = exposion0;
		this.shield = shield;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	backgroundContainer;
	/** @type {Phaser.GameObjects.Image} */
	bg_img;
	/** @type {Phaser.GameObjects.Image} */
	player_1;
	/** @type {Phaser.GameObjects.Image} */
	player_2;
	/** @type {Phaser.GameObjects.Image} */
	player_3;
	/** @type {Phaser.GameObjects.Image} */
	player_4;
	/** @type {Phaser.GameObjects.Image} */
	player_5;
	/** @type {Phaser.GameObjects.Image} */
	player_6;
	/** @type {Phaser.GameObjects.Image} */
	life_btn;
	/** @type {Phaser.GameObjects.Image} */
	shield_btn;
	/** @type {Phaser.GameObjects.Image} */
	bomb_btn_1;
	/** @type {Phaser.GameObjects.Image} */
	bomb_btn;
	/** @type {Phaser.GameObjects.Image} */
	shield_btn_1;
	/** @type {Phaser.GameObjects.Image} */
	life_btn_1;
	/** @type {Phaser.GameObjects.Image} */
	wallet;
	/** @type {Phaser.GameObjects.Image} */
	wallet_1;
	/** @type {Phaser.GameObjects.Image} */
	wallet_2;
	/** @type {Phaser.GameObjects.Image} */
	wallet_3;
	/** @type {Phaser.GameObjects.Image} */
	settings_icon;
	/** @type {Phaser.GameObjects.Image} */
	homeicon;
	/** @type {Phaser.GameObjects.Text} */
	displayTime;
	/** @type {LifeLine} */
	lifeLine_1;
	/** @type {LifeLine} */
	lifeLine_2;
	/** @type {LifeLine} */
	lifeLine_3;
	/** @type {LifeLine} */
	lifeLine_4;
	/** @type {LifeLine} */
	lifeLine_5;
	/** @type {LifeLine} */
	lifeLine_6;
	/** @type {Phaser.GameObjects.Text} */
	turnPlayer;
	/** @type {Phaser.GameObjects.Image} */
	glow_card;
	/** @type {Phaser.GameObjects.Image} */
	red_glow;
	/** @type {Phaser.GameObjects.Text} */
	turnStatus;
	/** @type {Phaser.GameObjects.Image} */
	fire;
	/** @type {Phaser.GameObjects.Sprite} */
	damaged_tank;
	/** @type {Phaser.GameObjects.Sprite} */
	exposion0;
	/** @type {Phaser.GameObjects.Image} */
	shield;

	/* START-USER-CODE */
	// Write your code here
	// soundObj=new SoundManager(this);
	static battleImg;
	static players;
	playerData = new Array()
	turnIndicate = 0;
	playersLife = [{ live: true }, { live: true }, { live: true }, { live: true }, { live: true }, { live: true }]


	create() {

		this.editorCreate();
		this.soundObj = new SoundManager(this);
		this.gameTurn(0);
		for (let i = 0; i < WarZoneScene.players_.length; i++) {

			const s = "player_" + (i + 1);
			this[s].setTexture(WarZoneScene.players_[i])
			const se = "player_" + (i + 3);
			this[se].setTexture(this.imgName[Math.floor(Math.random() * 3)])
		}
		this.bg_img.setTexture(WarZoneScene.battleImg)


	}
	getBattlegroundImg(img) {
		WarZoneScene.battleImg = img;
		console.log(WarZoneScene.battleImg)
	}

	getPlayersData(playersInfo) {
		WarZoneScene.players_ = playersInfo;
		console.log(WarZoneScene.players_)
	}

	playerData = [];



	imgName = ["popup-tank1", "popup-tank2", "popup-tank3"]

	eventCall() {
		var c = 0;
		for (let i = 0; i < 3; i++) {
			const playerName = "player_" + (i + 1);
			this[playerName].setInteractive().on("pointerdown", () => {
				// this[playerName].data = i + 1;
				c++;
				if (c == 1) {
					this.playerData.push({ data: this[playerName], no: playerName[playerName.length - 1] })
					// console.log("Data no :"+this.playerData[c-1].no)
					this.glow_card.x = this[playerName].x;
					this.glow_card.y = this[playerName].y;
					this.glow_card.setVisible(true);
				}
			});
		}

		for (let i = 3; i < 6; i++) {
			const playerName = "player_" + (i + 1);
			this[playerName].setInteractive().on("pointerdown", () => {
				// this[playerName].data = i + 1;

				c++;
				if (c == 2) {
					this.playerData.push({ data: this[playerName], no: playerName[playerName.length - 1] })
					this.red_glow.x = this[playerName].x;
					this.red_glow.y = this[playerName].y;
					this.red_glow.setVisible(true);
					// console.log("Data no :"+this.playerData[c-1].no)
					c = 0;
					this.setAnimation();
				}
			});
		}
	}


	setAnimation() {
		this.fire.x = this.playerData[0].data.x;
		this.fire.y = this.playerData[0].data.y;
		this.fire.setVisible(true);
		this.tweens.add({
			targets: this.fire,
			x: this.playerData[this.playerData.length - 1].data.x,
			y: this.playerData[this.playerData.length - 1].data.y,
			ease: "power2",
			onComplete: () => {
				this.anims.create({
					key: "blast",
					frames: this.anims.generateFrameNumbers("exposion", { start: 0, end: 6 }),
					frameRate: 12
				});
				this.fire.setVisible(false);
				this.exposion0.x = this.playerData[this.playerData.length - 1].data.x;
				this.exposion0.y = this.playerData[this.playerData.length - 1].data.y;
				this.playerData[this.playerData.length - 1].data.setVisible(false);
				this.exposion0.setVisible(true);
				this.exposion0.play("blast");
				setTimeout(() => {
					this.exposion0.setVisible(false);
					this.playerData[this.playerData.length - 1].data.setVisible(true);

				}
					, 2000)
			}
		});
	}

	randomNumber(start, end) {
		while (true) {
			const number = Math.floor(Math.random() * (end + 1));
			if (number >= start && number <= end&& this.playersLife[number]!=false) {
				return number;
			}
		}
	}



	opponentTurn() {
		const attackTank = this.randomNumber(1, 3);
		const selectTank = this.randomNumber(4, 6);
		const attackTankName = "player_" + attackTank;
		const selectTankName = "player_" + selectTank;
		// console.log(this[selectTankName] + " " + selectTankName, this[attackTankName] + " " + attackTankName)
		this.playerData.splice(0, this.playerData.length)
		this.playerData.push({ data: this[selectTankName], no: selectTankName[selectTankName.length - 1] });
		this.playerData.push({ data: this[attackTankName], no: attackTankName[attackTankName.length - 1] });
		console.log("Data no:", this.playerData[1].no, this.playerData[0].no)
		this.red_glow.x = this.playerData[0].x;
		this.red_glow.y = this.playerData[0].y;
		this.glow_card.x = this.playerData[1].x;
		this.glow_card.y = this.playerData[1].y;
		this.glow_card.setVisible(true);
		this.red_glow.setVisible(true);
		console.log(this.playerData)
		this.setAnimation();
		// this.lifeReduce()

	}

	setTime(time) {
		// console.log(time)

		if (time >= 0) {
			this.displayTime.setText(time.toString());
			time--;
			setTimeout(() => { this.setTime(time); }, 1000)
		}

	}

	lifeReduce() {
		const life = "lifeLine_" + this.playerData[this.playerData.length - 1].no;
		console.log(life, this[life].life.text);
		let userLife = this[life].life.text.split("/")[0];
		console.log(userLife);
		userLife -= 20;
		this[life].life.setText(userLife + "/100")
		this[life].power.width = this[life].power.width-25.6;
		this.playerLifeCheck(userLife,life)
	}

	checkLife(){
		var userPlayer=0,opponentPlayer=0;
		for(let i=0;i<3;i++){
			if(this.playersLife[i]==false){
				userPlayer++;
			}
		}
		
		for(let i=3;i<6;i++){
			if(this.playersLife[i]==false){
				opponentPlayer++;
			}
		}
		return userPlayer==3||opponentPlayer==3?1:0
	}

	playerLifeCheck(lifeLine, player) {
		if (lifeLine == 0) {
			const user = "player_" + (player[player.length - 1]);
			this[user].setVisible(false);

			this.playersLife[player[player.length - 1]].live=false;
			this[player].setVisible(false);
		}
	}
	gameTurn(ind) {
		console.log("turn is " + ind)
		this.playerData.splice(0, this.playerData.length)
		console.log(this.playerData)
		if (ind == 0) {
			setTimeout(() => {
				this.turnStatus.setText("Your Turn")
				this.setTime(9);
				this.eventCall();
				setTimeout(()=>this.lifeReduce(),3000);
				setTimeout(() => {
					this.glow_card.setVisible(false);
					this.red_glow.setVisible(false);
					console.log("end user turn")
					this.gameTurn(1);

				}, 11000)
			}, 1000)
		}
		else if(this.checkLife()){
			
		}
		else {
			setTimeout(() => {
				this.turnStatus.setText("Opponent Turn");
				this.opponentTurn()
				setTimeout(()=>this.lifeReduce(),3000);
				this.setTime(9)
				setTimeout(() => {
					this.glow_card.setVisible(false);
					this.red_glow.setVisible(false);
					console.log("end Opponent turn")
					this.gameTurn(0);
				}, 11000)

			}, 1000)
		}
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
