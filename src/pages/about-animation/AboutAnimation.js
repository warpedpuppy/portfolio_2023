
import { useEffect, useRef } from 'react';
import './AboutAnimation.scss';
import AboutAnimationCode from './about-animation-code';
function AboutAnimation() {

	const canvasRef = useRef(null);
	const gameRef = useRef(null);

	useEffect( () => {
				gameRef.current = new AboutAnimationCode(canvasRef.current, ".general-layout");
	}, [])

	useEffect( () => {
		function resizeHandler() {
			// console.log("resize")
			gameRef.current.stop();
			gameRef.current = new AboutAnimationCode(canvasRef.current, ".general-layout");
		}
		window.addEventListener('resize', resizeHandler)
		return () => {
			// console.log('dismount')
			gameRef.current.stop()
			window.removeEventListener('resize', resizeHandler)
		}
	})

	return <canvas className="about-canvas" ref={canvasRef} /> ;

}

export default AboutAnimation;