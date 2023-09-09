import * as PIXI from 'pixijs';
import DragonHero from "./heroFly"

export default function DragonCode(canvasContainer) {

	return {
		canvasWidth: canvasContainer.offsetWidth,
		canvasHeight: canvasContainer.offsetHeight,
		halfWidth: canvasContainer.offsetWidth / 2,
		halfHeight: canvasContainer.offsetHeight / 2,
		start: function () {

			const app = this.app = new PIXI.Application({ background: '#1099bb', resizeTo: canvasContainer });
			this.stage = app.stage;
			canvasContainer.appendChild(app.view);

			let dragon = DragonHero(this);
			dragon.init()
			dragon.addToStage();

		},
		stop: function () {
			window.onresize = null;
			this.app.destroy(true, {stageOptions: true});
		}
	}
}