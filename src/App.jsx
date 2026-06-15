import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Profile", href: "#profile" },
  { label: "Projects", href: "#projects" },
  { label: "Strengths", href: "#strengths" },
  { label: "Contact", href: "#contact" }
];

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const pageRange = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

const pageImage = (page) =>
  `/images/portfolio-pages/page-${String(page).padStart(2, "0")}.jpg`;

const stats = [
  { value: "85", label: "pages in portfolio" },
  { value: "8", label: "core project chapters" },
  { value: "3", label: "design patents" },
  { value: "2+1", label: "companies and studio" }
];

const experience = [
  {
    title: "Research-driven product thinking",
    detail:
      "Translate interviews, scenario mapping, and problem framing into product directions with clear user value."
  },
  {
    title: "3D form development",
    detail:
      "Build complete design narratives from sketch to Rhino modeling, structural refinement, and KeyShot rendering."
  },
  {
    title: "Cross-domain exploration",
    detail:
      "Move between assistive devices, mobility concepts, emergency systems, and consumer electronics without losing consistency."
  }
];

const projects = [
  {
    id: "01",
    title: "Lao Yi Dong Assistive Trainer",
    category: "Healthy aging / wearable product",
    description:
      "A muscle-support concept that blends rehabilitation, daily exercise, and safer movement for older users.",
    image: pageImage(8),
    tags: ["User research", "Structure design", "Aging-friendly"],
    layout: "wide",
    year: "2026",
    role: "Research / product concept / structure presentation",
    tools: "Rhino, KeyShot, presentation layout",
    challenge:
      "Older users and rehabilitation beginners need exercise support that feels protective without becoming a heavy medical device.",
    outcome:
      "The concept combines wearable muscle support, movement guidance, and safer training scenarios into one approachable product story.",
    process: [
      "Mapped daily movement and rehabilitation pain points into wearable support opportunities.",
      "Explored form language around muscle assistance, soft contact zones, and visible safety cues.",
      "Built the presentation around exploded structure, three-view explanation, and in-context use."
    ],
    pages: pageRange(5, 8),
    pdfRange: "PDF pages 05-08"
  },
  {
    id: "02",
    title: "Mitsubishi Concept Racing Boat",
    category: "Brand language / mobility concept",
    description:
      "An angular speedboat proposal extending Mitsubishi's visual language into a lightweight competitive form.",
    image: pageImage(18),
    tags: ["CMF direction", "Aerodynamic styling", "Concept storytelling"],
    layout: "standard",
    year: "2026",
    role: "Brand language extension / mobility styling / CMF",
    tools: "Rhino, KeyShot, CMF board",
    challenge:
      "The project asked how Mitsubishi's aggressive automotive identity could be translated into a water mobility product.",
    outcome:
      "A faceted racing boat proposal with sharper proportion, exposed power details, and a brand-driven CMF system.",
    process: [
      "Analyzed Mitsubishi visual cues and converted them into surface breaks, front posture, and color rules.",
      "Balanced aerodynamic direction with an object that still reads as fast, competitive, and manufacturable.",
      "Developed multiple colorways to test how the concept changes across sport, premium, and industrial moods."
    ],
    pages: pageRange(9, 18),
    pdfRange: "PDF pages 09-18"
  },
  {
    id: "03",
    title: "LUNE Automatic Roof Tent",
    category: "Outdoor mobility / product system",
    description:
      "An SUV-mounted camping concept focused on fast deployment, compact integration, and stronger scene value.",
    image: pageImage(25),
    tags: ["Scenario design", "Product ecosystem", "3D presentation"],
    layout: "standard",
    year: "2026",
    role: "Scenario design / vehicle accessory / product system",
    tools: "Rhino, KeyShot, exploded layout",
    challenge:
      "Outdoor users need a roof camping solution that opens quickly, stores compactly, and feels integrated with the vehicle.",
    outcome:
      "A roof-mounted camp system that turns the vehicle into a more complete rest, shade, and shelter platform.",
    process: [
      "Studied travel scenarios around parking, unfolding, storage, and night use.",
      "Designed the upper structure as a compact add-on that keeps visual continuity with the car body.",
      "Presented the concept through assembly views, detail renders, and use-scene framing."
    ],
    pages: pageRange(19, 28),
    pdfRange: "PDF pages 19-28"
  },
  {
    id: "04",
    title: "Manta Matrix Safety Island",
    category: "Emergency equipment / public safety",
    description:
      "A modular rescue proposal combining flotation, AI monitoring, and underwater assistance into one safety system.",
    image: pageImage(37),
    tags: ["System thinking", "Exploded view", "Public service"],
    layout: "wide",
    year: "2026",
    role: "Public safety system / modular equipment / service concept",
    tools: "Rhino, KeyShot, system diagram",
    challenge:
      "Sea rescue equipment must be visible, stable, modular, and capable of supporting multiple rescue tasks under pressure.",
    outcome:
      "A safety island concept integrating flotation, AI oxygen mask monitoring, underwater power assistance, and rescue storage.",
    process: [
      "Broke the rescue context into detection, flotation, oxygen support, propulsion, and storage needs.",
      "Separated the product into visible modules so each emergency function can be understood quickly.",
      "Used exploded presentation to communicate complex structure without losing the overall object identity."
    ],
    pages: pageRange(29, 37),
    pdfRange: "PDF pages 29-37"
  },
  {
    id: "05",
    title: "Orbit Rover Space Cleaner",
    category: "Space equipment / modular robotics",
    description:
      "A modular space-debris cleaning robot that combines net capture, laser clearing, and robotic-arm recovery.",
    image: pageImage(44),
    tags: ["System design", "Prototype making", "Scenario flow"],
    layout: "standard",
    year: "2026",
    role: "Future mobility system / robotics concept / prototype presentation",
    tools: "Rhino, KeyShot, physical prototype, layout design",
    challenge:
      "Orbital debris requires a cleaning system that can respond to different debris sizes without relying on one fixed mechanism.",
    outcome:
      "The Orbit Rover concept uses modular capture, laser, robotic arm, and propulsion systems to cover multiple space-cleaning scenarios.",
    process: [
      "Framed the orbital debris problem through risk size, future growth, and cleaning difficulty.",
      "Built a process flow for launch, capture, debris breakdown, recovery, and reset.",
      "Presented both prototype-making logic and final detail systems to make the speculative product feel credible."
    ],
    pages: pageRange(38, 49),
    pdfRange: "PDF pages 38-49"
  },
  {
    id: "06",
    title: "Modular Music Controller",
    category: "Consumer electronics / music creation",
    description:
      "A next-generation music creation terminal with magnetic modules, AI guidance, app control, packaging, and use scenes.",
    image: pageImage(55),
    tags: ["Modular hardware", "AI interaction", "Packaging system"],
    layout: "standard",
    year: "2026",
    role: "Consumer electronics / interaction hardware / product storytelling",
    tools: "Rhino, KeyShot, UI layout, packaging presentation",
    challenge:
      "Music controllers often force users into fixed layouts, making live performance and creation less flexible across scenarios.",
    outcome:
      "The final system combines magnetic modules, AI-assisted mixing, app interfaces, packaging, and lifestyle scenes into one product family.",
    process: [
      "Defined the product around DJ, electronic music, and live performance use cases.",
      "Developed modular hardware details including knobs, dials, magnetic supports, and recording accessories.",
      "Extended the design into app screens, packaging, video-script flow, and user-scene boards."
    ],
    pages: pageRange(50, 65),
    pdfRange: "PDF pages 50-65"
  },
  {
    id: "07",
    title: "Modular Smart HiFi Speaker",
    category: "Home audio / modular furniture object",
    description:
      "A bamboo-inspired HiFi speaker system balancing modular storage, acoustic presence, and home-space integration.",
    image: pageImage(70),
    tags: ["HiFi audio", "Module storage", "Eastern CMF"],
    layout: "standard",
    year: "2026",
    role: "Home product / CMF exploration / structural presentation",
    tools: "Rhino, KeyShot, physical mockup, detail layout",
    challenge:
      "Traditional HiFi speakers can feel heavy, static, and disconnected from flexible home scenarios.",
    outcome:
      "The project turns the speaker into a modular furniture-like object with bamboo-inspired surfaces, visible structure, and adaptable storage.",
    process: [
      "Set design goals around modular assembly, space adaptation, HiFi quality, and home integration.",
      "Explored sketches, physical scale models, acoustic structure, and bamboo-form references.",
      "Detailed the final product through scene renders, structural logic, ports, controls, and dimensions."
    ],
    pages: pageRange(66, 77),
    pdfRange: "PDF pages 66-77"
  },
  {
    id: "08",
    title: "Other Works & Commercial Projects",
    category: "Sketching / commercial landing / visual work",
    description:
      "A compact chapter collecting hand drawing, visual design, commercial projects, computer cases, and car-culture work.",
    image: pageImage(81),
    tags: ["Sketching", "Commercial design", "Visual portfolio"],
    layout: "wide",
    year: "2026",
    role: "Commercial project support / visual design / sketch presentation",
    tools: "Sketching, Rhino, Photoshop, presentation layout",
    challenge:
      "Portfolio side work needs to show breadth without breaking the rhythm of the main product-design chapters.",
    outcome:
      "The final chapter works as a compressed archive of drawing ability, landed projects, computer cases, car visuals, and modification parts.",
    process: [
      "Grouped side projects by drawing, landed commercial work, computer hardware, graphic culture, and automotive parts.",
      "Kept the pages image-forward so viewers can scan capability quickly.",
      "Used the chapter as a closing proof of versatility beyond the seven main product concepts."
    ],
    pages: pageRange(78, 84),
    pdfRange: "PDF pages 78-84"
  }
];

