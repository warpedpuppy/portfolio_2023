export default class HomeAnimation {
	constructor(canvas){
		this.canvas = canvas;
		this.canvasWidth = window.innerWidth;
		this.canvasHeight = window.innerHeight;
		this.halfWidth = this.canvasWidth / 2;
		this.halfHeight = this.canvasHeight / 2;
		this.canvas.setAttribute("width", this.canvasWidth);
		this.canvas.setAttribute("height", this.canvasHeight);
		this.ctx = canvas.getContext('2d');
		this.maxDistance = Math.max(this.halfWidth, this.halfHeight);
		this.itemQ = 100;
		this.items = [];
		this.radius = 100;
		this.center = { x: this.halfWidth, y: this.halfHeight};
		this.contextRotation = 0;

		const img = new Image();
		img.onload = () => {
			
		};
		img.src = "/bmpx/dragon/star.png";


	}
	start() {
		const img = new Image();
		img.onload = () => {
			for (let i = 0; i < this.itemQ; i++) {
				const { x, y } = this.distributeAroundCircle(this.center, this.radius, i )
				this.items.push(this.shape(x, y, img))
			}
			this.tick();
			console.log("loaded")
		};
		img.src = "/bmps/home/star.png";
		
		window.addEventListener('resize', this.resizeHandler.bind(this))
	}
	stop() {
		window.removeEventListener('resize', this.resizeHandler)
	}
	resizeHandler () {
		this.canvasWidth = window.innerWidth;
		this.canvasHeight = window.innerHeight;
		this.halfWidth = this.canvasWidth / 2;
		this.halfHeight = this.canvasHeight / 2;
		this.center = { x: this.halfWidth, y: this.halfHeight};
		this.canvas.setAttribute("width", this.canvasWidth);
		this.canvas.setAttribute("height", this.canvasHeight);
	}
	distributeAroundCircle(circleCenter, radius, i) {
		const x = circleCenter.x + radius * Math.cos((2 * Math.PI) * i / this.itemQ )
		const y = circleCenter.y + radius * Math.sin((2 * Math.PI) * i  / this.itemQ)
		return { x, y }
	}
	shape (x,y, img) {
		return {
			x,
			y,
			w: 5,
			h: 5,
			r: Math.random() * this.maxDistance,
			rq: (Math.random() * 0.25) + 0.5,
			img
		}
	}
	tick= () =>  {
		
		this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
		this.contextRotation += 0.015;
		if (this.contextRotation >= (2 * Math.PI)) this.contextRotation = 0;
		this.ctx.save();
		this.ctx.translate(this.halfWidth, this.halfHeight);
		this.ctx.rotate(this.contextRotation );
		this.ctx.translate(-this.halfWidth, -this.halfHeight);
		
		for (let i = 0; i < this.itemQ; i++) {
			let box = this.items[i];
			let {  w, h, img } = box;
			box.r += box.rq;
			if ( box.r > this.maxDistance ) box.r = 0;
			
			const { x, y } = this.distributeAroundCircle(this.center, box.r, i )

			// this.ctx.strokeStyle = "rgba(0,0,0,0.25)";
			// this.ctx.moveTo(this.halfWidth, this.halfHeight);
			// this.ctx.lineTo(x, y);
			// this.ctx.stroke();
			
			
			this.ctx.fillStyle = "rgb(0, 0, 0)";
			// this.ctx.fillRect(x, y, w, h)
			this.ctx.drawImage(img, x, y, 30, 28)

		}
		this.ctx.restore();
		requestAnimationFrame(this.tick)
	}
}