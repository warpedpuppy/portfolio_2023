import "./Home.scss";
import HomeCanvas from "./home/HomeCanvas";
import { Link } from "react-router-dom";

const featured = [
  { to: "/pretty-little-things/sparklies", label: "sparklies", hint: "color bursts" },
  { to: "/pretty-little-things/glitter", label: "glitter", hint: "orbital shimmer" },
  { to: "/pretty-little-things/fireworks", label: "fireworks", hint: "step-by-step" },
  { to: "/pretty-little-things/murmuration", label: "murmuration", hint: "flocking starlings" },
  { to: "/pretty-little-things/klimt-background", label: "klimt spirals", hint: "rainbow swirls" },
  { to: "/pretty-little-things/crystal-ball", label: "crystal ball", hint: "shimmering orb" },
];

function Home() {
  return (
    <div id="home-page">
      <HomeCanvas />

      <div className="home-overlay">
        <div className="home-content">
          <p className="home-intro">
            I'm Ted, a developer with decades of experience shipping things on
            the web. My work spans interactive animation, frontend
            architecture, and the kind of small, careful detail that makes
            interfaces feel alive. Below are a few of the pretty little things
            I've built &mdash; equal parts experiment, exercise, and play.
          </p>
          <ul className="home-featured-grid">
            {featured.map((f) => (
              <li key={f.to}>
                <Link to={f.to}>
                  <span className="title">{f.label}</span>
                  <span className="hint">{f.hint}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link to="/pretty-little-things" className="home-see-all">
          see all the pretty little things &rarr;
        </Link>
      </div>
    </div>
  );
}

export default Home;
