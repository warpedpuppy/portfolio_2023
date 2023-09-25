import Utils from './utils'
import Assets from './assetCreation'

export default function FishSchool(gv) {
  return {
    points: [],
    sharkPoints: [],
    imageWidth: 300,
    pointQ: 5,
    fishQ: 15,
    fishArray: [],
    sharkArray: [],
    utils: Utils,
    sharkCont: Assets.Container(),
    fishCont: Assets.Container(),
    sharkQ: 5,
    buffer: 10,
    init () {
      this.cont = gv.stage;
      this.wh = this.utils.wh
      this.fish = this.fish.bind(this)
      this.spritesheet = this.utils.spritesheet
      const steps = this.imageWidth / this.pointQ
      this.texture = Assets.Texture('/bmps/fish/koi.png')

      this.sharkTexture = Assets.Texture('/bmps/fish/shark.png')
      for (let i = 0; i < this.pointQ; i++) {
        this.points.push({ x: i * steps, y: 0 })
        this.sharkPoints.push({ x: i * steps, y: 0 })
      }

      for (let i = 0; i < this.fishQ; i++) {

        const f = this.fish(this.texture, this.points, this.utils)
        f.x = this.utils.randomNumberBetween(0, gv.canvasWidth)
        f.y = this.utils.randomNumberBetween(0, gv.canvasHeight)
        f.vx = this.utils.randomNumberBetween(-3, 3)
        f.vy = this.utils.randomNumberBetween(-3, 3)
        f.alpha = 0.5
        f.rotation = Math.atan2(f.vy, f.vx)
        this.fishArray.push(f)
        this.fishCont.addChild(f)
      }

      for (let i = 0; i < this.sharkQ; i++) {
        const f = this.fish(this.sharkTexture, this.sharkPoints, this.utils)
        f.x = this.utils.randomNumberBetween(0, gv.canvasWidth)
        f.y = this.utils.randomNumberBetween(0, gv.canvasHeight)
        f.vx = this.utils.randomNumberBetween(-3, 3)
        f.vy = this.utils.randomNumberBetween(-3, 3)
        f.alpha = 0.25
        f.rotation = Math.atan2(f.vy, f.vx)
        f.scale.set(this.utils.randomNumberBetween(3, 5))
        this.fishArray.push(f)
        this.sharkCont.addChild(f)
      }

      this.loopingQ = this.fishQ + this.sharkQ
    },
    addToStage () {
      this.cont.addChild(this.fishCont)
      this.cont.addChild(this.sharkCont)
    },
    removeFromStage () {
      this.cont.removeChild(this.fishCont)
      this.cont.removeChild(this.sharkCont)
    },
    fish (texture, points) {
      const stripCont = Assets.Container()
      stripCont.pivot.set(0.5)
      const strip = this.strip = Assets.Rope(texture, points)
      stripCont.addChild(strip)
      return stripCont
    },
    animate () {
      this.points[0].y = this.utils.cosWave(0, 40, 0.01)
      this.points[3].y = this.utils.cosWave(0, -3, 0.01)
      this.sharkPoints[0].y = this.utils.cosWave(0, 40, 0.001)
      this.sharkPoints[3].y = this.utils.cosWave(0, -3, 0.001)

      for (let i = 0; i < this.loopingQ; i++) {
        const f = this.fishArray[i]
        f.x += (f.vx - gv.vx)
        f.y += (f.vy - gv.vy)
        if (f.x < -f.width - this.buffer) {
          f.x += this.buffer
          f.vx *= -1
          f.vy *= -1
          f.rotation = Math.atan2(f.vy, f.vx)
        } else if (f.x > gv.canvasWidth + f.width + this.buffer) {
          f.x -= this.buffer
          f.vx *= -1
          f.vy *= -1
          f.rotation = Math.atan2(f.vy, f.vx)
        }

        if (f.y < -f.width - this.buffer) {
          f.y += this.buffer
          f.vx *= -1
          f.vy *= -1
          f.rotation = Math.atan2(f.vy, f.vx)
        } else if (f.y > gv.canvasHeight + f.width + this.buffer) {

          f.y = -this.buffer;
          f.vx *= -1;
          f.vy *= -1;
          f.rotation = Math.atan2(f.vy, f.vx);
        }
      }
    }

  }
}
