import { useEffect, useRef } from 'react';
import HomeAnimation from './HomeAnimationFlowers';

function HomeCanvas() {

	const canvasContainer = useRef(null);
	const gameRef = useRef(null);

	useEffect( () => {
		gameRef.current = new HomeAnimation(canvasContainer.current);
		gameRef.current.start();
	}, [canvasContainer])

	useEffect( () => () => gameRef.current.stop(), [] );

	return <canvas ref={canvasContainer} />


}

export default HomeCanvas;