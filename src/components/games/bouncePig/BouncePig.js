
import GeneralLayout from '../../../layout-templates/GeneralLayout';
import GameletCanvas from '../GameletCanvas';
function BouncePig({game}) {
	return ( 
		<GeneralLayout
		title="bounce pig"
		subtitle="bounce pig"
		component={<GameletCanvas game="pig"/>}
		/>
	 ); 
}

export default BouncePig;