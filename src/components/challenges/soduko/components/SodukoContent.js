import SudokuQuadrantChecker from "../code/SodukoTedChallenge";
import { useEffect } from "react";
function SodukoContent() {
  useEffect(() => {
    SudokuQuadrantChecker();
  }, []);
  return (
    <>
      <div id="soduko-grid"></div>
	  <h2>the above grid will show errors if the same number appears multple times in any row, column, or ninth section.</h2>
      <h3 id="looping-data">&nbsp;</h3>
    </>
  );
}

export default SodukoContent;
