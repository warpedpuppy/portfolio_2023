

import TabLayout from "../../../layout-templates/tabs/TabLayout";
import LoomVideos from "../LoomVideos";
function ConvertCssToSass() {
  
  return (
    <div className="general-layout">
      <h1>Setting up AWS</h1>
      <TabLayout
	   active="2"
	   	backButtonBoolean={true}
        tabs={["convert css to sass"]}
		contentArray={[ <LoomVideos link="https://www.loom.com/embed/a1e4e6656f3c4142a4d40a3e8ea2b30b?sid=75c24465-5e67-4ec8-b251-d38e355e52a2" /> ]}
      />
    </div>
  );
}

export default ConvertCssToSass;