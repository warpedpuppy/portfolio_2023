import GeneralLandingPage from '../../layout-templates/GeneralLandingPage';
function ChallengesLanding() {
	return ( 

		<GeneralLandingPage
			title="challenges:"
			explanatoryText={[`Over the years I've created a lot of challenges for students, friends, and sometimes just myself.`]}
			links={
				[
					{link: "/challenges/fireworks", title: 'step-by-step fireworks'},
					{link: "/gamelets/fish", title: 'fish'},
					{link: "/gamelets/planet-jump", title: 'planet jump'}
				]
			}
			/>

		
	 );
}

export default ChallengesLanding;
// import './Challenges.scss';
// import { Link } from 'react-router-dom';
// function ChallengesLanding() {
// 	return ( 
// 		<div className='general-layout challenges'>
// 			<div className="landing-page-internal-box">
// 			<div className="landing-animation">
// 			</div>
// 		<h2>challenges:</h2>
// 		<p>Over the years I've created a lot of challenges for students, friends, and sometimes just myself.</p>
// 		<p>Here are several of them:</p>
// 		<ul>
// 			<li><Link to="/challenges/fireworks">step-by-step fireworks</Link></li>
// 			{/* <li><Link to="/challenges/maze-solver">maze solver</Link></li> */}
// 			<li><Link to="/challenges/soduko">soduko error checker</Link></li>
// 			<li><Link to="/challenges/three-of-a-kind">three of a kind</Link></li>
// 			<li><Link to="/challenges/murmuration">murmuration</Link></li>
// 			<li><Link to="/challenges/pattern-maker">spirograph</Link></li>
// 		</ul>
// 		</div>
// 		</div>
// 	 );
// }

// export default Challenges;

// ChallengesLanding