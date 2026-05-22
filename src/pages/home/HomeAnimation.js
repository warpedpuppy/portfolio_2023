import * as PIXI from "pixi.js";
import Utils from "../../utils/utils";

class HomeAnimation {
  topAlpha = 1;
  colors = [
    0xff7575, 0xffb775, 0xfff175, 0xc3ff76,
    0x7bffb8, 0x7de8ff, 0x799fff, 0xff93f7,
  ];
  ringLineQ = 220;
  dotQ = 350;
  fireworkQ = 28;
  pauseBoolean = false;

  constructor(canvas) {
    this.canvas = canvas;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    Utils.setWidthAndHeight(w, h);

    this.app = new PIXI.Application({
      background: "#ffffff",
      resizeTo: canvas,
      antialias: true,
    });
    canvas.appendChild(this.app.view);
    this.stage = this.app.stage;

    this.ringCont = new PIXI.Container();
    this.dotCont = new PIXI.Container();
    this.fireworkCont = new PIXI.Container();
    this.stage.addChild(this.ringCont);
    this.stage.addChild(this.dotCont);
    this.stage.addChild(this.fireworkCont);

    this.buildRing();
    this.buildDots();
    this.buildFireworks();

    window.addEventListener("resize", this.resize);
    this.app.ticker.add(this.tick);
  }

  stop = () => {
    window.removeEventListener("resize", this.resize);
    this.app.destroy(true);
  };

  resize = () => {
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    Utils.setWidthAndHeight(w, h);
    this.ringCont.x = w / 2;
    this.ringCont.y = h / 2;
    this.dotCont.x = w / 2;
    this.dotCont.y = h / 2;
  };

  buildRing() {
    this.ringCont.x = Utils.canvasWidth / 2;
    this.ringCont.y = Utils.canvasHeight / 2;
    this.ringLines = [];
    for (let i = 0; i < this.ringLineQ; i++) {
      const line = PIXI.Sprite.from("/bmps/line.png");
      line.anchor.set(0, 0.5);
      line.rotation = Utils.deg2rad(i * (360 / this.ringLineQ));
      line.scale.y = 0.18;
      line.scaleValue = Utils.randomNumberBetween(0.4, 1.2);
      line.scaleDiff = Utils.randomNumberBetween(0.4, 0.9);
      line.scale.x = line.scaleValue;
      line.alpha = 0.07;
      line.speed = Utils.randomNumberBetween(0.0005, 0.0013);
      line.tint = Utils.randomItemFromArray(this.colors);
      this.ringCont.addChild(line);
      this.ringLines.push(line);
    }
  }

  buildDots() {
    this.dotCont.x = Utils.canvasWidth / 2;
    this.dotCont.y = Utils.canvasHeight / 2;
    this.dots = [];
    const w = Utils.canvasWidth;
    const h = Utils.canvasHeight;
    for (let i = 0; i < this.dotQ; i++) {
      const isBam = Math.random() < 0.1;
      const sprite = isBam
        ? PIXI.Sprite.from("/bmps/bam-logo.svg")
        : PIXI.Sprite.from("/bmps/dot.png");
      sprite.anchor.set(0.5);
      sprite.isBam = isBam;
      const s = isBam
        ? Utils.randomNumberBetween(0.2625, 0.4875)
        : Utils.randomNumberBetween(0.2, 0.9);
      sprite.scale.x = sprite.scale.y = s;
      sprite.startX = (Math.random() < 0.5 ? -1 : 1) * Math.random() * (w * 0.55);
      sprite.startY = (Math.random() < 0.5 ? -1 : 1) * Math.random() * (h * 0.55);
      sprite.xDiff = Math.abs(sprite.startX * 0.6);
      sprite.yDiff = Math.abs(sprite.startY * 0.6);
      sprite.x = sprite.startX;
      sprite.y = sprite.startY;
      if (isBam) {
        sprite.fadeBase = Utils.randomNumberBetween(0.16, 0.2);
        sprite.fadeDiff = Utils.randomNumberBetween(0.1, 0.14);
        sprite.fadeSpeed = Utils.randomNumberBetween(0.0004, 0.0011);
        sprite.alpha = sprite.fadeBase;
      } else {
        sprite.alpha = Math.random() * 0.45 + 0.1;
      }
      sprite.speed = Utils.randomNumberBetween(0.0004, 0.0013);
      sprite.tint = Utils.randomItemFromArray(this.colors);
      this.dotCont.addChild(sprite);
      this.dots.push(sprite);
    }
  }

