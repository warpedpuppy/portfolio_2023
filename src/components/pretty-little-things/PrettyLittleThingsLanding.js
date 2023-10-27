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
					{link: "/pretty-little-things/sparklies", title: 'sparklies'}
				]
			}
			/>
	 );
}

export default PrettyLittleThingsLanding;

