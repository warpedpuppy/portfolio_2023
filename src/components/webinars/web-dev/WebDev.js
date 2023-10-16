import TabLayout from "../../../layout-templates/tabs/TabLayout";
import WebDevVideo from "./components/WebDevVideo";
import WebDevContent from "./components/WebDevContent";
function WebDev() {
	return ( 
		<div className="general-layout">
		<TabLayout 
			tabs={['video', 'site']}
			content={<WebDevVideo />}
			code={<WebDevContent />}
		/>
		</div> 
	);
}

export default WebDev;