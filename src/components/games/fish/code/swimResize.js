import Utils from './utils'

export default function SwimResize(root) {
  return {
    utils: Utils,
    timeOut: undefined,
    resizeBundle () {
      root.clock.resize()
      root.gears.resize()
      root.fishHero.resize()
	  root.lilypadLotuses.resize();
    },
    resizeHandler () {
      this.canvasWidth = Utils.returnCanvasWidth()
      this.canvasHeight = Utils.returnCanvasHeight()
      Utils.resize(this.canvasWidth, this.canvasHeight)
      root.resize.resizeBundle()
    }
  }
}
