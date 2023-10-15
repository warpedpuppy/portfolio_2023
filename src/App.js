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
import Webinars from './components/webinars/Webinars';
import Challenges from './components/challenges/Challenges';
import GameletLanding from './components/games/GameletLanding';
import PrettyLittleThings from './components/pretty-little-things/PrettyLittleThings';
import Gamelets from './components/games/Gamelets';
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
			<Route index element={<Webinars />} />
			<Route path="solitaire" element={<Solitaire />} />
			<Route path="svg-animations" element={<SVGAnimations />} />
			<Route path="web-dev" element={<WebDev />} />
			<Route path="*" element={<h1>webinars not found</h1>} />
		</Route>
		<Route path="challenges" element={<Outlet />}>
			<Route index element={<Challenges />} />
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
			<Route path="fish" element={<Gamelets game="fish" />} />
			<Route path="pig" element={<Gamelets game="pig" />} />
			<Route path="planet-jump" element={<Gamelets game="planet-jump" />} />
			<Route path="lines" element={<Gamelets game="lines" />} />
			<Route path="*" element={<h1>game not found</h1>} />
		</Route>
		<Route path="pretty-little-things" element={<><h2>pretty little things:</h2><Outlet /></>}>
			<Route index element={<PrettyLittleThings />} />
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
