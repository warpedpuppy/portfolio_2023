import * as PIXI from 'pixijs';
import JumpHero from './heroJump';
import JumpBackground from './jumpBackground';
import AssetCreation from './assetCreation';
import JumpAction from './jumpAction';
export default function PlanetJumpCode(canvasContainer) {

	return {
		canvasWidth: canvasContainer.offsetWidth,
		canvasHeight: canvasContainer.offsetHeight,
		halfWidth: canvasContainer.offsetWidth / 2,
		halfHeight: canvasContainer.offsetHeight / 2,
	
		start: async function () {

			AssetCreation.init(this)

			const app = this.app = new PIXI.Application({ background: '#FFFFFF', resizeTo: canvasContainer });
			this.stage = app.stage;
			canvasContainer.appendChild(app.view);

			let sheet = await PIXI.Assets.load("/bmps/planet-jump/ss.json")
			this.sheet = sheet; 

		

			let jumpBackground = JumpBackground(this);
			jumpBackground.init();
			this.jumpBackground = jumpBackground;

			let jumpHero = JumpHero(this)
			jumpHero.init();
			
			this.hero = jumpHero;
			
			jumpBackground.addToStage();
			jumpHero.addToStage();

			this.jumpAction = JumpAction(this);
			this.jumpAction.init()
			
            this.app.ticker.add(this.ticker.bind(this));
			window.addEventListener('keydown', this.keyDownHandler.bind(this))
			window.addEventListener('keyup', this.keyUpHandler.bind(this))

		},
		stop: function () {
			window.onresize = null;
			this.app.destroy(true, {stageOptions: true});
			window.removeEventListener('keydown', this.keyDownHandler.bind(this));
			window.removeEventListener('keyup', this.keyUpHandler.bind(this))
		},
		ticker: function () {
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
			if (e.keyCode === 39) {
				this.rightHit();
			} else if (e.keyCode === 37) {
				this.leftHit();
			}
			
		},
		keyUpHandler: function (e) {
			this.spinning = false;
			this.rotateLeftBoolean = false;
			this.rotateRightBoolean = false;
		}
	}
}