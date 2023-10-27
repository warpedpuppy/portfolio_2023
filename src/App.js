import './App.scss';
import './sass/LandingPages.scss';
import './sass/GeneralLayout.scss';
import Home from './pages/Home';
import Menu from './components/Menu';
import Solitaire from './components/webinars/solitaire/Solitaire';
import SVGAnimations from './components/webinars/SVGAnimations/SVGAnimations';
import Fireworks from './components/challenges/fireworks/Fireworks';
import MazeSolver from './components/challenges/mazeSolver/MazeSolver';
import Soduko from './components/challenges/soduko/Soduko';
import Murmuration from './components/challenges/murmuration/Murmuration';
import ThreeOfAKind from './components/challenges/threeOfAKind/ThreeOfAKind';
import PatternMaker from './components/challenges/pattern-maker/PatternMaker';
import WebinarsLanding from './components/webinars/WebinarsLanding';
import ChallengesLanding from './components/challenges/ChallengesLanding';
import GameletLanding from './components/games/GameletLanding';
import PrettyLittleThingsLanding from './components/pretty-little-things/PrettyLittleThingsLanding';
import Gamelets from './components/games/Gamelets';
import KlimtBackground from './components/pretty-little-things/klimt-background/KlimtBackground';
import PrettyRing from './components/pretty-little-things/pretty-ring/PrettyRing';
import Sparklies from './components/pretty-little-things/sparklies/Sparklies';
import Glitter from './components/pretty-little-things/glitter/Glitter';
import BouncePig from './components/games/bouncePig/BouncePig';
import FishAnimation from './components/games/fish/FishAnimation';
import PlanetJump from './components/games/planetJump/PlanetJump';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import WebDev from './components/webinars/web-dev/WebDev';

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
		<Route path="challenges" element={<Outlet />}>
			<Route index element={<ChallengesLanding />} />
			<Route path="fireworks" element={<Fireworks />} />
			<Route path="soduko" element={<Soduko />} />
			<Route path="maze-solver" element={<MazeSolver />} />
			<Route path="murmuration" element={<Murmuration />} />
			<Route path="three-of-a-kind" element={<ThreeOfAKind />} />
			<Route path="pattern-maker" element={<PatternMaker />} />
			<Route path="*" element={<h1>challenge not found</h1>} />
		</Route>
		<Route path="gamelets" element={<Outlet />}>
			<Route index element={<GameletLanding />} />
			<Route path="dragon" element={<Gamelets game="dragon" />} />
			<Route path="fish" element={<FishAnimation />} />
			<Route path="pig" element={<BouncePig />} />
			<Route path="planet-jump" element={<PlanetJump />} />
			<Route path="lines" element={<Gamelets game="lines" />} />
			<Route path="*" element={<h1>game not found</h1>} />
		</Route>
		<Route path="pretty-little-things" element={<Outlet />}>
			<Route index element={<PrettyLittleThingsLanding />} />
			<Route path="glitter" element={<Glitter />} />
			<Route path="klimt-background" element={<KlimtBackground />} />
			<Route path="pretty-ring" element={<PrettyRing />} />
			<Route path="sparklies" element={<Sparklies />} />
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
