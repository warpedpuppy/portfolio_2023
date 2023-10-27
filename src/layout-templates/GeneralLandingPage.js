import { Link } from 'react-router-dom';
function GeneralLandingPage({title, explanatoryText, links}) {
	return ( 
		<div className="general-layout">
			<div className="landing-page-internal-box">
			<div className="landing-animation">
			</div>
			<h2>{ title } </h2>
			{
				(Array.isArray(explanatoryText)) ?
				explanatoryText.map(sentence => <p>{ sentence }</p>)
				:
				<p>{ explanatoryText }</p>
			}
			<ul>
				{
					links.map( link => <li><Link to={ link.link }>{ link.title }</Link></li>)
				}
			</ul>
			</div>
		</div>
	 );
}

export default GeneralLandingPage;