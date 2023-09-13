import Utils from './utils'
import Assets from './assetCreation'
import * as PIXI from 'pixijs';
export default function JumpHero(gv) {
  return {
    cont: Assets.Container(),
    shell: Assets.Container(),
    w: 60,
    h: 14,
    spacer: 0,
    bounceQ: 10,
    blocks: [],
    utils: Utils,
    pos: {},
    counter: 0,
    counterLimit: 5,
    max: 0,
    contractBoolean: true,
    expandBoolean: false,
    trigger: 100,
    gravity: 1.01,
    bounceAllow: false,
    blockQ: 5,
    bounceBlockIndex: 4,
    doneCounter: 0,
    type: undefined,
    init () {
      this.parentCont = gv.stage;
    //   this.spritesheet = gv.sheet;
	//   console.log(this.spritesheet)
      this.activeHero = this.heroJump = this
      this.buildHero()
      this.shell.addChild(this.cont)
    },
    smileyEye () {
      const cont = Assets.Container()
      const eye = new PIXI.Sprite(PIXI.Texture.from('/bmps/planet-jump/jumpEye.png'))
      eye.anchor.set(0.5)
      const pupil = new PIXI.Sprite(PIXI.Texture.from('/bmps/planet-jump/jumpPupil.png'))
      pupil.anchor.set(0.5)
      cont.addChild(eye)
      cont.addChild(pupil)
      cont.pupil = pupil
      return cont
    },
    smileyMouth () {
      this.grimace =PIXI.Texture.from('/bmps/planet-jump/grimace.png')
      const s = new PIXI.Sprite(this.grimace)
      this.smile = PIXI.Texture.from('/bmps/planet-jump/smile.png')
      s.anchor.set(0.5)
      s.scale.set(0.5)
      return s
    },
    jumpMouth () {
      this.mouth.texture = this.smile;
    },
    grimaceMouth () {
      this.mouth.texture = this.grimace;
    },
    look (str) {
      if (str === 'right') {
        this.leftEye.pupil.x = 5
        this.rightEye.pupil.x = 5
        this.leftEye.pupil.y = 0
        this.rightEye.pupil.y = 0
        this.feet.scale.x = 1
      } else if (str === 'left') {
        this.leftEye.pupil.x = -5
        this.rightEye.pupil.x = -5
        this.leftEye.pupil.y = 0
        this.rightEye.pupil.y = 0
        this.feet.scale.x = -1
      } else if (str === 'up') {
        this.leftEye.pupil.x = 0
        this.rightEye.pupil.x = 0
        this.leftEye.pupil.y = -5
        this.rightEye.pupil.y = -5
      } else if (str === 'down') {
        this.leftEye.pupil.x -= 0
        this.rightEye.pupil.x -= 0
        this.leftEye.pupil.y += 5
        this.rightEye.pupil.y += 5
      } else {
        this.leftEye.pupil.x = 0
        this.rightEye.pupil.x = 0
        this.leftEye.pupil.y = 0
        this.rightEye.pupil.y = 0
      }
    },
    buildHero () {
      const feet = [
		PIXI.Texture.from('/bmps/planet-jump/walk1.png'),
        PIXI.Texture.from('/bmps/planet-jump/walk2.png'),
        PIXI.Texture.from('/bmps/planet-jump/walk3.png'),
		PIXI.Texture.from('/bmps/planet-jump/walk2.png')
      ]
      const walking = new PIXI.AnimatedSprite(feet)
      walking.animationSpeed = 0.1
      walking.play()

      this.feet = walking
      this.feet.anchor.set(0.5)
      this.cont.addChild(this.feet)

      const body = new PIXI.Sprite(PIXI.Texture.from('/bmps/planet-jump/jumpBody.png'))
      body.anchor.set(0.5)
      body.y = -40
      this.body = body
      this.cont.addChild(body)

      const leftEye = this.leftEye = this.smileyEye()
      const rightEye = this.rightEye = this.smileyEye()
      leftEye.x = -15
      leftEye.y = rightEye.y = -45
      rightEye.x = 15
      this.cont.addChild(leftEye)
      this.cont.addChild(rightEye)

      this.mouth = this.cont.mouth = this.smileyMouth()
      this.mouth.y = -25
      this.cont.addChild(this.mouth)
      this.cont.scale.set(0.5)
      this.grimaceMouth()
    },
    addToStage () {
      this.shell.x = gv.halfWidth;
      this.shell.y = gv.halfHeight;
      this.parentCont.addChild(this.shell)
    },
    removeFromStage () {
      this.parentCont.removeChild(this.shell)
    },
    resize () {
      this.shell.x = gv.canvasWidth / 2
      this.shell.y = gv.canvasHeight / 2
    }
  }
}
