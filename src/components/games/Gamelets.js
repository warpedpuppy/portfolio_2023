import './Gamelets.scss';
import { useEffect, useRef } from 'react';

import GameChooser from './GameChooser';
import TabLayout from '../../layout-templates/tabs/TabLayout';
import GameletCanvas from './GameletCanvas';
function Gamelets({game}) {

	// let gameCode = GameChooser(game).default;

	// const canvasContainer = useRef(null);
	// const gameRef = useRef(null);

	// useEffect( () => {
	// 	gameRef.current = gameCode(canvasContainer.current);
	// 	gameRef.current.start();
	// }, [canvasContainer, gameCode])

	// useEffect( () => () => gameRef.current.stop(), [] );


	return ( 
		<div className="general-layout">
		    <TabLayout 
			tabs={ ['content', 'concept'] } 
			content={<GameletCanvas game={game} />}
			/>
		</div>
	 );
}

export default Gamelets;