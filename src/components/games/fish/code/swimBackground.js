import Assets from './assetCreation'
import Utils from './utils'
// import Tweens from '../../utils/Tweens' 
import FishSchool from './fishSchool'


export default function SwimBackground(gv) {
  return {
    texture: '/bmps/fish/waterSmall.png',
    sprite1: undefined,
    sprite2: undefined,
    speed1: 0.5,
    speed2: 0.75,
    sizeIncrement: 2,
    utils: Utils,
    gridIndex: 5,
    
    fishSchool: FishSchool(gv),
    init () {
      this.parentCont = this.utils.root.kingCont
    
      this.fishSchool.init(this.parentCont)

      this.cont = Assets.quadrupleSpriteSize(this.texture);
      this.cont2 = Assets.quadrupleSpriteSize(this.texture)

      this.cont.width = gv.canvasWidth * this.sizeIncrement
      this.cont.height = gv.canvasHeight * this.sizeIncrement

      this.cont.vx = this.speed1
      this.cont.vy = this.speed1
      this.cont.alpha = 0.15

      this.cont2.width = gv.canvasWidth * this.sizeIncrement
      this.cont2.height = gv.canvasHeight * this.sizeIncrement
      this.cont2.x = -gv.canvasWidth / this.sizeIncrement
      this.cont2.y = -gv.canvasHeight / this.sizeIncrement
      this.cont2.alpha = 0.5
      this.cont2.vx = this.speed2
      this.cont2.vy = this.speed2

      this.background = Assets.Graphics()
      this.background.beginFill(0x3399ff).drawRect(0, 0, gv.canvasWidth, gv.canvasHeight).endFill()
    },
    resize () {
      this.cont.width = gv.canvasWidth * this.sizeIncrement
      this.cont.height = gv.canvasHeight * this.sizeIncrement
      this.cont2.width = gv.canvasWidth * this.sizeIncrement
      this.cont2.height = gv.canvasHeight * this.sizeIncrement
      this.cont.x = this.cont.y = 0
      this.cont2.x = -gv.canvasWidth / this.sizeIncrement
      this.cont2.y = -gv.canvasHeight / this.sizeIncrement

      this.background.clear()
      this.background.beginFill(0x3399ff).drawRect(0, 0, gv.canvasWidth, gv.canvasHeight).endFill()
    },
    addToStage () {
		
		gv.stage.addChild(this.background)
		gv.stage.addChild(this.cont2)
		gv.stage.addChild(this.cont)
		this.fishSchool.addToStage()
		
    },
    removeFromStage () {
      this.fishSchool.removeFromStage()
      this.lilypadLotuses.removeFromStage()
      this.parentCont.removeChild(this.background)
      this.parentCont.removeChild(this.cont2)
      this.parentCont.removeChild(this.cont)
    },
    animate () {
      this.fishSchool.animate()

    

      this.cont2.x += this.cont2.vx
      this.cont2.y += this.cont2.vy

      if (this.cont2.x > 0) {
        this.cont2.x = 0
        this.cont2.vx *= -1
      } else if (this.cont2.x < -gv.canvasWidth / this.sizeIncrement) {
        this.cont2.x = -gv.canvasWidth / this.sizeIncrement
        this.cont2.vx *= -1
      }

      if (this.cont2.y > 0) {
        this.cont2.y = 0
        this.cont2.vy *= -1
      } else if (this.cont2.y < -gv.canvasHeight / this.sizeIncrement) {
        this.cont2.y = -gv.canvasHeight / this.sizeIncrement
        this.cont2.vy *= -1
      }

      this.cont.x += this.cont.vx
      this.cont.y += this.cont.vy

      if (this.cont.x > 0) {
        this.cont.x = 0
        this.cont.vx *= -1
      } else if (this.cont.x < -gv.canvasWidth / this.sizeIncrement) {
        this.cont.x = -gv.canvasWidth / this.sizeIncrement
        this.cont.vx *= -1
      }

      if (this.cont.y > 0) {
        this.cont.y = 0
        this.cont.vy *= -1
      } else if (this.cont.y < -gv.canvasHeight / this.sizeIncrement) {
        this.cont.y = -gv.canvasHeight / this.sizeIncrement
        this.cont.vy *= -1
      }
    }

  }
}
