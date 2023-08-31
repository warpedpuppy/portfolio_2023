import './Home.scss';
import { Link } from 'react-router-dom';
function Home() {
	return ( 
		<div id="home-page">
		<Link to="/">home</Link>
		<dl>
			<dt><Link to="/challenges">challenges</Link></dt>
				<dd>solitaire</dd>
				<dd><Link to="/challenges/fireworks">fireworks</Link></dd>
				<dd>maze solver</dd>
				<dd>soduko</dd>
			<dt>gamelets</dt>
				<dd>bounce pig, bounce</dd>
				<dd>dragon</dd>
				<dd>fish</dd>
				<dd>planet jump</dd>
				<dd>lines</dd>
			<dt>artsy stuff</dt>
				<dd>glitter pool</dd>
		</dl>
		</div>
	 );
}

export default Home;