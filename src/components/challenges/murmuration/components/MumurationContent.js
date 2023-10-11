import '../MurmurationCanvas.scss';
import { useEffect, useRef } from 'react';
import SetUpMurmuration from "../code/index";
function MurmurationContent() {
	const canvasRef = useRef(null);
	const gameRef = useRef(null);

	useEffect( () => {
		gameRef.current = new SetUpMurmuration(canvasRef.current);
	}, [gameRef])

	useEffect( () => () => gameRef.current.stop(), [] );


	return <canvas className="murmuration-canvas"  ref={canvasRef} />
}

export default MurmurationContent;