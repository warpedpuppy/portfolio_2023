import { useEffect, useRef } from 'react';
import SolitaireGame from "../code/SolitaireGame";
import './SolitaireContent.scss';

function SolitaireContent() {
	
	const canvasRef = useRef(null);
	const gameRef = useRef(null);
	useEffect( () => {
		gameRef.current = new SolitaireGame(canvasRef.current);
	}, [canvasRef])

	useEffect( () => () => gameRef.current.stop(), [] );


	return ( 
		<canvas id="solitaire-canvas" ref={canvasRef} />
	 ); 
}

export default SolitaireContent;