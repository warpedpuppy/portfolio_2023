

import TabLayout from "../../../layout-templates/tabs/TabLayout";
import LoomVideos from "../LoomVideos";
function DrawingApp() {
  
  return (
    <div className="general-layout">
      <h1>Setting up AWS</h1>
      <TabLayout
	   active="2"
	   	backButtonBoolean={true}
        tabs={["drawing app"]}
		contentArray={[ <LoomVideos link="https://www.loom.com/embed/c153c01554694b999d912aace0da0440?sid=192180b7-c7a7-419d-bb26-91b3540fc8e4" /> ]}
      />
    </div>
  );
}

export default DrawingApp;
