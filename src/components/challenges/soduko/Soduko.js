import "./Soduko.scss";
import SudokuQuadrantChecker from './code/SodukoTedChallenge';
import { useEffect } from "react";
import TabLayout from "../../../layout-templates/tabs/TabLayout";
function Soduko() {
	useEffect(() => {
		SudokuQuadrantChecker();
	}, [])
  return (
    <section className="soduko-container general-challenges-layout">

      <h1>soduko error handler</h1>
	  <TabLayout content={<>  <div id="soduko-grid"></div>
      <h3 id="looping-data">x</h3></>} />
    
    </section>
  );
}

export default Soduko;
