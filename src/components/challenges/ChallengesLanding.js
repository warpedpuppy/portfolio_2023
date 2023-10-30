import GeneralLandingPage from '../../layout-templates/GeneralLandingPage';
function ChallengesLanding() {
	return ( 
		<GeneralLandingPage
			title="challenges:"
			dotColor={'0x990099'}
			explanatoryText={[`Over the years I've created a lot of challenges for students, friends, and sometimes just myself.`]}
			links={
				[
					{link: "/challenges/fireworks", title: 'step-by-step fireworks'},
					{link: "/challenges/murmuration", title: 'murmuration'},
					{link: "/challenges/pattern-maker", title: 'spirograph'}
				]
			}
			/>
	 );
}

export default ChallengesLanding;
