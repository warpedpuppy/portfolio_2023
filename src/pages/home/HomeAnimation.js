export default class HomeAnimation {
	constructor(canvas){
		this.canvas = canvas;
		this.canvasWidth = window.innerWidth;
		this.canvasHeight = window.innerHeight;
		this.canvas.setAttribute("width", this.canvasWidth);
		this.canvas.setAttribute("height", this.canvasHeight);
		this.context = canvas.getContext('2d');
	}
	start() {

	}
	stop() {

	}
}