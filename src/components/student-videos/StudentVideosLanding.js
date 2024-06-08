import GeneralLandingPage from '../../layout-templates/GeneralLandingPage';
function StudentVideosLanding() {
	return ( 
		<GeneralLandingPage
			title="student videos & code reviews:"
			explanatoryText={[`I've made a lot of curriculum videos for schools, and here are some:`]}
			dotColor={'0xFF9900'}
			links={
				[
					
					{link: "/web-instruction/drawing-app", title: 'Drawing App'},
					{link: "/web-instruction/setting-up-aws", title: 'Setting up AWS'},
					{link: "/web-instruction/css-to-sass", title: 'Convert CSS to Sass'},
					{link: "/web-instruction/css-positioning", title: 'Positioning in CSS'},
					{link: "/web-instruction/flex-box", title: 'Flex Box in CSS'},
					{link: "/web-instruction/grid", title: 'Grid in CSS'},
				]
			}
			/>
	 );
}

export default StudentVideosLanding;
