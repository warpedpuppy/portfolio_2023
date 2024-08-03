import { useRef, useEffect } from "react";
import GeometricPuzzleAnimation from "../code/geomtric-puzzle-animation";

function GeometricPuzzle() {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  useEffect(() => {
    gameRef.current = new GeometricPuzzleAnimation(canvasRef.current);
  }, [gameRef]);

  useEffect(() => () => gameRef.current.stop(), []);

  return (
    <div>
      <div>
        <button id="start">start</button>
        <button id="solve">solve</button>
      </div>
      <canvas className="plt-canvas canvas-pixi-cont" ref={canvasRef} />
    </div>
  );
}
export default GeometricPuzzle;