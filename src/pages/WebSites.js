import "./WebSites.scss";

function WebSites() {
  return (
    <div className="web-sites-wrapper">
      <div className="general-layout">
        <div className="landing-page-internal-box">
          <h2>Web Sites</h2>
          <ul className="web-sites-list">
            <li>
              <a href="https://utilspalooza.com" target="_blank" rel="noreferrer">
                Utilspalooza
              </a>
              <p>A living reference of animation formulas — collision detection, trig, easing, and more — with live canvas demos and one-click code export.</p>
            </li>
            <li>
              <a href="https://tryingsomething.com" target="_blank" rel="noreferrer">
                Trying Something
              </a>
              <p>A rhythm training app for musicians. Practice reading sheet music, tap along to scrolling notation, and work through progressive exercises.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WebSites;
