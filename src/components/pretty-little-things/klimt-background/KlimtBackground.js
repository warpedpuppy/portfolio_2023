import KlimtCanvas from "./components/KlimtCanvas";
import GeneralLayout from "../../../layout-templates/GeneralLayout";

function KlimtBackground() {
  return (
    <GeneralLayout
      title="Klimt-inspired animation"
      subtitle=""
      component={<KlimtCanvas />}
    />
  );
}
export default KlimtBackground;
