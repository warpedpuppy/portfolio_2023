const VARS = {
	COLQ: 30, 
	ROWQ: 15, 
	BOX_WIDTH: 20, 
	BOX_HEIGHT: 20, 
	SPACER: 25,
	BOARD_WIDTH: undefined,
	BOARD_HEIGHT: undefined,
	SCREEN_WIDTH: undefined,
	SCREEN_HEIGHT: undefined,
	LEFT_ADJUST: undefined,
	TOP_ADJUST: undefined,
	rects: {},
	colors: [
		'violet',
		'lightblue',
		'blue',
		'lightgreen',
		'yellow',
		'orange',
		'red'
	],
	setHover: function (row, col) {
		this.hover = { row, col };
	},
	setChosen: function (row, col) {
		this.chosen = { row, col };
	},
	init: function (canvas, w, h) {

		this.COLQ = Math.floor((w / this.BOX_WIDTH) - 6);
		this.ROWQ = Math.floor((h / this.BOX_WIDTH) / 2);
		this.BOARD_HEIGHT = (this.BOX_HEIGHT + (this.SPACER - this.BOX_HEIGHT)) * this.ROWQ;
		this.TOP_ADJUST = this.BOX_HEIGHT;//(this.SCREEN_HEIGHT - this.BOARD_HEIGHT) / 2;

		VARS.canvas = canvas;
		this.hover = {};
		this.chosen = {};
		this.SCREEN_WIDTH = canvas.width;
		this.SCREEN_HEIGHT = canvas.height
		this.BOARD_WIDTH = (this.BOX_WIDTH + (this.SPACER - this.BOX_WIDTH)) * this.COLQ;
		this.LEFT_ADJUST = (this.SCREEN_WIDTH - this.BOARD_WIDTH) / 2;
		this.rects = {};
	}
}

export default VARS;