  buildFireworks() {
    this.fireworks = [];
    for (let i = 0; i < this.fireworkQ; i++) {
      const fw = this.Firework();
      fw.x = Utils.randomNumberBetween(60, Utils.canvasWidth - 60);
      fw.y = Utils.randomNumberBetween(60, Utils.canvasHeight - 60);
      this.fireworkCont.addChild(fw);
      this.fireworks.push(fw);
      fw.start();
    }
  }

  Firework() {
    const cont = new PIXI.Container();
    const numberOfBeams = 18;
    const color = Utils.randomItemFromArray(this.colors);
    const that = this;
    const fps = 60;
    const frames = Utils.randomIntBetween(fps, fps * 5);
    cont.beams = [];
    for (let i = 0; i < numberOfBeams; i++) {
      const cb = new PIXI.Container();
      const beam = PIXI.Sprite.from("/bmps/dot.png");
      beam.tint = color;
      beam.alpha = that.topAlpha;
      beam.width = beam.height = Utils.randomNumberBetween(1.5, 3);
      cb.addChild(beam);
      cb.shape = beam;
      cont.addChild(cb);
      cont.beams.push(cb);
    }
    cont.cf = 0;
    cont.numberOfBeams = numberOfBeams;
    cont.twinkleStart = Math.floor(frames * 0.33);
    cont.fadeOutStart = Math.floor(frames * 0.66);
    cont.end = frames;
    cont.start = function () {
      for (let i = 0; i < numberOfBeams; i++) {
        const beam = this.beams[i];
        beam.speed = Utils.randomNumberBetween(0.05, 1.4);
        beam.rotation = Utils.deg2rad(Math.random() * 360);
      }
    };
    cont.restart = function () {
      this.cf = 0;
      this.x = Utils.randomNumberBetween(60, Utils.canvasWidth - 60);
      this.y = Utils.randomNumberBetween(60, Utils.canvasHeight - 60);
      for (let i = 0; i < numberOfBeams; i++) {
        const beam = this.beams[i];
        beam.rotation = Utils.deg2rad(Math.random() * 360);
        beam.shape.x = beam.shape.y = 0;
        beam.alpha = that.topAlpha;
      }
    };
    return cont;
  }

  tick = () => {
    if (this.pauseBoolean) return;

    for (let i = 0; i < this.ringLineQ; i++) {
      const line = this.ringLines[i];
      line.scale.x = Utils.cosWave(line.scaleValue, line.scaleDiff, line.speed);
    }
    this.ringCont.rotation += 0.0025;

    this.dotCont.rotation -= 0.0015;
    for (let i = 0; i < this.dots.length; i++) {
      const dot = this.dots[i];
      dot.x = Utils.cosWave(dot.startX, dot.xDiff, dot.speed);
      dot.y = Utils.cosWave(dot.startY, dot.yDiff, dot.speed);
      if (dot.isBam) {
        dot.rotation = -this.dotCont.rotation;
        dot.alpha = Utils.cosWave(dot.fadeBase, dot.fadeDiff, dot.fadeSpeed);
      }
    }

    for (let j = 0; j < this.fireworks.length; j++) {
      const firework = this.fireworks[j];
      firework.cf++;
      for (let i = 0; i < firework.numberOfBeams; i++) {
        firework.beams[i].shape.y += firework.beams[i].speed;
        if (
          firework.cf >= firework.twinkleStart &&
          firework.cf < firework.fadeOutStart
        ) {
          firework.beams[i].alpha = Math.random() * this.topAlpha;
        }
        firework.alpha = this.topAlpha;
        firework.beams[i].alpha *= 0.95;
      }
      if (firework.cf >= firework.end) firework.restart();
    }
  };
}

export default HomeAnimation;
