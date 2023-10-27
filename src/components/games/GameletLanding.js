import GeneralLandingPage from '../../layout-templates/GeneralLandingPage';
function GameletLanding() {
	return ( 

		<GeneralLandingPage
			title="gamelets:"
			explanatoryText={[`These are some pieces of games I've built over the years.`, `I'm including them because they presented interesting coding issues and, frankly, they're cute.`]}
			dotColor="0xFF00FF"
			links={
				[
					{link: "/gamelets/pig", title: 'pig'},
					{link: "/gamelets/fish", title: 'fish'},
					{link: "/gamelets/planet-jump", title: 'planet jump'}
				]
			}
			/>

		
	 );
}

export default GameletLanding;