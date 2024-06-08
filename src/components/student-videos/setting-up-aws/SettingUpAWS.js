

import TabLayout from "../../../layout-templates/tabs/TabLayout";
import LoomVideos from "../LoomVideos";
function SettingUpAWS() {
  
  return (
    <div className="general-layout">
      <h1>Setting up AWS</h1>
      <TabLayout
	   active="2"
	   	backButtonBoolean={true}
        tabs={["setting up aws"]}
		contentArray={[ <LoomVideos link="https://www.loom.com/embed/25746965ed3d407d824b5381043ff68a?sid=ae94fa04-f965-4d83-b347-27603eed1cf4" /> ]}
      />
    </div>
  );
}

export default SettingUpAWS;
