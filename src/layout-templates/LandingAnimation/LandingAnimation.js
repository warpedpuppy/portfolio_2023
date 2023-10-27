import { useEffect, useRef } from 'react';
import LandingAnimationCode from './landing-animation';

function LandingAnimation({dotColor}) {
	const canvasContainer = useRef(null);
	const gameRef = useRef(null);
	useEffect( () => {
		if (gameRef.current) return;
		gameRef.current = new LandingAnimationCode(canvasContainer.current, dotColor);
		gameRef.current.start();
	}, [canvasContainer, dotColor])

	useEffect( () => () => gameRef.current.stop(), [] );

	return <div className="landing-animation"  ref={canvasContainer} />;
}

export default LandingAnimation;