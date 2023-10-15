import TabLayout from "../../../layout-templates/tabs/TabLayout";
import WebDevVideo from "./components/WebDevVideo";
function WebDev() {
	return ( 
		<div className="general-layout">
		<TabLayout 
			tabs={['video', 'concept']}
			content={<WebDevVideo />}
			code={<>concept</>}
		/>
		</div> 
	);
}

export default WebDev;