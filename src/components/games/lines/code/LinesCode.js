import * as PIXI from "pixi.js";
export default function LinesCode(canvasContainer) {
  return {
    canvasWidth: canvasContainer.offsetWidth,
    canvasHeight: canvasContainer.offsetHeight,
    halfWidth: canvasContainer.offsetWidth / 2,
    halfHeight: canvasContainer.offsetHeight / 2,

    start: function () {
      const app = (this.app = new PIXI.Application({
        background: "#FFFFFF",
        resizeTo: canvasContainer,
      }));
      this.stage = app.stage;
      canvasContainer.appendChild(app.view);
      let buffer = 10;
      let lineQ = this.canvasHeight / buffer;
      this.obj = { BL: [], BR: [], TR: [], TL: [] };
      let start, end;
      for (let i = 0; i < lineQ; i++) {
        let line = new PIXI.Graphics();
        start = [0, buffer + i * buffer];
        end = [buffer + i * buffer, this.canvasHeight];
        line
          .lineStyle(1, 0x000000)
          .moveTo(start[0], start[1])
          .lineTo(end[0], end[1]);
        this.obj.BL.push({ start, end });
        app.stage.addChild(line);

        line = new PIXI.Graphics();
        start = [this.canvasWidth - i * buffer, this.canvasHeight];
        end = [this.canvasWidth, buffer + i * buffer];
        line
          .lineStyle(1, 0xff00ff)
          .moveTo(start[0], start[1])
          .lineTo(end[0], end[1]);
        this.obj.BR.push({ start, end, line });
        app.stage.addChild(line);

        line = new PIXI.Graphics();
        start = [this.canvasWidth, buffer + i * buffer];
        end = [this.canvasWidth - lineQ * buffer + i * buffer, 0];
        line
          .lineStyle(1, 0x66ff00)
          .moveTo(start[0], start[1])
          .lineTo(end[0], end[1]);
        this.obj.TR.push({ start, end });
        app.stage.addChild(line);

        line = new PIXI.Graphics();
        start = [buffer + i * buffer, 0];
        end = [0, lineQ * buffer - i * buffer];
        line
          .lineStyle(1, 0x0096ff)
          .moveTo(start[0], start[1])
          .lineTo(end[0], end[1]);
        this.obj.TL.push({ start, end });
        app.stage.addChild(line);
      }

	  setTimeout(() => this.move(), 500);
	//   this.animate = this.animate.bind(this);
	//   this.animate();
    },
	// animate: function () {
	// 	ctx.beginPath();
	// 	ctx.arc(100, 75, 50, 0, 2 * Math.PI);
	// 	ctx.stroke();
	// 	requestAnimationFrame(this.animate);
	// },
    move: function () {

		for (let i = 0 ; i < this.obj.BL.length; i++) {
			// let {start, end} = this.obj.BL[i];

			// let line = new PIXI.Graphics();
			// start = [0, buffer + i * buffer];
			// end = [buffer + i * buffer, this.canvasHeight];
			// line
			// .lineStyle(1, 0x000000)
			// .moveTo(start[0], start[1])
			// .lineTo(end[0], end[1]);
			// this.obj.BL.push({ start, end });
			// app.stage.addChild(line);
		}

	},
    stop: function () {
      window.onresize = null;
      this.app.destroy(true, { stageOptions: true });
    },
  };
}
