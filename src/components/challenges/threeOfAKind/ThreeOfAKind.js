import './ThreeOfAKind.scss';

import TabLayout from '../../../layout-templates/tabs/TabLayout';
import ThreeContent from './components/ThreeContent';
import ThreeCode from './components/ThreeCode';
import ThreeConcept from './components/ThreeConcept';

function ThreeOfAKind() {
	
	return ( 
	<section className='general-challenges-layout three-of-a-kind'>
		<h1>three-of-a-kind checker</h1>
	<TabLayout 
	backButtonBoolean={true}
	contentArray={[<ThreeContent />,<ThreeCode />,<ThreeConcept />]} />
	</section> );
}

export default ThreeOfAKind;