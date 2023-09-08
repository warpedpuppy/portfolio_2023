import './BouncePig.scss';
import BouncePigCode from './code/BouncePigCode';
import { useEffect, useRef } from 'react';

function BouncePig() {
	const canvasContainer = useRef(null)
	useEffect( () => {
		const game = BouncePigCode(canvasContainer.current);
		game.start();
	}, [])
	return ( 
		<>
			<div id="bounce-pig" ref={canvasContainer}></div>
		</>
	 );
}

export default BouncePig;