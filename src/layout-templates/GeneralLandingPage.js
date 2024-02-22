import { Link } from 'react-router-dom';
import LandingAnimation from './LandingAnimation/LandingAnimation';
function GeneralLandingPage({title, explanatoryText, links, dotColor}) {
	return ( 
		<div className="general-layout">
			<div className="landing-page-internal-box">
			<LandingAnimation dotColor={dotColor} />
			<h2>{ title } </h2>
			{
				(Array.isArray(explanatoryText)) ?
				explanatoryText.map((sentence, index) => <p key={`sentence${index}`}>{ sentence }</p>)
				:
				<p>{ explanatoryText }</p>
			}
			<ul>
				{
					links.map( (link, index) => (<li key={`link${index}`}>
						<Link to={ link.link } 

						 target={ link.link.includes("http") ? "_blank" : '' }

					>{ link.title }</Link></li>)
					
					)
				}
			</ul>
			</div>
		</div>
	 );
}

export default GeneralLandingPage;