import * as PIXI from "pixi.js";
import Utils from '../../../../utils/utils';
import Tweens from '../../../../utils/Tweens';

class PinkDrawersAnimation {
  gv = {};
  pegQ = 0;
  pegs = [];
  app = new PIXI.Application();
  body = new PIXI.Graphics();
  foregroundContainer = new PIXI.Container();
  backgroundContainer = new PIXI.Container();
  canvasID = '';
  shakeAllow = true;
  beads = [];
  beadQ = 1200;
  beadsAtATime = 400;
  beadCounter = 0;
  beadsOnStage = [];
  beadRadius = 5;
  beadLoopingQ = 0;
  horizBoxesQ = 5;
  vertBoxesQ = 5;
  totalBoxes = undefined;
  blockContainers = [];
  blockForegrounds = [];
  blockBackgrounds = [];
  activeDrawer = undefined;
  constructor(canvas) {
    this.canvas = canvas;
    let w = canvas.clientWidth, h = canvas.clientHeight;
    this.canvasHeight = h;

    Utils.setWidthAndHeight(w, h);

    const app = new PIXI.Application({
      background: '#000000',
      resizeTo: canvas,
    });
    if (canvas.children.length) return;
    canvas.appendChild(app.view);

    const container = new PIXI.Container();

    app.stage.addChild(container);

    this.totalBoxes = this.horizBoxesQ * this.vertBoxesQ;
    this.addBeadsHandler = this.addBeadsHandler.bind(this)
    this.stage = app.stage;

    this.stage.addChild(this.backgroundContainer);
    this.stage.addChild(this.foregroundContainer);
    this.rainbowShake = this.rainbowShake.bind(this);
    this.shakeAllow = true;
    this.width = w;
    this.height = h;

    //make object pools
    for (let j = 0; j < this.beadQ; j++) {
      let b = this.Bead();
      this.beads.push(b)
    }
    for (let j = 0; j < this.totalBoxes; j++) {
      this.blockContainers.push(new PIXI.Graphics());
      this.blockForegrounds.push(new PIXI.Graphics());
      this.blockBackgrounds.push(new PIXI.Graphics());
    }

    this.app.ticker.add(this.animate.bind(this));
    this.resizeHandler();

    this.buildBoard()
    this.rainbowShake();
    window.onresize = this.resizeHandler;
  }

