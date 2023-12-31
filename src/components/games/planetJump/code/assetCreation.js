import * as PIXI from 'pixi.js';
import Utils from '../../../../utils/utils';

const AssetCreation = {
  utils: Utils,
  opQ: 100,
  op: [],
  rings: [],
  lines: [],
  coins: [],
  opCounter: 0,
  colors: [0xFF00FF, 0xFF0000, 0xFFFF00, 0xFF9900, 0x33FF00],
  init (gv) {
	this.gv = gv;
    // this.ringQ = (this.utils.app.renderer instanceof PIXI.WebGLRenderer) ? Config.bounceTotalPoints : 100
    // for (let i = 0; i < this.ringQ; i++) {
    //   this.lines.push(this.Graphics())
    //   this.rings.push(this.Sprite('transparentRing.png'))
    // }

    // this.coinQ = (this.utils.app.renderer instanceof PIXI.WebGLRenderer) ? Config.flyCoinsPerTreasureChest : 10
    // for (let i = 0; i < this.coinQ; i++) {
    //   const num = Math.ceil(Math.random() * 11)
    //   // console.log(num)
    //   this.coins.push(this.Sprite(`jewel${num}.png`))
    // }

    // this.opQ = (this.utils.app.renderer instanceof PIXI.WebGLRenderer) ? 300 : 50
    // for (let i = 0; i < this.opQ; i++) {
    //   this.op.push(this.Sprite())
    // }
  },
  Point (x, y) {
    return new PIXI.Point(x, y)
  },
  Container () {
    return new PIXI.Container()
  },
//   Loader () {
//     return PIXI.loader
//   },
  Application (w, h, transParentBoolean) {
    return new PIXI.Application(w, h, { transparent: transParentBoolean })
  },
  quadrupleSpriteSize (texture) {
    // texture should be 1000x500
    const arr = [
      [0, 0, 1, 1],
      [2000, 0, -1, 1],
      [0, 1000, 1, -1],
      [2000, 1000, -1, -1]
    ]; let s; const
      cont = this.Container()
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
//   webgl () {
//     return this.utils.app.renderer instanceof PIXI.WebGLRenderer
//   },
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
//   BitmapText (str) {
//     return new PIXI.extras.BitmapText(str, { font: '21px Hiragino Sans' })
//   },
  Rope (texture, points) {
    return new PIXI.SimpleRope(texture, points);
  },
  Texture (str) {
    return PIXI.Texture.from(str)
  },
  AnimatedSprite (array) {
    return new PIXI.AnimatedSprite(array)
  },
  returnObjectPool (str) {
    for (let i = 0; i < this.opQ; i++) {
    //   this.op[i].texture = this.utils.spritesheet.textures[str]
	  this.op.push(this.Sprite(str));
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
    // if (!str) {
    //   return new PIXI.Sprite()
    // }
    if (this.gv.sheet && this.gv.sheet.textures[str]) {
      // if(test)console.log('from spritesheet', str)
      return new PIXI.Sprite(this.gv.sheet.textures[str])
    }
    // if(test)console.log('from directory', str, this.utils.spritesheet)
    return new PIXI.Sprite(PIXI.Texture.from(str));//new PIXI.Sprite.fromImage(`/bmps/dragon/${str}`)
  },
  Graphics () {
    return new PIXI.Graphics()
  },
  createPool (cont, str, colors, scaleArray) {
    const flameArray = this.returnObjectPool(str);
    const flameQ = flameArray.length;
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

      item.tint = this.colors[colorCounter]
      colorCounter++
      if (colorCounter > this.colors.length - 1) {
        colorCounter = 0
      }
      cont.addChild(item)
    }
    return { flameArray, flameQ }
  }

}
export default AssetCreation;