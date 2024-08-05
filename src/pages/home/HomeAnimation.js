
export default class HomeAnimation {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");

    this.canvas = canvas;
    this.setUp();
    this.tick();

    window.addEventListener("resize", this.resizeHandler);
  }
  setUp() {
    this.canvasWidth = this.canvas.clientWidth;
    this.canvasHeight = this.canvas.clientHeight;
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
    this.halfWidth = this.canvasWidth / 2;
    this.halfHeight = this.canvasHeight / 2;
    this.center = { x: this.halfWidth, y: this.halfHeight };
    this.lines = []
    for (let i = 0; i < 200; i++) {
      this.lines.push(this.Line(i, this.halfWidth, this.canvasHeight, this.canvasWidth))
    }
  }
  Line(i, halfWidth, canvasHeight, canvasWidth) {

    let firstHalf = i % 2 === 0 ? true : false;
    let startX = firstHalf ? Math.random() * halfWidth : (Math.random() * halfWidth) + halfWidth;
    let rand = Math.floor(Math.random() * 10) < 5 ? -1 : 1;
    return {
      start: { x: startX, y: 0 },
      end: { x: startX, y: canvasHeight },
      speed: Math.random() * 4 * rand,
      move: function () {
        if (
          (firstHalf && (this.start.x < 0 || this.start.x > halfWidth))
          ||
          (!firstHalf && (this.start.x > canvasWidth || this.start.x < halfWidth))
        ) this.speed *= -1;

        this.start.x -= this.speed;
        this.end.x -= this.speed;
      }
    }
  }
  draw() {
    this.ctx.strokeStyle = `rgba( 0 0 0 / 0.15)`;
    for (let i = 0; i < this.lines.length; i++) {
      let line = this.lines[i];
      this.ctx.beginPath();
      this.ctx.moveTo(line.start.x, line.start.y);
      this.ctx.lineTo(line.end.x, line.end.y);
      this.ctx.stroke();
      line.move();
    }
  }
  stop() {
    window.removeEventListener("resize", this.resizeHandler);
  }
  resizeHandler = () => {
    this.setUp();
  }

  tick = () => {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    this.draw();
    requestAnimationFrame(this.tick);
  };
}
