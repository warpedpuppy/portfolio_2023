import Utils from "../../utils/utils";

export default class HomeAnimationFlowers {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
    this.halfWidth = this.canvasWidth / 2;
    this.halfHeight = this.canvasHeight / 2;
    this.canvas.setAttribute("width", this.canvasWidth);
    this.canvas.setAttribute("height", this.canvasHeight);
    this.ctx = canvas.getContext("2d");
    this.maxDistance = Math.max(this.halfWidth, this.halfHeight) * 1.2;
    this.itemQ = 50;
    this.items = [];
    this.radius = 100;
    this.center = { x: this.halfWidth, y: this.halfHeight };
    this.contextRotation = 0;
    this.flowers = [];
    this.flowerQ = 4;
    this.spin = 0;

    // const img = new Image();
    // img.onload = () => {};
    // img.src = "/bmpx/dragon/star.png";
  }
  start() {
    for (let i = 0; i < this.flowerQ; i++) {
      this.flowers.push(this.flower());
    }

    // const img = new Image();
    // img.onload = () => {
    //   for (let i = 0; i < this.itemQ; i++) {
    //     const { x, y } = this.distributeAroundCircle(
    //       this.center,
    //       this.radius,
    //       i
    //     );
    //     this.items.push(this.shape(x, y, img));
    //   }
    this.tick();

    // };
    // img.src = "/bmps/home/star.png";

    window.addEventListener("resize", this.resizeHandler.bind(this));
  }
  flower() {
    // let { ctx } = this;
    // ctx.beginPath();
    let flowerData = [];
    let x = Utils.randomNumberBetween(0, this.canvasWidth);
    let y = Utils.randomNumberBetween(0, this.canvasHeight);
    let petalQ = 10;
    for (let i = 0; i < petalQ; i++) {
      let angle = 360 / petalQ;
      let deg = angle * i;

      flowerData.push([x, y, 20, 75, deg * (Math.PI / 180), 0, 2 * Math.PI, 0, Math.random() * 0.00015 + 0.00002]);
      // ctx.ellipse(100, 100, 20, 75, deg * (Math.PI / 180), 0, 2 * Math.PI);
    }
    return flowerData;
    // ctx.stroke();
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
  shape(x, y, img) {
    return {
      x,
      y,
      w: 5,
      h: 5,
      r: Math.random() * this.maxDistance,
      rq:
        Math.random() * 0.25 +
        0.5 * (Math.floor(Math.random() * 2) < 1 ? -1 : 1),
      img,
      rotation: 0,
      rotateSpeed: Math.random() * 0.00015 + 0.00002,
    };
  }
  tick = () => {
    let { ctx } = this;
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    // this.spin += 0.0005;
    for (let i = 0; i < this.flowerQ-1; i++) {
     
	  
      ctx.save();
 let flower = this.flowers[i];
      for (let j = 0; j < flower.length; j++) {

		flower[j][7] += flower[j][8];
      	if (flower[j][7] >= 2 * Math.PI) flower[j][7] = 0;

        this.ctx.translate(flower[j][0], flower[j][1]);
        ctx.rotate(flower[j][7]);
        this.ctx.translate(-flower[j][0], -flower[j][1]);
        ctx.beginPath();
        ctx.ellipse(
          flower[j][0],
          flower[j][1],
          flower[j][2],
          flower[j][3],
          flower[j][4],
          flower[j][5],
          flower[j][6]
        );
        ctx.stroke();
      }

      ctx.restore();
    }

    requestAnimationFrame(this.tick);
    return;
  
  };
}
