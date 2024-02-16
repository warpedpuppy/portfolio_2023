import Utils from '../../../../utils/utils';
import * as PIXI from 'pixi.js';
 
class SparklyAnimation {
        utils = Utils;
        fs = [];
        fq = 50;
        starQ = 50;
        range = 100;
        topAlpha = 1.5;
        colors = [ 0xff7575, 0xffb775, 0xfff175, 0xc3ff76, 0x7bffb8, 0x7de8ff, 0x799fff, 0xff93f7];
        pauseBoolean = false;
        constructor(canvas) {
			let w = canvas.clientWidth, h = canvas.clientHeight;
			this.canvas = canvas;
            Utils.setWidthAndHeight(w, h);
            const app = new PIXI.Application({
				background: '#000000',
				resizeTo: canvas,
			});
            canvas.appendChild(app.view);
           this.app = app;
           this.stage = app.stage;
           this.build();
        }
        build() {
            let i, firework;
            this.fs = [];
            for (i = 0; i < this.fq; i ++) {
                firework = this.FireworkInstance();
                firework.start = firework.start.bind(firework);
                firework.restart = firework.restart.bind(firework);
                firework.x = Utils.randomNumberBetween(100, Utils.canvasWidth - 100);
                firework.y = Utils.randomNumberBetween(100, Utils.canvasHeight - 100);
                this.stage.addChild(firework);
                this.fs.push(firework);
                firework.start();
            }
			window.addEventListener('resize', this.resize)
            this.app.ticker.add(this.ticker.bind(this));
        }
        stop = () => {
            this.app.destroy(true);
			window.removeEventListener('resize', this.resize)
        }
        resize = () => {
			let w = this.canvas.clientWidth, h = this.canvas.clientHeight;
            Utils.setWidthAndHeight(w, h);
        }
        FireworkInstance () {
            let cont = new PIXI.Container(),
                i = 0,
                cf = 0,
                numberOfBeams = 20,
                myBeam1,
                colorArray =this.colors,
                color = colorArray[Utils.randomIntBetween(0, colorArray.length-1)],
                that = this,
                fps = 60,
                fps2 = fps * 5,
                frames = that.utils.randomIntBetween(fps, fps2);
            cont.beams = [];
            for ( i = 0; i < numberOfBeams; i++) {
                myBeam1 = this.Beam(color);
                myBeam1.scaleX = Utils.randomNumberBetween(0.2,1)
                myBeam1.scaleY = Utils.randomNumberBetween(0.2,1)
                cont.addChild(myBeam1);
                cont.beams.push(myBeam1);
            }
            cont.cf = cf;
            cont.numberOfBeams = numberOfBeams;
            cont.twinkleStart = Math.floor(frames * 0.33);
            cont.fadeOutStart = Math.floor(frames * 0.66);
            cont.end = frames;
            cont.start = function () {
                let beam;
                for (i = 0; i < numberOfBeams; i++) {
                    beam = this.beams[i];
                    beam.speed = that.utils.randomNumberBetween(0.1, 2);
                    beam.rotation = that.utils.deg2rad(Math.random() * 360);
                    this.distance = that.utils.randomNumberBetween(50, 150);
                }
            }
            cont.restart = function () {
                this.cf = 0;
                this.x = Utils.randomNumberBetween(100, Utils.canvasWidth - 100);
                this.y = Utils.randomNumberBetween(100, Utils.canvasHeight - 100);
                let beam;
                for ( i = 0; i < numberOfBeams; i++) {
                    beam = this.beams[i];
                    beam.rotation = that.utils.deg2rad(Math.random() * 360);
                    beam.shape.x = beam.shape.y = 0;
                    beam.alpha = this.topAlpha;
                    beam.shape.isTweening = false;
                    this.distance = that.utils.randomNumberBetween(50, 150);
                    
                }
              
            }
            return cont;
        }
        Beam(color) {
            let cont = new PIXI.Container();
            let beam = PIXI.Sprite.from('/bmps/dot.png')
            beam.tint = color;
            beam.alpha = this.topAlpha;
            beam.width = beam.height = Utils.randomNumberBetween(1,3);
            cont.addChild(beam);
            cont.shape = beam;
            return cont;
        }
        pause() {
            this.pauseBoolean = !this.pauseBoolean
        }
        ticker() {
            if (!this.pauseBoolean) {
                for (let j = 0; j < this.fq; j++) {
                    let firework =  this.fs[j]
                    firework.cf ++;
                    for (let i = 0; i < firework.numberOfBeams; i++) {
                        firework.beams[i].shape.y += firework.beams[i].speed;
                        if (firework.cf >= firework.twinkleStart && firework.cf < firework.fadeOutStart) {
                            firework.beams[i].alpha = Math.random() * this.topAlpha;
                        }
                        firework.alpha = this.topAlpha;
                        firework.beams[i].alpha *= 0.95;
                    }
                    if (firework.cf >= firework.end) {
                        firework.restart();
                    }
                }
            }
          
        }
    }
export default SparklyAnimation;