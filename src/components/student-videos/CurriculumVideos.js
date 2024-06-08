import TabLayout from "../../layout-templates/tabs/TabLayout";
import LoomVideos from "./LoomVideos";
function CurriculumVideoTemplate({title, tab, link}) {
  
  return (
    <div className="general-layout">
      <h1>{title}</h1>
      <TabLayout
	   active="1"
	   	backButtonBoolean={true}
        tabs={[tab]}
		contentArray={[ <LoomVideos link={link} /> ]}
      />
    </div>
  );
}

export default CurriculumVideoTemplate;
