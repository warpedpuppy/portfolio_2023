import './Challenges.scss';
import { Link } from 'react-router-dom';
function Challenges() {
	return ( 
		<ul>
			<li><Link to="/challenges/fireworks">fireworks</Link></li>
			<li><Link to="/challenges/maze-solver">maze solver</Link></li>
			<li><Link to="/challenges/soduko">soduko</Link></li>
			<li><Link to="/challenges/three-of-a-kind">three of a kind</Link></li>
			<li><Link to="/challenges/murmuration">murmuration</Link></li>
		</ul>
	 );
}

export default Challenges;