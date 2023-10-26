import ThreeOfAKind from './threeOfAKind.js';
import MouseEvents from './mouseEvents.js';
import VARS from './vars.js';

export default class Game {

	constructor (canvas) {
		this.canvas = canvas;
		let width = document.querySelector(".general-layout").clientWidth;
		let height = document.querySelector(".general-layout").clientHeight;
		
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
		const [ colQ, rowQ ] = VARS.init(canvas, this.canvasWidth, this.canvasHeight);

		const three = new ThreeOfAKind(ctx, canvas);
		this.mouseEvents = new MouseEvents(three);
		
		
		this.createSelectUI(colQ, rowQ);
		
	
		document.addEventListener('mousemove', this.mouseEvents.mouseMoveHandler);
		document.addEventListener('mousedown', this.mouseEvents.mouseDownHandler);
	} 


	createSelectUI (colQ, rowQ) {

		this.rowSelect = document.querySelector("#rows")
		this.rowSelect.innerHTML = "";
		for (let i =5; i <= rowQ; i++){
			let option = document.createElement('option');
			option.innerText = i;
			if ( i===rowQ ) option.selected = true;
			this.rowSelect.appendChild(option)
		}
		this.rowSelect.addEventListener('change', this.changeRows )
	
		this.colSelect = document.querySelector("#cols");
		this.colSelect.innerHTML = "";
		for (let i =10; i <= colQ; i++){
			let option = document.createElement('option');
			option.innerText = i;
			if ( i===colQ ) option.selected = true;
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
		this.rowSelect.removeEventListener('change', this.changeRows)
		this.colSelect.removeEventListener('change', this.changeCols)
		document.removeEventListener('mousemove', this.mouseEvents.mouseMoveHandler);
		document.removeEventListener('mousedown', this.mouseEvents.mouseDownHandler);
	}
	




}