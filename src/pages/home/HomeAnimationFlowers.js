import Utils from "../../utils/utils";
import * as PIXI from "pixi.js";

export default class HomeAnimationFlowers {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
    this.halfWidth = this.canvasWidth / 2;
    this.halfHeight = this.canvasHeight / 2;
    this.canvas.setAttribute("width", this.canvasWidth);
    this.canvas.setAttribute("height", this.canvasHeight);
    // this.ctx = canvas.getContext("2d");
    this.maxDistance = Math.max(this.halfWidth, this.halfHeight) * 1.2;
    this.itemQ = 50;
    this.items = [];
    this.radius = 100;
    this.center = { x: this.halfWidth, y: this.halfHeight };
    this.contextRotation = 0;
    this.flowers = [];
    this.flowerQ = 4;
    this.spin = 0;

    this.app = new PIXI.Application({
      background: "#1099bb",
      resizeTo: window,
    });
	this.canvas.appendChild(this.app.view);
  }
  start() {
	
    this.petal = PIXI.Sprite.from("/bmps/petal.png");
    this.app.stage.addChild(this.petal);

    // center the sprite's anchor point
    this.petal.anchor.set(0.5, 1);
    this.app.ticker.add((delta) => this.tick(delta));
    window.addEventListener("resize", this.resizeHandler.bind(this));
  }
  stop() {
    window.removeEventListener("resize", this.resizeHandler);
  }
  resizeHandler() {
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
    this.halfWidth = this.canvasWidth / 2;
    this.halfHeight = this.canvasHeight / 2;
    this.center = { x: this.halfWidth, y: this.halfHeight };
    this.canvas.setAttribute("width", this.canvasWidth);
    this.canvas.setAttribute("height", this.canvasHeight);
  }
  distributeAroundCircle(circleCenter, radius, i) {
    const x =
      circleCenter.x + radius * Math.cos((2 * Math.PI * i) / this.itemQ);
    const y =
      circleCenter.y + radius * Math.sin((2 * Math.PI * i) / this.itemQ);
    return { x, y };
  }
  shape(x, y, img) {}
  tick = (delta) => {this.petal.rotation += 0.1 * delta;};
}
