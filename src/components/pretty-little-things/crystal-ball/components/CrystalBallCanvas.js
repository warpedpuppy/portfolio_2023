import { useRef, useEffect } from "react";
import CrystalBallAnimation from "../code/crystal-ball-animation";
import './CrystalBallCanvas.scss';
function CrystalBallCanvas() {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  
  useEffect(() => {
    gameRef.current = new CrystalBallAnimation(canvasRef.current);
  }, [gameRef]);

  useEffect(() => () => gameRef.current.stop(), []);

  return (
  	<div id="crystal-ball-unifier">
        <div id="canvas-div" ref={canvasRef}></div>
        {/* <img alt="lower-half-of-promo" src='/bmps/bottom-graphic.png' /> */}
        <div id="scroll-cover"></div>
	</div>
	);
}
export default CrystalBallCanvas;
