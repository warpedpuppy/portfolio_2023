import { useRef, useEffect } from "react";
import GlitterAnimation from "../code/glitter-animation";

function GlitterCanvas() {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  
  useEffect(() => {
    gameRef.current = new GlitterAnimation(canvasRef.current);
  }, [gameRef]);

  useEffect(() => () => gameRef.current.stop(), []);

  return <div className="plt-canvas" ref={canvasRef} />;
}
export default GlitterCanvas;
