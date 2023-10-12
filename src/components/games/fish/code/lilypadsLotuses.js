import Assets from './assetCreation'
import Utils from './utils'

export default function LilypadsLotuses (gv) {
  return {
    array: [],
    utils: Utils,
    cont: Assets.Container(),
    buffer: 10,
    init (parentCont) {
	  Utils.setProperties(gv)
      this.parentCont = parentCont
      this.wh = this.utils.wh
      this.strs = [
        ['/bmps/fish/lilyPad2.png', 178],
        ['/bmps/fish/lilypad1.png', 211]
      ]
      this.loopingQ = 6

      for (let i = 0; i < this.loopingQ; i++) {
        const t = this.utils.randomItemFromArray(this.strs)
        const s1 = Assets.Sprite(t[0])

        s1.anchor.set(0.5)
        s1.x = this.utils.randomNumberBetween(0, gv.canvasWidth)
        s1.y = this.utils.randomNumberBetween(0, gv.canvasHeight)

        s1.radius = s1.r = t[1] / 2
        s1.vx = this.utils.randomNumberBetween(-1, 1)
        s1.vy = this.utils.randomNumberBetween(-1, 1)
        s1.rotate = this.utils.randomNumberBetween(-1, 1)
        this.cont.addChild(s1)
        this.array.push(s1)
      }
      this.utils.setLilypads(this)
    },
    addToStage () {
      gv.stage.addChild(this.cont)
    },
    removeFromStage () {
      this.parentCont.removeChild(this.cont)
    },
	resize () {
		for (let i = 0; i < this.loopingQ; i++) {
			const t = Utils.randomItemFromArray(this.strs)
			const s1 = Assets.Sprite(t[0])
	
			s1.anchor.set(0.5)
			s1.x = Utils.randomNumberBetween(0, gv.canvasWidth)
			s1.y = Utils.randomNumberBetween(0, gv.canvasHeight)
	
			s1.radius = s1.r = t[1] / 2
			s1.vx = Utils.randomNumberBetween(-1, 1)
			s1.vy = Utils.randomNumberBetween(-1, 1)
			s1.rotate = Utils.randomNumberBetween(-1, 1)
		  }
	},
    animate () {
      for (const ball of this.array) {
        this.utils.updateLeaveScreen(ball)
        for (const ball2 of this.array) {
          if (ball !== ball2) {
            const collision = this.utils.circleToCircleCollisionDetection(ball, ball2)
            if (collision[0]) {
              this.utils.adjustPositions(ball, ball2, collision[1])
              this.utils.resolveCollision(ball, ball2)
            }
          }
        }
      }
    }

  }
}
