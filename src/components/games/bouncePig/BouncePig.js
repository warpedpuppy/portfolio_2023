
import GeneralLayout from '../../../layout-templates/GeneralLayout';
import GameletCanvas from '../GameletCanvas';
function BouncePig({game}) {
	return ( 
		<GeneralLayout
		title="bounce pig"
		subtitle="draw a bounce platform on the animation and send the pig flying"
		component={<GameletCanvas game="pig"/>}
		/>
	 ); 
}

export default BouncePig;