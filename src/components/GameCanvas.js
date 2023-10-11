// THIS WAS AN EXPERIMENT TO SEE IF I COULD UNIFY
import './GameCanvas.scss';
import { useEffect, useRef } from 'react';

import GameChooser from './games/GameChooser';
import TabLayout from '../layout-templates/tabs/TabLayout';
function GameCanvas({game}) {

	let gameCode = GameChooser(game).default;

	const canvasContainer = useRef(null);
	const gameRef = useRef(null);

	useEffect( () => {
		gameRef.current = gameCode(canvasContainer.current);
		gameRef.current.start();
	}, [canvasContainer, gameCode])

	useEffect( () => () => gameRef.current.stop(), [] );


	return ( 
		<div className="general-layout">
		    <TabLayout 
			tabs={ ['content', 'concept'] } 
			content={<div className="game-canvases" ref={canvasContainer}></div>}
			/>
		</div>
	 );
}

export default GameCanvas;