import "./Murmuration.scss";
import MurmurationCanvas from "./MurmurationCanvas";
import SetUpMurmuration from "./code/index";

import TabLayout from "../../../layout-templates/tabs/TabLayout";
function Murmuration() {
  return (
    <section className="general-challenges-layout">
		<h1>murmuration</h1>
		<TabLayout content={<MurmurationCanvas startClass={SetUpMurmuration} />} />
      
    </section>
  );
}

export default Murmuration;
