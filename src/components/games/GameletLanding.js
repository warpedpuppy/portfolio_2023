import './GameletLanding.scss';
import { Link } from 'react-router-dom';
function GameletLanding() {
	return ( 
		<div className="general-layout">
			<div className="landing-page-internal-box">
			<div className="landing-animation">
			</div>
			<h2>gamelets:</h2>
			<p>These are some pieces of games I've built over the years.</p>
			<p>I'm including them because they presented interesting coding issues and, frankly, they're cute.</p>
			<ul>
			<li><Link to="/gamelets/pig">pig</Link></li>
			{/* <li><Link to="/gamelets/dragon">dragon</Link></li> */}
			<li><Link to="/gamelets/fish">fish</Link></li>
			<li><Link to="/gamelets/planet-jump">planet jump</Link></li>
			{/* <li><Link to="/gamelets/lines">lines</Link></li> */}
			</ul>
			</div>
		</div>
	 );
}

export default GameletLanding;