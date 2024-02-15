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

	this.mini = this.canvasWidth < 768 ? true : false;
    // this.ctx = canvas.getContext("2d");
    this.maxDistance = Math.max(this.halfWidth, this.halfHeight) * 1.2;
    this.itemQ = 50;
    this.items = [];
    this.radius = 100;
    this.center = { x: this.halfWidth, y: this.halfHeight };
    this.contextRotation = 0;
    this.flowers = [];
    this.flowerQ = 10;
    this.spin = 0;
	this.colors =  [0x62FA34, 0x440FFA, 0xFA0F3E, "#FA0FCB"];

    this.app = new PIXI.Application({
      background: "#FFFFFF",
      resizeTo: window,
    });
	this.canvas.appendChild(this.app.view);
  }
  start() {
	
	for (let i = 0; i < this.flowerQ; i ++) {
		let flower = this.flower(Utils.randomIntBetween(10, 30));
		flower.x = Utils.randomNumberBetween(0, this.canvasWidth);
		flower.y = Utils.randomNumberBetween(0, this.canvasHeight);
		flower.alpha = 0.5;
		this.flowers.push(flower)
    this.app.stage.addChild(flower);
	}
    

    // center the sprite's anchor point
    
    this.app.ticker.add((delta) => this.tick(delta));
    window.addEventListener("resize", this.resizeHandler.bind(this));
  }
  petal () {
	let petal = PIXI.Sprite.from("/bmps/petal.png");
	petal.anchor.set(0.5, 1);
	return petal;
  }
  flower (petalCount) {
	let p;
	let cont = new PIXI.Container();
	cont.petals = [];
	let scale = 1;
	cont.petalCount = petalCount;
	for (let i = 0; i < petalCount; i++) {

		let spacing = 360 / petalCount;
		let radians = (spacing* i) * (Math.PI / 180);
		p = this.petal();
		p.tint = Utils.randomItemFromArray(this.colors)
		// p.
		p.scaleShift = Utils.randomNumberBetween(0.00005, 0.002);
		p.scale.set(scale *= 0.95)
		p.rotation = radians;
		cont.petals.push(p);
		cont.addChildAt(p, 0)
	}
	cont.scale.set(this.mini ? 0.5 : 1 );
	return cont;
  }
  stop() {
    window.removeEventListener("resize", this.resizeHandler);
  }
  resizeHandler() {
	
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
	this.mini = this.canvasWidth < 768 ? true : false;
    this.halfWidth = this.canvasWidth / 2;
    this.halfHeight = this.canvasHeight / 2;
    this.center = { x: this.halfWidth, y: this.halfHeight };
    this.canvas.setAttribute("width", this.canvasWidth);
    this.canvas.setAttribute("height", this.canvasHeight);
	for (let i = 0; i < this.flowerQ; i ++) {
		let flower = this.flowers[i];
		flower.scale.set(this.mini ? 0.5 : 1 );
		flower.x = Utils.randomNumberBetween(0, this.canvasWidth);
		flower.y = Utils.randomNumberBetween(0, this.canvasHeight);
	}
  }
  distributeAroundCircle(circleCenter, radius, i) {
    const x =
      circleCenter.x + radius * Math.cos((2 * Math.PI * i) / this.itemQ);
    const y =
      circleCenter.y + radius * Math.sin((2 * Math.PI * i) / this.itemQ);
    return { x, y };
  }
  shape(x, y, img) {}
  tick = (delta) => {
	for (let i = 0; i < this.flowerQ; i ++) {
		let flower = this.flowers[i];
		for (let j = 0; j < flower.petalCount; j ++) {
			flower.petals[j].scale.set(Utils.cosWave(0.5, 0.25, flower.petals[j].scaleShift))
		}
		flower.rotation += 0.004
	}
  };
}
