import { useRef, useEffect } from "react";
import SparklyAnimation from "../code/sparkly-animation";

function SparkliesCanvas() {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  
  useEffect(() => {
    gameRef.current = new SparklyAnimation(canvasRef.current);
  }, [gameRef]);

  useEffect(() => () => gameRef.current.stop(), []);

  return <div className="plt-canvas" ref={canvasRef} />;
}
export default SparkliesCanvas;
