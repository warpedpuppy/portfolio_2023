import './Home.scss';
import BamLogo from '../components/svgs/BamLogo';
import HomeCanvas from './home/HomeCanvas';
function Home() {
	return ( 
		<div id="home-page">
			<BamLogo />
			<HomeCanvas />
		</div>
	 );
}

export default Home;