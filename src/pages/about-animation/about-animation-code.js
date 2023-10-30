import Utils from "../../utils/utils";

class AboutAnimationCode {
  halt = false;
  constructor(canvas) {
    this.canvas = canvas;
	this.canvasWidth = canvas.clientWidth;
	this.canvasHeight = canvas.clientHeight;
	this.canvas.width = this.canvasWidth;
	this.canvas.height = this.canvasHeight;
	this.boxQ = 40;
	this.boxes = [];
	this.ctx = canvas.getContext("2d");
	this.start();
  }

  start() {
    
	for (let i = 0; i < this.boxQ; i++) {
		this.boxes.push(this.square())
	}
	this.animate();
  }
  stop() {
    this.halt = true;
  }
  square () {
	return {
		x: 0,
		y: Math.random() * this.canvasHeight,
		width: this.canvasWidth,
		height: 10,
		color: Utils.randomHex(),
		speed: Math.random() * 3
	}
  }

  animate = () => {
    if (this.halt) return;
	for (let i = 0; i < this.boxQ; i++) {
		let box = this.boxes[i];
		this.ctx.fillStyle = box.color;
		box.y += box.speed;
		this.ctx.fillRect(box.x, box.y, box.width, box.height)
		if (box.y > this.canvasHeight) box.speed *= -1;
		if (box.y < 0) box.speed *= -1;
		
	}

    requestAnimationFrame(this.animate);
  };
}
export default AboutAnimationCode;
