import * as PIXI from 'pixijs';
import Utils from '../../../../utils/utils';
import Tweens from '../../../../utils/Tweens';
class PrettyRingAnimation  {

    colors = [0x446996,0x2d4264,0x182033,0xb2826,0x1f3423,0xb482a,0x364a2b,0x262a16,0x3a4016,0x888136,0x635021,0x533217,0x5c2a1d];
    dots=  [];
    totalItems=  1000;
    pauseBoolean=  false;
    constructor (canvas) {
        this.dots = [];
		let w = canvas.clientWidth, h = canvas.clientHeight;
        Utils.setWidthAndHeight(w, h);
        const app = new PIXI.Application({
			background: '#000000',
			resizeTo: canvas,
		});
        canvas.appendChild(app.view);
        
        const container = new PIXI.Container();
        app.stage.addChild(container);

        this.app = app;
        let arr = Utils.distributeAroundCircle({x:0, y: 0}, this.totalItems, 400 )

        let particleContainer = this.particleContainer = new PIXI.ParticleContainer();
        particleContainer.pivot.set(0.5)
        let index = 0;
        for (let i = 0; i < arr.length; ++i) {
            let sprite = PIXI.Sprite.from("/bmps/dot.png");
            sprite.x = sprite.storeX = arr[i].x;
            sprite.y = sprite.storeY = arr[i].y;
            sprite.variance = Utils.randomNumberBetween(1, 50)
            sprite.variantSpeed = Utils.randomNumberBetween(0.0002, 0.0025)
            sprite.anchor.set(0.5)
            sprite.scale.set((Math.random()*1)+0.2)
            sprite.tint = this.colors[index];
            index ++;
            if (index > this.colors.length - 1)index = 0;
            particleContainer.addChild(sprite);
            this.dots.push(sprite)
        }
        particleContainer.scale.set(1 / window.devicePixelRatio)
        app.stage.alpha = 0;
        
        app.stage.addChild(particleContainer);
        particleContainer.x = (Utils.canvasWidth / 2) ;
        particleContainer.y = (Utils.canvasHeight / 2) ;
        this.particleContainer = particleContainer;

        Tweens.tween(app.stage, 3, {alpha: [0,1]});
        app.ticker.add(this.ticker.bind(this));
    }
    pause() {
        this.pauseBoolean = !this.pauseBoolean;
    }
    resize(w, h) {
        Utils.setWidthAndHeight(w, h);
        this.app.renderer.resize(w, h)
        this.particleContainer.x = (Utils.canvasWidth / 2) ;
        this.particleContainer.y = (Utils.canvasHeight / 2) ;
    }
    stop() {
        this.app.destroy(true);
    }
    ticker(delta) {
        if (!this.pauseBoolean) {
            Tweens.animate();
            this.particleContainer.rotation += 0.004;
            for (let i = 0; i < this.totalItems; ++i) {
                if (i % 2 === 0) {
                 this.dots[i].x = Utils.cosWave(this.dots[i].storeX, this.dots[i].variance,  this.dots[i].variantSpeed)
                } else {
                 this.dots[i].y = Utils.cosWave(this.dots[i].storeY, this.dots[i].variance,  this.dots[i].variantSpeed)
                }
            }
        }
     
    }
    
}
export default PrettyRingAnimation;


