// THIS WAS AN EXPERIMENT TO SEE IF I COULD UNIFY
import './GameCanvas.scss';
import { useEffect, useRef } from 'react';
import BackButton from './BackButton';
import GameChooser from './games/GameChooser';

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
		<>
		    <BackButton />
			<div  className="game-canvases" ref={canvasContainer}></div>
		</>
	 );
}

export default GameCanvas;