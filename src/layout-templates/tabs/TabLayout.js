import Tabs from "./Tabs";
import TabBody from "./TabBody";
function TabLayout({content}) {
	return ( 
		<>
		<Tabs />
		<TabBody content={content} />
		</>
	 );
}

export default TabLayout;