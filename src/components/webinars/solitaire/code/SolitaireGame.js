import VARS from "./utils/Vars.js";
import Deal from "./cards/Deal.js";
import Deck from "./cards/Deck.js";
import MouseDown from "./action/MouseDown.js";
import MouseUp from "./action/MouseUp.js";
import Animate from "./action/Animate.js";
import { isBrowser, isMobile } from 'react-device-detect';

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
	if (isMobile) {
		this.canvas.removeEventListener("touchmove", this.mouseMoveHandler);
		this.canvas.removeEventListener("touchstart", this.mouseDownHandler);
		this.canvas.removeEventListener("touchend", this.mouseUpHandler);
	} else {
		this.canvas.removeEventListener("mousemove", this.mouseMoveHandler);
		this.canvas.removeEventListener("mousedown", this.mouseDownHandler);
		this.canvas.removeEventListener("mouseup", this.mouseUpHandler);
		this.canvas.removeEventListener("mouseout", this.mouseOutHandler);
	}
	window.removeEventListener("resize", this.reset);
	this.initialized = false;
  }

  addListeners() {
	if (isMobile) {
		this.canvas.addEventListener("touchmove", this.mouseMoveHandler);
		this.canvas.addEventListener("touchstart", this.mouseDownHandler);
		this.canvas.addEventListener("touchend", this.mouseUpHandler);
	} else {
		this.canvas.addEventListener("mousemove", this.mouseMoveHandler);
		this.canvas.addEventListener("mousedown", this.mouseDownHandler);
		this.canvas.addEventListener("mouseup", this.mouseUpHandler);
		this.canvas.addEventListener("mouseout", this.mouseOutHandler);
	}
	window.addEventListener("resize", this.reset);
  }

  reset = () => {
	this.initialized = false;
	if (!this.initialized) {
		VARS.init(this.canvas);
		Deck.build();
		Deal.start();
		Animate.setHalt(false)
		Animate.start();
		this.initialized = true;
	  }
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
