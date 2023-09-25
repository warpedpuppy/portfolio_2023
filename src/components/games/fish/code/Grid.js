import * as PIXI from 'pixijs';

export default function Grid(gv) {
	return {
		cont: new PIXI.Container(),
		loopingQ: 0,
		boxes: [],
		boxHeight: undefined,
		boxWidth: undefined,
		init: function () {
			let w = gv.canvasWidth;
			let h = gv.canvasHeight;


			this.boxHeight = h / 4;
			this.boxWidth = w / 10;
			let boxHQ = this.boxHQ = 10;
			let boxVQ = this.boxVQ = 4;

			


			for (let i = 0; i < boxVQ; i ++) {
				for (let j = 0; j < boxHQ; j ++) {
					let b = new PIXI.Graphics();
					b.lineStyle(2, 0xFFFFFF, 1);
					// b.alpha = 0.15;
					b.drawRect(0, 0, this.boxWidth, this.boxHeight);
					b.x = j * this.boxWidth;
					b.y = i * this.boxHeight;
					this.cont.addChild(b)
					this.loopingQ ++;
					this.boxes.push(b)
				}
			}
		}, 
		animate: function () {
			for (let i = 0; i < this.loopingQ; i ++) {
				let box = this.boxes[i];
					box.x -= gv.vx * 0.25;
					box.y -= gv.vy * 0.25;

					if (box.y < -this.boxHeight) {
						box.y = this.boxHeight * this.boxVQ
					} else if (box.y > gv.canvasHeight) {
						box.y = -this.boxHeight;
					}

					if (box.x < -this.boxWidth) {
						box.x = this.boxWidth * this.boxHQ
					} else if (box.x > gv.canvasWidth) {
						box.x = -this.boxWidth;
					}
			}
		}

	}
}