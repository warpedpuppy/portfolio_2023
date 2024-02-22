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

  return <div className="crystal-ball-cont">
	<div className="plt-canvas canvas-pixi-cont" ref={canvasRef} />
	</div>;
}
export default CrystalBallCanvas;
