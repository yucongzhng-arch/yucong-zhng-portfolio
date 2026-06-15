const navigation = [
  { label: "Home", href: "#home" },
  { label: "Profile", href: "#profile" },
  { label: "Projects", href: "#projects" },
  { label: "Strengths", href: "#strengths" },
  { label: "Contact", href: "#contact" }
];

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
    title: "Wearable Assistive Training Device",
    category: "Healthy aging / wearable product",
    description:
      "A muscle-support concept that blends rehabilitation, daily exercise, and safer movement for older users.",
    image: "/images/project-assistive.png",
    tags: ["User research", "Structure design", "Aging-friendly"],
    layout: "wide"
  },
  {
    id: "02",
    title: "Mitsubishi Concept Racing Boat",
    category: "Brand language / mobility concept",
    description:
      "An angular speedboat proposal extending Mitsubishi's visual language into a lightweight competitive form.",
    image: "/images/project-racing-boat.png",
    tags: ["CMF direction", "Aerodynamic styling", "Concept storytelling"],
    layout: "standard"
  },
  {
    id: "03",
    title: "Integrated Roof Camp System",
    category: "Outdoor mobility / product system",
    description:
      "An SUV-mounted camping concept focused on fast deployment, compact integration, and stronger scene value.",
    image: "/images/project-camper.png",
    tags: ["Scenario design", "Product ecosystem", "3D presentation"],
    layout: "standard"
  },
  {
    id: "04",
    title: "Ocean Safety Island",
    category: "Emergency equipment / public safety",
    description:
      "A modular rescue proposal combining flotation, AI monitoring, and underwater assistance into one safety system.",
    image: "/images/project-safety-island.png",
    tags: ["System thinking", "Exploded view", "Public service"],
    layout: "wide"
  },
  {
    id: "05",
    title: "Origin Discovery Deck",
    category: "Consumer electronics / sound experience",
    description:
      "A modular music device with nostalgic cues, tactile controls, and a stronger emotional connection to audio playback.",
    image: "/images/project-origin-deck.png",
    tags: ["CMF", "Detail design", "Interface-object blend"],
    layout: "standard"
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

      <main>
        <section className="hero" id="home">
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/cover-metal.png"
          >
            <source src="/videos/hero-loop.webm" type="video/webm" />
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

            <aside className="hero__panel">
              <div className="hero__panel-image">
                <img src="/images/cover-metal.png" alt="Portfolio cover artwork" />
              </div>

              <div className="hero__panel-copy">
                <p>Industrial Design</p>
                <p>Mobility Futures</p>
                <p>Wearable Rehab</p>
                <p>Product Systems</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="profile">
          <div className="frame profile">
            <div className="profile__visual">
              <div className="profile__portrait">
                <img src="/images/portrait.png" alt="Yucong Zhng portrait" />
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
                Built from the existing portfolio pages, then reframed for faster
                browsing, stronger impact, and clearer project differentiation.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article
                  className={`project-card project-card--${project.layout}`}
                  key={project.id}
                >
                  <img src={project.image} alt={project.title} loading="lazy" />
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
                  </div>
                </article>
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
    </div>
  );
}

export default App;
