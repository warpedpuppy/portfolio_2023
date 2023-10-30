import "./Soduko.scss";
import SodukoContent from "./components/SodukoContent";
import GeneralLayout from "../../../layout-templates/GeneralLayout";
function Soduko() {

  return (
	<GeneralLayout
	title="soduko error handler"
	subtitle="the grid below will show errors if the same number appears multple times in any row, column, or ninth section."
	component={<SodukoContent />}
	/>
  );
}

export default Soduko;
