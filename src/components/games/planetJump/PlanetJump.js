
import GeneralLayout from '../../../layout-templates/GeneralLayout';
import GameletCanvas from '../GameletCanvas';
function PlanetJump({game}) {
	return ( 
		<GeneralLayout
		title="planet jump"
		subtitle=""
		component={<GameletCanvas game="planet-jump"/>}
		/>
	 ); 
}

export default PlanetJump;