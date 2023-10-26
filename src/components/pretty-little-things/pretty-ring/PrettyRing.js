import PrettyRingCanvas from "./components/PrettyRingCanvas";
import GeneralLayout from "../../../layout-templates/GeneralLayout";
function PrettyRing() {
  return <GeneralLayout title="pretty ring" component={<PrettyRingCanvas />} />;
}
export default PrettyRing;
