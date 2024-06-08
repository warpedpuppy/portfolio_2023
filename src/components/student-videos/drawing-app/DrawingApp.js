

import TabLayout from "../../../layout-templates/tabs/TabLayout";
import DrawingAppVideo from "./DrawingAppVideo";
function DrawingApp() {
  
  return (
    <div className="general-layout">
      <h1>Setting up AWS</h1>
      <TabLayout
	   active="2"
	   	backButtonBoolean={true}
        tabs={["drawing app"]}
		contentArray={[ <DrawingAppVideo /> ]}
      />
    </div>
  );
}

export default DrawingApp;
