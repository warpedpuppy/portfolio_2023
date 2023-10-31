import "./About.scss";
import AboutAnimation from "./about-animation/AboutAnimation";
function About() {
  return (
	<div className="about-wrapper">
	<AboutAnimation />
    <div className="general-layout">
      <div className="landing-page-internal-box">
        
        <h2>About</h2>
        <p>
          I'm Ted. 
        </p>
        <p>
          If you need to contact me, look at the domain name and you can figure
          out how.
        </p>
        <p>
          Trying to figure out what to do with this next phase of my life and so far not coming up with anything.
        </p>
      </div>
    </div>
	</div>
  );
}

export default About;
