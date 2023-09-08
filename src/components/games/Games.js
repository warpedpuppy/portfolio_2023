import './Games.scss';
import { Link } from 'react-router-dom';
function Games() {
	return ( 
		<ul>
			<li><Link to="/gamelets/pig">pig</Link></li>
			<li><Link to="/gamelets/dragon">dragon</Link></li>
			<li><Link to="/gamelets/fish">fish</Link></li>
			<li><Link to="/gamelets/planet-jump">planet jump</Link></li>
			<li><Link to="/gamelets/planet-jump">lines</Link></li>
		</ul>
	 );
}

export default Games;