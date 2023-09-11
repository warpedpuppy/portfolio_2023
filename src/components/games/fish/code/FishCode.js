import * as PIXI from 'pixijs';
import FishHero from './FishHero';
import SwimBackground from './swimBackground';
import FishAction from './FishAction';
export default function FishCode(canvasContainer) {

	return {
		canvasWidth: canvasContainer.offsetWidth,
		canvasHeight: canvasContainer.offsetHeight,
		halfWidth: canvasContainer.offsetWidth / 2,
		halfHeight: canvasContainer.offsetHeight / 2,
		vx: 0,
    	vy: 0,
		spinning: false,
		rotateLeftBoolean: false,
		rotateRightBoolean: false,
		start: function () {

			const app = this.app = new PIXI.Application({ background: '#1099bb', resizeTo: canvasContainer });
			this.stage = app.stage;
			canvasContainer.appendChild(app.view);

			let background = this.background = SwimBackground(this);
			background.init();
			background.addToStage();

			let fishHero = this.fishHero = FishHero(this);

			fishHero.init();
			fishHero.addToStage();

			this.fishAction = FishAction(this)

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
			this.fishAction.animate();
			this.background.animate();

	
			if (this.rotateLeftBoolean) {
				this.fishAction.rotate('left')
			} else if (this.rotateRightBoolean) {
				this.fishAction.rotate('right')
			} else {
				this.fishAction.rotate()
			}

			// this.clock.animate()

			// this.gears.animate()



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