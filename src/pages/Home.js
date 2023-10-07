import './Home.scss';
import BamLogo from '../components/svgs/BamLogo';
import HomeCanvas from './home/HomeCanvas';
import { Link } from 'react-router-dom';
function Home() {
	return ( 
		<div id="home-page">
			<Link to="/about"><BamLogo /></Link>
			<HomeCanvas />
		</div>
	 );
}

export default Home;