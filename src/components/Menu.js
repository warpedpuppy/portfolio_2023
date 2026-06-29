import './Menu.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
	{ href: '/#featured-work', label: 'Work' },
	{ href: '/#teaching', label: 'Teaching' },
	{ href: '/#about', label: 'About' },
	{ href: '/archive', label: 'Archive', internal: true },
];

function Menu() {
	const [ collapsed, setCollapsed ] = useState(true)

	return ( 
		<nav className={ collapsed ? 'collapsed' : '' }>
		<h1><Link to="/">Warped Puppy</Link></h1>
		<div className='hamburger' onClick={ () => setCollapsed(!collapsed)}>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<ul>
			{navItems.map((item) => (
				<li key={item.label}>
					{item.internal ? (
						<Link to={item.href} onClick={() => setCollapsed(true)}>{item.label}</Link>
					) : (
						<a href={item.href} onClick={() => setCollapsed(true)}>{item.label}</a>
					)}
				</li>
			))}
		</ul>
		<div className='menu-screen'></div>
		</nav>
	 );
}

export default Menu;
