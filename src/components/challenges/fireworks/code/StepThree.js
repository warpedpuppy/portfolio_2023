class Firework {
  beamQ = 20;
  beams = [];

  radius = 0;
  angle = 0;
  buffer = 50;
  increase;
  alpha = 1;
  radiusIncrease = this.returnRadiusIncrease();

  constructor(radius, canvas, context) {
    this.radius = radius;
    this.centerX = canvas.width / 2;
    this.centerY = canvas.height / 2;
    this.maxRadius = Math.max(canvas.height, canvas.width) / 2;
    this.color = this.returnColor();
    this.canvas = canvas;
    for (let i = 0; i < this.beamQ; i++) {
      let beam = new Beam(this.radius, canvas, context);
      this.beams.push(beam);
    }
  }

  returnRadiusIncrease() {
    return Math.random() * 0.1 + 0.05;
  }

  returnXY() {
    return {
      x: this.centerX + this.radius * Math.cos(this.angle),
      y: this.centerY + this.radius * Math.sin(this.angle),
    };
  }

  returnColor() {
    return [0, 0, 0];
  }

  reset() {
    this.radiusIncrease = this.returnRadiusIncrease();
    this.color = this.returnColor();
    this.angle = 0;
    this.radius = 0;
    this.alpha = 1;
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
  }

  draw() {
    for (let i = 0; i < this.beamQ; i++) {
      let increase = (Math.PI * 2) / this.beamQ;
      this.angle += increase;
      let { x, y } = this.returnXY();
      this.beams[i].draw(x, y, this.alpha, this.color);
      this.alpha *= 0.999;
      this.radius += this.radiusIncrease;
      if (this.radius > Math.max(this.canvas.width, this.canvas.height) / 2) {
        this.reset();
      }
    }
  }
}

class Beam {
  size;
  sizeVariance = Math.random() * 0.3 + 0.7;
  constructor(size, canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.size = size;
  }

  alter() {
    this.sizeVariance = Math.random() * 0.3 + 0.7;
  }

  draw(x, y, alpha, color) {
    this.context.beginPath();
    // context.rect(x * this.sizeVariance, y * this.sizeVariance, this.size, this.size)
    this.context.arc(
      x * this.sizeVariance,
      y * this.sizeVariance,
      this.size,
      0,
      2 * Math.PI,
      false
    );
    this.context.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
    this.context.fill();
  }
}

export default class StepThreeFireworks {
  constructor(canvas) {
    this.halt = false;
    this.canvas = canvas;
    canvas.width = 600;
    canvas.height = 300;
    this.context = canvas.getContext("2d");
    this.firework = new Firework(5, canvas, this.context);
    this.animate();
  }

  animate = () => {
    if (this.halt) return;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.firework.draw();
    requestAnimationFrame(this.animate);
  };

  stop() {
    this.halt = true;
  }
}
