import "./About.scss";
import AboutAnimation from "./about-animation/AboutAnimation";
function About() {
  return (
    <div className="about-wrapper">
      <AboutAnimation />
      <div className="general-layout">
        <div className="landing-page-internal-box">

          <h2>About</h2>
          <dl id="aboutPoems">
            <dt>biographical poem 1:</dt>
            <dd>There once was a coder named Ted</dd>
            <dd>In Maine is where he made his bed</dd>
            <dd>He spent most of his days,</dd>
            <dd>In a code-fuelled haze —</dd>
            <dd>Except when his dogs must be fed.</dd>
            <dt>biographical poem 2:</dt>
            <dd>There once was a coder named Ted</dd>
            <dd>Whose meters made purists see red</dd>
            <dd>He didn't much care —</dd>
            <dd>'cause twas named for a bear.</dd>
            <dd>And bears like to charge straight ahead.</dd>
            <dt>biographical poem 3:</dt>
            <dd>There once was a coder named Ted</dd>
            <dd>Who once, as a lawyer, did pled.</dd>
            <dd>He hated the courts,</dd>
            <dd>Preferred different sorts,</dd>
            <dd>And now loves to code in its stead.</dd>
          </dl>
        </div>
        <hr />
        <dl className="contact">
          <dt>contact:</dt>
          <dd>ted at warpedpuppy dot com</dd>
        </dl>
      </div>
    </div>
  );
}

export default About;
