import './Canvas.scss';
import { useRef, useEffect } from 'react';
function Canvas({startFunction}) {
	const canvasRef = useRef(null)
	useEffect(() => {
		startFunction(canvasRef.current)
	}, [])
	return ( <canvas ref={canvasRef} ></canvas>);
}

export default Canvas;