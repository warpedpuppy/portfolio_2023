import * as PIXI from 'pixi.js'
import Utils from '../../../../utils/utils';

const AssetCreation = {
  utils: Utils,
  opQ: 0,
  op: [],
  rings: [],
  lines: [],
  coins: [],
  opCounter: 0,
  loader: undefined,
  id: undefined,
  Container(){
	return new PIXI.Container();
  },
  quadrupleSpriteSize (texture) {
    // texture should be 1000x500
    const arr = [
      [0, 0, 1, 1],
      [2000, 0, -1, 1],
      [0, 1000, 1, -1],
      [2000, 1000, -1, -1]
    ]; let s; const
      cont = new PIXI.Container()
    for (let i = 0; i < 4; i++) {
      s = this.Sprite(texture)
      s.x = arr[i][0]
      s.y = arr[i][1]
      s.scale.x = arr[i][2]
      s.scale.y = arr[i][3]
      cont.addChild(s)
    }
    return cont
  },
  webgl () {
    //return this.utils.app.renderer instanceof PIXI.WebGLRenderer
  },
  ParticleContainer (q) {
    return new PIXI.ParticleContainer(q, {
      scale: true,
      position: true,
      rotation: true,
      uvs: true,
      alpha: true
    })
  },
  ColorFilter () {
    return new PIXI.filters.ColorMatrixFilter()
  },
  BitmapText (str) {
    return new PIXI.BitmapText(str, { font: '21px Hiragino Sans' })
  },
  Rope (texture, points) {
    return new PIXI.SimpleRope(texture, points)
  },
  Texture (str) {
    return PIXI.Texture.from(str)
  },
  AnimatedSprite (array) {
    return new PIXI.AnimatedSprite(array)
  },
  returnObjectPool (str) {
    for (let i = 0; i < this.opQ; i++) {
      this.op[i].texture = this.utils.spritesheet.textures[str]
    }
    return this.op
  },
  returnFirstHalfObjectPool (str) {
    const stopVal = this.opQ / 2
    const returnArr = []
    for (let i = 0; i < stopVal; i++) {
      this.op[i].texture = this.utils.spritesheet.textures[str]
      returnArr.push(this.op[i])
    }
    return returnArr
  },
  returnSecondHalfObjectPool (str) {
    const startVal = this.opQ / 2
    const returnArr = []
    for (let i = startVal; i < this.opQ; i++) {
      this.op[i].texture = this.utils.spritesheet.textures[str]
      returnArr.push(this.op[i])
    }
    return returnArr
  },
  Sprite (str) {
	return new PIXI.Sprite(PIXI.Texture.from(`/bmps/fish/${str}`));
  },
  Graphics () {
    return new PIXI.Graphics()
  },
  createPool (cont, str, colors, scaleArray) {
    const flameArray = this.returnObjectPool(str)
    const flameQ = flameArray.length
    let colorCounter = 0
    let item
    for (let i = 0; i < flameQ; i++) {
      item = flameArray[i]
      const scale = this.utils.randomNumberBetween(scaleArray[0], scaleArray[0])
      item.scale.set(scale)
      item.anchor.set(0.5)
      item.angle = this.utils.deg2rad(this.utils.randomNumberBetween(-110, -70))
      item.fade = this.utils.randomNumberBetween(0.001, 0.01)
      item.maxDistance = this.utils.randomNumberBetween(100, 1000)
      const hypotenuse = this.utils.randomNumberBetween(10, 100)
      item.vx = Math.cos(item.angle) * hypotenuse
      item.vy = Math.sin(item.angle) * hypotenuse

      item.tint = colors[colorCounter]
      colorCounter++
      if (colorCounter > colors.length - 1) {
        colorCounter = 0
      }
      cont.addChild(item)
    }
    return { flameArray, flameQ }
  }

}
export default AssetCreation;