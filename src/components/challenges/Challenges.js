import './Challenges.scss';
import { Link } from 'react-router-dom';
function Challenges() {
	return ( 
		<ul>
			<li><Link to="/challenges/fireworks">fireworks</Link></li>
			<li><Link to="/challenges/maze-solver">maze solver</Link></li>
			<li><Link to="/challenges/soduko">soduko</Link></li>
		</ul>
	 );
}

export default Challenges;