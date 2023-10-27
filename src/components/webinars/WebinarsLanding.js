import GeneralLandingPage from '../../layout-templates/GeneralLandingPage';
function WebinarsLanding() {
	return ( 
		<GeneralLandingPage
			title="webinars:"
			explanatoryText={[`I've taught several webinars, and luckily there's video evidence of three of them:`]}
			links={
				[
					{link: "/webinars/solitaire", title: 'Coding Solitaire in JavaScript'},
					{link: "/webinars/svg-animations", title: 'Animating SVGs'},
					{link: "/webinars/web-dev", title: `Things I've Learned as a Webdev`}
				]
			}
			/>
	 );
}

export default WebinarsLanding;
