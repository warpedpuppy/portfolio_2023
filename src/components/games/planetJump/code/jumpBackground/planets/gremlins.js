import Assets from '../../assetCreation'
import Utils from '../../../../../../utils/utils'
import * as PIXI from 'pixi.js';
// import Config from './animationsConfig';
export default function Gremlins() {
  return {
    utils: Utils,
    cont: Assets.Container(),
    init () {
    },
    addToStage () {
    },
    removeFromStage () {
    },
    buildGremlin (height) {
      const cont = Assets.Container()

      const bodyCont = Assets.Container()
      bodyCont.y = -height / 2
      const feet = [
		PIXI.Texture.from('/bmps/planet-jump/walk1.png'),
        PIXI.Texture.from('/bmps/planet-jump/walk2.png'),
        PIXI.Texture.from('/bmps/planet-jump/walk3.png'),
		PIXI.Texture.from('/bmps/planet-jump/walk2.png')
      ]
      const walking = Assets.AnimatedSprite(feet)
      walking.animationSpeed = 0.1
      walking.play()

      this.feet = walking
      this.feet.anchor.set(0.5)
      bodyCont.addChild(this.feet)

      const body = Assets.Sprite('transparentRing.png')
      body.scale.set(0.25)
      body.anchor.set(0.5)
      body.y = -30
      this.body = body
      cont.body = body
      bodyCont.addChild(body)

      const leftEye = this.leftEye = this.smileyEye()
      const rightEye = this.rightEye = this.smileyEye()
      leftEye.x = -15
      leftEye.y = rightEye.y = -45
      rightEye.x = 15
      bodyCont.addChild(leftEye)
      bodyCont.addChild(rightEye)

      this.mouth = this.cont.mouth = this.smileyMouth()
      this.mouth.y = -25
      bodyCont.addChild(this.mouth)

      this.grimaceMouth()
      cont.scale.set(0.25)
      cont.addChild(bodyCont)
      cont.bodyCont = bodyCont
      return cont
    },
    smileyEye () {
      const cont = Assets.Container()
      const eye = Assets.Sprite('jumpEye.png')
      eye.anchor.set(0.5)
      const pupil = Assets.Sprite('jumpPupil.png')
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
      this.mouth.texture = this.smile
    },
    grimaceMouth () {
      this.mouth.texture = this.grimace
    },
    resize () {

    },
    animate () {

    }
  }
}
