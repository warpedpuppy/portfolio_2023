import GeneralLandingPage from '../../layout-templates/GeneralLandingPage';
import StudentVideos from '../../site-data/student-videos';
function StudentVideosLanding() {
	return ( 
		<GeneralLandingPage
			title="student videos & code reviews:"
			explanatoryText={[`I've made a lot of curriculum videos for schools, and here are some:`]}
			dotColor={'0xFF9900'}
			links={
				Object.values(StudentVideos).map( item => item.landingPageData) }
			/>
	 );
}

export default StudentVideosLanding;
