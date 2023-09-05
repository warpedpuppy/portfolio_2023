import './App.scss';
import Logo from './components/Logo';
import Home from './pages/Home';
import Menu from './components/Menu';
import Solitaire from './components/webinars/solitaire/Solitaire';
import SVGAnimations from './components/webinars/SVGAnimations/SVGAnimations';
import Fireworks from './components/challenges/fireworks/Fireworks';
import MazeSolver from './components/challenges/mazeSolver/MazeSolver';
import Soduko from './components/challenges/soduko/Soduko';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
function App() {
  return (
	<BrowserRouter>
	<Menu />
	<Logo />
	<Home />
	<Routes>
		<Route index element={<Home />} />
		<Route path="webinars" element={<><h2>webinars:</h2><Outlet /></>}>
			<Route index element={<div>index</div>} />
			<Route path="solitaire" element={<Solitaire />} />
			<Route path="svg-animations" element={<SVGAnimations />} />
		</Route>
		<Route path="challenges" element={<><h2>challenges:</h2><Outlet /></>}>
			<Route index element={<div>index</div>} />
			<Route path="fireworks" element={<Fireworks />} />
			<Route path="soduko" element={<Soduko />} />
			<Route path="maze-solver" element={<MazeSolver />} />
			<Route path="*" element={<h1>challenge not found</h1>} />
		</Route>
		<Route path="games" element={<><h2>games:</h2><Outlet /></>}>
			<Route index element={<div>index</div>} />
			<Route path="dragon" element={<div>dragon</div>} />
			<Route path="fish" element={<div>fish</div>} />
			<Route path="pig" element={<div>pig</div>} />
			<Route path="planet-jump" element={<div>planet jump</div>} />
			<Route path="lines" element={<div>lines</div>} />
			<Route path="*" element={<h1>game not found</h1>} />
		</Route>
		<Route path="*" element={<h1>not found</h1>} />
	</Routes>
	</BrowserRouter>
  );
}

export default App;
