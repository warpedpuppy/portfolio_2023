import { useRef, useEffect } from "react";
import PinkDrawersAnimation from "../code/pink-drawers-animation";
import "./PinkDrawersCanvas.scss";

function PinkDrawersCanvas() {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  useEffect(() => {
    gameRef.current = new PinkDrawersAnimation(canvasRef.current);
  }, [gameRef]);

  useEffect(() => () => gameRef.current.stop(), []);

  return (
    <div id="pink-drawer-cont">
      <div id="fpsChecker"></div>
      <div className="plt-canvas pink-drawer-canvas-cont canvas-pixi-cont" ref={canvasRef} />
    </div>
  );
}
export default PinkDrawersCanvas;