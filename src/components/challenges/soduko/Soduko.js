import "./Soduko.scss";

import TabLayout from "../../../layout-templates/tabs/TabLayout";
import SodukoContent from "./components/SodukoContent";
import SodukoCode from "./components/SodukoCode";
import SodukoConcept from "./components/SodukoConcept";
function Soduko() {

  return (
    <section className="soduko-container general-challenges-layout">
      <h1>soduko error handler</h1>
	  <TabLayout 
	  tabs={['content', 'code']}
	  backButtonBoolean={true}
	  contentArray={[<SodukoContent />,<SodukoCode />,<SodukoConcept />]}/>
    </section>
  );
}

export default Soduko;
