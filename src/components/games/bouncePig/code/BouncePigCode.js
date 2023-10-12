import * as PIXI from 'pixijs';
import Utils from './utils';
import Hero from './hero';
import BouncePlatform from './bouncePlatform';
import Background from './background';
import Clouds from './clouds';
import Animate from './animate';
export default function BouncePigCode (canvasContainer) {
    return {
        mineQ: 3,
        fruitQ: 10,
        cloudQ: 3,
        maxFruit: 100,
        maxMines: 10,
		canvas: canvasContainer,
		canvasWidth: canvasContainer.offsetWidth,
		canvasHeight: canvasContainer.offsetHeight,
		halfWidth: canvasContainer.offsetWidth / 2,
		halfHeight: canvasContainer.offsetHeight / 2,
        start: async function () {
            this.totalSoundsAndLoader = 7;
            this.utils = new Utils(this);
			
            this.speedLimit = this.storeSpeedLimit = 30;
            this.vy = 10;
            this.vx = 0;

			const app = this.app = new PIXI.Application({ background: '#1099bb', resizeTo: canvasContainer });
			this.stage = app.stage;
			this.stage.eventMode = 'static';
			this.stage.cursor = 'pointer';
			canvasContainer.appendChild(app.view);
	
			let str = "/images/bouncePig/bpb.json";
			let sheet = !PIXI.Cache.has(str) ? await PIXI.Assets.load(str) : PIXI.Cache.get(str);
			
			this.sheet = sheet; 
            this.resizeHandler = this.resizeHandler.bind(this);
            window.onresize = () => this.resizeHandler();
			this.Main();
			this.resizeHandler();
        },
        stop: function () {
            window.onresize = null;
            this.app.destroy(true, {stageOptions: true});
        },
        Main: function () {
			this.clouds = Clouds(this);
            this.clouds.init();
            this.clouds.addToStage();
            this.cloudsOnStage = true;
	
			let hero = this.hero = new Hero(this.sheet);
			hero.init();
			this.utils.center(hero.cont)
			hero.cont.x = this.halfWidth;
			hero.cont.y = this.halfHeight;
			this.app.stage.addChild(hero.cont)

            this.bouncePlatform = BouncePlatform(this);
            this.bouncePlatform.init();

            this.background = Background(this);
            this.background.init();
            this.animateAllow = true;
        
            this.loopingQ = 10;
            
            this.swipeText = PIXI.Sprite.from(this.sheet.textures["swipeScreen.png"]);

            this.stage.addChild(this.swipeText);
			this.swipeText.scale.set(0.75)
           
            this.animate = Animate(this);
            this.app.ticker.add(this.animate.tick);
          
        },
        resizeHandler:  function () {
            this.canvasWidth = this.utils.returnCanvasWidth();
            this.canvasHeight =  this.utils.returnCanvasHeight();
            this.halfWidth = this.canvasWidth / 2;
            this.halfHeight = this.canvasHeight / 2;
            this.background.resize();
            this.hero.cont.x = this.halfWidth;
			this.hero.cont.y = this.halfHeight;

			this.animate.resize(this.halfWidth, this.halfHeight)
            this.clouds.resize();
			if (this.swipeText.width > this.canvasWidth) {
				this.swipeText.scale.set(0.75)
			} else  {
				this.swipeText.scale.set(1)
			}

			this.swipeText.x = (this.canvasWidth - this.swipeText.width) / 2;
            this.swipeText.y = 50;//(this.canvasHeight - this.swipeText.height)-10;            
        }
    }
}
