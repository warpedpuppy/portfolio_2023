import * as PIXI from 'pixijs';
import DragonHero from "./heroFly"
import DragonAction from './DragonAction';
export default function DragonCode(canvasContainer) {

	return {
		canvasWidth: canvasContainer.offsetWidth,
		canvasHeight: canvasContainer.offsetHeight,
		halfWidth: canvasContainer.offsetWidth / 2,
		halfHeight: canvasContainer.offsetHeight / 2,
		storeRadius: 0,
		radius: 0,
        flameOn: false,
		increment: 5,
		start: function () {

			const app = this.app = new PIXI.Application({ background: '#1099bb', resizeTo: canvasContainer });
			this.stage = app.stage;
			canvasContainer.appendChild(app.view);

			let dragon = DragonHero(this);
			dragon.init()
			dragon.addToStage();
			this.dragon = dragon;

			this.maxLength = this.increment * dragon.segmentsQ;

			this.animate = DragonAction(this);
            this.app.ticker.add(this.animate.animate.bind(this));

		},
		stop: function () {
			window.onresize = null;
			this.app.destroy(true, {stageOptions: true});
		}
	}
}