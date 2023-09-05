import VARS from "./utils/Vars.js";
import Deal from "./cards/Deal.js";
import Deck from "./cards/Deck.js";
import MouseDown from "./action/MouseDown.js";
import MouseUp from "./action/MouseUp.js";
import Animate from "./action/Animate.js";
const SolitaireGame = {
  canvas: undefined,
  initialized: false,
  init: function (canvas) {
    if (!this.initialized) {
      VARS.init(canvas);
      this.canvas = VARS.canvas = canvas;

      Deck.build();
      Deal.start();
      this.addListeners();

      Animate.start();
      this.initialized = true;
    }
  },
  addListeners: function () {
    this.mouseMoveHandler();
    this.mouseDownHandler();
    this.mouseUpHandler();
    this.mouseOutHandler();
  },
  mouseMoveHandler: function () {
    this.canvas.addEventListener("mousemove", (e) => {
      let leftOffset = (window.innerWidth - VARS.canvas.width) / 2;
	  let rect = this.canvas.getBoundingClientRect();
      VARS.mousePoint = { x: e.pageX - leftOffset, y: e.clientY - rect.top };
    });
  },
  mouseDownHandler: function () {
    this.canvas.addEventListener("mousedown", () => {
      MouseDown.setActiveCardAndPopulateDragArray();
    });
  },
  mouseUpHandler: function () {
    this.canvas.addEventListener("mouseup", (e) => {
      if (VARS.activeCard) MouseUp.activeCardExists();
    });
  },
  mouseOutHandler: function () {
    this.canvas.addEventListener("mouseout", (e) => {
      if (VARS.activeCard) MouseUp.activeCardExists();
    });
  },
};
export default SolitaireGame;
