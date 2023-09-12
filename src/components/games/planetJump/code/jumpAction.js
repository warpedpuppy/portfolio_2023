import Utils from './utils'

export default function JumpAction(gv) {
  return {
    gravity: 0.3,
    speedLimit: 20,
    speed: 1,
    vy: 0,
    vx: 0.5,
    jumpTimer: 0,
    jumpTimeLimit: 21,
    utils: Utils,
    pause: false,
    heroCollisionDetectObject: {},
    init (stage) {
      this.bkgd = gv.jumpBackground;
      this.hero = gv.hero;
      this.canvasWidth = gv.canvasWidth;
      this.canvasHeight = gv.canvasHeight;
      this.stage = gv.stage;
      this.vx = this.speed;
      const radius = (gv.hero.cont.width / 2) * gv.hero.cont.scale.x
      this.heroCollisionDetectObject.radius = radius
    },
    rotate (str) {
      this.move(str)
    },
    jump () {
      this.vy = -6
      this.jumpTimer = 1
      // this.hero.heroJump.bounce();
      this.hero.heroJump.jumpMouth()
    },
    resize (wh) {
      this.canvasWidth = wh.canvasWidth
      this.canvasHeight = wh.canvasHeight
    },
    move (str) {
      if (str === 'left') {
        this.vx = -this.speed
        this.hero.heroJump.look('left')
      } else if (str === 'right') {
        this.vx = this.speed
        this.hero.heroJump.look('right')
      } else {
        this.vx = 0
      }
    },
    animate () {
      if (this.pause) return
      for (let i = 0; i < this.bkgd.rainbowSwirlsQ; i++) {
        this.bkgd.rainbowSwirlInstances[i].animate();
      }

      const globalPoint = gv.hero.body.toGlobal(gv.stage)
      this.heroCollisionDetectObject.x = globalPoint.x
      this.heroCollisionDetectObject.y = globalPoint.y

      this.bkgd.currentOrb.classRef.dotsAndGremlinCollision(this.heroCollisionDetectObject)

      for (let i = 0; i < this.bkgd.loopingQ; i++) {
        this.bkgd.orbs[i].classRef.animate(this.bkgd, this.heroCollisionDetectObject)
      }

      gv.hero.shell.rotation += Utils.deg2rad(this.vx)
      gv.hero.activeHero.cont.y += this.vy
      if (gv.hero.cont.y > gv.hero.floor) {
        gv.hero.cont.y = gv.hero.floor
        this.vy = 0
        this.hero.grimaceMouth()
      } else if (gv.hero.cont.y < gv.hero.floor) {
        this.vy += this.gravity
      }
    }
  }
}
