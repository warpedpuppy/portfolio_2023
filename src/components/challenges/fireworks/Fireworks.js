import "./Fireworks.scss";
import FireworksContent from "./components/FireworksContent";
import BackButton from "../../BackButton";

function Fireworks() {
  return (
    <section className="general-layout">
	  <BackButton />
      <h1>step-by-step creation of a firework animation</h1>
	  <h2>in an attempt to explain one way to approach creating an animation of fireworks, I created the following four steps:</h2>
	  <FireworksContent />

    </section>
  );
}

export default Fireworks;
