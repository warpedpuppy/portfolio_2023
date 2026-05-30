import "./NeonHome.scss";
import { Link } from "react-router-dom";

// ── Inline neon logo (from logo.svg converted to neon style) ──────────────────
function NeonLogo() {
  return (
    <svg viewBox="0 0 469 331" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="nh-glow-cyan" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b1"/>
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b2"/>
          <feMerge>
            <feMergeNode in="b1"/><feMergeNode in="b1"/>
            <feMergeNode in="b2"/><feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="nh-glow-pink" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b1"/>
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b2"/>
          <feMerge>
            <feMergeNode in="b1"/><feMergeNode in="b1"/>
            <feMergeNode in="b2"/><feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="nh-glow-white" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b1"/>
          <feMerge>
            <feMergeNode in="b1"/><feMergeNode in="b1"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Panel fills */}
      <path fill="#0a021a" stroke="none"
        d="M295,314.5H177.1c-55,0-100-45-100-100v-46.2c0-55,45-100,100-100H295c55,0,100,45,100,100v46.2C395,269.5,350,314.5,295,314.5z"/>
      <ellipse fill="#0a021a" stroke="none"
        transform="matrix(0.4814 -0.8765 0.8765 0.4814 -89.5008 123.3204)"
        cx="59.5" cy="137.3" rx="88" ry="28.7"/>
      <ellipse fill="#0a021a" stroke="none"
        transform="matrix(0.8172 -0.5763 0.5763 0.8172 -3.7049 256.9229)"
        cx="403.2" cy="134.3" rx="28.7" ry="88"/>

      {/* Cyan neon tubes */}
      <g filter="url(#nh-glow-cyan)">
        <path fill="none" stroke="#00e5ff" strokeWidth="3.5" strokeLinejoin="round"
          d="M295,314.5H177.1c-55,0-100-45-100-100v-46.2c0-55,45-100,100-100H295c55,0,100,45,100,100v46.2C395,269.5,350,314.5,295,314.5z"/>
        <ellipse fill="none" stroke="#00e5ff" strokeWidth="3"
          transform="matrix(0.4814 -0.8765 0.8765 0.4814 -89.5008 123.3204)"
          cx="59.5" cy="137.3" rx="88" ry="28.7"/>
        <ellipse fill="none" stroke="#00e5ff" strokeWidth="3"
          transform="matrix(0.8172 -0.5763 0.5763 0.8172 -3.7049 256.9229)"
          cx="403.2" cy="134.3" rx="28.7" ry="88"/>
        <path fill="none" stroke="#00e5ff" strokeWidth="2" strokeOpacity="0.55"
          d="M262.7,306.9h-53.3c-55,0-100-45-100-100v0c0-55,45-100,100-100h53.3c55,0,100,45,100,100v0C362.7,261.9,317.7,306.9,262.7,306.9z"/>
        <polygon fill="none" stroke="#00e5ff" strokeWidth="2" strokeOpacity="0.45"
          points="297.4,308.5 200.3,308.5 171.7,308.5 171.7,270 297.4,270"/>
        <line stroke="#00e5ff" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round"
          x1="232.5" y1="299.4" x2="232.5" y2="309.5"/>
        <path fill="none" stroke="#00e5ff" strokeWidth="2" strokeOpacity="0.45"
          d="M207.3,277c0,0,19-24,43.7-4.3l-18.5,26.7L207.3,277z"/>
      </g>

      {/* White neon eyes */}
      <g filter="url(#nh-glow-white)">
        <ellipse fill="#0a021a" stroke="#ffffff" strokeWidth="3" cx="182.4" cy="230.2" rx="36" ry="62.6"/>
        <ellipse fill="#ffffff" cx="159.5" cy="218.5" rx="13.9" ry="27.1"/>
        <ellipse fill="#0a021a" stroke="#ffffff" strokeWidth="3" cx="286.2" cy="230.2" rx="36" ry="62.6"/>
        <ellipse fill="#ffffff" cx="264.5" cy="218.5" rx="13.9" ry="27.1"/>
      </g>

      {/* Hot-pink neon nose + crown */}
      <g filter="url(#nh-glow-pink)">
        <path fill="#1a0020" stroke="#ff00ff" strokeWidth="3" strokeLinejoin="round"
          d="M209.7,322c8,0,12.3-2.4,11.7-14.2l-21-0.3C200.3,307.5,199.3,322,209.7,322z"/>
        <line stroke="#ff00ff" strokeWidth="1.5" strokeLinecap="round"
          x1="210.9" y1="307.8" x2="210.9" y2="320.3"/>
        <path fill="#1a0020" stroke="#ff00ff" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round"
          d="M218.3,68.3c0,0,58,29,100.3,9.3l20.3-61l-38.7,11.7l-21.7-20l-25,14.7L221.3,4.7L218.3,68.3z"/>
      </g>
    </svg>
  );
}

