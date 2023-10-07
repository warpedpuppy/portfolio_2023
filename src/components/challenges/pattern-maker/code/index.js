import Disc from "./disc.js";
import DiscInDisc from "./discInDisc.js";
import Utils from "./utils.js";
import Graphics from "./graphics.js";
import Oval from "./oval.js";
export default class GameCode {
  hide = false;
  activePoint = undefined;
  testX = undefined;
  testY = undefined;
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.discs = [];
    this.discsInDiscs = [];
    this.ovals = [];

    this.canvas.width = 500;
    this.canvas.height = 500;
    this.hide = false;
    Graphics.init(this.ctx);
	// this.loop = this.loop.bind(this)
    this.loop();
    this.addNewDisc();

    document.querySelector("#clear").addEventListener("click", this.clear);
    document
      .querySelector("#hideDiscs")
      .addEventListener("click", this.hideDiscs);
    document
      .querySelector("#addNewDiscInDisc")
      .addEventListener("click", this.addNewDiscInDisc);
    document
      .querySelector("#addNewDisc")
      .addEventListener("click", this.addNewDisc);
    document.addEventListener("mousemove", this.mouseMoveHandler);
    document.addEventListener("mousedown", this.mouseDownHandler);
  }
  stop() {
    // document.querySelector("#clear").removeEventListener("click", this.clear);
    // document
    //   .querySelector("#hideDiscs")
    //   .removeEventListener("click", this.hideDiscs);
    // document
    //   .querySelector("#addNewDiscInDisc")
    //   .removeEventListener("click", this.addNewDiscInDisc);
    // document
    //   .querySelector("#addNewDisc")
    //   .removeEventListener("click", this.addNewDisc);
    // document
    //   .querySelector("#addOval")
    //   .removeEventListener("click", this.addNewDisc);
    document.removeEventListener("mousemove", this.mouseMoveHandler);
    document.removeEventListener("mousedown", this.mouseDownHandler);
  }

  loop = () => {
    this.ctx.strokeStyle = "#000000";
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    Graphics.drawCircle({ x: 250, y: 250 }, 250);
    this.discs.forEach((disc) => {
      disc.animate();
    });
    this.discsInDiscs.forEach((discsInDisc) => {
      discsInDisc.animate();
    });
    this.ovals.forEach((oval) => {
      oval.animate();
    });

    requestAnimationFrame(this.loop);
  }

  clear = () => {
    this.discs.length = 0;
    this.discsInDiscs.length = 0;
  }


  addNewDisc = () =>  {
    let disc = new Disc(
      this.ctx,
      Utils.randomIntBetween(100, 125),
      this.discs.length - 1
    );

    this.discs.push(disc);
  }
  addNewDiscInDisc = () => {
    let disc = new DiscInDisc(
      this.ctx,
      Utils.randomIntBetween(100, 125),
      this.discsInDiscs.length - 1
    );
    this.discsInDiscs.push(disc);
  }
  hideDiscs = () => {
    this.hide = !this.hide;
    for (let i = 0; i < this.discs.length; i++) {
      this.discs[i].hide(this.hide);
    }
    for (let i = 0; i < this.discsInDiscs.length; i++) {
      this.discsInDiscs[i].hide(this.hide);
    }
  }

  mouseMoveHandler = (e) => {
    const { pageX: mouseX, pageY: mouseY } = e;
    const { x: canvasX, y: canvasY } = this.canvas.getBoundingClientRect();

    let mouseXOnCanvas = (this.testX = mouseX - canvasX);
    let mouseYOnCanvas = (this.testY = mouseY - canvasY);

    let test = [];
    for (let i = 0; i < this.discs.length; i++) {
      let disc = this.discs[i];
      let coords = disc.getDiscCoordinates();

      if (
        Utils.pointCircle(
          mouseXOnCanvas,
          mouseYOnCanvas,
          coords.x,
          coords.y,
          coords.radius
        )
      ) {
        this.activePoint = { x: mouseXOnCanvas, y: mouseYOnCanvas };
        test.push(true);
        //
      } else {
        test.push(false);
      }

      if (test.includes(true)) {
        this.canvas.classList.add("over");
        disc.highlight(true);
        break;
      } else {
        this.canvas.classList.remove("over");
        disc.highlight(false);
      }
    }

    for (let i = 0; i < this.discsInDiscs.length; i++) {
      let disc = this.discsInDiscs[i];
      let coords = disc.getDiscCoordinates();

      if (
        Utils.pointCircle(
          mouseXOnCanvas,
          mouseYOnCanvas,
          coords.x,
          coords.y,
          coords.radius
        )
      ) {
        this.activePoint = { x: mouseXOnCanvas, y: mouseYOnCanvas };
        test.push(true);
        //
      } else {
        test.push(false);
      }

      if (test.includes(true)) {
        this.canvas.classList.add("over");
        disc.highlight(true);
        break;
      } else {
        this.canvas.classList.remove("over");
        disc.highlight(false);
      }
    }
  };

  mouseDownHandler = (e) => {
    let happen;
    for (let i = 0; i < this.discs.length; i++) {
      let disc = this.discs[i];
      happen = disc.addDot(this.activePoint);
      if (happen) break;
    }
    if (happen) return;

    for (let i = 0; i < this.discsInDiscs.length; i++) {
      let disc = this.discsInDiscs[i];
      let happen = disc.addDot(this.activePoint);
      if (happen) break;
    }
  };
}
