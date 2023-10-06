import './Menu.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
		</nav>
	 );
}

export default Menu;