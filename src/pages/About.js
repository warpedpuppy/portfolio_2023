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
          Ted Walther is a software engineer and educator based in Maine, specializing in
          interactive canvas animations, game development, and full-stack web applications.
          With a background that spans law, design, and technology, Ted brings a
          cross-disciplinary perspective to every project he builds.
        </p>
        <p>
          His professional focus is on creating rich, performant browser-based experiences —
          from real-time physics simulations and collision-detection systems to educational
          animation toolkits and curriculum-driven web applications. Ted has delivered
          webinars on SVG animation, JavaScript game architecture, and creative coding, and
          has built production applications across a range of industries.
        </p>
        <p>
          Prior to software development, Ted practiced law and later spent years teaching,
          which informs his commitment to clear documentation, thoughtful API design, and
          work that is genuinely understandable by its audience.
        </p>
        <p>
          When he is not writing code, he can be found hiking coastal Maine with his dogs
          or exploring the overlap between mathematics and visual art.
        </p>
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
