// THIS WAS AN EXPERIMENT TO SEE IF I COULD UNIFY
import './FireworksCanvas.scss';
import { useEffect, useRef } from 'react';

function FireworksCanvas({mainClass}) {
	const canvasRef = useRef(null);
	const gameRef = useRef(null);

	useEffect( () => {
				gameRef.current = new mainClass(canvasRef.current);
	}, [mainClass])

	useEffect( () => {
		function resizeHandler() {
			// console.log("resize")
			gameRef.current.stop();
			gameRef.current = new mainClass(canvasRef.current);
		}
		window.addEventListener('resize', resizeHandler)
		return () => {
			// console.log('dismount')
			gameRef.current.stop()
			window.removeEventListener('resize', resizeHandler)
		}
	})

	return ( 
		<>
			<canvas className="challenge-canvas" ref={canvasRef}></canvas>
		</>
	 );
}

export default FireworksCanvas;