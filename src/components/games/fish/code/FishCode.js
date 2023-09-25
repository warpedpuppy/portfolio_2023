import * as PIXI from 'pixijs';
import FishHero from './FishHero';
import SwimBackground from './swimBackground';
import FishAction from './FishAction';
import Clock from './clock';
import Gears from './gears';
import Utils from './utils';
import Grid from './Grid';
export default function FishCode(canvasContainer) {

	return {
		canvasWidth: canvasContainer.offsetWidth,
		canvasHeight: canvasContainer.offsetHeight,
		halfWidth: canvasContainer.offsetWidth / 2,
		halfHeight: canvasContainer.offsetHeight / 2,
		vx: 0,
    	vy: 0,
		radius: 0,
		velocity: 6,
		spinning: false,
		rotateLeftBoolean: false,
		rotateRightBoolean: false,
		spinDirection: '', 
		start: function () {

			const app = this.app = new PIXI.Application({ background: '#1099bb', resizeTo: canvasContainer });
			this.stage = app.stage;
			canvasContainer.appendChild(app.view);

			let background = this.background = SwimBackground(this);
			background.init();
			background.addToStage();

			this.grid = Grid(this);
			this.grid.init();
			this.stage.addChild(this.grid.cont)

			let fishHero = this.fishHero = FishHero(this);

			fishHero.init();
			fishHero.addToStage();

			this.fishAction = FishAction(this)

			this.clock = Clock(this);
			this.clock.init();
			this.clock.addToStage();

			this.gears = Gears(this);
			this.gears.init();
			this.gears.addToStage();

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
		rotate (str) {
			let obj = this.fishAction.rotate(str, this);
			this.vx = obj.vx ? -obj.vx : this.vx;
			this.vy = -obj.vy ? -obj.vy : this.vx;
		  },
		ticker: function () {
			this.fishAction.animate();
			this.background.animate();
			this.clock.animate();
			this.grid.animate();
			this.gears.animate()
	
			if (this.rotateLeftBoolean) {
				this.rotate('left');
			} else if (this.rotateRightBoolean) {
				this.rotate('right')
			} 




		},
		leftHit () {
			this.spinning = true;
			this.rotateLeftBoolean = true;
			this.spinDirection = 'left';
		  },
		  rightHit () {
			this.spinning = true;
			this.rotateRightBoolean = true;
			this.spinDirection = 'right';
		  },
		keyDownHandler: function (e) {
			e.preventDefault();
			if (e.keyCode === 37) {
				this.rightHit();
			} else if (e.keyCode === 39) {
				this.leftHit();
			} else {
				this.fishHero.cont.rotation = Utils.deg2rad(0);
				this.vx = 0;
				this.vy = 0;

			}
			
		},
		keyUpHandler: function (e) {
			this.spinning = false;
			this.rotateLeftBoolean = false;
			this.rotateRightBoolean = false;
		}
	}
}