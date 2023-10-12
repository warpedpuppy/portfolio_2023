import './Gamelets.scss';
import TabLayout from '../../layout-templates/tabs/TabLayout';
import GameletCanvas from './GameletCanvas';
function Gamelets({game}) {

	return ( 
		<div className="general-layout">
		    <TabLayout 
			tabs={ ['content', 'concept'] } 
			content={ <GameletCanvas game={game} /> }
			/>
		</div>
	 );
}

export default Gamelets;