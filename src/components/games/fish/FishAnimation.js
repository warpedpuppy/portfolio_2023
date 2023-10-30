
import GeneralLayout from '../../../layout-templates/GeneralLayout';
import GameletCanvas from '../GameletCanvas';
function FishAnimation({game}) {
	return ( 
		<GeneralLayout
		title="fish animation"
		subtitle="a background for a lecture I gave"
		component={<GameletCanvas game="fish"/>}
		/>
	 ); 
}

export default FishAnimation;