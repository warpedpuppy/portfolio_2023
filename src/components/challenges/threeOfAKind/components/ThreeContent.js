
import Game from '../code/canvas/canvas';
import { useEffect, useRef } from 'react';
function ThreeContent() {
	const canvasRef = useRef(null);
	const gameRef = useRef(null);
	useEffect(() => {
		gameRef.current = new Game(canvasRef.current);
	}, [gameRef])

	useEffect( () => () => gameRef.current.stop(), [] );

	return ( 

		<>
	<canvas id='three-of-id-canvas' ref={canvasRef} width="800" height="400"></canvas>
		<div className="controls">
			<label>rows: </label><select id="rows"></select>
			<label>cols: </label><select id="cols"></select>
		</div>
		</>
	);
}

export default ThreeContent;