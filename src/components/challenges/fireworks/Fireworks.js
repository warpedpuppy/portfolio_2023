import "./Fireworks.scss";
import FireworksContent from "./components/FireworksContent";
import FireworksConcept from "./components/FireworksConcept";
import TabLayout from "../../../layout-templates/tabs/TabLayout";

function Fireworks() {
  return (
    <section className="general-challenges-layout">
      <h1>step-by-step creation of a firework animation</h1>
      <TabLayout
	   backButtonBoolean={true}
	   tabs={['content', 'concept']}
        contentArray={[<FireworksContent />, <FireworksConcept />]}
      />
    </section>
  );
}

export default Fireworks;
