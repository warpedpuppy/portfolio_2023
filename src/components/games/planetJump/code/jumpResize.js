import Utils from '../../../../utils/utils';

export default function JumpResize (root) {
  return {
    resizeHandler () {

		root.canvasWidth = Utils.returnCanvasWidth()
		root.canvasHeight = Utils.returnCanvasHeight()

		Utils.resize(root.canvasWidth, root.canvasHeight)

        root.hero.resize();
		root.clock.resize();
		root.gears.resize();
		root.jumpBackground.resize()
    }
  }
}
