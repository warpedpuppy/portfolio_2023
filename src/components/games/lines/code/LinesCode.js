import * as PIXI from 'pixijs';
export default function LinesCode(canvasContainer) {

	return {
		canvasWidth: canvasContainer.offsetWidth,
		canvasHeight: canvasContainer.offsetHeight,
		halfWidth: canvasContainer.offsetWidth / 2,
		halfHeight: canvasContainer.offsetHeight / 2,

		start: function () {
			const app = this.app = new PIXI.Application({ background: '#FFFFFF', resizeTo: canvasContainer });
			this.stage = app.stage;
			canvasContainer.appendChild(app.view);
			let buffer = 10; 
			let lineQ = this.canvasHeight / buffer;
			for (let i = 0; i < lineQ; i ++) {
					let line = new PIXI.Graphics();
					line.lineStyle(1, 0x000000)
					.moveTo(0, buffer + (i * buffer))
					.lineTo(buffer + (i * buffer), this.canvasHeight);
					app.stage.addChild(line)

					
					line = new PIXI.Graphics();
					line.lineStyle(1, 0xFF00FF)
					.moveTo(this.canvasWidth - (i  * buffer), this.canvasHeight)
					.lineTo(this.canvasWidth, buffer + (i  * buffer));
					app.stage.addChild(line)

					line = new PIXI.Graphics();
					line.lineStyle(1, 0x66ff00)
					.moveTo(this.canvasWidth, buffer + (i  * buffer))
					.lineTo(this.canvasWidth - (lineQ * buffer) + ( i * buffer), 0);
					app.stage.addChild(line)
			}
		},
		stop: function () {
			window.onresize = null;
			this.app.destroy(true, {stageOptions: true});	
		}
	}
}