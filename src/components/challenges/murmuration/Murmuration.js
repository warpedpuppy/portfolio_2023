import "./Murmuration.scss";

import TabLayout from "../../../layout-templates/tabs/TabLayout";
import MurmurationContent from "./components/MumurationContent";
import MurmurationCode from "./components/MurmurationCode";
import MurmurationConcept from "./components/MurmurationConcept";
function Murmuration() {
  return (
    <section className="general-challenges-layout">
		<h1>murmuration</h1>
		<TabLayout 
		backButtonBoolean={true}
		contentArray={[<MurmurationContent />,<MurmurationCode />,<MurmurationConcept />]} />
      
    </section>
  );
}

export default Murmuration;
