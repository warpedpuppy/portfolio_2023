import './BouncePig.scss';
import BouncePigCode from './code/BouncePigCode';
import { useEffect, useRef } from 'react';

function BouncePig() {
	const canvasRef = useRef(null)
	useEffect( () => {
		const game = BouncePigCode(canvasRef.current);
		game.start();
	}, [])
	return ( 
		<>
			<div id="bounce-pig" ref={canvasRef}></div>
		</>
	 );
}

export default BouncePig;