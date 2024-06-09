import { useEffect, useRef } from "react";
import GameCode from "../code/index.js";
import './PatternMakerContent.scss';

function PatternMakerContent() {
  const canvasContainer = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    gameRef.current = new GameCode(canvasContainer.current);
  }, [canvasContainer]);

  useEffect(() => () => gameRef.current.stop(), []);

  return (
    <div className="pattern-maker">
      <h3>click on revolving circle to make point</h3>
      <div>
        <canvas ref={canvasContainer}></canvas>
        <div>
          <button id="addNewDisc">add new disc</button>
          <button id="addNewDiscInDisc">add new disc in disc</button>
          <button id="hideDiscs">hide discs</button>
          <button id="clear">clear</button>
        </div>
      </div>
    </div>
  );
}

export default PatternMakerContent;
