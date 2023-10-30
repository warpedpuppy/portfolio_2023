import * as PIXI from 'pixi.js';
import DragonHero from "./heroFly"
import DragonAction from './DragonAction';
import AssetCreation from './assetCreation';
import NodeGarden from './nodeGarden';
import FlyResize from './flyResize';
export default function DragonCode(canvasContainer) {

	return {
		canvasWidth: canvasContainer.offsetWidth,
		canvasHeight: canvasContainer.offsetHeight,
		halfWidth: canvasContainer.offsetWidth / 2,
		halfHeight: canvasContainer.offsetHeight / 2,
		storeRadius: 0,
		radius: 0,
        flameOn: false,
		flameArray: [],
		shootingFlames: [],
		flameCounter: 0,
		increment: 5,
		flameQ: 100,
		spinning: false,
		spinDirection: "",
		start: function () {

			const app = this.app = new PIXI.Application({ background: '#FFFFFF', resizeTo: canvasContainer });
			this.stage = app.stage;
			canvasContainer.appendChild(app.view);

			let dragon = DragonHero(this);
			dragon.init()
			dragon.addToStage();
			this.dragon = dragon;

			this.nodeGarden = NodeGarden(PIXI, this);
			this.nodeGarden.init();

			this.resize = FlyResize(this);


			AssetCreation.init(this);

			this.maxLength = this.increment * dragon.segmentsQ;

			this.flames = AssetCreation.ParticleContainer(this.flameQ);
			const obj = AssetCreation.createPool(this.flames, '/bmps/dragon/star.png', this.colors, [0.25, 0.5])
			this.flameArray = obj.flameArray
			this.flameQ = obj.flameQ
			this.flames.visible = false
			this.flames.y = -100
			dragon.headCont.addChildAt(this.flames, 0)


			this.animate = DragonAction(this);
            this.app.ticker.add(this.animate.animate.bind(this));

			window.addEventListener('resize', this.resize.resizeHandler.bind(this.resize))
			window.addEventListener('keydown', this.keyDownHandler.bind(this))
			window.addEventListener('keyup', this.keyUpHandler.bind(this))

		},
		stop: function () {
			window.onresize = null;
			this.app.destroy(true, {stageOptions: true});
			window.removeEventListener('resize', this.resize.resizeHandler.bind(this))
			window.removeEventListener('keydown', this.keyDownHandler);
			window.removeEventListener('keyup', this.keyUpHandler)
		},
		keyDownHandler: function (e) {
			e.preventDefault();
			if (e.keyCode === 32) {
				this.flameOn = true;
				this.animate.fire(true)
			} else if (e.keyCode === 39) {
				// this.dragon.cont.rotation += Utils.deg2rad(10);
				this.animate.rotate("right", true)
			} else if (e.keyCode === 37) {
				this.animate.rotate("left", true)
			}
			
		},
		keyUpHandler: function (e) {
			this.animate.rotate("", false)
			this.flameOn = false;
			this.animate.fire(false)
		}
	}
}