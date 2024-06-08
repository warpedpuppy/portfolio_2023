import GeneralLandingPage from '../../layout-templates/GeneralLandingPage';
function StudentVideosLanding() {
	return ( 
		<GeneralLandingPage
			title="student videos & code reviews:"
			explanatoryText={[`I've made a lot of student videos and code reviews and here are some:`]}
			dotColor={'0xFF9900'}
			links={
				[
					{link: "/web-instruction/setting-up-aws", title: 'Setting up AWS'},
					{link: "/web-instruction/drawing-app", title: 'Drawing App'}
				]
			}
			/>
	 );
}

export default StudentVideosLanding;
