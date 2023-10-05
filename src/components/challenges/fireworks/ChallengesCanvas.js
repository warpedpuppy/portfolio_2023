// THIS WAS AN EXPERIMENT TO SEE IF I COULD UNIFY
import './ChallengesCanvas.scss';
import { useEffect, useRef } from 'react';

function ChallengesCanvas({startFunction}) {
	// let gameCode = GameChooser(game).default;

	const canvasRef = useRef(null);
	const gameRef = useRef(null);

	useEffect( () => {
		gameRef.current = startFunction(canvasRef.current);
	}, [gameRef, startFunction])

	// useEffect( () => () => gameRef.current.stop(), [] );


	return ( 
		<>
			<canvas ref={canvasRef}></canvas>
		</>
	 );
}

export default ChallengesCanvas;