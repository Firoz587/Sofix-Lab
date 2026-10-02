import { useState } from "react"
import sohagPortrait from "./assets/sohag-hossain.jpg"

type IconName = "arrow" | "brand" | "brochure" | "check" | "close" | "code" | "cover" | "email" | "menu" | "pen" | "play" | "social" | "spark"

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    brand: (
      <>
        <path d="m12 3 7 4v8l-7 4-7-4V7l7-4Z" />
        <path d="m9 9 6 6m0-6-6 6" />
      </>
    ),
    brochure: (
      <>
        <path d="M4 5h16v14H4z" />
        <path d="M9 5v14m6-14v14" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    code: (
      <>
        <path d="m8 8-4 4 4 4m8-8 4 4-4 4" />
        <path d="m14 5-4 14" />
      </>
    ),
    cover: (
      <>
        <path d="M6 4h11a2 2 0 0 1 2 2v14H8a2 2 0 0 1-2-2V4Z" />
        <path d="M6 17a3 3 0 0 1 3-3h10" />
      </>
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    pen: (
      <>
        <path d="m4 20 4-1 10-10-3-3L5 16l-1 4Z" />
        <path d="m13 8 3 3" />
      </>
    ),
    play: <path d="m9 7 8 5-8 5V7Z" />,
    social: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </>
    ),
    spark: (
      <>
        <path d="m12 2 1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2Z" />
        <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      {paths[name]}
    </svg>
  )
}

const services = [
  {
    icon: "brand" as IconName,
    title: "Branding Design",
    text: "Complete brand identity and visual systems.",
    href: "#branding",
  },
  {
    icon: "pen" as IconName,
    title: "Logo Design",
    text: "Unique logos that speak your story.",
    href: "#logo",
  },
  {
    icon: "email" as IconName,
    title: "Email Signature",
    text: "Professional and modern email signatures.",
    href: "#email",
  },
  {
    icon: "spark" as IconName,
    title: "Manual Vector",
    text: "Clean, high-quality vector artwork.",
    href: "#vector",
  },
  {
    icon: "cover" as IconName,
    title: "Cover Design",
    text: "Social media and digital cover designs.",
    href: "#cover",
  },
  {
    icon: "brochure" as IconName,
    title: "Brochure Design",
    text: "Creative business and product brochures.",
    href: "#brochure",
  },
]

const projects = [
  {
    id: "branding",
    category: "Branding",
    title: "Nexa Tech",
    image:
      "https://images.unsplash.com/photo-1718670013988-c6e3edb92345?auto=format&fit=crop&w=1100&q=88",
  },
  {
    id: "logo",
    category: "Logo Design",
    title: "Volterra",
    image:
      "https://images.unsplash.com/photo-1702479744120-98fffb81bf6d?auto=format&fit=crop&w=1100&q=88",
  },
  {
    id: "email",
    category: "Email Signature",
    title: "Rafiq Hassan",
    image:
      "https://images.unsplash.com/photo-1516131206008-dd041a9764fd?auto=format&fit=crop&w=1100&q=88",
  },
  {
    id: "vector",
    category: "Manual Vector",
    title: "Wild Spirit",
    image:
      "https://images.unsplash.com/flagged/photo-1562597021-bae50de4d586?auto=format&fit=crop&w=1100&q=88",
  },
  {
    id: "cover",
    category: "Cover Design",
    title: "The Next Chapter",
    image:
      "https://images.unsplash.com/photo-1576289412237-698ae5427f27?auto=format&fit=crop&w=1100&q=88",
  },
  {
    id: "brochure",
    category: "Brochure",
    title: "Zeno Creative",
    image:
      "https://images.unsplash.com/photo-1747405415037-5bb499d262e0?auto=format&fit=crop&w=1100&q=88",
  },
]

