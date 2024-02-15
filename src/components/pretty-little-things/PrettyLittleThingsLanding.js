import GeneralLandingPage from '../../layout-templates/GeneralLandingPage';
function PrettyLittleThingsLanding() {
	return ( 
		<GeneralLandingPage
			title="pretty little things:"
			dotColor={'0x669900'}
			explanatoryText={[`Over the years I've created a lot of pretty little things for work and myself.`, `Here are several of them:`]}
			links={
				[
					{link: "/pretty-little-things/glitter", title: 'glitter'},
					{link: "/pretty-little-things/klimt-background", title: 'klimt inspired background'},
					{link: "/pretty-little-things/pretty-ring", title: 'pretty ring'},
					{link: "/pretty-little-things/sparklies", title: 'sparklies'},
					{link: "/challenges/fireworks", title: 'step-by-step fireworks'},
					{link: "/challenges/soduko", title: 'soduko'},
					{link: "/challenges/three-of-a-kind", title: 'three-of-a-kind'},
					{link: "/challenges/murmuration", title: 'murmuration'},
					{link: "/challenges/pattern-maker", title: 'spirograph'},
					{link: "/gamelets/pig", title: 'pig'},
					{link: "/gamelets/fish", title: 'fish'},
					{link: "/gamelets/planet-jump", title: 'planet jump'}
				]
			}
			/>
	 );
}

export default PrettyLittleThingsLanding;

