import Assets from './assetCreation'
import Utils from './utils'

export default function FishHero(gv) {
  return {
    cont: Assets.Container(),
    dists: [0, 40, 35, 30, 23],
    airBubbles: [],
    fish: [],
    pos: [],
    utils: Utils,
    init () {
      this.parentCont = gv.stage;
      this.spritesheet = this.utils.spritesheet
      this.segmentsQ = 5
      this.finCont = Assets.Container()
      this.eyeCont = Assets.Container()
      this.headCont = Assets.Container()
      this.fishArray = [
        '/bmps/fish/headSegment.png',
        '/bmps/fish/bodySegment1.png',
        '/bmps/fish/bodySegment2.png',
        '/bmps/fish/bodySegment3.png',
        '/bmps/fish/bodySegment4.png',
        '/bmps/fish/bodySegment5.png']
      this.distTotal = 0

	

      // AIR BUBBLES
      for (let i = 0; i < 4; i++) {
        const r = Assets.Sprite('/bmps/fish/gradientRing.png')
        r.anchor.set(0.5)
        r.scale.set(0)
        this.airBubbles.push(r)
      }
      this.cont.addChild(this.headCont)

      for (let i = 0; i < this.segmentsQ; i++) {
        const segment = this.fishBodySegment(this.segmentHeight, 0xFFFF00, i, this.fishArray[i])
        segment.scale.set(0.5)
        this.fish.push(segment)
        this.cont.addChildAt(segment, 0)
      }
	
      const rightFin = this.rightFin = Assets.Sprite('/bmps/fish/swimFin.png')
      this.rightFin.x = 20
      rightFin.scale.set(0.5)
      this.rightFin.y = 15
      rightFin.scale.x = -1
      this.finCont.addChild(rightFin)
	
      const leftFin = this.leftFin = Assets.Sprite('/bmps/fish/swimFin.png')
      this.leftFin.x = -20
      leftFin.scale.set(0.5)
      leftFin.y = 15
      this.finCont.addChild(leftFin)
      this.cont.addChildAt(this.finCont, 0)

      const rightEye = this.rightEye = Assets.Sprite('/bmps/fish/swimEye.png')
      rightEye.anchor.set(0.5)
      rightEye.scale.set(0.5)
      this.rightEye.x = 10
      this.eyeCont.addChild(rightEye)

      const leftEye = this.leftEye = Assets.Sprite('/bmps/fish/swimEye.png')
      this.leftEye.x = -10
      leftEye.anchor.set(0.5)
      leftEye.scale.set(0.5)
      this.eyeCont.addChild(leftEye)
      this.cont.addChild(this.eyeCont)

      this.cont.radius = 0
      this.segments = this.fish

      this.activeHero = this
	
    },
    hit () {

    },
    fishBodySegment (radius, color, num, str) {
      const cont = Assets.Container()
      cont.radius = radius
      cont.height = cont.radius * 4
      cont.vx = 0
      cont.vy = 0
      cont.xpos = 0
      cont.ypos = 0

      const b = Assets.Sprite(str)
      this.fishRadius = b.width / 2
      const scale = 1 - (num * 0.1)
      b.scale.set(scale)
      this.distTotal += this.dists[num]
      b.y = this.distTotal
      b.anchor.set(0.5)
      cont.addChild(b)
      cont.body = b
      if (num === this.segmentsQ - 1) {
        const tail = this.tail = Assets.Sprite('/bmps/fish/bodySegmentTail.png')
        this.tail.anchor.x = 0.5

        tail.y = b.y + (b.height / 2) - 10
        cont.addChildAt(tail, 0)
      }

      return cont
    },
    addToStage () {
      this.cont.x = gv.halfWidth;
      this.cont.y = gv.halfHeight;
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
