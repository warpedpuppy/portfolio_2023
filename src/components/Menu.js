import './Menu.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BamLogo from './svgs/BamLogo';
function Menu() {
	const navigate = useNavigate();
	const [ page, setPage ] = useState('home');
	const [ collapsed, setCollapsed ] = useState(true)

	function goToPage(e) {
		let name = e.target.innerText.replace(/ /g, '-')
		setPage(name);
		navigate(name)
	}

	return ( 
		<nav className={ collapsed ? 'collapsed' : '' }>
		<h1><Link to="/">warped puppy</Link></h1>
		<div className='hamburger' onClick={ () => setCollapsed(!collapsed)}>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<ul>
			<li onClick={ e => goToPage(e)}>home</li>
			<li onClick={ e => goToPage(e)}>webinars</li>
			<li onClick={ e => goToPage(e)}>challenges</li>
			<li onClick={ e => goToPage(e)}>gamelets</li>
			{/* <li onClick={ e => goToPage(e)}>pretty little things</li> */}
			<li onClick={ e => goToPage(e)}>about</li>
		</ul>
		<div className='menu-screen'></div>
		</nav>
	 );
}

export default Menu;