  stop() {
    clearTimeout(this.timeout);
    window.onresize = undefined;
    this.app.ticker.destroy();
  }
  Bead() {
    let bead = new PIXI.Graphics();
    bead.radius = this.beadRadius;
    bead
      .beginFill('#FFFF00')
      .drawCircle(0, 0, bead.radius)
      .endFill();
    return bead;
  }
  resizeHandler = () => {
    this.width = this.canvas.clientWidth;
    this.height = this.canvasHeight;
    this.clear();
    this.buildBoard(this.backgroundContainer);
  }
  clear() {
    this.backgroundContainer.removeChildren();
    for (let j = 0; j < this.totalBoxes; j++) {
      this.blockContainers[j].removeChildren();
      this.blockBackgrounds[j].removeChildren();
    }
  }
  buildBoard() {
    let horizBoxesWidth = this.horizBoxesWidth = this.width / this.horizBoxesQ,
      vertBoxesHeight = 50, //this.height / this.vertBoxesQ,
      blockcontainer,
      blockBackground,
      blockForeground;
    this.backgroundContainer.removeChildren();
    this.pegQ = 0;
    this.pegs = [];
    for (let i = 0; i < this.horizBoxesQ; i++) {
      for (let j = 0; j < this.vertBoxesQ; j++) {
        blockcontainer = this.blockContainers[this.pegQ];
        blockBackground = this.blockBackgrounds[this.pegQ];
        blockcontainer.cont = blockBackground;
        blockcontainer.addChild(blockBackground)
        blockForeground = this.blockForegrounds[this.pegQ];
        blockForeground.clear();
        blockForeground
          .beginFill(0xFF00FF)
          .lineStyle(2, 0xFFFFFF, 1)
          .moveTo(0, 0)
          .lineTo(horizBoxesWidth, 0)
          .lineTo(horizBoxesWidth, vertBoxesHeight)
          .lineTo(0, vertBoxesHeight)
          .lineTo(0, 0)
          .endFill();
        blockcontainer.x = i * horizBoxesWidth + horizBoxesWidth / 2;
        blockcontainer.y = j * vertBoxesHeight + vertBoxesHeight / 2;
        blockcontainer.graphic = blockForeground;
        blockForeground.pivot = new PIXI.Point(horizBoxesWidth / 2, vertBoxesHeight / 2);
        this.pegs.push(blockcontainer)
        blockcontainer.addChild(blockForeground)
        this.backgroundContainer.addChild(blockcontainer);
        this.pegQ++;
      }
    }
  }
  destroy() {
    this.shakeAllow = false;
    this.tl.stop();
    this.tl = null;
  }
  rainbowShake() {
    let newIndex = Math.floor(Math.random() * this.pegs.length);
    let element = this.pegs[newIndex];
    let parent = element.parent;
    parent.removeChild(element);
    parent.addChild(element);

    this.activeDrawer = element.graphic;
    element.graphic.scale.set(1.2);
    element.graphic.shake = 0;
    this.timeout = setTimeout(() => this.restore(element.graphic), 1000)
    this.addBeadsHandler(element)
  }
  restore(item) {
    item.scale.set(1);
    item.rotation = 0;
    this.activeDrawer = undefined;
    this.timeout = setTimeout(this.rainbowShake, 1000)
  }
  addBeadsHandler(element) {

    for (let i = 0; i < this.beadsAtATime; i++) {
      let bead = this.beads[this.beadCounter]
      bead.x = Math.random() * this.horizBoxesWidth - (this.horizBoxesWidth / 2);
      bead.y = 0;
      bead.blockCont = true;
      bead.vy = (Math.random() * 3) + 3;
      bead.vx = (Math.random() * 1) + 1;
      if (bead.x < 0) { bead.vx *= -1; }
      element.cont.addChild(bead);
      this.beadCounter++;
      this.beadsOnStage.push(bead);
      if (this.beadCounter >= this.beadQ) {
        this.beadCounter = 0;
      }
    }
    this.beadLoopingQ = this.beadsOnStage.length;
  }
  displayFPS(fps) {

    document
      .getElementById('fps-checker-fps')
      .innerHTML = `current fps = ${Math.round(fps)}`;
    document
      .getElementById('fps-checker-ballQ')
      .innerHTML = `current ball per drawer q = ${this.beadsAtATime}`;

    if (Number(fps) < 30) {
      this.beadsAtATime = 20;
    } else {
      this.beadsAtATime = 400;
    }
  }
  animate() {


    if (this.activeDrawer) {
      this.activeDrawer.rotation = Utils.cosWave(0, Utils.deg2rad(10), 0.05)
    }
    let gravity = 0.03;
    let bead;
    this.displayFPS(this.app.ticker.FPS)


    for (let i = 0; i < this.beadLoopingQ; i++) {

      bead = this.beadsOnStage[i];
      if (bead && bead.parent) {
        //if(bead.vy > 2)bead.vy -=2;
        bead.y += bead.vy;
        bead.x += bead.vx;
        bead.vy += gravity;

        let globalPoint = bead.toGlobal(bead.parent, new PIXI.Point(bead.x, bead.y), false);
        if (globalPoint.y > this.canvasHeight - bead.radius) {
          bead.vy = -(Math.random() * 3) - 1;
          //switch bead to front plane if not
          if (bead.blockCont) {
            bead.blockCont = false;
            bead.y = globalPoint.y;
            bead.x = globalPoint.x;
            this.stage.addChild(bead);
          }
        }

        if (globalPoint.x < 0 || globalPoint.x > this.width) {
          bead.parent.removeChild(bead);
          this.beadsOnStage.splice(i, 1);
        }
      }

    }

  }
}
export default PinkDrawersAnimation;
