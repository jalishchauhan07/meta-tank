class SoundManager{
    constructor(sceneObj){
        this.sceneObj=sceneObj;
        this.clickSound=this.sceneObj.sound.add("clickSound");
        this.defence3=this.sceneObj.sound.add("Defence3");
        this.explosion=this.sceneObj.sound.add("explosion");
        this.fireballdamage=this.sceneObj.sound.add("FireballDamage");
        this.healTank=this.sceneObj.sound.add("healTank");
        this.ingameSound=this.sceneObj.sound.add("ingameSound");
        this.loseSound=this.sceneObj.sound.add("loseSound");
        this.shieldTank=this.sceneObj.sound.add("shieldTank");
        this.shootTank=this.sceneObj.sound.add("shootTank");
        this.tankshoot2=this.sceneObj.sound.add("Tankshoot2");
        this.thunderDamage=this.sceneObj.sound.add("thunderDamage");
        this.winSound=this.sceneObj.sound.add("winSound");
    }



    playSound(key,loop=false){
        key.play();
        key.loop=loop;
    }

    stopSound(key){
        key.stop();
    }

}