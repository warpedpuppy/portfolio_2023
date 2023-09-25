import Utils from './utils'
import Config from './animationsConfig'

export default function Rotate() {
  return {
    utils: Utils,
    config: Config,
    movementQ: 0.1,
    init () {
    },
    rotate (str, activeAction) {
      // leaving this here for now because this really relates to the background current
      let returnObj = {};
      if (str === 'left') {
        this.idle = false
        activeAction.radius += this.movementQ
        this.vx = 6 * Math.sin(activeAction.radius);
        this.vy = -6 * Math.cos(activeAction.radius);
        activeAction.storeRadius = activeAction.radius;
        returnObj = { vx: -this.vx, vy: -this.vy }
      } else if (str === 'right') {
        this.idle = false
        activeAction.radius -= this.movementQ
        this.vx = 6 * Math.sin(activeAction.radius)
        this.vy = -6 * Math.cos(activeAction.radius)
        activeAction.storeRadius = activeAction.radius
        returnObj = { vx: -this.vx, vy: -this.vy }
      }
      return returnObj;
    },
    addToStage () {

    },
    removeFromStage () {

    },
    resize () {

    },
    animate () {

    }
  }
}
