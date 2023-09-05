import './Menu.scss';
import { Link } from 'react-router-dom';
function Menu() {
	return ( 
		<nav>
			<Link to="/">home</Link>
		<dl>
			<dt><Link to="/webinars">webinars</Link></dt>
				<dd><Link to="/webinars/solitaire">solitaire</Link></dd>
				<dd><Link to="/webinars/svg-animations">svg animation</Link></dd>
			<dt><Link to="/challenges">challenges</Link></dt>
				<dd><Link to="/challenges/fireworks">fireworks</Link></dd>
				<dd><Link to="/challenges/maze-solver">maze solver</Link></dd>
				<dd><Link to="/challenges/soduko">soduko</Link></dd>
			<dt><Link to="/games">gamelets</Link></dt>
				<dd><Link to="/games/pig">pig</Link></dd>
				<dd><Link to="/games/dragon">dragon</Link></dd>
				<dd><Link to="/games/fish">fish</Link></dd>
				<dd><Link to="/games/planet-jump">planet jump</Link></dd>
				<dd><Link to="/games/planet-jump">lines</Link></dd>
			<dt>artsy stuff</dt>
				<dd>glitter pool</dd>
		</dl>
		<Link to="/about">about</Link>
		</nav>
	 );
}

export default Menu;