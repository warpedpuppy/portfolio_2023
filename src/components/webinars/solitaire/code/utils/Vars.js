
const VARS = {
    allVisualAssets: [],
    mousePoint: {x: 0, y: 0},
    xyDiff: {x: 0, y: 0},
    activeCard: undefined,
    deck: [],
    piles: {},
    slots: [],
    ctx: undefined,
	dragContainer: [],
	idealWidth: 1000,
	idealHeight: 1000,
	canvasWidth: 0,
	percentage: 1,
    init: function (canvas) {
		let width = document.querySelector('.tab-body-shell').clientWidth;
		this.canvasWidth = width > this.idealWidth ? this.idealWidth : width;
		if (width > this.idealWidth ) {
			this.canvasWidth = this.idealWidth;
			this.percentage = 1;
		} else {
			this.percentage = width / this.idealWidth;
			this.canvasWidth = width;
		}
		canvas.width = this.canvasWidth;
		canvas.height = this.idealHeight;

		console.log(this.percentage)
		this.cardWidth = 100 * this.percentage;
        this.cardHeight = 150 * this.percentage;
        this.canvasWidth = 1000 * this.percentage;
        this.canvasHeight = 800 * this.percentage;
		this.suits= ["clubs", "diamonds", "hearts", "spades"];
        this.ranks= ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];

		console.log(this.cardWidth, this.cardHeight)

		this.resetValues();
		this.allVisualAssets = [];
		this.deck = [];
		this.piles = {};
		this.slots = [];
		this.xyDiff = {x: 0, y: 0};
		this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d')
    },
    spacing: {
        buffer: 10,
        buffer_larger: 40,
        slot_spacer: 50
    },
    resetValues: function () {
        this.activeCard = undefined;
        this.dragContainer.forEach (card => {
            card.yOffset = 0;
        });
        this.dragContainer = []
    }
    
}
export default VARS;