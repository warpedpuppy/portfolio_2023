import Game from "../code/canvas/canvas";
import { useEffect, useRef } from "react";
function ThreeContent() {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  useEffect(() => {
    gameRef.current = new Game(canvasRef.current);
	window.addEventListener('resize', resizeHandler)
  }, [gameRef]);

  useEffect(() => () => {
	// console.log("dismount three")
	gameRef.current.stop()
	window.removeEventListener('resize', resizeHandler)
  }, []);


  function resizeHandler() {
	gameRef.current.stop();
	gameRef.current = new Game(canvasRef.current);
  }

  return (
    <>
      <canvas
        id="three-of-id-canvas"
        ref={canvasRef}
      ></canvas>
      <div className="controls">
        <label>rows: </label>
        <select id="rows"></select>
        <label>cols: </label>
        <select id="cols"></select>
      </div>
    </>
  );
}

export default ThreeContent;
