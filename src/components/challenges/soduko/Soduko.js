import "./Soduko.scss";

import TabLayout from "../../../layout-templates/tabs/TabLayout";
import SodukoContent from "./components/SodukoContent";
import SodukoCode from "./components/SodukoCode";
import SodukoConcept from "./components/SodukoConcept";
function Soduko() {

  return (
    <section className="soduko-container general-challenges-layout">
      <h1>soduko error handler</h1>
	  <TabLayout content={<SodukoContent />} code={<SodukoCode />} concept={<SodukoConcept />}/>
    </section>
  );
}

export default Soduko;
