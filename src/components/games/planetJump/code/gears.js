import Assets from '../../fish/code/assetCreation'
import Utils from '../../fish/code/utils'
import Config from '../../fish/code/animationsConfig'

export default function Gears (gv) {
  return {
    gears: [],
    utils: Utils,
    init () {
      let gear
      const corners = this.corners = [
        [0, 0],
        [gv.canvasWidth, 0],
        [gv.canvasWidth, gv.canvasHeight],
        [0, gv.canvasHeight]
      ]
      for (let i = 0; i < 4; i++) {
        gear = Assets.Sprite('/bmps/fish/gear.png')
        gear.anchor.x = gear.anchor.y = 0.5
        gear.x = corners[i][0]
        gear.y = corners[i][1]
        gear.alpha = 0.15
        gear.rotate = (Math.random() * 0.01) + 0.01
        if (this.utils.isMobileOnly) {
          gear.scale.set(Config.mobileOnlyScaling)
        }
        this.gears.push(gear)
      }
      return this
    },
    addToStage () {
      for (let i = 0; i < 4; i++) {
        gv.stage.addChild(this.gears[i])
      }
    },
    removeFromStage () {
      for (let i = 0; i < 4; i++) {
        gv.stage.removeChild(this.gears[i])
      }
    },
    resize () {
      const corners = this.corners = [
        [0, 0],
        [gv.canvasWidth, 0],
        [gv.canvasWidth, gv.canvasHeight],
        [0, gv.canvasHeight]
      ]
      for (let i = 0; i < this.gears.length; i++) {
        const gear = this.gears[i]
        gear.x = corners[i][0]
        gear.y = corners[i][1]
      }
    },
    animate () {
      for (let i = 0; i < 4; i++) {
        this.gears[i].rotation += this.gears[i].rotate
      }
    }
  }
}