// ── Content data ──────────────────────────────────────────────────────────────
const bio = [
  `I'm Ted Walther, a frontend developer and creative coder based in Maine.
   I've been building for the web for over two decades — across the full
   evolution of the modern frontend stack. My focus is on things that move:
   canvas animation, interactive graphics, and the kind of physics-aware,
   detail-oriented UI work that makes an interface feel genuinely alive.`,
  `Alongside product and client work I teach. I've led webinars on SVG
   animation, application architecture, and game development, and produced
   curriculum video series covering CSS, flexbox, grid, API design, and more.
   Teaching sharpens the work — explaining something clearly forces you to
   actually understand it.`,
  `Right now I'm building Utilspalooza — a living reference of animation
   formulas with live canvas demos — and Trying Something, an interactive
   music education platform combining rhythm training, progressive exercises,
   and synthesized audio across 20+ theory topics. I'm drawn to the places
   where mathematics, music, and software genuinely overlap.`,
];

const skills = [
  "canvas / WebGL", "React / TypeScript", "animation & physics",
  "creative coding", "music technology", "web instruction",
];

const liveSites = [
  {
    href: "https://utilspalooza.com",
    name: "utilspalooza.com",
    desc: "A living reference of animation formulas — collision detection, trig, easing, and more — with live canvas demos and one-click code export.",
  },
  {
    href: "https://tryingsomething.com",
    name: "tryingsomething.com",
    desc: "A rhythm training app for musicians. Read sheet music, tap along to scrolling notation, and explore 20+ interactive music theory topics with live audio.",
  },
];

const prettyLittleThings = [
  { to: "/pretty-little-things/sparklies",       label: "sparklies" },
  { to: "/pretty-little-things/glitter",          label: "glitter" },
  { to: "/pretty-little-things/fireworks",        label: "fireworks" },
  { to: "/pretty-little-things/murmuration",      label: "murmuration" },
  { to: "/pretty-little-things/klimt-background", label: "klimt spirals" },
  { to: "/pretty-little-things/crystal-ball",     label: "crystal ball" },
  { to: "/pretty-little-things/pretty-ring",      label: "pretty ring" },
  { to: "/pretty-little-things/maze-solver",      label: "maze solver" },
  { to: "/pretty-little-things/soduko",           label: "sudoku checker" },
  { to: "/pretty-little-things/three-of-a-kind",  label: "three-of-a-kind" },
  { to: "/pretty-little-things/pattern-maker",    label: "spirograph" },
  { to: "/pretty-little-things/pink-drawers",     label: "pink drawers" },
  { to: "/pretty-little-things/geometric-puzzle", label: "geo puzzle" },
  { to: "/pretty-little-things/tropical-plants",  label: "tropical plants" },
  { to: "/pretty-little-things/sierpinski",       label: "sierpiński" },
  { to: "/pretty-little-things/fish",             label: "fish" },
  { to: "/pretty-little-things/pig",              label: "bounce pig" },
  { to: "/pretty-little-things/planet-jump",      label: "planet jump" },
];

const webinars = [
  { to: "/webinars/solitaire",      label: "Solitaire in Canvas" },
  { to: "/webinars/svg-animations", label: "SVG Animations" },
  { to: "/webinars/web-dev",        label: "Web Dev Fundamentals" },
];

