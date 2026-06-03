import { useEffect, useRef } from 'react';
import LandingAnimationCode from './landing-animation';

function LandingAnimation({dotColor}) {
	const canvasContainer = useRef(null);
	const gameRef = useRef(null);
	useEffect( () => {
		gameRef.current = new LandingAnimationCode(canvasContainer.current, dotColor);
		gameRef.current.start();
		return () => gameRef.current.stop();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return <div className="landing-animation"  ref={canvasContainer} />;
}

export default LandingAnimation;