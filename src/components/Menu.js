import './Menu.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Menu() {
	const navigate = useNavigate();
	const [ page, setPage ] = useState('home')

	function goToPage(e) {
		let name = e.target.innerText.replace(/ /g, '-')
		setPage(name);
		navigate(name)
	}

	return ( 
		<nav>
			
		<ul>
			<li onClick={ e => goToPage(e)}>home</li>
			<li onClick={ e => goToPage(e)}>webinars</li>
			<li onClick={ e => goToPage(e)}>challenges</li>
			<li onClick={ e => goToPage(e)}>gamelets</li>
			<li onClick={ e => goToPage(e)}>pretty little things</li>
			<li onClick={ e => goToPage(e)}>about</li>
		</ul>
		<div id="submenu">
			<div id='submenu-webinars' className={page.includes('webinars') ? 'show' : 'hide'}>
				<ul>
					<li><Link to="/webinars/solitaire">solitaire</Link></li>
					<li><Link to="/webinars/svg-animations">svg animation</Link></li>
				</ul>
			</div>
			<div id='submenu-challenges' className={page.includes('challenges') ? 'show' : 'hide'}>
				<ul>
					<li><Link to="/challenges/fireworks">fireworks</Link></li>
					<li><Link to="/challenges/maze-solver">maze solver</Link></li>
					<li><Link to="/challenges/soduko">soduko</Link></li>
				</ul>
			</div>
			<div id='submenu-gamelets' className={page.includes('gamelets') ? 'show' : 'hide'}>
				<ul>
					<li><Link to="/gamelets/pig">pig</Link></li>
					<li><Link to="/gamelets/dragon">dragon</Link></li>
					<li><Link to="/gamelets/fish">fish</Link></li>
					<li><Link to="/gamelets/planet-jump">planet jump</Link></li>
					<li><Link to="/gamelets/planet-jump">lines</Link></li>
				</ul>
			</div>
			<div id='submenu-pretty' className={page.includes('pretty') ? 'show' : 'hide'}>
				<ul>
					<li>glitter pool</li>
				</ul>
			</div>
		</div>
		</nav>
	 );
}

export default Menu;