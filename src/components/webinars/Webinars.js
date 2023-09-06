import './Webinars.scss';
import { Link } from 'react-router-dom';
function Webinars() {
	return ( 
		<ul>
			<li><Link to="/webinars/solitaire">solitaire</Link></li>
			<li><Link to="/webinars/svg-animations">svg animation</Link></li>
		</ul>
	 );
}

export default Webinars;