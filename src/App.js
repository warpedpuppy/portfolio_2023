import './App.scss';
import Logo from './components/Logo';
import Home from './pages/Home';
import Solitaire from './components/challenges/solitaire/Solitaire';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
function App() {
  return (
	<BrowserRouter>
	<Logo />
	<Home />
	<Routes>
		<Route index element={<Home />} />
		<Route path="challenges" element={<><h2>challenges:</h2><Outlet /></>}>
			<Route index element={<div>index</div>} />
			<Route path="solitaire" element={<Solitaire />} />
			<Route path="fireworks" element={<div>fireworks</div>} />
			<Route path="soduko" element={<div>soduko</div>} />
			<Route path="maze-solver" element={<div>maze solver</div>} />
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
