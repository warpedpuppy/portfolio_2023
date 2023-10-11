import './PatternMaker.scss';
import PatternMakerContent from './components/PatternMakerContent';
import TabLayout from '../../../layout-templates/tabs/TabLayout';
function PatternMaker() {


	
	return ( 
	<section className="general-challenges-layout">
		<h1>spirograph</h1>
		<TabLayout content={<PatternMakerContent />} />
	</section>
	 );
}

export default PatternMaker;