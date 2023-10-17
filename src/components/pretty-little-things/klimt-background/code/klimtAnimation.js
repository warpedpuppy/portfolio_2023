import * as PIXI from 'pixijs';
import RainbowSwirls from './rainbowSwirls';
import Utils from '../../../../utils/utils';

class KlimtAnimation {
    rainbowSwirlsQ = 4;
    rainbowSwirlInstances = [];
    pauseBoolean = false;
	halt = false;
    constructor (canvas) {
        this.rainbowSwirlInstances = [];
		let w = canvas.clientWidth, h = canvas.clientHeight;
		this.canvas = canvas;
        Utils.setWidthAndHeight(w, h);

        const app = new PIXI.Application({
			background: '#000000',
			resizeTo: canvas,
		});
        canvas.appendChild(app.view);
        
        const container = new PIXI.Container();

        app.stage.addChild(container);

        this.app = app;
        
        this.startXs = ['TL', 'BL', 'TR', 'BR']
        for (let i = 0; i < this.rainbowSwirlsQ; i++) {
          this.tileColumn = RainbowSwirls()
          this.tileColumn.init(container, this.startXs[i], 30, 15, w, h)
          this.tileColumn.addToStage()
          this.rainbowSwirlInstances.push(this.tileColumn)
        }
        window.addEventListener('resize', this.resize)
        app.ticker.add(this.ticker.bind(this));
    }
    resize = () => {
		let w = this.canvas.clientWidth, h = this.canvas.clientHeight;
		for (let i = 0; i < this.rainbowSwirlsQ; i++) {
			this.rainbowSwirlInstances[i].resize(w, h)
		}
    }
    pause() {
        this.pauseBoolean = !this.pauseBoolean;
    }
    stop() {
		window.removeEventListener('resize', this.resize)
        this.app.destroy();
        for (let i = 0; i < this.rainbowSwirlsQ; i++) {
            this.rainbowSwirlInstances[i].removeFromStage()
        }
		this.halt = true;
    }
    ticker(delta) {
		if (this.halt) return ; 
        if (!this.pauseBoolean) {
            for (let i = 0; i < this.rainbowSwirlsQ; i++) {
                this.rainbowSwirlInstances[i].animate()
            }
        }
       
    }
    
}
export default KlimtAnimation


