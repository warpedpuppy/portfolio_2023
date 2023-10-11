import SudokuQuadrantChecker from "../code/SodukoTedChallenge";
import { useEffect } from "react";
function SodukoContent() {
  useEffect(() => {
    SudokuQuadrantChecker();
  }, []);
  return (
    <>
      <div id="soduko-grid"></div>
      <h3 id="looping-data">x</h3>
    </>
  );
}

export default SodukoContent;
