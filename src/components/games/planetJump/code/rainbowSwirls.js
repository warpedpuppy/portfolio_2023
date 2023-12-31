import Utils from '../../../../utils/utils'
import Assets from './assetCreation'
import * as PIXI from 'pixi.js';
export default function RainbowSwirls(gv) {
  return {
    cont: undefined,
    colSpacing: 200,
    cols: {},
    bricks: [],
    utils: Utils,
    activeBrick: undefined,
    fallSpeed: undefined,
    totalHeight: 0,
    brickHeight: 0,
    counter: 0,
    curve: undefined,
    curveCounter: 0,
    straightQ: 0,
    curveQ: 0,
    testCounter: 0,
    straightQs: [4, 5],
    curvedQs: [40, 80],
    startCurveAngle: 10,
    curves: [45, -45, 135, -135],
    spriteCounter: 0,
    nextRed: 0,
    contObject: {},
    objectPool: [],
    objectPoolCounter: 0,
    width: 0,
    height: 0,
    interval: 0,
    colWidth: 5,
    colors: [0xFF00FF, 0xFF0000, 0xFFFF00, 0xFF9900, 0x33FF00],
    colorCounter: 0,
    init (parentCont, quadrant) {
      this.quadrant = quadrant
      this.curve = this.curves[Math.floor(Math.random() * 4)]
      this.app = this.utils.app

      this.goldTile = gv.sheet.textures['tile.png']
      this.interval = this.utils.randomIntBetween(5, 10)
      this.parentCont = gv.stage

      this.spritesheet = gv.sheet;

      this.tileQ = Assets.webgl ? 150 : 20
      this.cont = Assets.ParticleContainer(this.tileQ)

      for (let i = 0; i < this.tileQ; i++) {
        const s = this.brick()
        s.tint = this.colors[this.colorCounter]
        this.colorCounter++
        if (this.colorCounter > this.colors.length - 1) this.colorCounter = 0
        this.objectPool.push(s)
      }

      const s = this.objectPool[this.objectPoolCounter]
      this.objectPoolCounter++
      const newPos = this.newXY()
      s.y = newPos.x
      s.x = newPos.y
      this.cont.addChild(s)

      this.curveQ = this.utils.randomIntBetween(this.curvedQs[0], this.curvedQs[1])
    },
    brick () {
      const s = PIXI.Sprite.from('/bmps/tile.png');
      s.counter = 0
	  s.alpha = 0.25;
      s.curveCounter = 0;
      this.brickHeight = 50;
      s.anchor.x = 0.5
      s.anchor.y = 1
      return s
    },
    newBrick () {
      const s = this.objectPool[this.objectPoolCounter]
      this.objectPoolCounter++
      if (this.objectPoolCounter > this.objectPool.length - 1) {
        this.objectPoolCounter = 0
      }

      this.curveCounter++;
      this.curve *= 1.05;
      const deg = this.utils.deg2rad(this.curve);
      s.rotation = deg;
      if (this.curveCounter > this.curveQ) {
        this.curve = this.curves[Math.floor(Math.random() * 4)]
        this.curveCounter = 0
        this.curveQ = this.utils.randomIntBetween(this.curvedQs[0], this.curvedQs[1])
        const newPos = this.newXY()
        s.y = newPos.y
        s.x = newPos.x
      }

      // let previousYVal = this.objectPool[this.objectPool.length -1].y;

      const prevIndex = (this.objectPoolCounter > 1) ? this.objectPoolCounter - 2 : this.objectPool.length - 1
      const prevX = this.objectPool[prevIndex].x
      const prevY = this.objectPool[prevIndex].y
      const prevRotation = this.objectPool[prevIndex].rotation
      const newX = prevX + (s.height * Math.sin(prevRotation))
      const newY = prevY - (s.height * Math.cos(prevRotation))
      s.x = newX
      s.y = newY

      const buffer = 1
      if (this.objectPoolCounter === 0 ||
				s.y < -buffer ||
				s.x < -buffer ||
				s.x > this.utils.canvasWidth + buffer ||
				s.y > this.utils.canvasHeight + buffer
      ) {
        const newPos = this.newXY()
        s.x = newPos.x
        s.y = newPos.y
      }
      this.cont.addChild(s)
    },
    newXY () {
      const buffer = 0;
      const perc = 0.5;

      if (this.quadrant === 'TL') {
        return {
          x: this.utils.randomNumberBetween(buffer, gv.canvasWidth * perc),
          y: this.utils.randomNumberBetween(buffer, gv.canvasHeight * perc)
        }
      } if (this.quadrant === 'TR') {
        return {
          x: this.utils.randomNumberBetween(gv.canvasWidth * perc, this.utils.canvasWidth),
          y: this.utils.randomNumberBetween(buffer, gv.canvasHeight * perc)
        }
		
      } if (this.quadrant === 'BL') {
        return {
          x: this.utils.randomNumberBetween(buffer, gv.canvasWidth * perc),
          y: this.utils.randomNumberBetween(gv.canvasHeight * perc, gv.canvasHeight)
        }
      } if (this.quadrant === 'BR') {
        return {
          x: this.utils.randomNumberBetween(gv.canvasWidth * perc, gv.canvasWidth),
          y: this.utils.randomNumberBetween(gv.canvasHeight * perc, gv.canvasHeight)
        }
      }
    },
    addToStage () {
      this.parentCont.addChild(this.cont)
    },
    removeFromStage () {
      this.parentCont.removeChild(this.cont)
    },
    resize () {

    },
    animate () {
      this.testCounter++;
      if (this.testCounter % this.interval === 0) {this.testCounter = 0; this.newBrick()};
    }
  }
}
