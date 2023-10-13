import TabLayout from "../../../layout-templates/tabs/TabLayout";
function WebDev() {
	return ( 
	<div className="general-layout">
	<TabLayout 
	tabs={['video', 'concept']}
	content={

			<div style={{position: "relative", paddingBottom: "56.25%", height: "0"}}>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/Cl1sIcFv00w?si=S1eKppKqSsWUj3Ay" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>

	}
	code={<>concept</>}

 	/>
	</div> );
}

export default WebDev;