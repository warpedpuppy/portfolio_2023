import Utils from './utils'
import Assets from './assetCreation'
import Rotate from './rotate'
import TriangleOfCollision from './triangleOfCollision'

export default function DragonAction (gv) {
  return {
    
    

    vx: 0,
    vy: 0,
    airBubbleCounter: 0,
    airBubbleStart: 0,
    countAllow: true,
    expand: [],
    percApply: true,

    colors: [0xFF0000, 0xFFFF00, 0xFF9900],
    flameArray: [],
    shootingFlames: [],
    flameCounter: 0,
	
    utils: Utils,
    triangleOfCollision: TriangleOfCollision(),
    rotateFunction: Rotate(),
	hero: gv.dragon,
    init (parent, background) {
      this.parent = parent
      this.grid = parent.grid
      this.background = background
      this.clouds = background.clouds
      this.hero =Utils.hero
      this.wh =Utils.wh
      this.stage =Utils.app.stage
      this.flames = Assets.ParticleContainer(this.flameQ)
      this.triangleOfCollision.init()
    },
    createPool () {
      const obj = Assets.createPool(this.flames, 'star.png', this.colors, [0.25, 0.5])
      this.flameArray = obj.flameArray
      this.flameQ = obj.flameQ
      this.flames.visible = false
      this.flames.y = -100
      gv.dragon.headCont.addChildAt(this.flames, 0)
    },
    resize () {
      // if (this.flames) {
      // 	this.flames.x =Utils.canvasWidth / 2;
      //     this.flames.y =Utils.canvasHeight / 2;
      // }

    },
    switchMode (mode) {
      this.mode = mode
      this.maxLength = this.increment * gv.dragon.segmentsQ
    },
    rotate (str, bool) {
    //   const obj = this.rotateFunction.rotate(str, this)
    //   this.vx = -obj.vx
    //   this.vy = -obj.vy
	gv.spinDirection = str;
		gv.spinning = bool;
    },
    fire (boolean) {
      this.flameOn = gv.flames.visible = gv.flameOn = boolean
    },
    animate ()  {
	


      gv.dragon.eyeCont.rotation = gv.radius
      gv.dragon.headCont.rotation = gv.radius

      gv.dragon.pos.push(gv.radius)

      if (gv.dragon.pos.length > gv.maxLength) {
        gv.dragon.pos = gv.dragon.pos.slice(-gv.maxLength)
      }

     

	  if (gv.spinning) {
		gv.dragon.cont.rotation += gv.spinDirection === 'right' ? Utils.deg2rad(5) : Utils.deg2rad(-5) ;


		for (let i = 1; i <= gv.dragon.segmentsQ; i++) {
			if (gv.spinDirection === 'left' && gv.dragon.segments[i].rotation < Utils.deg2rad(5 * i)) {
				gv.dragon.segments[i].rotation += Utils.deg2rad(0.5 * i)
			} else if (gv.spinDirection === 'right' && gv.dragon.segments[i].rotation > Utils.deg2rad(-5 * i)){
				gv.dragon.segments[i].rotation += Utils.deg2rad(-0.5 * i)
			}
			
		}



	  } else {
		for (let i = 1; i <= gv.dragon.segmentsQ; i++) {
			const index = gv.dragon.pos.length - (i * gv.increment)
			if (gv.dragon.pos.length >= index) {
			  gv.dragon.segments[i].rotation = gv.dragon.pos[index];
			  
			}
		  }
	  }

      if (gv.flameOn) {
        // this.triangleOfCollision.fireHit()


        for (let i = 0; i < gv.flameQ; i++) {
          const item = gv.flameArray[i]
          const determineContinue = Math.floor(Math.random() * 10)
          if (determineContinue < 9) continue
          item.x += item.vx
          item.y += item.vy
          item.rotation += 0.5
          item.alpha -= item.fade
          if (Math.abs(item.y) > item.maxDistance) {
            item.x = 0
            item.y = 0
            item.alpha = 1
          }
        }
      } else {
        gv.radius =Utils.cosWave(gv.storeRadius, 0.15, 0.01)
      }

      if (!gv.flameOn) {
        gv.dragon.wingCont.rotation = gv.storeRadius;
        gv.dragon.leftWing.rotation = Utils.deg2rad(Utils.cosWave(0, 20, 0.004));
        gv.dragon.leftWing2.rotation = Utils.deg2rad(Utils.cosWave(0, 20, 0.004));

        gv.dragon.rightWing.rotation = Utils.deg2rad(Utils.cosWave(0, -20, 0.004));
        gv.dragon.rightWing2.rotation = Utils.deg2rad(Utils.cosWave(0, -20, 0.004));

      } else {
        gv.dragon.wingCont.rotation = gv.radius;
        gv.dragon.leftWing.rotation =Utils.deg2rad(-30);
        gv.dragon.leftWing2.rotation =Utils.deg2rad(-30);
        gv.dragon.rightWing.rotation =Utils.deg2rad(30);
        gv.dragon.rightWing2.rotation =Utils.deg2rad(30);
      }
    }
  }
}
