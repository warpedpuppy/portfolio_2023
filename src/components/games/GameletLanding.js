import './GameletLanding.scss';
import { Link } from 'react-router-dom';
function GameletLanding() {
	return ( 
		<div className="general-layout">
			<h2>gamelets:</h2>
			<p>Some featured parts of games I've built over the years:</p>
			<ul>
			<li><Link to="/gamelets/pig">pig</Link></li>
			<li><Link to="/gamelets/dragon">dragon</Link></li>
			<li><Link to="/gamelets/fish">fish</Link></li>
			<li><Link to="/gamelets/planet-jump">planet jump</Link></li>
			{/* <li><Link to="/gamelets/lines">lines</Link></li> */}
			</ul>
		</div>
	 );
}

export default GameletLanding;