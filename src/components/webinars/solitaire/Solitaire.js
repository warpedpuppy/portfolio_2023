import "./Solitaire.scss";

import TabLayout from "../../../layout-templates/tabs/TabLayout";
import SolitaireContent from "./components/SolitaireContent";
import SolitaireVideo from "./components/SolitaireVideo";
function Solitaire() {
  
  return (
    <div className="general-layout">
      <h1>Coding Solitaire</h1>
      <TabLayout
	   active="2"
	   	backButtonBoolean={true}
        tabs={["video", "game"]}
		contentArray={[ <SolitaireVideo />, <SolitaireContent /> ]}
      />
    </div>
  );
}

export default Solitaire;