const strengths = [
  {
    title: "User insight to product form",
    copy:
      "I like turning interviews and behavior clues into objects that feel useful, intuitive, and memorable."
  },
  {
    title: "Strong visual storytelling",
    copy:
      "Presentation boards, hero renders, and project narratives are built to feel launch-ready, not like classroom leftovers."
  },
  {
    title: "Confident 3D execution",
    copy:
      "From proportion studies to refined modeling and render polishing, I care about the craft behind every surface."
  },
  {
    title: "System-level design mindset",
    copy:
      "I do not stop at one object. I think in scenarios, components, interactions, and the full product ecosystem."
  }
];

const contactLinks = [
  { label: "Email", value: "yucongzhng@gmail.com", href: "mailto:yucongzhng@gmail.com" },
  { label: "Phone", value: "13402821334", href: "tel:13402821334" },
  { label: "Xiaohongshu", value: "ZYC-13402821334", href: "#" },
  { label: "GitHub", value: "yucongzhng-arch", href: "https://github.com/yucongzhng-arch" }
];

function App() {
  const [activeHash, setActiveHash] = useState(() => window.location.hash);
  const activeProject = projects.find((project) => activeHash === `#/project/${project.id}`);

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="frame topbar__inner">
          <a className="brand" href="#home">
            <span className="brand__mark">YZ</span>
            <span className="brand__text">Product Design Portfolio</span>
          </a>

          <nav className="nav" aria-label="Primary">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button--ghost" href="#contact">
            Contact
          </a>
        </div>
      </header>

      {activeProject ? (
        <ProjectDetail project={activeProject} />
      ) : (
      <main>
        <section className="hero" id="home">
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            poster={asset("/images/cover-metal.png")}
          >
            <source src={asset("/videos/hero-loop.webm")} type="video/webm" />
          </video>

          <div className="hero__overlay" />
          <div className="hero__grid" />

          <div className="frame hero__content">
            <div className="hero__copy">
              <p className="eyebrow">Portfolio 2026 / Product Designer / Acid-tech direction</p>
              <h1>
                Yucong
                <span>Zhng</span>
              </h1>
              <p className="hero__lead">
                Designing products that balance visual sharpness, functional logic,
                and a stronger emotional presence in use.
              </p>

              <div className="hero__actions">
                <a className="button" href="#projects">
                  View Selected Work
                </a>
                <a className="text-link" href="mailto:yucongzhng@gmail.com">
                  yucongzhng@gmail.com
                </a>
              </div>
            </div>

            <aside className="hero__art" aria-label="Portfolio cover preview">
              <div className="hero__art-image">
                <img src={asset("/images/cover-metal.png")} alt="Portfolio cover artwork" />
              </div>

              <div className="hero__art-copy">
                <span>Industrial Design</span>
                <span>Mobility Futures</span>
                <span>Wearable Rehab</span>
                <span>Product Systems</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="profile">
          <div className="frame profile">
            <div className="profile__visual">
              <div className="profile__portrait">
                <img src={asset("/images/profile-team.jpg")} alt="Yucong Zhng portrait" />
              </div>
              <div className="profile__badge">
                <span>Product Designer</span>
                <span>Based in Zhejiang</span>
              </div>
            </div>

            <div className="profile__content">
              <div className="section-head">
                <p className="eyebrow">About / Experience</p>
                <h2>Designing physical products with story, structure, and clarity.</h2>
              </div>

              <p className="profile__bio">
                I am Yucong Zhng, a product design student focused on building
                meaningful objects with strong form language and clear user value.
                My portfolio moves across assistive products, mobility concepts,
                public safety systems, and music devices while staying rooted in
                research, modeling, and presentation craft.
              </p>

              <div className="profile__experience">
                {experience.map((item) => (
                  <article className="experience-item" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>

              <div className="profile__contacts">
                {contactLinks.map((item) => (
                  <a key={item.label} href={item.href} className="contact-chip">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </a>
                ))}
              </div>

              <div className="stats-grid">
                {stats.map((item) => (
                  <div className="stat-card" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="frame">
            <div className="section-head section-head--split">
              <div>
                <p className="eyebrow">Selected Projects</p>
                <h2>Large-format work samples shaped for a more editorial web experience.</h2>
              </div>
              <p className="section-note">
                Rebuilt from the source PDF sequence: 8 project chapters and
                every portfolio page from PDF page 05 to page 84.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <a
                  className={`project-card project-card--${project.layout}`}
                  href={`#/project/${project.id}`}
                  key={project.id}
                  aria-label={`Open ${project.title} detail page`}
                >
                  <img src={asset(project.image)} alt={project.title} loading="lazy" />
                  <div className="project-card__overlay" />
                  <div className="project-card__content">
                    <span className="project-card__id">{project.id}</span>
                    <p className="project-card__category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="project-card__description">{project.description}</p>
                    <div className="project-card__tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <span className="project-card__cta">
                      Open {project.pages.length} pages
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="strengths">
          <div className="frame">
            <div className="section-head">
              <p className="eyebrow">Strengths</p>
              <h2>My edge is where concept, execution, and presentation lock together.</h2>
            </div>

            <div className="strengths-grid">
              {strengths.map((strength, index) => (
                <article className="strength-card" key={strength.title}>
                  <span className="strength-card__index">0{index + 1}</span>
                  <h3>{strength.title}</h3>
                  <p>{strength.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="outro" id="contact">
          <div className="frame outro__content">
            <p className="eyebrow">Final Contact</p>
            <h2>Let&apos;s build the next object people remember.</h2>
            <p className="outro__lead">
              Open to internships, collaborative projects, and product work that
              needs stronger form, clearer storytelling, and a sharper design point of view.
            </p>

            <div className="outro__links">
              {contactLinks.map((item) => (
                <a className="outro-link" key={item.label} href={item.href}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      )}
    </div>
  );
}

function ProjectDetail({ project }) {
  const currentIndex = projects.findIndex((item) => item.id === project.id);
  const previousProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [project.id]);

  return (
    <main className="project-detail">
      <section className="project-detail__hero">
        <div className="frame project-detail__hero-grid">
          <div className="project-detail__intro">
            <a className="detail-back" href="#projects">
              Back to selected work
            </a>
            <p className="eyebrow">{project.id} / {project.category}</p>
            <h1>{project.title}</h1>
            <p className="project-detail__lead">{project.description}</p>

            <div className="project-detail__tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="project-detail__media">
            <img src={asset(project.image)} alt={project.title} />
          </div>
        </div>
      </section>

      <section className="project-detail__body">
        <div className="frame project-detail__content">
          <aside className="project-detail__meta">
            <div>
              <span>Year</span>
              <strong>{project.year}</strong>
            </div>
            <div>
              <span>Role</span>
              <strong>{project.role}</strong>
            </div>
            <div>
              <span>Tools</span>
              <strong>{project.tools}</strong>
            </div>
            <div>
              <span>PDF Pages</span>
              <strong>
                {project.pdfRange} · {project.pages.length} pages
              </strong>
            </div>
          </aside>

          <div className="project-detail__story">
            <article>
              <p className="eyebrow">Challenge</p>
              <h2>{project.challenge}</h2>
            </article>

            <article>
              <p className="eyebrow">Outcome</p>
              <p>{project.outcome}</p>
            </article>

            <article>
              <p className="eyebrow">Process</p>
              <div className="detail-steps">
                {project.process.map((step, index) => (
                  <div className="detail-step" key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="project-detail__pages">
        <div className="frame project-pages__head">
          <div>
            <p className="eyebrow">Original PDF Pages</p>
            <h2>Complete project pages following the portfolio layout.</h2>
          </div>
          <p>
            This section restores the missing source pages in order:
            {" "}
            {project.pdfRange}.
          </p>
        </div>

        <div className="frame project-pages">
          {project.pages.map((page, index) => (
            <figure className="portfolio-page" key={page}>
              <img
                src={asset(pageImage(page))}
                alt={`${project.title} portfolio page ${String(page).padStart(2, "0")}`}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
              />
              <figcaption>
                <span>PDF PAGE {String(page).padStart(2, "0")}</span>
                <strong>{project.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="project-detail__nav">
        <div className="frame project-detail__nav-grid">
          <a href={`#/project/${previousProject.id}`}>
            <span>Previous</span>
            <strong>{previousProject.title}</strong>
          </a>
          <a href={`#/project/${nextProject.id}`}>
            <span>Next</span>
            <strong>{nextProject.title}</strong>
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
