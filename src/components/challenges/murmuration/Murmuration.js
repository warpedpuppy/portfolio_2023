import "./Murmuration.scss";
import MurmurationContent from "./components/MumurationContent";
import GeneralLayout from '../../../layout-templates/GeneralLayout';

function Murmuration() {
  return (
	<GeneralLayout 
	title="murmuration"
	subtitle="an animation of starlings created for a lecture series"
	component={<MurmurationContent />}
	/>
  
  );
}

export default Murmuration;
