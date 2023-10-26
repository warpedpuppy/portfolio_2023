import SudokuQuadrantChecker from "../code/SodukoTedChallenge";
import { useEffect } from "react";
function SodukoContent() {
  useEffect(() => {
    SudokuQuadrantChecker();
  }, []);
  return (
    <div className="soduko-container">
      <div id="soduko-grid"></div>
      <h3 id="looping-data">&nbsp;</h3>
    </div>
  );
}

export default SodukoContent;
