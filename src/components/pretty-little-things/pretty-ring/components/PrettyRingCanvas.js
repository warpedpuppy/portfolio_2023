import { useRef, useEffect } from "react";
import PrettyRingAnimation from "../code/pretty-ring-animation";

function PrettyRingCanvas() {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  
  useEffect(() => {
    gameRef.current = new PrettyRingAnimation(canvasRef.current);
  }, [gameRef]);

  useEffect(() => () => gameRef.current.stop(), []);

  return <div className="plt-canvas canvas-pixi-cont" ref={canvasRef} />;
}
export default PrettyRingCanvas;
