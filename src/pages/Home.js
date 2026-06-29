import "./Home.scss";

const featuredSites = [
  {
    name: "tugtug",
    eyebrow: "active product",
    description:
      "A code health dashboard for GitHub repositories that combines complexity, churn, coupling, and trend data to show where risk actually lives in a codebase.",
    stack: ["Next.js", "React", "Supabase", "GitHub API", "d3"],
    href: "https://tugtug.com",
    cta: "Visit site",
  },
  {
    name: "trying something",
    eyebrow: "music education",
    description:
      "Interactive rhythm and music-theory exercises for learners who want to hear, read, and internalize what they are practicing instead of staring at static lessons.",
    stack: ["Vite", "React", "Web Audio"],
    href: "https://tryingsomething.com",
    cta: "Visit site",
  },
  {
    name: "utilspalooza",
    eyebrow: "animation reference",
    description:
      "A working library of animation formulas, utilities, and live canvas demos. It is part reference, part playground, and part download station for code that is actually useful.",
    stack: ["Vite", "React", "TypeScript", "Canvas"],
    href: "https://utilspalooza.com",
    cta: "Visit site",
  },
];

const webinars = [
  {
    title: "Coding Solitaire in JavaScript",
    href: "/webinars/solitaire",
  },
  {
    title: "Animating SVGs",
    href: "/webinars/svg-animations",
  },
  {
    title: "Things I've Learned as a Webdev",
    href: "/webinars/web-dev",
  },
];

const teachingVideos = [
  {
    title: "Setting up AWS",
    href: "/web-instruction/setting-up-aws",
  },
  {
    title: "Drawing App",
    href: "/web-instruction/drawing-app",
  },
  {
    title: "Convert CSS to Sass",
    href: "/web-instruction/css-to-sass",
  },
  {
    title: "Positioning in CSS",
    href: "/web-instruction/css-positioning",
  },
  {
    title: "Flex Box in CSS",
    href: "/web-instruction/flex-box",
  },
  {
    title: "Grid in CSS",
    href: "/web-instruction/grid",
  },
];

function Home() {
  return (
    <main className="portfolio-home">
      <section className="hero-section" id="top">
        <p className="section-kicker">Ted Walther / Warped Puppy</p>
        <div className="hero-grid">
          <div>
            <h1>I build small web products with clear purpose.</h1>
            <p className="hero-copy">
              This portfolio now centers on the three things I am actively
              building: one product aimed at becoming a business, one for music
              education, and one for animation utilities. The older work still
              exists, but it no longer gets the front page.
            </p>
          </div>
          <div className="hero-aside">
            <p>
              Frontend developer with 20+ years on the web, with a bias toward
              thoughtful interfaces, interactive teaching, and tools that earn
              their keep.
            </p>
            <div className="hero-actions">
              <a href="#featured-work">See featured work</a>
              <a href="#teaching">Teaching archive</a>
              <a href="/archive">Portfolio archive</a>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="featured-work">
        <div className="section-heading">
          <p className="section-kicker">Featured work</p>
          <h2>Three projects, clearly separated.</h2>
        </div>

        <div className="featured-grid">
          {featuredSites.map((site) => (
            <article className="feature-card" key={site.name}>
              <p className="feature-eyebrow">{site.eyebrow}</p>
              <h3>{site.name}</h3>
              <p className="feature-description">{site.description}</p>
              <ul className="tag-list">
                {site.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {site.href ? (
                <a href={site.href} target="_blank" rel="noreferrer">
                  {site.cta}
                </a>
              ) : (
                <p className="feature-status">{site.status}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="content-section teaching-section" id="teaching">
        <div className="section-heading">
          <p className="section-kicker">Teaching</p>
          <h2>Webinars and course videos still belong here.</h2>
        </div>

        <div className="teaching-grid">
          <article className="resource-panel">
            <h3>Webinars I’ve taught</h3>
            <p>
              Longer-form talks on JavaScript, SVG animation, and practical web
              development.
            </p>
            <ul>
              {webinars.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
            <a className="panel-link" href="/webinars">
              View all webinars
            </a>
          </article>

          <article className="resource-panel">
            <h3>Teaching videos</h3>
            <p>
              Shorter curriculum videos and code-review-style lessons for
              students learning the web stack.
            </p>
            <ul>
              {teachingVideos.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
            <a className="panel-link" href="/web-instruction">
              Browse the teaching library
            </a>
          </article>
        </div>
      </section>

      <section className="content-section about-section" id="about">
        <div className="section-heading">
          <p className="section-kicker">About</p>
          <h2>Careful, usable, and a little stubborn about quality.</h2>
        </div>
        <div className="about-grid">
          <p>
            I spent years doing interactive and frontend work across very
            different eras of the web. What matters most to me now is whether a
            thing is understandable, elegant, and actually useful once the
            novelty burns off.
          </p>
          <div className="about-links">
            <a href="https://github.com/warpedpuppy" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:ted@warpedpuppy.com">ted@warpedpuppy.com</a>
            <a href="/about">More about me</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
