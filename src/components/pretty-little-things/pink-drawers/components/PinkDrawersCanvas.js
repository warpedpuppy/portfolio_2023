import { useRef, useEffect } from "react";
import PinkDrawersAnimation from "../code/pink-drawers-animation";

function PinkDrawersCanvas() {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  useEffect(() => {
    gameRef.current = new PinkDrawersAnimation(canvasRef.current);
  }, [gameRef]);

  useEffect(() => () => gameRef.current.stop(), []);

  return <div className="plt-canvas canvas-pixi-cont" ref={canvasRef} />;
}
export default PinkDrawersCanvas;