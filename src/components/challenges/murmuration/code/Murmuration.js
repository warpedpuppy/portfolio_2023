import Starling from "./Starlings.js";

export default class Murmuration {
  birdQ;
  birds = [];
  frame = 0;
  speed = 1.4;
  destinationPoints = { x: 0.5, y: 0.5, z: 0.5 };
  birdLineCount = 5;
  birdLineIndex = -1;
  z = { current: 1, target: 1 };

  constructor(engine, canvasWidth, canvasHeight, birdQuantity) {
	this.birdQ = birdQuantity;
    this.engine = engine;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.registerDestinationPoints();
    this.createBirds(this.birdLineCount);
  }

  resize(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  registerDestinationPoints() {
    setInterval(() => {
      this.destinationPoints.x = Math.random();
      this.destinationPoints.y = Math.random();
      this.z.target = 0.5 + Math.random();
    }, 1000);
  }

  createBirds(birdLineCount) {
    for (let i = 0; i < this.birdQ; i++) {
      let b = new Starling(this.engine, this.canvasWidth, this.canvasHeight);
      this.birds.push(b);
    }
  }

  renderBirds() {
    this.frame++;
    this.alterZ();

    //change math
    this.birds.forEach((bird) => {
      bird.solveBirdMove(this.frame, this.speed, this.destinationPoints);
    });

    //draw new birds
    this.birds.forEach((bird) => {
      bird.drawBird(this.engine, this.canvasWidth, this.canvasHeight, this.z);
    });
  }

  alterZ() {
    this.z.current += (this.z.target - this.z.current) / 100;
  }

  animate() {
    this.frame++;
    this.z.current += (this.z.target - this.z.current) / 100;
    this.renderBirds();
  }
}
