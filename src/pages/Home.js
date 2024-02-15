import './Home.scss';
import BamLogo from '../components/svgs/BamLogo';
import HomeCanvas from './home/HomeCanvas';
import { Link } from 'react-router-dom';
function Home() {
	return ( 
		<div id="home-page">
			<Link to="/about"><BamLogo /></Link>
			<div id="home-page-text">
				<p>My name is Ted and I've been writing code for a while.</p>
				<p><a href="/docs/edward_walther_resume.pdf" target='_blank'>Here's</a> my resume.</p>
			</div>
			<HomeCanvas />
		</div>
	 );
}

export default Home;