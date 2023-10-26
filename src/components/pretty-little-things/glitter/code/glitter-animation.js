import * as PIXI from "pixijs";
import Utils from "../../../../utils/utils";
class GlitterAnimation {

  canvasHeight = 400;
  dotsArray = [];
  linesArray = [];

  constructor(canvas) {

	this.dotCont = new PIXI.Container();
	this.lineCont = new PIXI.Container();
    this.canvasWidth = Utils.returnCanvasWidth();
    this.halfHeight = this.canvasHeight / 2;
    this.halfWidth = this.canvasWidth / 2;

    this.app = new PIXI.Application({
      background: "#400175",
      resizeTo: canvas,
    });
	canvas.height = this.canvasHeight;
    canvas.appendChild(this.app.view);

	this.stage = this.app.stage;
	
    this.stage.addChild(this.dotCont);
    this.stage.addChild(this.lineCont);

    this.dotQ = 1000;
    this.lineQ = 360;

	
	this.dots();
    this.lines();

	window.addEventListener('resize', this.resize)
	this.app.ticker.add(this.tick);
  }
  stop() {
	window.removeEventListener('resize', this.resize)
    this.app.destroy();
  }
  lines() {
    this.lineCont.x = this.halfWidth;
    this.lineCont.y = 150;
    this.lineCont.removeChildren();
    this.linesArray = [];
    let i, line;
    for (i = 0; i < this.lineQ; i++) {
      line = this.Line();
      line.rotation = Utils.deg2rad(i * (360 / this.lineQ));
      line.x = 0;
      line.y = 0;
      this.lineCont.addChildAt(line, 0);
      this.linesArray.push(line);
    }
  }
  Line() {
    let line = PIXI.Sprite.from("/bmps/line.png");
    line.scale.y = 0.25;
    line.scale.x = line.scaleValue = Utils.randomNumberBetween(0.25, 1);
    line.scaleDiff = Utils.randomNumberBetween(0.5, 1);
    line.alpha = 0.05;
    line.speed = Utils.randomNumberBetween(0.0005, 0.001);
    line.tint = 0xffff00;
    return line;
  }
  dots() {
    this.dotCont.removeChildren();
    this.dotCont.x = this.halfWidth;
    this.dotCont.y = 150;
    this.dotsArray = [];
    let i, dot;
    for (i = 0; i < this.dotQ; i++) {
      dot = this.Dot();
      dot.x = dot.startX;
      dot.y = dot.startY;
      this.dotCont.addChildAt(dot, 0);
      this.dotsArray.push(dot);
    }
  }
  Dot() {
    let dot = PIXI.Sprite.from("/bmps/dot.png");
    dot.scale.x = dot.scale.y = Utils.randomNumberBetween(0.25, 1);
    dot.startX = Math.random() * Utils.returnCanvasWidth();

    if (Math.floor(Math.random() * 2) > 0) {
      dot.startX = Math.random() * Utils.returnCanvasWidth();
    } else {
      dot.startX = -Math.random() * Utils.returnCanvasWidth();
    }
    if (Math.floor(Math.random() * 2) > 0) {
      dot.startY = Math.random() * Utils.returnCanvasWidth();
    } else {
      dot.startY = -Math.random() * Utils.returnCanvasWidth();
    }

    if (Math.floor(Math.random() * 2) > 1) {
      dot.startY *= -1;
    }
    dot.xDiff = Math.abs(dot.startX * 0.75);
    dot.yDiff = Math.abs(dot.startY * 0.75);
    dot.alpha = Math.random() * 0.25 + 0.1;
    dot.speed = Utils.randomNumberBetween(0.0005, 0.001);
    dot.tint = 0xffff00;
    return dot;
  }
  resize = () => {
    this.canvasWidth = Utils.returnCanvasWidth();
    this.canvasHeight = 400;
    this.halfWidth = this.canvasWidth / 2;
    this.dots();
    this.lines();
    this.stage.visible = true;
  }
  tick = () => {
    let dot, line, i;
    for (i = 0; i < this.dotQ; i++) {
      dot = this.dotsArray[i];
      dot.x = Utils.cosWave(dot.startX, dot.xDiff, dot.speed);
      dot.y = Utils.cosWave(dot.startY, dot.yDiff, dot.speed);
    }
    for (i = 0; i < this.lineQ; i++) {
      line = this.linesArray[i];
      line.scale.x = Utils.cosWave(
        line.scaleValue,
        line.scaleDiff,
        line.speed
      );
    }
    this.lineCont.rotation += 0.005;
  }
}
export default GlitterAnimation;
