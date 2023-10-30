import './ThreeOfAKind.scss';
import ThreeContent from './components/ThreeContent';
import GeneralLayout from '../../../layout-templates/GeneralLayout';
function ThreeOfAKind() {
	
	return ( 
		<GeneralLayout 
		title="three-of-a-kind checker"
		subtitle="click on adjacent boxes to switch positions"
		component={<ThreeContent />}
		/>
	
	);
}

export default ThreeOfAKind;