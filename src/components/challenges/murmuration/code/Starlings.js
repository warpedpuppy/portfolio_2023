export default class Starling {
  wing = Math.random();
  wingAdd = Math.random();
  speed = (0.2 + Math.random() * 0.8) / 2000;
  pos = {
    x: 0.25 + Math.random() * 0.5,
    y: 0.25 + Math.random() * 0.5,
    z: Math.random(),
  };
  move = {
    x: (0.5 - Math.random()) / 100,
    y: (0.5 - Math.random()) / 100,
    z: 0,
  };
  ownMove = {
    t: (20 + Math.random() * 100) | 0,
    x: 0,
    y: 0,
  };
  bodyHeight = 2;
  bodyWidth = 40;
  wingHeight = 20;
  wingFlapSpeed = (Math.random() * 0.025) + 0.0275;
  speedLimit = 0.003;
  

  constructor(engine, canvasWidth, canvasHeight) {
	this.engine = engine;
	this.canvasWidth = canvasWidth;
	this.canvasHeight = canvasHeight;
  }

  enforceSpeedLimit () {
	  if (Math.abs(this.move.x) > this.speedLimit) {
		this.move.x *= 0.99;
	  }
	  if (Math.abs(this.move.y) > this.speedLimit) {
		this.move.y *= 0.99;
	  }
	  if (Math.abs(this.move.z) > this.speedLimit) {
		this.move.z *= 0.99;
	  }
  }

  preventClumping (frame) {
	if (frame % this.ownMove.t === 0) {
		this.ownMove.x = (0.5 - Math.random()) / 3;
		this.ownMove.y = (0.5 - Math.random()) / 3;
	  }
  }

  solveBirdMove(frame, speed, destinationPoints) {
   
	this.enforceSpeedLimit();
	this.preventClumping(frame);

    this.move.x += speed * (destinationPoints.x - this.pos.x + this.ownMove.x) * this.speed;
    this.move.y += speed * (destinationPoints.y - this.pos.y + this.ownMove.y) * this.speed;
    this.move.z += speed * (destinationPoints.z - this.pos.z) * this.speed;

	this.pos.x += this.move.x;
	this.pos.y += this.move.y;
	this.pos.z += this.move.z;
  }

  drawBird() {
	const { canvasWidth, canvasHeight, move } = this;
	let atan = Math.atan2(move.y * canvasHeight, move.x * canvasWidth);
	let pos = {
		x: this.pos.x * canvasWidth,
		y: this.pos.y * canvasHeight,
		z: this.pos.z * 1.5,
	  };
    this.drawBody(pos, atan);
  }
  drawBody(pos, atan) {
	const { engine } = this;
	let startingWingTop = pos.y - this.wingHeight;
	let wingHeight = this.cosWave(55, 55, this.wingFlapSpeed);//this.cosWave(startingWingTop, this.wingHeight, this.wingFlapSpeed)
	let wingHeight2 = this.cosWave(10, this.wingHeight, this.wingFlapSpeed);//this.cosWave(startingWingTop, this.wingHeight, this.wingFlapSpeed)
	//rotate   
	engine.save();
	engine.translate(pos.x, pos.y);
	engine.rotate(atan);
	engine.translate(-pos.x, -pos.y);
	engine.fillStyle = '#CCCCCC';
	let scale = 0.25;
	function scaleIt(num) {
		return num * scale;
	}
	//body
	engine.beginPath();
	// engine.moveTo(pos.x, pos.y - this.bodyHeight);
	// engine.lineTo(pos.x + this.bodyWidth, pos.y - this.bodyHeight);
	// engine.lineTo(pos.x + this.bodyWidth, pos.y + this.bodyHeight);
	// engine.lineTo(pos.x, pos.y + this.bodyHeight);
	engine.moveTo(pos.x, pos.y);
	engine.lineTo(pos.x + scaleIt(50), pos.y + scaleIt(10));
	engine.lineTo(pos.x + scaleIt(130), pos.y + scaleIt(10));
	engine.lineTo(pos.x + scaleIt(160), pos.y + scaleIt(20));
	engine.lineTo(pos.x + scaleIt(100), pos.y + scaleIt(40));
	engine.lineTo(pos.x + scaleIt(40), pos.y + scaleIt(20));
	engine.lineTo(pos.x + scaleIt(10), pos.y + scaleIt(30));
	engine.lineTo(pos.x, pos.y);

	engine.fill();
	engine.closePath();

	//wing
	// engine.stroke();
	engine.beginPath();
	// engine.moveTo(pos.x + 10, pos.y - 2);
	// engine.lineTo(pos.x + 10, wingHeight);
	// engine.lineTo(pos.x + 30, pos.y - 2);

	engine.moveTo(pos.x + scaleIt(50), pos.y + scaleIt(20));
	engine.lineTo(pos.x + scaleIt(70), pos.y);
	engine.lineTo(pos.x + scaleIt(20), pos.y - scaleIt(wingHeight));
	engine.lineTo(pos.x + scaleIt(120), pos.y - scaleIt(wingHeight2));
	engine.lineTo(pos.x + scaleIt(130), pos.y + scaleIt(20));
	engine.lineTo(pos.x + scaleIt(50), pos.y + scaleIt(20));

	engine.fill();
	engine.closePath();

	engine.restore();
  }

  cosWave (startPoint, differential, speed) {
    const currentDate = new Date();
    return startPoint + (Math.cos(currentDate.getTime() * speed) * differential)
  }


  
  applyPath(pathStack, engine) {
    engine.moveTo(pathStack[0].x, pathStack[0].y);

    for (let i = 1; i < pathStack.length; i++) {
      engine.lineTo(pathStack[i].x, pathStack[i].y);
    }
  }
}
