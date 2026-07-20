import "./About.scss";
import AboutAnimation from "./about-animation/AboutAnimation";

function About() {
  return (
    <div className="about-wrapper">
      <AboutAnimation />
      <div className="general-layout">
        <div className="landing-page-internal-box">
          <h2>About</h2>

          <div className="about-bio">
            <p>
              I'm Ted &mdash; a frontend developer with 20+ years building for
              the web.
            </p>
            <p>
              These days I build interactive animation, considered frontend
              architecture, and the small careful details that make an interface
              feel alive. The <em>pretty little things</em> on this site are
              where I keep my hands sharp.
            </p>
          </div>

          <dl className="about-meta">
            <dt>what I work with</dt>
            <dd>
              JavaScript &middot; TypeScript &middot; React &middot; Next.js
              &middot; HTML5 Canvas &amp; SVG &middot; SCSS &middot; Node
            </dd>

            <dt>currently building</dt>
            <dd>
              <a href="https://utilspalooza.com">utilspalooza</a> &mdash; a live
              reference of canvas animation math &middot;{" "}
              <a href="https://tryingsomething.com">trying something</a> &mdash;
              interactive rhythm &amp; music theory
            </dd>

            <dt>find me</dt>
            <dd>
              <a
                href="https://github.com/warpedpuppy"
                target="_blank"
                rel="noreferrer"
              >
                github.com/warpedpuppy
              </a>
            </dd>
          </dl>

          {/* <dl id="aboutPoems">
            <dt>and, because some habits stick:</dt>
            <dd>There once was a coder named Ted</dd>
            <dd>Who once, as a lawyer, did pled.</dd>
            <dd>He hated the courts,</dd>
            <dd>Preferred different sorts,</dd>
            <dd>And now loves to code in its stead.</dd>
          </dl> */}
        </div>

        <hr />

        <dl className="contact">
          <dt>contact:</dt>
          <dd>
            <a href="mailto:ted@warpedpuppy.com">ted@warpedpuppy.com</a>
          </dd>
          <dt>company:</dt>
          <dd>Warped Puppy LLC</dd>
        </dl>
      </div>
    </div>
  );
}

export default About;
