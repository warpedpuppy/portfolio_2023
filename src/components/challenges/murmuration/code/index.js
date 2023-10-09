import Murmuration from "./Murmuration.js";

export default class SetUpMurmuration {

	constructor (canvas) {
		this.canvas = canvas;
		this.engine = canvas.getContext("2d");
		this.canvasWidth = window.innerWidth;
		this.canvasHeight = window.innerHeight;
	
		this.canvas.setAttribute("width", this.canvasWidth);
		this.canvas.setAttribute("height", this.canvasHeight);
	
		const birdQuantity = 500;
		this.murmuration = new Murmuration(this.engine, this.canvasWidth, this.canvasHeight, birdQuantity);
		this.tick = this.tick.bind(this);
		this.tick();

		window.addEventListener("resize", this.resizeHandler);
	}

	start() {

	}
	stop() {
		window.removeEventListener("resize", this.resizeHandler);
	}

	tick () {
		this.engine.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
		this.murmuration.renderBirds();
		window.requestAnimationFrame(this.tick);
	};

	resizeHandler = (e) => {
		this.canvasWidth = window.innerWidth;
		this.canvasHeight = window.innerHeight;
		this.murmuration.resize(this.canvasWidth, this.canvasHeight)
		this.canvas.setAttribute("width", this.canvasWidth);
		this.canvas.setAttribute("height", this.canvasHeight);
	}
	

	

}
