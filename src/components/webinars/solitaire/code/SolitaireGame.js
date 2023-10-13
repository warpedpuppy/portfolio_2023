import VARS from "./utils/Vars.js";
import Deal from "./cards/Deal.js";
import Deck from "./cards/Deck.js";
import MouseDown from "./action/MouseDown.js";
import MouseUp from "./action/MouseUp.js";
import Animate from "./action/Animate.js";
class SolitaireGame {
  canvas = undefined;
  initialized = false;

  constructor(canvas) {

    if (!this.initialized) {
      VARS.init(canvas);
      this.canvas = VARS.canvas = canvas;

      Deck.build();
      Deal.start();
      this.addListeners();
	  Animate.setHalt(false)
      Animate.start();
      this.initialized = true;
    }
  }

  stop() {
	Animate.stop();
	this.canvas.removeEventListener("mousemove", this.mouseMoveHandler);
	this.canvas.removeEventListener("mousedown", this.mouseDownHandler);
	this.canvas.removeEventListener("mouseup", this.mouseUpHandler);
	this.canvas.removeEventListener("mouseout", this.mouseOutHandler);
	this.initialized = false;
  }

  addListeners() {
	this.canvas.addEventListener("mousemove", this.mouseMoveHandler);
	this.canvas.addEventListener("mousedown", this.mouseDownHandler);
	this.canvas.addEventListener("mouseup", this.mouseUpHandler);
	this.canvas.addEventListener("mouseout", this.mouseOutHandler);
  }
  mouseMoveHandler = e => {

      let leftOffset = (window.innerWidth - VARS.canvas.width) / 2;
	  let rect = this.canvas.getBoundingClientRect();
      VARS.mousePoint = { x: e.pageX - leftOffset, y: e.clientY - rect.top };

  }
  mouseDownHandler= e => {

      MouseDown.setActiveCardAndPopulateDragArray();

  }
  mouseUpHandler= e => {

      if (VARS.activeCard) MouseUp.activeCardExists();

  }
  mouseOutHandler= e => {

      if (VARS.activeCard) MouseUp.activeCardExists();

  }
};
export default SolitaireGame;
