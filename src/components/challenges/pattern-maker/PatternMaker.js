import "./PatternMaker.scss";
import PatternMakerContent from "./components/PatternMakerContent";
import GeneralLayout from '../.../../../../layout-templates/GeneralLayout'
function PatternMaker() {
  return (
	<GeneralLayout 
	title="spirograph"
	subtitle="spirograph"
	component={<PatternMakerContent />}
	/>
  );
}

export default PatternMaker;
