import Utils from './utils'
import Assets from './assetCreation'
import AirBubbles from './airBubbles'
import Rotate from './rotate'

export default function FishAction(gv) {
  return {
    radius: 0,
    storeRadius: 0,
    spinning: false,
    utils: Utils,
    vx: 0,
    vy: 0,
    airBubbleCounter: 0,
    airBubbleStart: 0,
    countAllow: true,
    expand: [],
    percApply: true,
    airBubbles: AirBubbles(),
    increment: 5,
    flameOn: false,
    rotateFunction: Rotate(),
    init () {
       gv.fishHero = this.utils.hero
      this.wh = this.utils.wh
      this.stage = gv.stage
      this.airBubbles.setupBubbles(this.stage)
      this.triangleOfCollision.init()
      this.flames = Assets.ParticleContainer(this.flameQ)
    },
    start () {
      this.createPool()
      this.maxLength = this.increment *  gv.fishHero.segmentsQ
    },
    createPool () {
      const obj = Assets.createPool(
        this.flames,
        'transparentRing.png',
        [0xadd8e6, 0xFFFF00],
        [0.095, 0.5]
      )

      this.flameArray = obj.flameArray
      this.flameQ = obj.flameQ
      this.flames.visible = false
      this.flames.y = -40
       gv.fishHero.headCont.addChildAt(this.flames, 0)
    },
    rotate (str) {
      const obj = this.rotateFunction.rotate(str, this)
      this.vx = -obj.vx
      this.vy = -obj.vy
    },
    resize () {
      this.airBubbles.resize()
    },
    fire (boolean) {
      this.flameOn = this.flames.visible = boolean
    },
    animate () {
      if (this.flameOn) {
        this.triangleOfCollision.fireHit()

        for (let i = 0; i < this.flameQ; i++) {
          const item = this.flameArray[i]
          const determineContinue = Math.floor(Math.random() * 10)
          if (determineContinue < 9) continue
          item.x += item.vx
          item.y += item.vy
          item.alpha -= item.fade
          if (Math.abs(item.y) > item.maxDistance) {
            item.x = 0
            item.y = 0
            item.alpha = 1
          }
        }
      }
      gv.fishHero.headCont.rotation = this.radius

      if (!this.spinning) {
        this.radius = this.utils.cosWave(this.storeRadius, 0.15, 0.01)
      }

	  gv.fishHero.segments[0].rotation = this.radius
	  gv.fishHero.pos.push(this.radius)

      if ( gv.fishHero.pos.length > this.maxLength) {
         gv.fishHero.pos =  gv.fishHero.pos.slice(-this.maxLength)
      }

      for (let i = 1; i <  gv.fishHero.segmentsQ; i++) {
        const index =  gv.fishHero.pos.length - (i * this.increment)
        if ( gv.fishHero.pos.length >= index) {
           gv.fishHero.segments[i].rotation =  gv.fishHero.pos[index]
        }
      }

      this.airBubbles.animate()
       gv.fishHero.leftFin.rotation = this.utils.deg2rad(this.utils.cosWave(0, 20, 0.004))
       gv.fishHero.rightFin.rotation = this.utils.deg2rad(this.utils.cosWave(0, -20, 0.004))
       gv.fishHero.tail.rotation = this.utils.deg2rad(this.utils.cosWave(0, 60, 0.01))

       gv.fishHero.finCont.rotation = this.radius
       gv.fishHero.eyeCont.rotation = this.radius
      this.airBubbles.bubblesCont.rotation = this.storeRadius // this is why airbubbles needs to be in here
    }
  }
}