const curriculum = [
  { to: "/web-instruction/setting-up-aws",      label: "Setting up AWS" },
  { to: "/web-instruction/drawing-app",         label: "Drawing App" },
  { to: "/web-instruction/css-to-sass",         label: "CSS to SASS" },
  { to: "/web-instruction/css-positioning",     label: "CSS Positioning" },
  { to: "/web-instruction/flex-box",            label: "Flexbox" },
  { to: "/web-instruction/grid",                label: "CSS Grid" },
  { to: "/web-instruction/units-of-measurement",label: "Units of Measurement" },
  { to: "/web-instruction/native-css-variables",label: "CSS Variables" },
  { to: "/web-instruction/for-v-forEach",       label: "for vs forEach" },
  { to: "/web-instruction/crud-endpoints",      label: "CRUD Endpoints" },
];

// ── Page ───────────────────────────────────────────────────────────────────────
function NeonHome() {
  return (
    <div className="neon-home">

      {/* ── Sticky nav ──────────────────────────────────────────────────── */}
      <nav className="nh-nav">
        <a href="#hero" className="nh-nav-brand">warpedpuppy</a>
        <ul className="nh-nav-links">
          <li><a href="#about">about</a></li>
          <li><a href="#sites">live sites</a></li>
          <li><a href="#animations">animations</a></li>
          <li><a href="#instruction">instruction</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section id="hero" className="nh-hero">
        <div className="nh-logo-scene">
          <div className="nh-logo-spin">
            <NeonLogo />
          </div>
        </div>
        <h1 className="nh-hero-name">Edward&nbsp;Walther</h1>
        <p className="nh-hero-tagline">
          Developer · animator · educator · builder of things that move.
          Decades of experience shipping interactive work on the web.
        </p>
      </section>

      <main className="nh-page">

        {/* ── About ───────────────────────────────────────────────────── */}
        <section
          id="about"
          className="neon-box"
          data-label="// about"
          style={{"--c": "var(--cyan)"}}
        >
          <div className="nh-bio">
            {bio.map((para, i) => (
              <p key={i} className="nh-bio-para">{para}</p>
            ))}
            <div className="nh-skills">
              {skills.map((s) => (
                <span key={s} className="nh-skill-tag">{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Live sites ──────────────────────────────────────────────── */}
        <section
          id="sites"
          className="neon-box"
          data-label="// live sites"
          style={{"--c": "var(--green)"}}
        >
          <div className="nh-sites-grid">
            {liveSites.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="nh-site-card"
              >
                <span className="nh-site-name">{s.name}</span>
                <span className="nh-site-desc">{s.desc}</span>
                <span className="nh-site-arrow">↗ visit</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── Pretty little things ────────────────────────────────────── */}
        <section
          id="animations"
          className="neon-box"
          data-label="// pretty little things"
          style={{"--c": "var(--purple)"}}
        >
          <div className="nh-plt-grid">
            {prettyLittleThings.map((p) => (
              <Link key={p.to} to={p.to} className="nh-plt-item">
                {p.label}
              </Link>
            ))}
          </div>
        </section>

        {/* ── Instruction ─────────────────────────────────────────────── */}
        <section
          id="instruction"
          className="neon-box"
          data-label="// instruction"
          style={{"--c": "var(--orange)"}}
        >
          <div className="nh-instruction-grid">
            <div className="nh-instruction-col">
              <h3>webinars</h3>
              <ul className="nh-instruction-list">
                {webinars.map((w) => (
                  <li key={w.to}><Link to={w.to}>{w.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="nh-instruction-col">
              <h3>curriculum videos</h3>
              <ul className="nh-instruction-list">
                {curriculum.map((c) => (
                  <li key={c.to}><Link to={c.to}>{c.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Contact ─────────────────────────────────────────────────── */}
        <section
          id="contact"
          className="neon-box"
          data-label="// contact"
          style={{"--c": "var(--pink)"}}
        >
          <p className="nh-contact">ted at warpedpuppy dot com</p>
        </section>

      </main>
    </div>
  );
}

export default NeonHome;
