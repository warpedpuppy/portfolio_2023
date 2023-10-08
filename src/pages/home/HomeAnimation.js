export default class HomeAnimation {
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

    const img = new Image();
    img.onload = () => {};
    img.src = "/bmpx/dragon/star.png";
  }
  start() {
    const img = new Image();
    img.onload = () => {
      for (let i = 0; i < this.itemQ; i++) {
        const { x, y } = this.distributeAroundCircle(
          this.center,
          this.radius,
          i
        );
        this.items.push(this.shape(x, y, img));
      }
      this.tick();

    };
    img.src = "/bmps/home/star.png";

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
  shape(x, y, img) {
    return {
      x,
      y,
      w: 5,
      h: 5,
      r: Math.random() * this.maxDistance,
      rq: Math.random() * 0.25 + 0.5 * (Math.floor(Math.random() * 2) < 1 ? -1 : 1),
      img,
      rotation: 0,
      rotateSpeed: Math.random() * 0.00015 + 0.00002,
    };
  }
  tick = () => {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.ctx.save();

    for (let i = 0; i < this.itemQ; i++) {
      let box = this.items[i];
      let { img } = box;
	box.r += box.rq;

      
      if (Math.abs(box.r) > this.maxDistance) box.r = 0;

      const { x, y } = this.distributeAroundCircle(this.center, box.r, i);

      box.rotation += box.rotateSpeed;
      if (box.rotation >= 2 * Math.PI) box.rotation = 0;
      this.ctx.translate(this.halfWidth, this.halfHeight);
      this.ctx.rotate(box.rotation);
      this.ctx.translate(-this.halfWidth, -this.halfHeight);
      this.ctx.drawImage(img, x, y, 30, 28);
    }
    this.ctx.restore();
    requestAnimationFrame(this.tick);
  };
}
