import Utils from "./utils.js";
import Graphics from './graphics.js';
export default class Oval {

	constructor (ctx) {
		this.#ctx = ctx;
	}
	#ctx;
	counter = 0;
	counter2 = 0;
	animate = () =>  {

		// r_x = x * cos(theta) - y * sin(theta)
		// r_y = x * sin(theta) + y * cos(theta)
		// this.counter2 += 0.5;
		let obj = Utils.returnPointsAroundACircle(150, this.counter2); 
		this.#ctx.beginPath();
		// this.counter -= 1;
		// let yDiff = Utils.cosWave(0, -20, 0.0025)
		// console.log(Utils.degToRad(this.counter2))
		//at 90 = 400;
		// at 180 = 450;
		this.#ctx.ellipse(250, 450, 100, 50, Utils.degToRad(180), Utils.degToRad(0), Utils.degToRad(360));
		this.#ctx.stroke();

		this.#ctx.beginPath();
		this.#ctx.moveTo(250, 300)
		this.#ctx.lineTo(250, 500);
		this.#ctx.stroke();


	}


}