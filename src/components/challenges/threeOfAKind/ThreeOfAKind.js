import './ThreeOfAKind.scss';

import TabLayout from '../../../layout-templates/tabs/TabLayout';
import ThreeContent from './components/ThreeContent';
import ThreeCode from './components/ThreeCode';
import ThreeConcept from './components/ThreeConcept';
import GeneralLayout from '../../../layout-templates/GeneralLayout';
function ThreeOfAKind() {
	
	return ( 
		<GeneralLayout 
		title="three-of-a-kind checker"
		subtitle=""
		component={<ThreeContent />}
		/>
	// <section className='general-challenges-layout three-of-a-kind'>
	// 	<h1>three-of-a-kind checker</h1>
	// <TabLayout 
	// backButtonBoolean={true}
	// contentArray={[<ThreeContent />,<ThreeCode />,<ThreeConcept />]} />
	// </section> 
	
	);
}

export default ThreeOfAKind;