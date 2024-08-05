import "./App.scss";
import "./sass/LandingPages.scss";
import "./sass/GeneralLayout.scss";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Solitaire from "./components/webinars/solitaire/Solitaire";
import SVGAnimations from "./components/webinars/SVGAnimations/SVGAnimations";
import WebinarsLanding from "./components/webinars/WebinarsLanding";
import PrettyLittleThingsLanding from "./components/pretty-little-things/PrettyLittleThingsLanding";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import WebDev from "./components/webinars/web-dev/WebDev";
import StudentVideosLanding from "./components/student-videos/StudentVideosLanding";
import CurriculumVideoTemplate from "./components/student-videos/CurriculumVideos";
import StudentVideos from "./site-data/student-videos";
import PrettyLittleThingsTemplate from "./components/pretty-little-things/PrettyLittleThingsTemplate";
import PrettyLittleThings from "./site-data/pretty-little-things";
function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="*" element={<h1>home subpage not found</h1>} />
        </Route>
        <Route path="webinars" element={<Outlet />}>
          <Route index element={<WebinarsLanding />} />
          <Route path="solitaire" element={<Solitaire />} />
          <Route path="svg-animations" element={<SVGAnimations />} />
          <Route path="web-dev" element={<WebDev />} />
          <Route path="*" element={<h1>webinars not found</h1>} />
        </Route>
        <Route path="web-instruction" element={<Outlet />}>
          <Route index element={<StudentVideosLanding />} />
          <Route path="setting-up-aws" element={<CurriculumVideoTemplate {...StudentVideos.aws} />} />
          <Route path="drawing-app" element={<CurriculumVideoTemplate {...StudentVideos.drawingApp} />} />
          <Route path="css-to-sass" element={<CurriculumVideoTemplate {...StudentVideos.cssToSass} />} />
          <Route path="css-positioning" element={<CurriculumVideoTemplate {...StudentVideos.cssPositioning} />} />
          <Route path="flex-box" element={<CurriculumVideoTemplate {...StudentVideos.flexBox} />} />
          <Route path="grid" element={<CurriculumVideoTemplate {...StudentVideos.grid} />} />\
          <Route path="units-of-measurement" element={<CurriculumVideoTemplate {...StudentVideos.unitsOfMeasurement} />} />
          <Route path="native-css-variables" element={<CurriculumVideoTemplate {...StudentVideos.nativeCSSVariables} />} />
          <Route path="for-v-forEach" element={<CurriculumVideoTemplate {...StudentVideos.forVersusForEach} />} />
          <Route path="crud-endpoints" element={<CurriculumVideoTemplate {...StudentVideos.crudEndpoints} />} />
          <Route path="*" element={<h1>web instruction not found</h1>} />
        </Route>
        <Route path="pretty-little-things" element={<Outlet />}>
          <Route index element={<PrettyLittleThingsLanding />} />
          <Route path="glitter" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.glitter} />} />
          <Route path="klimt-background" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.klimt} />} />
          <Route path="pretty-ring" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.prettyRing} />} />
          <Route path="sparklies" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.sparklies} />} />
          <Route path="crystal-ball" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.crystalBall} />} />
          <Route path="fireworks" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.fireworks} />} />
          <Route path="soduko" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.soduko} />} />
          <Route path="maze-solver" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.mazeSolver} />} />
          <Route path="murmuration" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.murmuration} />} />
          <Route path="three-of-a-kind" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.threeOfAKind} />} />
          <Route path="pattern-maker" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.patternMaker} />} />
          <Route path="fish" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.fish} />} />
          <Route path="pig" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.pig} />} />
          <Route path="planet-jump" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.planetJump} />} />
          <Route path="pink-drawers" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.pinkDrawers} />} />
          <Route path="geometric-puzzle" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.geometricPuzzle} />} />
          <Route path="tropical-plants" element={<PrettyLittleThingsTemplate {...PrettyLittleThings.tropicalPlants} />} />
          <Route path="*" element={<h1>pretty little thing not found</h1>} />
        </Route>
        <Route path="about" element={<Outlet />}>
          <Route index element={<About />} />
          <Route path="*" element={<h1>about not found</h1>} />
        </Route>
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
