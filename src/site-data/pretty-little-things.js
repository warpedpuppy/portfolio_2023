import GlitterCanvas from '../components/pretty-little-things/glitter/components/GlitterCanvas';
import KlimtCanvas from '../components/pretty-little-things/klimt-background/components/KlimtCanvas';
import PrettyRingCanvas from '../components/pretty-little-things/pretty-ring/components/PrettyRingCanvas';
import SparkliesCanvas from '../components/pretty-little-things/sparklies/components/SparkliesCanvas';
import FireworksContent from '../components/pretty-little-things/fireworks/components/FireworksContent';
import SodukoContent from '../components/pretty-little-things/soduko/components/SodukoContent';
import ThreeContent from '../components/pretty-little-things/threeOfAKind/components/ThreeContent';
import PatternMakerContent from '../components/pretty-little-things/pattern-maker/components/PatternMakerContent';
import MurmurationContent from '../components/pretty-little-things/murmuration/components/MumurationContent';
import GameletCanvas from '../components/games/GameletCanvas';
import CrystalBallCanvas from '../components/pretty-little-things/crystal-ball/components/CrystalBallCanvas';
import PinkDrawersCanvas from '../components/pretty-little-things/pink-drawers/components/PinkDrawersCanvas';
import GeometricPuzzle from '../components/pretty-little-things/geometric-puzzle/components/GeometricPuzzle';
import TropicalPlants from '../components/pretty-little-things/tropical-plants/components/TropicalPlants';
const PrettyLittleThings = {
  glitter: {
    title: "glitter",
    subtitle: "",
    component: <GlitterCanvas />,
    landingPageData: {
      link: "/pretty-little-things/glitter",
      title: "glitter",
    },
  },
  klimt: {
    title: "klimt inspired spirals",
    subtitle: "",
    component: <KlimtCanvas />,
    landingPageData: {
      link: "/pretty-little-things/klimt-background",
      title: "klimt inspired background",
    },
  },
  prettyRing: {
    title: "pretty ring",
    subtitle: "",
    component: <PrettyRingCanvas />,
    landingPageData: {
      link: "/pretty-little-things/pretty-ring",
      title: "pretty ring",
    },
  },
  sparklies: {
    title: "sparklies",
    subtitle: "",
    component: <SparkliesCanvas />,
    landingPageData: {
      link: "/pretty-little-things/sparklies",
      title: "sparklies",
    },
  },
  fireworks: {
    title: "fireworks",
    subtitle: "",
    component: <FireworksContent />,
    landingPageData: {
      link: "/pretty-little-things/fireworks",
      title: "step-by-step fireworks",
    },
  },
  soduko: {
    title: "soduko error handler",
    subtitle: "the grid below will show errors if the same number appears multple times in any row, column, or ninth section.",
    component: <SodukoContent />,
    landingPageData: { link: "/pretty-little-things/soduko", title: "soduko" },
  },
  threeOfAKind: {
    title: "three-of-a-kind checker",
    subtitle: "click on adjacent boxes to switch positions",
    component: <ThreeContent />,
    landingPageData: {
      link: "/pretty-little-things/three-of-a-kind",
      title: "three-of-a-kind",
    },
  },
  murmuration: {
    title: "murmuration of starlings",
    subtitle: "",
    component: <MurmurationContent />,
    landingPageData: { link: "/pretty-little-things/murmuration", title: "murmuration" },
  },
  patternMaker: {
    title: "spirograph",
    subtitle: "",
    component: <PatternMakerContent />,
    landingPageData: { link: "/pretty-little-things/pattern-maker", title: "spirograph" },
  },
  pig: {
    title: "pig",
    subtitle: "swipe screen to create jump platform",
    component: <GameletCanvas game="pig" />,
    landingPageData: { link: "/pretty-little-things/pig", title: "pig" },
  },
  fish: {
    title: "fish",
    subtitle: "",
    component: <GameletCanvas game="fish" />,
    landingPageData: { link: "/pretty-little-things/fish", title: "fish" },
  },
  planetJump: {
    title: "Planet Jump",
    subtitle: "hit space bar to jump",
    component: <GameletCanvas game="planet-jump" />,
    landingPageData: { link: "/pretty-little-things/planet-jump", title: "planet jump" },
  },
  crystalBall: {
    title: "page insert for local organization",
    subtitle: "",
    component: <CrystalBallCanvas />,
    landingPageData: {
      link: "/pretty-little-things/crystal-ball",
      title: "maine media crystal ball",
    },
  },
  pinkDrawers: {
    title: "silly little balls falling out of silly little drawers",
    subtitle: "conceived as an fps test: can I adjust the quantity of items on the screen as the fps adjusts?",
    component: <PinkDrawersCanvas />,
    landingPageData: {
      link: "/pretty-little-things/pink-drawers",
      title: "pink drawers",
    },
  },
  geometricPuzzle: {
    title: "customizable geometric puzzle",
    subtitle: "made for a codepen challenge",
    component: <GeometricPuzzle />,
    landingPageData: {
      link: "/pretty-little-things/geometric-puzzle",
      title: "geometric puzzle",
    },
  },
  tropicalPlants: {
    title: "tropical plant graphic",
    subtitle: "made in a rush for a previous portfolio",
    component: <TropicalPlants />,
    landingPageData: {
      link: "/pretty-little-things/tropical-plants",
      title: "tropical plants",
    },
  },
  superFunSite: {
    landingPageData: {
      link: "https://stately-sunshine-f0bb02.netlify.app/",
      title: "super fun site",
    },
  },
  cssHandout: {
    landingPageData: {
      link: "https://gentle-churros-c83d46.netlify.app/",
      title: "css handout",
    },
  },
};

export default PrettyLittleThings;
