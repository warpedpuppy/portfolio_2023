import * as PIXI from 'pixijs';
import Utils from './utils';
export default function Hero (sheet) {
    return {
        cont: new PIXI.Container(),
        fallingTextures: [sheet.textures["heroFalling0001.png"], sheet.textures["heroFalling0002.png"]],
        chewingTextures: [sheet.textures["heroChewing0001.png"], sheet.textures["heroChewing0002.png"]],
        flyingTextures: [sheet.textures["heroFlying0001.png"], sheet.textures["heroFlying0002.png"]],
        standingTextures: [sheet.textures["heroStanding0001.png"], sheet.textures["heroStanding0002.png"]],
        glidingTextures: [sheet.textures["heroGliding.png"], sheet.textures["heroGliding0001.png"], sheet.textures["heroGliding0002.png"]],
        activeMC: "",
        chewCounter: 0,
        init: function () {
            this.hero = new PIXI.AnimatedSprite(this.fallingTextures);
            this.glideHero = new PIXI.AnimatedSprite(this.glidingTextures);
            this.chewingHero = new PIXI.AnimatedSprite(this.chewingTextures);
            this.flyingHero = new PIXI.AnimatedSprite(this.flyingTextures);
            this.standingHero = new PIXI.AnimatedSprite(this.standingTextures);
            this.cont.introVY = 2;
            this.hero.anchor.x = this.hero.anchor.y = 0.5;
            this.hero.animationSpeed = 0.05;
            this.hero.play();
            this.cont.addChild(this.hero);
            this.activeMC = this.hero;
            this.glideHero.anchor.x = this.glideHero.anchor.y = 0.5;
            this.glideHero.animationSpeed = 0.05;
            this.chewingHero.onComplete = this.returnToHero;
            this.chewingHero.anchor.x = this.chewingHero.anchor.y = 0.5;
            this.chewingHero.animationSpeed = 0.05;
            this.flyingHero.anchor.x = this.flyingHero.anchor.y = 0.5;
            this.flyingHero.animationSpeed = 0.5;
            this.standingHero.anchor.x = this.standingHero.anchor.y = 0.5;
            this.standingHero.animationSpeed = 0.0175;
        },
        bounce: function () {
            if(this.activeMC !== this.glideHero){
                this.activeMC.stop();
                this.cont.removeChild(this.activeMC);
                this.cont.addChild(this.glideHero);
                this.glideHero.play();
                this.activeMC = this.glideHero;
            }
        },
        getHero: function () {
            return this.cont;
        },
        returnToHero: function () {
            // gv.hero.hero();
        },
        chew: function () {
            this.activeMC.stop();
            this.cont.removeChild(this.activeMC);
            this.cont.addChild(this.chewingHero);
            this.chewingHero.play();
            this.activeMC = this.chewingHero;
        },
        fly: function () {
            this.activeMC.stop();
            this.cont.removeChild(this.activeMC);
            this.cont.addChild(this.flyingHero);
            this.flyingHero.play();
            this.activeMC = this.flyingHero;
        },
        stand: function () {
            this.activeMC.stop();
            this.cont.removeChild(this.activeMC);
            this.cont.addChild(this.standingHero);
            this.standingHero.play();
            this.activeMC = this.standingHero;
        },
        hero: function () {
            this.cont.chewCounter ++;
            if (this.cont.chewCounter >5) {
                this.cont.chewCounter = 0;
                this.activeMC.stop();
                this.cont.removeChild(this.activeMC);
                this.cont.addChild(this.hero);
                this.hero.play();
                this.activeMC = this.hero;
            } else{ 
                this.cont.chew();
            }

        }
        
    }
}