const filters = [
  "All",
  "Branding",
  "Logo Design",
  "Email Signature",
  "Cover Design",
  "Brochure",
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="site">
      <header className="header">
        <a className="logo" href="#home" aria-label="Sofix Lab home">
          <img className="logo-image" src="/sofix-logo.jpg" alt="" />
          <span>
            <strong>Sofix Lab</strong>
            <small>Creative design studio</small>
          </span>
        </a>
        <nav
          className={menuOpen ? "nav nav-open" : "nav"}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#process" onClick={() => setMenuOpen(false)}>
            Process
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
        <a
          className="outline-button header-cta"
          href="https://www.facebook.com/profile.php?id=61593928644809"
          target="_blank"
          rel="noreferrer"
        >
          Facebook Page <Icon name="arrow" />
        </a>
        <button
          className="menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>

      <main>
        <section className="hero dark-section" id="home">
          <div className="hero-glow" />
          <div className="hero-copy">
            <p className="eyebrow">Creative design studio</p>
            <h1>
              Ideas into
              <br />
              <span>Visual</span> Stories.
            </h1>
            <p className="hero-description">
              I&apos;m Sohag Hossain, the founder & CEO of Sofix Lab. I create
              modern and impactful designs that help brands stand out, connect
              with people, and grow.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#work">
                View My Work <Icon name="arrow" />
              </a>
              <a className="outline-button" href="#about">
                <span className="play-icon">
                  <Icon name="play" />
                </span>
                About Me
              </a>
            </div>
            <div className="stats">
              <div>
                <strong>5+</strong>
                <span>Years Experience</span>
              </div>
              <div>
                <strong>100+</strong>
                <span>Projects Completed</span>
              </div>
              <div>
                <strong>50+</strong>
                <span>Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="hero-art">
            <div className="blue-shape" />
            <img
              src={sohagPortrait}
              alt="Sohag Hossain, founder and creative director of Sofix Lab"
            />
          </div>
        </section>

        <section className="services light-section" id="services">
          <div className="services-intro">
            <p className="eyebrow blue">What I do</p>
            <h2>
              Design <span>Services</span>
            </h2>
            <p>
              From brand identity to digital assets, I provide creative
              solutions that make your brand unique and memorable.
            </p>
            <a className="dark-button" href="#work">
              View All Services <Icon name="arrow" />
            </a>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <a
                className="service-card"
                href={service.href}
                key={service.title}
              >
                <span className="service-icon">
                  <Icon name={service.icon} />
                </span>
                <Icon name="arrow" />
                <strong>{service.title}</strong>
                <p>{service.text}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="portfolio dark-section" id="work">
          <div className="section-title">
            <div>
              <p className="eyebrow blue">Featured works</p>
              <h2>
                Selected
                <br />
                Projects
              </h2>
            </div>
            <a href="#contact">
              View All Projects <Icon name="arrow" />
            </a>
          </div>
          <div className="filters" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                className={activeFilter === filter ? "filter active" : "filter"}
                onClick={() => setActiveFilter(filter)}
                key={filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article
                className="project-card"
                id={project.id}
                key={project.id}
              >
                <img
                  src={project.image}
                  alt={`${project.title} ${project.category} project`}
                />
                <div className="project-overlay">
                  <span>{project.category}</span>
                  <strong>{project.title}</strong>
                  <a
                    href="#contact"
                    aria-label={`Discuss a project like ${project.title}`}
                  >
                    <Icon name="arrow" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about light-section" id="about">
          <div className="about-image">
            <div className="about-shape" />
            <img
              src={sohagPortrait}
              alt="Sohag Hossain, founder of Sofix Lab"
            />
          </div>
          <div className="about-copy">
            <p className="eyebrow blue">About Sofix Lab</p>
            <h2>
              Turning Ideas Into
              <br />
              Visual Experiences
            </h2>
            <p>
              I&apos;m Sohag Hossain, the founder & CEO of Sofix Lab, a creative
              studio focused on graphic design, branding and visual
              storytelling. With 5+ years of experience, I help businesses build
              strong identities and create designs that connect with people.
            </p>
            <div className="about-facts">
              <div>
                <Icon name="spark" />
                <span>
                  <strong>5+</strong>
                  Years Experience
                </span>
              </div>
              <div>
                <Icon name="brand" />
                <span>
                  <strong>100+</strong>
                  Projects Completed
                </span>
              </div>
              <div>
                <Icon name="check" />
                <span>
                  <strong>50+</strong>
                  Happy Clients
                </span>
              </div>
            </div>
            <a className="dark-button" href="#contact">
              More About Me <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section className="process dark-section" id="process">
          <div className="process-intro">
            <p className="eyebrow blue">My process</p>
            <h2>How I Work</h2>
            <p>
              A simple and effective process to turn your ideas into stunning
              designs.
            </p>
          </div>
          <div className="process-steps">
            {[
              ["01", "Brief", "Understand your needs & goals", "email"],
              ["02", "Concept", "Explore ideas & creative direction", "spark"],
              ["03", "Design", "Bring the concept to life", "pen"],
              [
                "04",
                "Delivery",
                "Final files in all formats & support",
                "arrow",
              ],
            ].map(([number, title, text, icon]) => (
              <article key={number}>
                <span className="step-icon">
                  <Icon name={icon as IconName} />
                </span>
                <small>{number}</small>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="why light-section">
          <div className="why-copy">
            <h2>Why Choose Sofix Lab?</h2>
            <p>
              I focus on quality, clear communication and results. Every project
              is handled with care, creativity and a commitment to your
              brand&apos;s success.
            </p>
            <a className="dark-button" href="#contact">
              Get Started <Icon name="arrow" />
            </a>
          </div>
          <div className="why-grid">
            {[
              [
                "spark",
                "Creative Quality",
                "Clean, modern and purposeful designs.",
              ],
              ["email", "On-Time Delivery", "Your time matters."],
              ["brand", "Client Focused", "Your success is my priority."],
              [
                "arrow",
                "Affordable Pricing",
                "Great design, accessible rates.",
              ],
            ].map(([icon, title, text]) => (
              <article key={title}>
                <Icon name={icon as IconName} />
                <span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </span>
              </article>
            ))}
          </div>
          <div className="why-note">Good design creates value.</div>
        </section>

        <section className="testimonials dark-section">
          <div className="section-title compact">
            <div>
              <p className="eyebrow blue">Testimonials</p>
              <h2>What Clients Say</h2>
            </div>
          </div>
          <div className="testimonial-grid">
            {[
              [
                "Sofix Lab delivered exactly what we needed. The design was clean, modern and super professional.",
                "Rafiq Islam",
                "Founder, Zero",
              ],
              [
                "Amazing work! Very creative and professional. Highly recommend for any design project.",
                "Tania Akter",
                "Marketing Manager",
              ],
              [
                "The communication was smooth and the result exceeded our expectations. Will work again!",
                "Nahid Hasan",
                "Business Owner",
              ],
            ].map(([quote, name, role]) => (
              <article key={name}>
                <p>&ldquo;{quote}&rdquo;</p>
                <div>
                  <span>{name.charAt(0)}</span>
                  <p>
                    <strong>{name}</strong>
                    <small>{role}</small>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact light-section" id="contact">
          <div>
            <p className="eyebrow blue">Let&apos;s work together</p>
            <h2>Have a project in mind?</h2>
            <p>Let&apos;s create something amazing together.</p>
            <a className="primary-button" href="tel:+8801304014118">
              Call Sohag <Icon name="arrow" />
            </a>
          </div>
          <div className="contact-details">
            <p>
              <span>Name</span>
              Sohag Hossain
            </p>
            <p>
              <span>Phone</span>
              <a href="tel:+8801304014118">01304-014118</a>
            </p>
            <p>
              <span>Facebook Page</span>
              <a
                href="https://www.facebook.com/profile.php?id=61593928644809"
                target="_blank"
                rel="noreferrer"
              >
                Visit Sohag Hossain on Facebook
              </a>
            </p>
          </div>
          <div className="contact-art">
            Your Vision.
            <br />
            My Design.
          </div>
        </section>
      </main>

      <footer>
        <a className="logo" href="#home">
          <img className="logo-image" src="/sofix-logo.jpg" alt="" />
          <span>
            <strong>Sofix Lab</strong>
            <small>Design · Brand · Impact</small>
          </span>
        </a>
        <nav aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#work">Works</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <span>© 2026 Sofix Lab. All rights reserved.</span>
      </footer>
    </div>
  )
}
