import TabLayout from "../../../layout-templates/tabs/TabLayout";
import WebDevVideo from "./components/WebDevVideo";
import WebDevContent from "./components/WebDevContent";
function WebDev() {
	return ( 
		<div className="general-layout">
			<h1>things I've learned as a web dev</h1>
		<TabLayout 
		backButtonBoolean={true}
			tabs={['video', 'site']}
			contentArray={[<WebDevVideo />, <WebDevContent />]}
		/>
		</div> 
	);
}

export default WebDev;