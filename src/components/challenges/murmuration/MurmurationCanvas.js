// import './MurmurationCanvas.scss';
// import { useEffect, useRef } from 'react';

// function ChallengesCanvas({startClass}) {
// 	// let gameCode = GameChooser(game).default;

// 	const canvasRef = useRef(null);
// 	const gameRef = useRef(null);

// 	useEffect( () => {
// 		gameRef.current = new startClass(canvasRef.current);
// 	}, [gameRef, startClass])

// 	useEffect( () => () => gameRef.current.stop(), [] );


// 	return <canvas className="murmuration-canvas"  ref={canvasRef} />
// }

// export default ChallengesCanvas;