import './PrettyLittleThings.scss';
import { Link } from 'react-router-dom';
function PrettyLittleThings() {
	return ( 
		<div className='general-layout'>
		<div className="landing-page-internal-box">
		<div className="landing-animation">
		</div>
		<h2>pretty little things</h2>
		<p>Over the years I've created a lot of pretty little things for work and myself.</p>
		<p>Here are several of them:</p>
		<ul>
			<li><Link to="/glitter-pool">glitter pool</Link></li>
			<li><Link to="/pretty-little-things/klimt-background">klimt inspired background</Link></li>
			<li><Link to="/pretty-little-things/pretty-ring">pretty ring</Link></li>
			<li><Link to="/pretty-little-things/sparklies">sparklies</Link></li>
		</ul>
		</div>
		</div>
	 );
}

export default PrettyLittleThings;