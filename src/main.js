
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1920,
		height:1080,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});
	
	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add('GameMainPanel',GameMainPanel);
	game.scene.add("TroopSelection",TroopSelection);
	game.scene.add("WarZoneScene",WarZoneScene)
	game.scene.add("SelectBattleground",SelectBattleground);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		this.load.plugin('rexscrollerplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexscrollerplugin.min.js', true);
		this.load.pack("pack", "assets/preload-asset-pack.json");
		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
	}
}