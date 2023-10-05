import './PatternMaker.scss';
import BackButton from '../../BackButton';
import { useEffect, useRef } from 'react';
import GameCode from './code/index.js';
function PatternMaker() {

	const canvasContainer = useRef(null);
	const gameRef = useRef(null);

	useEffect( () => {
		gameRef.current = new GameCode(canvasContainer.current);
	}, [canvasContainer])

	useEffect( () => () => gameRef.current.stop(), [] );


	
	return ( <>
	<BackButton />
	<canvas ref={canvasContainer}></canvas>
		<div>
			{/* <!-- <button id="switchDirections">switch directions</button> --> */}
			<button id="addNewDisc">add new disc</button>
			<button id="addOval">add oval</button>
			<button id="addNewDiscInDisc">add new disc in disc</button>
			<button id="hideDiscs">hide discs</button>
			<button id="clear">clear</button>
		</div>
	</> );
}

export default PatternMaker;