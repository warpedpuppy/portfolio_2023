import './Home.scss';
import BamLogo from '../components/svgs/BamLogo';
import HomeCanvas from './home/HomeCanvas';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div id="home-page">
      <Link to="/about"><BamLogo /></Link>
      <div id="home-page-text">
        <p>My name is Ted and I've been writing code for a while.</p>
        <p>Currently working on <a href="https://utilspalooza.com" rel="noreferrer" target='_blank'>utilspalooza</a> which is a site full of useful animation functions.  I'm planning on adding in depth explanations of each.</p>
        <p><a href="/docs/edward_walther_resume.pdf" rel="noreferrer" target='_blank'>Here's</a> my resume.</p>
      </div>
      <HomeCanvas />
    </div>
  );
}

export default Home;