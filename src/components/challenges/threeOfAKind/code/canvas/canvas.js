import ThreeOfAKind from './threeOfAKind.js';
import MouseEvents from './mouseEvents.js';
import VARS from './vars.js';

export default class Game {

	constructor (canvas) {
		this.canvas = canvas;
		let width = document.querySelector(".tab-body-shell").clientWidth;
		let height = document.querySelector(".tab-body-shell").clientHeight;
		
		if (width >= 768) {
			this.canvasWidth = 800;
			this.canvasHeight = 400;
		} else {
			this.canvasWidth = width;
			this.canvasHeight = height;
		}

		canvas.width = this.canvasWidth;
		canvas.height = this.canvasHeight;

		const ctx = canvas.getContext("2d");
		VARS.init(canvas, this.canvasWidth, this.canvasHeight);

		const three = new ThreeOfAKind(ctx, canvas);
		this.mouseEvents = new MouseEvents(three);
		
		
		this.createSelectUI();
		
	
		document.addEventListener('mousemove', this.mouseEvents.mouseMoveHandler);
		document.addEventListener('mousedown', this.mouseEvents.mouseDownHandler);
		window.addEventListener('resize', this.resize)
	} 
	resize = e => {
		let width = document.querySelector(".tab-body-shell").clientWidth;
		let height = document.querySelector(".tab-body-shell").clientHeight;
		
		if (width >= 768) {
			this.canvasWidth = 800;
			this.canvasHeight = 400;
		} else {
			this.canvasWidth = width;
			this.canvasHeight = height;
		}

		this.canvas.width = this.canvasWidth;
		this.canvas.height = this.canvasHeight;

		VARS.init(this.canvas, width, height);

	}

	createSelectUI () {

		this.rowSelect = document.querySelector("#rows")
		for (let i =5; i <= 15; i++){
			let option = document.createElement('option');
			option.innerText = i;
			if ( i===15 ) option.selected = true;
			this.rowSelect.appendChild(option)
		}
		this.rowSelect.addEventListener('change', this.changeRows )
	
		this.colSelect = document.querySelector("#cols")
		for (let i =10; i <= 30; i++){
			let option = document.createElement('option');
			option.innerText = i;
			if ( i===30 ) option.selected = true;
			this.colSelect.appendChild(option)
		}
		this.colSelect.addEventListener('change', this.changeCols)
	}

	changeRows = (e) => {
		this.mouseEvents.change('rows', e.target.value)
	}

	changeCols = (e) => {
		this.mouseEvents.change('cols', e.target.value)
	}

	stop() {
		window.removeEventListener('resize', this.resize)
		this.rowSelect.removeEventListener('change', this.changeRows)
		this.colSelect.removeEventListener('change', this.changeCols)
		document.removeEventListener('mousemove', this.mouseEvents.mouseMoveHandler);
		document.removeEventListener('mousedown', this.mouseEvents.mouseDownHandler);
	}
	




}