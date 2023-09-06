import './Games.scss';
import { Link } from 'react-router-dom';
function Games() {
	return ( 
		<ul>
			<li><Link to="/games/pig">pig</Link></li>
			<li><Link to="/games/dragon">dragon</Link></li>
			<li><Link to="/games/fish">fish</Link></li>
			<li><Link to="/games/planet-jump">planet jump</Link></li>
			<li><Link to="/games/planet-jump">lines</Link></li>
		</ul>
	 );
}

export default Games;