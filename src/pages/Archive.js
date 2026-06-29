import "./Archive.scss";
import LegacyHome from "./LegacyHome";

const legacyLinks = [
  { href: "/pretty-little-things", label: "Pretty little things" },
  { href: "/web-sites", label: "Older websites page" },
  { href: "/webinars", label: "Webinars index" },
  { href: "/web-instruction", label: "Teaching videos index" },
  { href: "/about", label: "About page" },
];

function Archive() {
  return (
    <main className="archive-page">
      <section className="archive-intro">
        <p className="section-kicker">Archive</p>
        <h1>The previous portfolio is still here.</h1>
        <p>
          This is the older presentation layer, kept for nostalgia and
          posterity. The main homepage is now quieter and more focused, but the
          older categories and experiments remain accessible.
        </p>
        <ul>
          {legacyLinks.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="archive-legacy-home">
        <LegacyHome />
      </section>
    </main>
  );
}

export default Archive;
