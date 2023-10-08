import './Challenges.scss';
import { Link } from 'react-router-dom';
function Challenges() {
	return ( 
		<div className='general-layout challenges'>
		<h2>challenges:</h2>
		<p>Over the years I've created a lot of challenges for students, friends, and sometimes just myself.</p>
		<p>Here are several of them:</p>
		<ul>
			<li><Link to="/challenges/fireworks">fireworks</Link></li>
			<li><Link to="/challenges/maze-solver">maze solver</Link></li>
			<li><Link to="/challenges/soduko">soduko</Link></li>
			<li><Link to="/challenges/three-of-a-kind">three of a kind</Link></li>
			<li><Link to="/challenges/murmuration">murmuration</Link></li>
			<li><Link to="/challenges/pattern-maker">pattern maker</Link></li>
		</ul>
		</div>
	 );
}

export default Challenges;