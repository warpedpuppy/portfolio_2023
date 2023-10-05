import './ThreeOfAKind.scss';
import Game from './code/canvas/canvas';
import { useEffect, useRef } from 'react';
function ThreeOfAKind() {

	const gameRef = useRef(null);
	useEffect(() => {
		gameRef.current = new Game();
	}, [gameRef])

	useEffect( () => () => gameRef.current.stop(), [] );

	return ( <>
	<canvas id='three-of-id-canvas' width="800" height="400"></canvas>
		<div className="controls">
			<label>rows: </label><select id="rows"></select>
			<label>cols: </label><select id="cols"></select>
		</div>
	</> );
}

export default ThreeOfAKind;