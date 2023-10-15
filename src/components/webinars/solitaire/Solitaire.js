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
        tabs={["video", "code", "game"]}
		concept={<SolitaireContent />}
        content={<SolitaireVideo />}
		code={<>code</>}
      />
    </div>
  );
}

export default Solitaire;
