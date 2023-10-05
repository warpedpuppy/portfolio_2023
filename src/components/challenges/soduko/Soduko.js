import "./Soduko.scss";
import SudokuQuadrantChecker from './code/SodukoTedChallenge';
import { useEffect } from "react";
import BackButton from '../../BackButton';
function Soduko() {
	useEffect(() => {
		SudokuQuadrantChecker();
	}, [])
  return (
    <div className="soduko-container">
		<BackButton />
      <h1>soduko</h1>
      <div id="soduko-grid"></div>
      <h3 id="looping-data">x</h3>
    </div>
  );
}

export default Soduko;
