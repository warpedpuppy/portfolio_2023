import LandingAnimation from './LandingAnimation/LandingAnimation';
import SiteCard from '../components/web-sites/SiteCard';
import './WebSitesLandingPage.scss';

function WebSitesLandingPage({ title, explanatoryText, dotColor, sites }) {
  return (
    <div className="general-layout web-sites-landing">
      <div className="wslp-header">
        <LandingAnimation dotColor={dotColor} />
        <h2>{title}</h2>
        {Array.isArray(explanatoryText)
          ? explanatoryText.map((s, i) => <p key={i}>{s}</p>)
          : <p>{explanatoryText}</p>
        }
      </div>

      <div className="wslp-cards">
        {sites.map((site, index) => (
          <SiteCard key={site.url} {...site} index={index} />
        ))}
      </div>
    </div>
  );
}

export default WebSitesLandingPage;
