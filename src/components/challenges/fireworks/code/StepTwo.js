class Firework {
  beamQ = 10;
  beams = [];
  centerX = 0.1;
  
  radius = 0;
  angle = 0;
  increase;
  constructor(radius, canvas, context) {
    this.radius = radius;
	this.canvas = canvas;
	this.centerY = canvas.height / 2;
    for (let i = 0; i < this.beamQ; i++) {
      let beam = new Beam(this.radius, context);
      this.beams.push(beam);
    }
  }

  returnXY(radius, angle) {
    return {
      x: this.canvas.width / 2 + radius * Math.cos(this.angle),
      y: this.canvas.height / 2 + radius * Math.sin(angle),
    };
  }

  reset() {
    this.angle = 0;
    this.radius = 0;
  }

  draw() {
    for (let i = 0; i < this.beamQ; i++) {
      let increase = (Math.PI * 2) / this.beamQ;
      this.angle += increase;
      let { x, y } = this.returnXY(this.radius, this.angle);
      this.beams[i].draw(x, y);
      this.radius += 0.25;
      if (this.radius > Math.max(this.canvas.width, this.canvas.height) / 2) {
        this.reset();
      }
    }
  }
}

class Beam {
  color = "#FF00FF";
  size;
  constructor(size, context) {
	this.context = context;
    this.size = size;
  }

  draw(x, y) {
    this.context.beginPath();
    this.context.arc(x, y, this.size, 0, 2 * Math.PI, false);
    this.context.fillStyle = this.color;
    this.context.fill();
  }
}

export default class StepTwoFireworks {
  constructor(canvas) {
    this.halt = false;
    this.canvas = canvas;
	let width = document.querySelector(".tab-body-shell").clientWidth;
	let breakpoint = 768;
	let maxHeight = 300;
	if (width >= breakpoint) {
		this.canvasWidth = 600;
		this.canvasHeight = maxHeight;
	} else {
		this.canvasWidth = width - 100;
		this.canvasHeight = maxHeight;
	}

	this.canvas.width = this.canvasWidth;
	this.canvas.height = this.canvasHeight;
    this.context = canvas.getContext("2d");
    this.firework = new Firework(5, canvas, this.context);
    this.animate();
  }

  animate = () => {
    if (this.halt) return;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.firework.draw();
    requestAnimationFrame(this.animate);
  }

  stop() {
    this.halt = true;
  }
}
