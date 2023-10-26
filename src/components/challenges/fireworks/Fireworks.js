import "./Fireworks.scss";
import FireworksContent from "./components/FireworksContent";
import GeneralLayout from '../../../layout-templates/GeneralLayout';
function Fireworks() {
  return (
	<GeneralLayout 
		title="step-by-step creation of a firework animation"
		subtitle="in an attempt to explain one way to approach creating an animation of fireworks, I created the following four steps:"
		component={<FireworksContent />}
	/>
   
  );
}

export default Fireworks;
