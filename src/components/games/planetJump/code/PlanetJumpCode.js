import * as PIXI from 'pixi.js';
import JumpHero from './heroJump';
import JumpBackground from './jumpBackground';
import AssetCreation from './assetCreation';
import JumpAction from './jumpAction';
import JumpResize from './jumpResize';
import Clock from './clock';
import Gears from './gears';
export default function PlanetJumpCode(canvasContainer) {

	return {
		canvasWidth: canvasContainer.offsetWidth,
		canvasHeight: canvasContainer.offsetHeight,
		halfWidth: canvasContainer.offsetWidth / 2,
		halfHeight: canvasContainer.offsetHeight / 2,
	
		start: async function () {

			AssetCreation.init(this)
			this.jumpResize = JumpResize(this)
			const app = this.app = new PIXI.Application({ background: '#FFFFFF', resizeTo: canvasContainer });
			this.stage = app.stage;
			canvasContainer.appendChild(app.view);

			let str = "/bmps/planet-jump/ss.json";
			let sheet = !PIXI.Cache.has(str) ? await PIXI.Assets.load(str) : PIXI.Cache.get(str);
			this.sheet = sheet; 

		

			this.jumpBackground = JumpBackground(this);
			this.jumpBackground.init();

			this.hero = JumpHero(this)
			this.hero.init();

			this.clock = Clock(this);
			this.clock.init();
			this.gears = Gears(this);
			this.gears.init();
			this.clock.addToStage();
			this.gears.addToStage();
			
			this.jumpBackground.addToStage();
			this.hero.addToStage();

			this.jumpAction = JumpAction(this);
			this.jumpAction.init()
			
            this.app.ticker.add(this.ticker.bind(this));
			window.addEventListener('keydown', this.keyDownHandler.bind(this))
			window.addEventListener('keyup', this.keyUpHandler.bind(this))
			window.addEventListener('resize', this.jumpResize.resizeHandler.bind(this))
		},
		stop: function () {
			window.onresize = null;
			this.app.destroy(true, {stageOptions: true});
			window.removeEventListener('keydown', this.keyDownHandler.bind(this));
			window.removeEventListener('keyup', this.keyUpHandler.bind(this))
			window.removeEventListener('resize', this.jumpResize.resizeHandler.bind(this))
		},
		ticker: function () {
			this.clock.animate();
			this.gears.animate();
			this.jumpAction.animate();



		},
		leftHit () {
			this.spinning = true
			this.rotateLeftBoolean = true
		},
		rightHit () {
			this.spinning = true
			this.rotateRightBoolean = true
		},
		keyDownHandler: function (e) {
			e.preventDefault();
			if (e.keyCode === 32) {
				this.jumpAction.jump();
			} 
			
		},
		keyUpHandler: function (e) {
			this.spinning = false;
			this.rotateLeftBoolean = false;
			this.rotateRightBoolean = false;
		}
	}
}