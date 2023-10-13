import "./Solitaire.scss";

import TabLayout from "../../../layout-templates/tabs/TabLayout";
import SolitaireContent from "./components/SolitaireContent";
function Solitaire() {
  
  return (
    <div className="general-layout">
      <h1>Solitaire</h1>
      <TabLayout
	   active="2"
        tabs={["video", "code", "game"]}
		concept={<SolitaireContent />}
        content={
          <>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hasFnKRrT0Y?si=auXbr0g6Z3_FbMVh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </>
        }
       
		code={<>code</>}
      />
    </div>
  );
}

export default Solitaire;
