import "./Fireworks.scss";
import FireworksContent from "./components/FireworksContent";
import FireworksCode from "./components/FireworksCode";
import FireworksConcept from "./components/FireworksConcept";
import TabLayout from "../../../layout-templates/tabs/TabLayout";

function Fireworks() {
  return (
    <section className="general-challenges-layout">
      <h1>step-by-step creation of a firework animation</h1>
      <TabLayout
        content={<FireworksContent />}
        code={<FireworksCode />}
        concept={<FireworksConcept />}
      />
    </section>
  );
}

export default Fireworks;
