// THIS WAS AN EXPERIMENT TO SEE IF I COULD UNIFY
import './FireworksCanvas.scss';
import { useEffect, useRef } from 'react';

function FireworksCanvas({mainClass}) {
	const canvasRef = useRef(null);
	const gameRef = useRef(null);

	useEffect( () => {
		gameRef.current = new mainClass(canvasRef.current);
	}, [gameRef, mainClass])

	useEffect( () => () => gameRef.current.stop(), [] );


	return ( 
		<>
			<canvas className="challenge-canvas" ref={canvasRef}></canvas>
		</>
	 );
}

export default FireworksCanvas;