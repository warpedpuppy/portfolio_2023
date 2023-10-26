import "./PatternMaker.scss";
import TabLayout from "../../../layout-templates/tabs/TabLayout";
import PatternMakerContent from "./components/PatternMakerContent";
import PatternMakerCode from "./components/PatternMakerCode";
import PatternMakerConcept from "./components/PatternMakerConcept";

function PatternMaker() {
  return (
    <section className="general-challenges-layout">
      <h1>spirograph</h1>
      <TabLayout
	  backButtonBoolean={true}
        contentArray={[<PatternMakerContent />,<PatternMakerCode />,<PatternMakerConcept />]}
      />
    </section>
  );
}

export default PatternMaker;
