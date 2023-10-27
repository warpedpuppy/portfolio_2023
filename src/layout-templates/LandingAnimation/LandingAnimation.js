import { useEffect, useRef } from 'react';
import LandingAnimationCode from './landing-animation';

function LandingAnimation() {
	const canvasContainer = useRef(null);
	const gameRef = useRef(null);
	useEffect( () => {
		gameRef.current = new LandingAnimationCode(canvasContainer.current);
		gameRef.current.start();
	}, [canvasContainer])

	useEffect( () => () => gameRef.current.stop(), [] );

	return <div className="landing-animation"  ref={canvasContainer} />;
}

export default LandingAnimation;