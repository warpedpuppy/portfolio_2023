import Utils from './utils'

export default function FlyResize(root) {
  return {
    utils: Utils,
    timeOut: undefined,
    resizeBundle () {
      root.dragon.resize()
    },
    resizeHandler () {

      this.canvasWidth = Utils.returnCanvasWidth()
      this.canvasHeight = Utils.returnCanvasHeight()

      Utils.resize(this.canvasWidth, this.canvasHeight)

      this.resizeBundle()

      root.app.renderer.resize(this.canvasWidth, this.canvasHeight)

      root.action = false

	  root.canvasHeight = this.canvasHeight;
	  root.canvasWidth = this.canvasWidth;
	}
  }
}
