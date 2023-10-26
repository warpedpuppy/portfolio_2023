import { useRef, useEffect } from "react";
import KlimtAnimation from "../code/klimtAnimation";

function KlimtCanvas() {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  useEffect(() => {
    gameRef.current = new KlimtAnimation(canvasRef.current);
  }, [gameRef]);

  useEffect(() => () => gameRef.current.stop(), []);

  return <div className="plt-canvas canvas-pixi-cont" ref={canvasRef} />;
}
export default KlimtCanvas;
