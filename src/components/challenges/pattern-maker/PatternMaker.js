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
        content={<PatternMakerContent />}
        code={<PatternMakerCode />}
        concept={<PatternMakerConcept />}
      />
    </section>
  );
}

export default PatternMaker;
