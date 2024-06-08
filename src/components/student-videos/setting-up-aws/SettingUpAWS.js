

import TabLayout from "../../../layout-templates/tabs/TabLayout";
import AWSVideo from "./AWSVideo";
function SettingUpAWS() {
  
  return (
    <div className="general-layout">
      <h1>Setting up AWS</h1>
      <TabLayout
	   active="2"
	   	backButtonBoolean={true}
        tabs={["setting up aws"]}
		contentArray={[ <AWSVideo /> ]}
      />
    </div>
  );
}

export default SettingUpAWS;
