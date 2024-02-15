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
        <dd>In Maine did he make his bed</dd>
        <dd>He spent most of his days,</dd>
        <dd>a lost in a haze.</dd>
        <dd>'Cept when his dogs he did fed.</dd>
        <dt>biographical poem 2:</dt>
        <dd>There once was a coder named Ted</dd>
        <dd>Whose rhyme-schemes made ears badly bled</dd>
        <dd>But he didn't care,</dd>
        <dd>'cause twas named for a bear.</dd>
        <dd>And he always enjoyed seeing red.</dd>
        <dt>biographical poem 3:</dt>
        <dd>There once was a coder named Ted</dd>
        <dd>Who once, as a lawyer, did pled.</dd>
        <dd>But he hated that job,</dd>
        <dd>At heart, he's a slob,</dd>
        <dd>And now loves to code in its stead.</dd>
		</dl>
      </div>
    </div>
	</div>
  );
}

export default About;
