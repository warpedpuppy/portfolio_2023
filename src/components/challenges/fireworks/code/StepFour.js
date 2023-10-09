class Background {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
  }
  draw() {
    this.context.beginPath();
    this.context.rect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = `rgba(0,0,0,1)`;
    this.context.fill();
  }
}

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
    let arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(Math.floor(Math.random() * 255));
    }
    return arr;
  }

  reset() {
    this.radiusIncrease = this.returnRadiusIncrease();
    this.color = this.returnColor();
    this.angle = 0;
    this.radius = 0;
    this.alpha = 1;
    this.centerX =
      this.buffer + Math.random() * this.canvas.width - this.buffer * 2;
    this.centerY =
      this.buffer + Math.random() * this.canvas.height - this.buffer * 2;
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
    this.size = size;
    this.canvas = canvas;
    this.context = context;
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

export default class StepFourFireworks {
  constructor(canvas) {
    canvas.width = 600;
    canvas.height = 300;
	this.canvas = canvas;
    this.halt = false;
    this.context = canvas.getContext("2d");
    this.fireworks = [];
    this.fireworkQ = 20;
    for (let i = 1; i <= this.fireworkQ; i++) {
      this.fireworks.push(new Firework(i, canvas, this.context));
    }

    this.background = new Background(canvas, this.context);
    this.animate();
  }

  animate = () => {
    if (this.halt) return;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.background.draw();
    for (let i = 1; i < this.fireworkQ; i++) {
      this.fireworks[i].draw();
    }
    requestAnimationFrame(this.animate);
  };

  stop() {
    this.halt = true;
  }
}
