import Utils from './utils'
// import Assets from './assetCreation'
import * as PIXI from 'pixi.js';
export default function DragonHero (parentCont) {
  return {
    cont: new PIXI.Container(),
    dragon: [],
    pos: [],
    utils: Utils,
    segmentsQ: 10,
    dyeLot: [],
    timeoutHandler: undefined,
    init () {

      this.parentCont = parentCont.stage;
      const head = new PIXI.Sprite(PIXI.Texture.from('/bmps/dragon/dragonHead.png'))
      this.dyeLot.push(head)
      head.anchor.x = 0.5
      head.anchor.y = 1
      this.headCont = new PIXI.Container()// putting this in a container so can put flames on it
      this.headCont.addChild(head)
      this.cont.addChild(this.headCont)
      this.dragon.push(head)
      let i
      for (i = 0; i < this.segmentsQ; i++) {
        const cont = new PIXI.Container()
        cont.vx = 0
        cont.vy = 0
        cont.xpos = 0
        cont.ypos = 0
        let segment

        if (i !== this.segmentsQ - 1) {
          segment = new PIXI.Sprite(PIXI.Texture.from('/bmps/dragon/dragonSegment.png'))
          segment.y = i * (1 + 50)
        //   segment.scale.y = -1;
        } else {
		  let tailTexture = PIXI.Texture.from('/bmps/dragon/dragonTail.png')
          segment = new PIXI.Sprite(tailTexture)
          segment.y = i * 50;
        }
        segment.anchor.x = 0.5
        segment.anchor.y = 0.2
        this.dyeLot.push(segment)
        cont.addChild(segment)
        this.dragon.push(cont)
        this.cont.addChild(cont)
      }

      this.rightWing = new PIXI.Container()
      this.rightWing1 = new PIXI.Sprite(PIXI.Texture.from('/bmps/dragon/wingPart1.png'))
      this.rightWing1.anchor.x = 0
      this.rightWing1.anchor.y = 0.33
      this.dyeLot.push(this.rightWing1)

      this.rightWing2 = new PIXI.Sprite(PIXI.Texture.from('/bmps/dragon/wingPart2.png'))
      this.rightWing2.x = 86
      this.rightWing2.y = -40
      this.rightWing2.anchor.x = 0
      this.rightWing2.pivot.y = 20
      this.dyeLot.push(this.rightWing2)

      this.rightWing3 = new PIXI.Sprite(PIXI.Texture.from('/bmps/dragon/dragonTriangle.png'))
      this.rightWing3.anchor.x = 0.5
      this.rightWing3.anchor.y = 0
      this.rightWing3.x = 86
      this.rightWing3.rotation = this.utils.deg2rad(-30)
      this.rightWing3.y = -40
      this.dyeLot.push(this.rightWing3)

      this.rightWing.addChild(this.rightWing1)
      this.rightWing.addChild(this.rightWing2)
      this.rightWing.addChild(this.rightWing3)

      this.leftWing = new PIXI.Container()
      this.leftWing1 = new PIXI.Sprite(PIXI.Texture.from('/bmps/dragon/wingPart1.png'))
      this.leftWing1.scale.x = -1
      this.leftWing1.anchor.x = 0
      this.leftWing1.anchor.y = 0.33
      this.dyeLot.push(this.leftWing1)

      this.leftWing2 = new PIXI.Sprite(PIXI.Texture.from('/bmps/dragon/wingPart2.png'))
      this.leftWing2.scale.x = -1
      this.leftWing2.x = -88
      this.leftWing2.y = -40
      this.leftWing2.anchor.x = 0
      this.leftWing2.pivot.y = 20
      this.dyeLot.push(this.leftWing2)

      this.leftWing3 = new PIXI.Sprite(PIXI.Texture.from('/bmps/dragon/dragonTriangle.png'))
      this.leftWing3.anchor.x = 0.5
      this.leftWing3.anchor.y = 0
      this.leftWing3.x = -80// -82;
      this.leftWing3.rotation = this.utils.deg2rad(30)
      this.leftWing3.y = -40
      this.dyeLot.push(this.leftWing3)

      this.leftWing.addChild(this.leftWing1)
      this.leftWing.addChild(this.leftWing2)
      this.leftWing.addChild(this.leftWing3)

      this.wingCont = new PIXI.Container()
      // this.wingCont.y = 30;
      this.wingCont.addChild(this.leftWing)
      this.wingCont.addChild(this.rightWing)

      this.eyeCont = new PIXI.Container()
      const rightEye = this.rightEye = new PIXI.Sprite(PIXI.Texture.from('/bmps/dragon/swimEye.png'))
      rightEye.anchor.set(0.5)
      this.rightEye.x = 10
      this.rightEye.y = -30
      this.eyeCont.addChild(rightEye)
      const leftEye = this.leftEye = new PIXI.Sprite(PIXI.Texture.from('/bmps/dragon/swimEye.png'))
      this.leftEye.x = -10
      this.leftEye.y = -30
      leftEye.anchor.set(0.5)
      this.eyeCont.addChild(leftEye)
      this.cont.addChild(this.eyeCont)

      this.cont.radius = 0
      this.cont.addChildAt(this.wingCont, 0)
      this.segments = this.dragon
      this.cont.scale.set(0.5)
      this.dye(0x000000)

      this.activeHero = this
    },
    dye (color) {
      for (const part of this.dyeLot) {
        part.tint = color
      }
    },
    hit () {
      if (!this.timeoutHandler) {
        this.dyeLot.forEach((seg) => {
          seg.tint = 0xFF0000
        })
        this.timeoutHandler = setTimeout(this.fadeToBlack.bind(this), 100)
      }
    },
    fadeToBlack () {
      this.dyeLot.forEach((seg) => {
        seg.tint = 0x000000
      })
      this.timeoutHandler = undefined
    },
    bodySegment (radius, color, yVal) {
      const cont = new PIXI.Container()
      cont.radius = radius
      cont.height = cont.radius * 4
      cont.vx = 0
      cont.vy = 0
      cont.xpos = 0
      cont.ypos = 0
      const b = PIXI.Graphics()

      b.y = yVal
      const triangleWidth = 25
      const triangleHeight = triangleWidth
      const triangleHalfway = triangleWidth / 2

      // draw triangle
      b.beginFill(0xFF0000, 1)
      b.lineStyle(0, 0xFF0000, 1)
      b.moveTo(triangleWidth, 0)
      b.lineTo(triangleHalfway, triangleHeight)
      b.lineTo(0, 0)
      b.lineTo(triangleHalfway, 0)
      b.endFill()
      b.pivot.x = b.pivot.y = 12.5
      b.rotation = this.utils.deg2rad(180)
      cont.addChild(b)
      cont.body = b
      return cont
    },
    addToStage () {
      this.cont.x = parentCont.halfWidth;
      this.cont.y = parentCont.halfHeight;
      this.parentCont.addChild(this.cont)
    },
    removeFromStage () {
      this.parentCont.removeChild(this.cont)
    },
    resize () {
      this.cont.x = this.utils.canvasWidth / 2
      this.cont.y = this.utils.canvasHeight / 2
    },
    animate () {

    }
  }
}
