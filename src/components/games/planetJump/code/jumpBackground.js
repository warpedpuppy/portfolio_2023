import Utils from './utils'
import Assets from './assetCreation'
import Config from './animationsConfig'
import RainbowSwirls from './rainbowSwirls'
import Tweens from './Tweens'
import Planets from './jumpBackground/planets/planet'
import ThreeInARow from './threeInARow'

export default function JumpBackground(gv) {
  return {
    cont: Assets.Container(),
    background: Assets.Graphics(),
    foreground: Assets.Graphics(),
    orbsCont: Assets.Container(),
    ground: Assets.Graphics(),
    colQ: Config.spaceColQ,
    rowQ: Config.spaceRowQ,
    rainbowSwirlsQ: 4,
    rainbowSwirlInstances: [],
    transition: false,
    currentOrb: undefined,
    landingOrb: undefined,
    orbs: [],
    utils: Utils,
    pause: false,
    dotEatBoolean: true,
    spacer: 100,
    startScale: 0.1,
    orbListen: true,
    heroCollisionDetectObject: {},
    init (parentCont, action) {
      this.hero = gv.hero;
      this.app = gv;
      this.parentCont = gv.stage;
      this.wh = gv;
      this.spritesheet = gv.sheet;
      this.action = action;

      this.makeTransitionComplete = this.makeTransitionComplete.bind(this)

      const centerOrb = 2// this.test = Math.floor((this.rowQ * this.colQ) / 2) + 5;
      let counter = 0

      if (this.utils.isMobileOnly) {
        this.spacer = 100
      }

      // let totalPlanets = this.rowQ * this.colQ;

      for (let i = 0; i < this.rowQ; i++) {
        for (let j = 0; j < this.colQ; j++) {
          const planet = Planets(gv).buildPlanet(counter, this.startScale)
          planet.x = j * this.spacer
          planet.y = planet.startY = i * this.spacer
          this.orbsCont.addChild(planet)
          this.orbs.push(planet)
          if (counter === centerOrb) {
            this.centerOrbIndex = centerOrb
            this.currentOrb = this.landingOrb = this.centralOrb = planet
          }
          counter++
        }
      }

      // let radius = (this.hero.activeHero.body.width / 2) * this.utils.root.hero.cont.scale.x;
      // this.heroCollisionDetectObject.radius = radius;

      this.threeInARow = ThreeInARow().init(this.orbs, this.spacer, this.colors, this.startScale, this.orbsCont, this.listeners)
      this.threeInARow.completeHandler1()

      this.background.beginFill(0x000066).drawRect(0, 0, gv.canvasWidth, gv.canvasHeight).endFill()
      this.cont.addChild(this.background)

      this.cont.addChild(this.orbsCont)

      this.startXs = ['TL', 'BL', 'TR', 'BR']
      for (let i = 0; i < this.rainbowSwirlsQ; i++) {
        this.tileColumn = RainbowSwirls(gv)
        this.tileColumn.init(this.cont, this.startXs[i], action)
        this.tileColumn.addToStage()
        this.rainbowSwirlInstances.push(this.tileColumn)
      }

      this.loopingQ = Math.max(this.orbs.length)
    },
    buildBoard () {

    },
    listeners (boolean) {
      this.orbListen = boolean
    //   gv.keyHandler.onOff(boolean)
    },
    addToStage () {
      this.transition = false
      this.currentOrb = this.landingOrb
      this.orbsCont.pivot = Assets.Point(this.landingOrb.x, this.landingOrb.y)
      this.orbsCont.x = gv.halfWidth;
      this.orbsCont.y = gv.halfHeight;
      gv.hero.cont.y = gv.halfHeight;
      this.pause = false
      gv.stage.addChildAt(this.cont, 1)
      gv.hero.floor = (-(this.currentOrb.background.width / 2))
      this.orbsCont.alpha = 1
    },
    removeFromStage () {
      Tweens.killAll()

      gv.stage.removeChild(this.cont)
      // this.jumpPoints.removeFromStage();
      // this.parentCont.removeChild(this.orbsCont);
    },
    resize () {
      this.background.clear()
      this.background.beginFill(0x000066).drawRect(0, 0, gv.canvasWidth, gv.canvasHeight).endFill()

      this.orbsCont.x = (gv.canvasWidth / 2)
      this.orbsCont.y = (gv.canvasHeight / 2)

      this.cont.x = 0
      this.cont.y = 0
    },
    switchPlanets (newPlanet, i) {

      const oldPlanet = this.currentOrb;

      this.pause = true;

      this.currentOrb = newPlanet;

      const color1 = oldPlanet.color;
      const tint1 = oldPlanet.background.tint;

      const color2 = this.currentOrb.color;
      const tint2 = this.currentOrb.background.tint;

      oldPlanet.color = color2;
      oldPlanet.background.tint = tint2;

      this.currentOrb.color = color1;
      this.currentOrb.background.tint = tint1;

      Tweens.tween(oldPlanet, 1.5, {
        x: [this.currentOrb.x, oldPlanet.x],
        y: [this.currentOrb.y, oldPlanet.y]
      }, undefined, 'easeOutBounce')

      Tweens.tween(this.currentOrb, 1.5, {
        x: [oldPlanet.x, this.currentOrb.x],
        y: [oldPlanet.y, this.currentOrb.y]
      }, undefined, 'easeOutBounce')
	
      Tweens.planetJump(this.orbsCont, gv.hero.cont, newPlanet, this.makeTransitionComplete.bind(this, i))

      // } else if (newPlanet === this.tokenOrb && this.jumpTokenUnlocked && !this.jumpTokenTaken) {

      // 	this.jumpTokenTaken = true;
      // 	this.utils.root.tokens.fillSlot(this.token);
      // }
    },
    makeTransitionComplete (i) {
      this.threeInARow.completeHandler1()
      this.centerOrbIndex = i
      this.pause = false
      this.transition = false
    }
  }
}
