class Firework {
	stop = false;
	beamQ = 1;
	beams = [];
	centerX = 0.1;
	radius;
	constructor(radius, canvas, context) {
		this.centerY = canvas.height / 2;
		this.radius = radius;
		for (let i = 0; i < this.beamQ; i++) {
			let beam = new Beam(this.centerX, this.centerY, this.radius, canvas, context);
			this.beams.push(beam);
		}
	}
	draw() {
		for (let i = 0; i < this.beamQ; i++) {
			this.beams[i].draw();
		}
	}
}
class Beam {
	color = "#FF00FF";
	radius;
	centerX; 
	centerY;
	speed = 10;
	constructor (centerX, centerY, radius, canvas, context) {
		this.centerX = centerX;
		this.centerY = centerY;
		this.radius = radius;
		this.canvas = canvas;
		this.context = context;
	}
	draw() {
		this.centerX += this.speed;
		this.speed *= 0.99;
		if (this.centerX > this.canvas.width) {
			this.speed = 10;
			this.centerX = 0;
		}
		this.context.beginPath();
		this.context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
		this.context.fillStyle = 'green';
		this.context.fill();
	}
}
export default class StepOneFireworks {
	constructor (canvas) {
		this.halt = false;
		this.canvas = canvas;
		this.canvas.width = 600;
		this.canvas.height = 300;
		this.context = this.canvas.getContext('2d');
		this.firework = new Firework(5, canvas, this.context);
		this.animate();
	}
	
	animate = () => {
		if (this.halt) return;
		this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
		this.firework.draw();
		requestAnimationFrame(this.animate)
	}

	stop = () => {
		this.halt = true;
	}
	
}