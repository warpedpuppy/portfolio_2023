import './MazeSolver.scss';
import BackButton from '../../BackButton';
import { useEffect, useRef } from 'react';
function MazeSolver() {
	const canvasContainer = useRef(null);
	const gameRef = useRef(null);

	useEffect( () => {
		// gameRef.current = new GameCode(canvasContainer.current);
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

export default MazeSolver;
