import { useRef, useEffect } from "react";
import TropicalPlantsAnimation from "../code/tropical-plants-animation";

function TropicalPlants() {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    gameRef.current = new TropicalPlantsAnimation(canvasRef.current);
  }, [gameRef]);

  useEffect(() => () => gameRef.current.stop(), []);

  return <div className="plt-canvas canvas-pixi-cont" ref={canvasRef} />;
}
export default TropicalPlants;
