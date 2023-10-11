import Tabs from "./Tabs";
import TabBody from "./TabBody";
import { useState } from 'react';
function TabLayout({code, concept, content}) {
	const [ active, setActive ] = useState(0)
	return ( 
		<>
		<Tabs active={active} setActive={setActive} />
		<TabBody  active={active} content={content} code={code} concept={concept} />
		</>
	 );
}

export default TabLayout;