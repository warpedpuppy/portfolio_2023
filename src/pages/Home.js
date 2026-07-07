import "./Home.scss";
import StudentVideos from "../site-data/student-videos";
import { Link } from "react-router-dom";

const primaryProjects = [
  {
    name: "Tugtug",
    eyebrow: "code health dashboard",
    href: "https://tugtug.com",
    description:
      "Tugtug examines GitHub repositories through the signals that tend to make maintenance expensive: complexity, churn, coupling, size, ownership, and change history. The goal is not another vanity score. It is a practical map of where the codebase is asking for attention, which files are drifting toward risk, and whether that risk is getting better or worse over time.",
    details: [
      "Next.js, React, Supabase, GitHub API, Octokit, d3",
      "Repository analytics, trend views, code risk summaries",
    ],
  },
  {
    name: "Utilspalooza",
    eyebrow: "animation utilities",
    href: "https://utilspalooza.com",
    description:
      "Utilspalooza is a working reference library for animation formulas, helpers, and examples. It keeps the math visible, the demos live, and the code close enough to copy into real projects. The site is partly documentation, partly studio, and partly a way to keep useful animation knowledge from being trapped in old experiments.",
    details: [
      "Vite, React, TypeScript, Canvas",
      "Formula library, example gallery, exportable utility code",
    ],
  },
];

const supportingProject = {
  name: "Tryingsomething",
  eyebrow: "music education",
  href: "https://tryingsomething.com",
  description:
    "A rhythm-reading project for learners who need to connect notation, sound, and timing through direct practice.",
  details: ["Vite, React, Web Audio", "Interactive rhythm exercises"],
};

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

const tutorialVideos = Object.values(StudentVideos).map((item) => ({
  title: item.landingPageData.title,
  href: item.landingPageData.link,
}));

function ProjectArticle({ project, quiet = false }) {
  return (
    <article className={quiet ? "project-article project-article--quiet" : "project-article"}>
      <div className="project-heading">
        <p>{project.eyebrow}</p>
        <h2>{project.name}</h2>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-footer">
        <ul aria-label={`${project.name} details`}>
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <a href={project.href} target="_blank" rel="noreferrer">
          Visit
        </a>
      </div>
    </article>
  );
}

function LinkList({ title, href, items }) {
  return (
    <section className="archive-list" aria-labelledby={`${title}-heading`}>
      <div className="archive-list-heading">
        <h2 id={`${title}-heading`}>{title}</h2>
        <Link to={href}>All</Link>
      </div>
      <ol>
        {items.map((item, index) => (
          <li key={item.href}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <Link to={item.href}>{item.title}</Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Home() {
  return (
    <main className="portfolio-home">
      <section className="work-intro" id="featured-work" aria-label="Featured work">
        <div className="intro-label">
          <p>Ted Walther</p>
        </div>

        <div className="primary-work">
          {primaryProjects.map((project) => (
            <ProjectArticle project={project} key={project.name} />
          ))}
        </div>

        <ProjectArticle project={supportingProject} quiet />
      </section>

      <section className="teaching-archive" id="teaching" aria-label="Teaching archive">
        <LinkList title="Webinars Hosted" href="/webinars" items={webinars} />
        <LinkList title="Tutorial Videos" href="/web-instruction" items={tutorialVideos} />
      </section>

      <section className="contact-strip" id="about" aria-label="Contact">
        <p>Frontend development, product interfaces, animation tools, and web instruction.</p>
        <div>
          <a href="https://github.com/warpedpuppy" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:ted@warpedpuppy.com">ted@warpedpuppy.com</a>
        </div>
      </section>
    </main>
  );
}

export default Home;
