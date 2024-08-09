import { useRef, useEffect } from "react";
import SierpinskiAnimation from "../code/sierpinski-animation.js";

function Sierpinski() {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    gameRef.current = new SierpinskiAnimation(canvasRef.current);
  }, [gameRef]);

  useEffect(() => () => gameRef.current.stop(), []);

  return <div className="plt-canvas canvas-pixi-cont" ref={canvasRef} />;
}
export default Sierpinski;
