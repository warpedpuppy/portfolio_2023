import { useRef, useEffect } from "react";
import GeometricPuzzleAnimation from "../code/geomtric-puzzle-animation";
import "./GeometricPuzzle.scss";

function GeometricPuzzle() {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  useEffect(() => {
    gameRef.current = new GeometricPuzzleAnimation(canvasRef.current);
  }, [gameRef]);

  const startHandler = e => {
    gameRef.current.startHandler();
  }

  const solveHandler = e => {
    gameRef.current.solveHandler();
  }

  useEffect(() => () => gameRef.current.stop(), []);

  return (
    <div id="geometric-puzzle-cont">
      <div id="geometric-puzzle-button-cont">
        <button id="start" onClick={startHandler}>start</button>
        <button id="solve" onClick={solveHandler}>solve</button>
      </div>
      <canvas className="plt-canvas canvas-pixi-cont" ref={canvasRef} />
    </div>
  );
}
export default GeometricPuzzle;