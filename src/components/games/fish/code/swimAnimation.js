import PixiFps from 'pixi-fps'
import Utils from './utils'
import Assets from './assetCreation'
import Clock from './supportingClasses/universal/clock'
import Gears from './supportingClasses/universal/gears'
import Config from './animationsConfig'
import KeyHandler from './supportingClasses/universal/keyHandler'
import Grid from './supportingClasses/grid/gridIndex'

export default function FishAnimation(gv) {
  return {
    mode: ['swim'],
    activeModeIndex: 0,
    activeMode: undefined,
    filterContainer: Assets.Container(),
    action: true,
    gears: Gears(),
    clock: Clock(),
    transitionAnimationPlaying: false,
    utils: Utils,
    loader: Assets.Loader(),
    activeAction: undefined,
    grid: Grid(),
    dbData: {},
    storeAction: true,
    timeOut: undefined,
    fullStop: false,
    kingCont: Assets.Container(),
    frame: Assets.Graphics(),
    kingContBackground: Assets.Graphics(),
    showFPS: false,
    init (isMobile, isMobileOnly, id, parent) {
      this.id = id
      if (this.id === undefined) {
        parent.redirectHome()
        return
      }
      
      this.utils.root = this
      this.activeMode = this.mode[this.activeModeIndex]
      this.isMobile = isMobile
      this.isMobileOnly = isMobileOnly

      this.levelComplete.init()

      if (!this.isMobile) {
        this.utils.getWidthAndHeight()
      } else {
        const test1 = this.utils.returnCanvasWidth()
        const test2 = this.utils.returnCanvasHeight()

        if (test1 > test2) {
          // landscape
          this.orientationChange.makeLandscape()
        } else {
          // portrait
          this.orientationChange.makePortrait()
        }
      }

      const app = this.app = Assets.Application(
        this.utils.canvasWidth,
        this.utils.canvasHeight,
        true
      )
      document.getElementById('homeCanvas').appendChild(app.view)
      this.stage = app.stage
      this.stage.addChild(this.kingCont)

      if (this.showFPS) {
        this.fpsCounter = new PixiFps()
        this.fpsCounter.x = this.utils.canvasWidth - 75
      }



      this.kingCont.addChild(this.filterContainer)

      this.loadDB = this.loadDB.bind(this)
      this.buildGame = this.buildGame.bind(this)
      this.startGame = this.startGame.bind(this)
      this.animate = this.animate.bind(this)
      this.animateDesktopIpad = this.animateDesktopIpad.bind(this)
      this.animateMobile = this.animateMobile.bind(this)

     
    },
  
    
    pause (boolean) {
      this.action = boolean
    },
    buildGame () {
     
      Assets.init()

      this.gears.init().addToStage()

      this.clock.init().addToStage()

      this.tokens.init()

      this.grid.init()

      this.hero.init(this.kingCont)

      if (this.isMobileOnly) {
        this.hero.cont.scale.set(Config.mobileOnlyScalingSwim)
      }

      this.utils.setHero(this.hero)

      this.filterAnimation.init(this.filterContainer)

      this.swim.init(this.kingCont)

      this.keyHandler = KeyHandler()

      this.keyHandler.init(this)

      this.activeAction = this[this.activeMode].addToStage()

      if (this.isMobile) {
        this.controlPanel.init(this)
        this.controlPanel.addToStage()
      }

      if (this.isMobile) {
        // mobile
        this.orientationChange.init(this)
      } else {
        window.onresize = this.resize.resizeHandler.bind(this.resize)
      }

      this.startGame()
    },
    startGame () {
      if (!this.isMobile) {
        this.app.ticker.add(this.animateDesktopIpad)
        this.keyHandler.addToStage()
      } else {
        this.app.ticker.add(this.animateMobile)
      }

      if (Config.testingJump) {
        this.makeJumpActive()
      }
      if (this.showFPS) this.app.stage.addChild(this.fpsCounter)
      // this.animations.circles({start: true, expand: true});

      this.hero.addToStage()
    },
    stop () {
      window.onresize = undefined

      if (this.app) this.app.destroy(true)

      if (!this.isMobile && this.keyHandler) {
        this.keyHandler.removeFromStage()
      }

      Tweens.killAll()
    },
    reset () {
      this.tokens.reset()

      // this[this.activeMode].removeFromStage();

      this.grid.nextBoard()
      this.keyHandler.addToStage()

      this.fullStop = false
    },
    filterTest () {
      this.filterAnimation.filterToggle()
    },
    animateMobile () {
      this.orientationChange.animate()
      this.animate()
    },
    animateDesktopIpad () {
      this.animate()
    },
    levelCompleteHandler () {
      this.levelComplete.boardComplete()
    },
    animate () {
      Tweens.animate()

      if (this.fullStop) return

      if (this.action) {
        if (this.rotateLeftBoolean) {
          this.activeAction.rotate('left')
        } else if (this.rotateRightBoolean) {
          this.activeAction.rotate('right')
        }
        this.clock.animate()
        this.filterAnimation.animate()
        this.gears.animate()
        // this.activeAction.animate();
        this[this.activeMode].animate()
        if (this.activeMode === 'swim' || this.activeMode === 'fly') {
          this.grid.animate(this.activeAction.vx, this.activeAction.vy)
        }
      }
    }
  }
}
