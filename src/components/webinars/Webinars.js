import './Webinars.scss';
import { Link } from 'react-router-dom';
function Webinars() {
	return ( 
		<div className='general-layout webinars'>
			<h2>webinars:</h2>
			<p>Three webinars I have taught:</p>
			<ul>
				<li><Link to="/webinars/solitaire">solitaire</Link></li>
				<li><Link to="/webinars/svg-animations">svg animation</Link></li>
				<li><Link to="/webinars/web-dev">web dev</Link></li>
			</ul>
		</div>
	 );
}

export default Webinars;