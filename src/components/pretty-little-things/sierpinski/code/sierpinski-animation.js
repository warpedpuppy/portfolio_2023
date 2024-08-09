import * as PIXI from "pixi.js";

class Triangle extends PIXI.Graphics {
  constructor(index = 0) {
    super();
    this.index = index;
    this.ratio = 0;
    this.hasNewPoints = false;
    this.makeLinesArrayProperty();
  }
  makeLinesArrayProperty() {
    let line1 = new PIXI.Graphics();
    let line2 = new PIXI.Graphics();
    let line3 = new PIXI.Graphics();
    this.addChild(line1);
    this.addChild(line2);
    this.addChild(line3);
    this.lines = [line1, line2, line3]
  }
}

export default class SierpinkskiAnimation {
  expandQ = 1.1;
  expandIncrease = 1.006;
  ratioIncrease = 0.01;
  maxRadius = 2000000;
  constructor(canvas) {
    this.canvas = canvas;
    this.startPIXI();
  }
  async startPIXI() {
    const app = new PIXI.Application({
      background: '#000000',
      resizeTo: this.canvas,
    });
    this.app = app;
    this.canvas.appendChild(app.view);
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
    let halfWidth = window.innerWidth / 2;
    let halfHeight = window.innerHeight / 2;
    let cont = new PIXI.Container();
    cont.x = halfWidth;
    cont.y = halfHeight
    this.cont = cont;
    app.stage.addChild(cont)
    window.addEventListener("resize", this.resizeHandler);
    app.ticker.add(this.ticker);
    this.init();
  }
  ticker = () => {
    this.cont.rotation += 0.01;
    this.drawTriangle()
  }
  stop() {
    this.app.destroy(true);
    window.removeEventListener('resize', this.resize)
  }
  init() {
    this.cont.removeChildren();
    this.startRadius = window.innerHeight / 4;
    this.newPointsArray = [];
    let { point1, point2, point3 } = this.trianglePoints(this.startRadius, { x: 0, y: 0 });
    this.newGraphic(point1, point2, point3);
  }
  resizeHandler = () => {
    this.canvas.width = this.canvasWidth = window.innerWidth;
    this.canvas.height = this.canvasHeight = window.innerHeight;
    let halfWidth = window.innerWidth / 2;
    let halfHeight = window.innerHeight / 2;
    this.cont.x = halfWidth;
    this.cont.y = halfHeight
  }
  drawTriangle() {
    this.startRadius *= this.expandIncrease;

    if (this.startRadius > this.maxRadius) {
      this.init();
    }
    let points;
    this.newPointsArray.forEach((item, index) => {
      if (index === 0) {

        const { point1, point2, point3 } = this.trianglePoints(this.startRadius, { x: 0, y: 0 })
        points = [point1, point2, point3]
      }
      let temp = this.newPoints(...points, item.graphic)
      points = temp;
    })
  }
  drawLine(x1, y1, x2, y2, ratio, lines, index) {
    lines.clear();
    lines.lineStyle({ width: 1, color: 0xffd900 });
    lines.moveTo(x1, y1);
    x2 = x1 + ratio * (x2 - x1);
    y2 = y1 + ratio * (y2 - y1);
    lines.lineTo(x2, y2);

  }
  draw = (point1, point2, point3, graphic) => {
    this.drawLine(point1.x, point1.y, point2.x, point2.y, graphic.ratio, graphic.lines[0], graphic.index)
    this.drawLine(point2.x, point2.y, point3.x, point3.y, graphic.ratio, graphic.lines[1], graphic.index)
    this.drawLine(point3.x, point3.y, point1.x, point1.y, graphic.ratio, graphic.lines[2], graphic.index)
    if (graphic.ratio < 1) {
      graphic.ratio += this.ratioIncrease;
    } else if (!graphic.hasNewPoints) {
      graphic.hasNewPoints = true;
      this.newGraphic(point1, point2, point3);
    }
  }
  newGraphic(point1, point2, point3) {
    let temp = new Triangle(this.newPointsArray.length);
    this.newPointsArray.push({ graphic: temp, origPoints: [point1, point2, point3] });
    this.cont.addChild(temp);
  }
  newPoints(point1, point2, point3, graphic) {
    let newPoint1 = {
      x: (point1.x + point2.x) / 2,
      y: (point1.y + point2.y) / 2
    }
    let newPoint2 = {
      x: (point2.x + point3.x) / 2,
      y: (point2.y + point3.y) / 2
    }
    let newPoint3 = {
      x: (point1.x + point3.x) / 2,
      y: (point1.y + point3.y) / 2
    }
    graphic.clear();
    graphic.beginFill(0xFFFFFF)
    graphic.drawCircle(newPoint1.x, newPoint1.y, 2);
    graphic.drawCircle(newPoint2.x, newPoint2.y, 2);
    graphic.drawCircle(newPoint3.x, newPoint3.y, 2);
    graphic.endFill();
    this.draw(newPoint1, newPoint2, newPoint3, graphic)
    return [newPoint1, newPoint2, newPoint3]
  }
  trianglePoints(radius, centerPoint) {
    let point1 = { x: radius * Math.cos(0) + centerPoint.x, y: radius * Math.sin(0) + centerPoint.y }
    let point2 = { x: radius * Math.cos((1 / 3) * (2 * Math.PI)) + centerPoint.x, y: radius * Math.sin((1 / 3) * (2 * Math.PI)) + centerPoint.y }
    let point3 = { x: radius * Math.cos((2 / 3) * (2 * Math.PI)) + centerPoint.x, y: radius * Math.sin((2 / 3) * (2 * Math.PI)) + centerPoint.y }
    return { point1, point2, point3 }
  }
}





