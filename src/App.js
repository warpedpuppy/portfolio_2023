import './App.scss';
import Logo from './components/Logo';
import Home from './pages/Home';
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
			<Route path="fireworks" element={<div>fireworks</div>} />
			<Route path="*" element={<h1>challenge not found</h1>} />
		</Route>
		<Route path="games" element={<><h2>games:</h2><Outlet /></>}>
			<Route index element={<div>index</div>} />
			<Route path="dragon" element={<div>dragon</div>} />
			<Route path="*" element={<h1>challenge not found</h1>} />
		</Route>
		<Route path="*" element={<h1>not found</h1>} />
	</Routes>
	</BrowserRouter>
  );
}

export default App;
