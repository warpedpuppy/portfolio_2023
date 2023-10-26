import Tabs from "./Tabs";
import TabBody from "./TabBody";
import { useState } from 'react';
import BackButton from "../../components/BackButton";
function TabLayout({tabs, contentArray, backButtonBoolean}) {
	const [ active, setActive ] = useState(0)
	return ( 
		<>
		{ backButtonBoolean && <BackButton /> }
		<Tabs tabs={tabs} active={active} setActive={setActive} />
		<TabBody  active={active} contentArray={contentArray} />
		</>
	 );
}

export default TabLayout;