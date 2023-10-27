import * as PIXI from 'pixijs';

class LandingAnimationCode {
	objectPool = [];
	objectQ = 100;
	angle = 0;
	increase;
	constructor(canvasContainer, color) {
		if (canvasContainer.children.length === 0) {
			this.color = color;
			this.canvasContainer = canvasContainer;
			this.canvasWidth = canvasContainer.offsetWidth;
			this.canvasHeight = canvasContainer.offsetHeight;
			this.halfWidth = canvasContainer.offsetWidth / 2;
			this.halfHeight = canvasContainer.offsetHeight / 2;
			const app = this.app = new PIXI.Application({ background: '#FFFFFF', resizeTo: canvasContainer });
			this.stage = app.stage;
			this.canvasContainer.appendChild(app.view);
		}
	}
	start () {
		for (let i = 0; i < this.objectQ; i++) {
			let dot = new PIXI.Sprite(PIXI.Texture.from(`/bmps/dot.png`));
			dot.radius = Math.floor(Math.random() * 100)
			dot.tint = this.color;
			dot.scale.set(0.5);
			dot.dir = 'out'
			dot.alpha = Math.random() * 0.5;
			let increase = (Math.PI * 2) / this.objectQ;
			this.angle += increase;
			dot.angle = this.angle;
			dot.x = this.canvasWidth / 2 + dot.radius * Math.cos(dot.angle);
			dot.y = this.canvasHeight / 2 + dot.radius * Math.sin(dot.angle);
			this.stage.addChild(dot);
			this.objectPool.push(dot);
		}
		this.app.ticker.add(this.ticker);
	}
	cosWave (startPoint, differential, speed) {
		const currentDate = new Date()
		return startPoint + (Math.cos(currentDate.getTime() * speed) * differential)
	}
	stop () {
		this.objectPool = [];
		this.app.destroy();
	}
	ticker = () => {
		for (let i = 0; i < this.objectQ; i++) {
			let dot = this.objectPool[i];
			if (dot.dir === 'out') {
				dot.radius ++;
				if (dot.radius > 100) {
					dot.dir = 'in';
				}
			} else {
				dot.radius --;
				if (dot.radius < 0) {
					dot.dir = 'out';
				}
			}
			dot.x = this.canvasWidth / 2 + dot.radius * Math.cos(dot.angle);
			dot.y = this.canvasHeight / 2 + dot.radius * Math.sin(dot.angle);
		}
	}

}
export default LandingAnimationCode;