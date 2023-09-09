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
			
            this.PIXI = PIXI;
            // this.TweenLite = TweenLite;
            // // this.TimelineLite = TimelineLite;
            // this.Back = Back;
            // this.ObjectPoolBuilder = ObjectPoolBuilder;
            // this.Mines = Mines;
            this.speedLimit = this.storeSpeedLimit = 10;
            // this.canvasWidth = this.utils.returnCanvasWidth();
            // this.canvasHeight = 400;
            this.vy = 2;
            this.vx = 0;
            // this.bounce = -0.7;
            // this.stage = new PIXI.Container();
            // this.renderer = PIXI.autoDetectRenderer(this.canvasWidth, this.canvasHeight);
            // this.renderer.backgroundColor = 0x1a69ff;

            
           
            // canvas.appendChild(this.app.view);
			const app = this.app = new PIXI.Application({ background: '#1099bb', resizeTo: canvasContainer });//
			this.stage = app.stage;
			this.stage.eventMode = 'static';
			this.stage.cursor = 'pointer';
			canvasContainer.appendChild(app.view);
			// console.log( PIXI.Assets.cache._cache[0])
			
			let sheet = await PIXI.Assets.load("/images/bouncePig/bpb.json")
			this.sheet = sheet; 
            this.resizeHandler = this.resizeHandler.bind(this);
            window.onresize = () => this.resizeHandler();
			this.Main();
			this.resizeHandler();
        },
        stop: function () {
            window.onresize = null;
            // this.loader.destroy();
            // this.app.ticker.destroy();
            this.app.destroy(true, {stageOptions: true});
        },
        Main: function () {
            // this.halfHeight = this.canvasHeight / 2;
            // this.halfWidth = this.canvasWidth / 2;

            // this.kingCont = new PIXI.particles.ParticleContainer();
            // this.stage.addChild(this.kingCont);

            // this.clouds = Clouds(this);
            // this.clouds.init();
            // this.clouds.addToStage();
            // this.cloudsOnStage = true;

            // this.drums = Drums(this);
            // this.drums.init();
            // this.drums.addToStage();

            // this.mines = Mines(this);
            // this.mines.init();
            // this.mines.addToStage();

            // this.fruit = Fruit(this);
            // this.fruit.init();

            // this.hero = new Hero(this);
            // this.hero.init();
            // this.heroInstance = this.hero.getHero()
            // this.heroInstance.x = Math.ceil(this.halfWidth);
            // this.heroInstance.y = Math.ceil(this.halfHeight);
            // this.stage.addChild(this.heroInstance);

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
            this.swipeText.x = (this.canvasWidth - this.swipeText.width) / 2;
            this.swipeText.y = (this.canvasHeight - this.swipeText.height)-10;
			



            this.animate = Animate(this);
            this.app.ticker.add(this.animate.tick);
          
        },
        resizeHandler:  function () {
            this.canvasWidth = this.utils.returnCanvasWidth();
            this.canvasHeight =  this.utils.returnCanvasHeight();
            this.halfWidth = this.canvasWidth / 2;
            this.halfHeight = this.canvasHeight / 2;
            // this.renderer.resize(this.canvasWidth, this.canvasHeight);
            this.background.resize();
            this.hero.cont.x = this.halfWidth;
			this.hero.cont.y = this.halfHeight;
            // this.drums.resize();
			this.animate.resize(this.halfWidth, this.halfHeight)
            this.clouds.resize();
			if (this.swipeText.width > this.canvasWidth) {
	
				this.swipeText.scale.set(0.75)
           
			} else  {
				this.swipeText.scale.set(1)
			}


			this.swipeText.x = (this.canvasWidth - this.swipeText.width) / 2;
            this.swipeText.y = (this.canvasHeight - this.swipeText.height)-10;
            // this.heroInstance.y = this.halfHeight;
            // this.mines.resize();
            
        }
    }
}
