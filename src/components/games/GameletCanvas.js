import { useEffect, useRef } from 'react';

import GameChooser from './GameChooser';

function GameletCanvas({game}) {
	
	let gameCode = GameChooser(game).default;

	const canvasContainer = useRef(null);
	const gameRef = useRef(null);

	useEffect( () => {
		gameRef.current = gameCode(canvasContainer.current);
		gameRef.current.start();
	}, [canvasContainer, gameCode])

	useEffect( () => () => gameRef.current.stop(), [] );


	return ( 
		<div className="game-canvases" ref={canvasContainer}></div>
	 ); 
}

export default GameletCanvas;