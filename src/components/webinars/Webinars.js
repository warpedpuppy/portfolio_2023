import './Webinars.scss';
import { Link } from 'react-router-dom';
function Webinars() {
	return ( 
		<div className='general-layout webinars'>
			<div className="landing-page-internal-box">
			<div className="landing-animation">
			</div>
			<h2>webinars:</h2>
			<p>I've taught several webinars, and luckily there's video evidence of three of them:</p>
			<ul>
				<li><Link to="/webinars/solitaire">Coding Solitaire in JavaScript</Link></li>
				<li><Link to="/webinars/svg-animations">Animating SVGs</Link></li>
				<li><Link to="/webinars/web-dev">Things I've Learned as a Webdev</Link></li>
			</ul>
			</div>
		</div>
	 );
}

export default Webinars;