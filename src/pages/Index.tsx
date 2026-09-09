import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Network,
  ServerCog,
  ShieldCheck,
  Terminal,
  TestTube2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import softwareResume from "@/assets/resume-software-engineer.pdf.asset.json";
import testingResume from "@/assets/resume-software-test-engineer.pdf.asset.json";

const external = { target: "_blank", rel: "noreferrer" } as const;

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Engineering", href: "#engineering" },
  { label: "Testing", href: "#testing" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
];

const principles = [
  ["01", "Build for reliability.", "Design systems that remain predictable under failure and change."],
  ["02", "Automate the repeatable.", "Use pipelines, infrastructure-as-code and automation to remove manual drift."],
  ["03", "Test before production finds the bug.", "Combine UI, API and regression testing with disciplined test design."],
  ["04", "Design for scale.", "Think about architecture, performance, availability, observability and cost."],
  ["05", "Keep systems understandable.", "Prefer clean abstractions, maintainable code and documentation over complexity."],
];

const domains = [
  {
    index: "01",
    icon: ServerCog,
    title: "Backend Engineering",
    tools: "Java · Spring MVC · Go · REST APIs · Python · Microservices",
    focus: "Reliable APIs, backend services and maintainable service architecture.",
  },
  {
    index: "02",
    icon: Terminal,
    title: "DevOps & Infrastructure",
    tools: "Linux · Docker · Git · CI/CD · GitHub Actions",
    focus: "Reproducible environments, deployment workflows and operational consistency.",
  },
  {
    index: "03",
    icon: Cloud,
    title: "Cloud Engineering",
    tools: "AWS · EC2 · RDS · Lambda · DynamoDB · VPC",
    focus: "Cloud architecture understood through deployment, scaling, security and operation.",
  },
  {
    index: "04",
    icon: Network,
    title: "System Design",
    tools: "APIs · Databases · Caching · Scalability · Reliability",
    focus: "Architecture shaped by real-world constraints, not technology trends.",
  },
  {
    index: "05",
    icon: TestTube2,
    title: "Software Quality",
    tools: "Selenium · TestNG · PyTest · Postman · Regression",
    focus: "Automated validation and maintainable test frameworks for backend systems.",
  },
];

const projects = [
  {
    number: "01",
    title: "Paper Trading Platform",
    label: "Backend systems · QA & automation",
    problem: "A real-time trading backend needs reliable order execution, portfolio state and P&L calculations.",
    approach: "Engineered a Python-based platform with API assertions and regression coverage around the core trading flows.",
    architecture: "API endpoints → order execution → portfolio state → P&L computation → WebSocket updates",
    technology: "Python · PyTest · Postman · AWS EC2/RDS · PostgreSQL · WebSockets",
    evidence: ["Automated Postman collections with scripted assertions", "PyTest regression coverage for WebSocket updates and trading logic"],
  },
  {
    number: "02",
    title: "Restaurant Management Platform",
    label: "Full-stack system · Test automation",
    problem: "A restaurant workflow spans authentication, customer ordering, administration and live order state.",
    approach: "Built and validated a full-stack platform with JWT-authenticated flows, REST APIs and real-time order updates.",
    architecture: "Client → JWT auth → REST API → order and menu data → admin dashboard → live updates",
    technology: "React.js · Node.js/Express · MongoDB · Java · Selenium · TestNG",
    evidence: ["Selenium regression suite for login, ordering and admin workflows", "Structured test cases for JWT-authenticated flows and real-time updates"],
  },
  {
    number: "03",
    title: "Pathfinding Algorithm Visualizer",
    label: "Algorithms · Functional testing",
    problem: "Algorithm visualizations must make complex pathfinding behavior correct, observable and easy to inspect.",
    approach: "Implemented and functionally tested A*, Dijkstra, BFS and DFS modes with real-time animation logic.",
    architecture: "Grid input → algorithm state → animation steps → rendered path",
    technology: "React.js · JavaScript · A* · Dijkstra · BFS · DFS",
    evidence: ["Verified algorithm modes through structured manual and functional testing", "Tracked edge cases across animation rendering and UI responsiveness"],
  },
];

const experiences = [
  {
    period: "Jul 2023 — Aug 2024",
    role: "Backend Developer",
    company: "ConsenSys · Remote",
    details: [
      "Built and validated Golang REST APIs integrated with Web3.js and Ethereum networks.",
      "Contributed to Solidity smart contract development across ERC-20 and ERC-721 standards.",
      "Used Postman for manual endpoint verification and functional correctness before deployment.",
    ],
  },
  {
    period: "Jan 2021 — Mar 2021",
    role: "Backend Software Developer Intern",
    company: "LearnMall · Remote",
    details: [
      "Developed modular Java applications using Spring MVC and JDBC.",
      "Applied object-oriented design and unit-level validation practices to maintainable application code.",
    ],
  },
];

const certifications = [
  "AWS Certified Solutions Architect — Associate",
  "Software Testing & QA Automation",
  "Infosys Spring MVC Certification",
  "Meta Metaverse & AR/VR Developer Certification",
  "Business Intelligence Specialization — Coursera",
  "AI 10X Program — Prompt Engineering & Generative AI",
];

const resumeOptions = [
  {
    number: "01",
    title: "Software Engineer",
    focus: "Backend Engineering · Java · Go · APIs · Microservices · System Design · Cloud",
    description: "Backend-focused software engineering with emphasis on scalable APIs, distributed systems, clean architecture and production-oriented development.",
    url: softwareResume.url,
    download: "resume-software-engineer.pdf",
  },
  {
    number: "02",
    title: "DevOps & Cloud Engineer",
    focus: "DevOps · AWS · Linux · Docker · CI/CD · Infrastructure as Code · Cloud Computing",
    description: "Engineering-focused DevOps and cloud profile centered on automation, infrastructure, deployment reliability and scalable cloud environments.",
    pending: true,
  },
  {
    number: "03",
    title: "Software Test Engineer",
    focus: "Selenium · WebDriver · Java · TestNG · Python · PyTest · Postman · API Testing",
    description: "Software Test Engineer focused on maintainable UI and API automation, structured regression suites and reliable backend validation.",
    url: testingResume.url,
    download: "resume-software-test-engineer.pdf",
  },
];

const SectionIntro = ({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) => (
  <div className="section-intro">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {copy && <p className="section-copy">{copy}</p>}
  </div>
);

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="site-shell">
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <a className="wordmark" href="#top" aria-label="Sajal Swapnil home">SS<span>.</span></a>
        <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <div className="nav-actions">
            <a href="https://github.com/Sajal-12" {...external}>GitHub <ArrowUpRight size={14} /></a>
            <a href={softwareResume.url} {...external}>Resume <ArrowUpRight size={14} /></a>
            <a href="mailto:sajalvictorious83@gmail.com">Contact <ArrowUpRight size={14} /></a>
          </div>
        </nav>
        <Button variant="ghost" size="icon" className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </header>

      <section id="top" className="hero-section page-section">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> Software Engineer · DevOps · Cloud · Quality Engineering</p>
          <h1>Engineering reliable systems from <em>code</em> to <em>production.</em></h1>
          <p className="hero-lede">Software engineer focused on backend systems, cloud infrastructure, DevOps automation, system design and software quality. I build practical solutions designed to be scalable, observable, testable and maintainable.</p>
          <div className="hero-actions">
            <Button asChild size="lg"><a href="#work">View Engineering Work <ArrowDownRight size={16} /></a></Button>
            <Button asChild variant="outline" size="lg"><a href="https://github.com/Sajal-12" {...external}><Github size={16} /> GitHub</a></Button>
          </div>
          <p className="hero-meta">Based in Hajipur, Bihar, India <span>·</span> Open to thoughtful engineering problems</p>
        </div>
        <div className="hero-aside" aria-label="Engineering focus">
          <div className="hero-aside-line" />
          <p>01 / 05</p>
          <strong>Systems thinking<br />with an operator’s mindset.</strong>
          <span>Java · Go · Python<br />AWS · Linux · Docker<br />CI/CD · Testing</span>
        </div>
      </section>

      <section id="about" className="page-section philosophy-section">
        <SectionIntro eyebrow="01 — Engineering Philosophy" title="The work starts before the code." copy="I focus on understanding the problem first, designing the system second, and choosing technology based on the constraints." />
        <div className="principles-list">
          {principles.map(([number, title, copy]) => (
            <article className="principle-row" key={number}>
              <span className="mono-label">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="engineering" className="page-section tinted-section">
        <SectionIntro eyebrow="02 — What I Engineer" title="Five disciplines. One engineering practice." copy="A practical toolkit across backend development, infrastructure, cloud architecture, systems thinking and quality engineering." />
        <div className="domain-grid">
          {domains.map(({ index, icon: Icon, title, tools, focus }) => (
            <article className="domain-item" key={title}>
              <div className="domain-top"><span className="mono-label">{index}</span><Icon size={18} strokeWidth={1.5} /></div>
              <h3>{title}</h3>
              <p className="domain-tools">{tools}</p>
              <p>{focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section infrastructure-section">
        <div className="split-heading"><SectionIntro eyebrow="03 — DevOps & Infrastructure" title="Make delivery repeatable." copy="The engineering problems matter more than the tool list: automating application delivery, containerizing applications, creating reproducible environments and making deployment consistency visible." /><span className="section-index">03</span></div>
        <div className="pipeline" aria-label="Code to monitoring delivery pipeline">
          {["Code", "Build", "Test", "Package", "Deploy", "Monitor"].map((step, index) => (
            <div className="pipeline-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < 5 && <ChevronRight size={14} />}</div>
          ))}
        </div>
        <div className="capability-line"><span>Linux · Docker · Git · GitHub Actions · AWS · CI/CD</span><span>Automate <ArrowUpRight size={14} /> Operate</span></div>
      </section>

      <section className="page-section cloud-section tinted-section">
        <div className="cloud-layout">
          <SectionIntro eyebrow="04 — Cloud Engineering" title="Understand the path from deploy to operate." copy="Practical AWS knowledge grounded in architecture, deployment and the trade-offs that shape reliable cloud environments. No inflated production claims — just clear engineering fundamentals." />
          <div className="cloud-services">
            {["EC2", "S3", "RDS", "Lambda", "DynamoDB", "VPC", "CloudFormation"].map((service) => <span key={service}>{service}</span>)}
          </div>
        </div>
        <div className="cloud-flow"><span>Deploy</span><ChevronRight size={16} /><span>Scale</span><ChevronRight size={16} /><span>Secure</span><ChevronRight size={16} /><span>Automate</span><ChevronRight size={16} /><span>Operate</span></div>
      </section>

      <section className="page-section system-section">
        <SectionIntro eyebrow="05 — System Design" title="Think beyond the individual code file." copy="I use system design to make trade-offs explicit: API shape, data ownership, caching, load, failure, authentication and observability." />
        <div className="architecture" aria-label="Client to API gateway to services to cache and database architecture">
          <div className="architecture-node architecture-node--client"><span>01</span><strong>Client</strong><small>Web / mobile</small></div>
          <div className="architecture-connector" />
          <div className="architecture-node"><span>02</span><strong>API Gateway</strong><small>Auth · rate limit</small></div>
          <div className="architecture-connector" />
          <div className="architecture-node architecture-node--accent"><span>03</span><strong>Services</strong><small>Domain logic</small></div>
          <div className="architecture-connector" />
          <div className="architecture-node"><span>04</span><strong>Data layer</strong><small>Cache · database</small></div>
        </div>
        <div className="system-topics">API design <span>·</span> Microservices <span>·</span> Caching <span>·</span> Fault tolerance <span>·</span> Availability <span>·</span> Observability <span>·</span> Async processing</div>
      </section>

      <section id="testing" className="page-section testing-section tinted-section">
        <SectionIntro eyebrow="06 — Software Test Engineering" title="Quality is part of the system." copy="Software Test Engineer with hands-on experience in automated UI testing using Selenium WebDriver with Java/TestNG and Python/pytest, alongside structured API test automation with Postman." />
        <div className="testing-grid">
          <article><div className="icon-marker"><ShieldCheck size={19} /></div><h3>Test Automation</h3><p>Selenium WebDriver · TestNG · PyTest · Postman collections and assertions · API testing · Regression testing</p></article>
          <article><div className="icon-marker"><Check size={19} /></div><h3>Testing Practices</h3><p>Manual testing · Test case design · Bug tracking and reporting · Functional testing · Smoke testing · Regression testing</p></article>
        </div>
        <div className="testing-note"><TestTube2 size={18} /><span>Automation over repetitive manual validation.</span></div>
      </section>

      <section id="work" className="page-section work-section">
        <SectionIntro eyebrow="07 — Selected Engineering Work" title="Evidence over adjectives." copy="Projects from the current engineering and testing resumes. Each one is framed around the problem, approach and verifiable technical evidence." />
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-entry" key={project.title}>
              <div className="project-number mono-label">{project.number}</div>
              <div className="project-content">
                <p className="eyebrow">{project.label}</p><h3>{project.title}</h3>
                <div className="project-story"><div><span>Problem</span><p>{project.problem}</p></div><div><span>Engineering approach</span><p>{project.approach}</p></div></div>
                <p className="project-architecture"><Terminal size={15} /> {project.architecture}</p>
                <p className="project-tech">{project.technology}</p>
                <ul>{project.evidence.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
              </div>
              <ArrowUpRight className="project-arrow" size={21} />
            </article>
          ))}
        </div>
      </section>

      <section className="page-section experience-section tinted-section">
        <SectionIntro eyebrow="08 — Experience" title="Shipping, validating, learning." />
        <div className="experience-list">
          {experiences.map((experience) => <article className="experience-row" key={experience.company}><div className="experience-period">{experience.period}</div><div><h3>{experience.role}</h3><p className="experience-company">{experience.company}</p><ul>{experience.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div></article>)}
        </div>
      </section>

      <section className="page-section skills-section">
        <SectionIntro eyebrow="09 — Technical Matrix" title="A compact view of the toolkit." />
        <div className="skills-matrix">
          {["Languages|Java · Go · Python · JavaScript · TypeScript · SQL", "Backend|REST APIs · Microservices · JWT · Event-driven systems", "Cloud|AWS · EC2 · RDS · Lambda · DynamoDB · VPC · Auto Scaling", "Databases|PostgreSQL · MongoDB · DynamoDB", "Tools|Git · GitHub · Docker · CI/CD · Postman · VS Code", "Blockchain|Solidity · Ethereum · Web3.js · ERC-20 / ERC-721"].map((item) => { const [label, value] = item.split("|"); return <div className="skill-row" key={label}><span>{label}</span><strong>{value}</strong></div>; })}
        </div>
      </section>

      <section className="page-section resume-section tinted-section">
        <SectionIntro eyebrow="10 — Resume" title="Three focused versions. One engineering foundation." copy="Choose the profile that best matches the problem you are hiring to solve." />
        <div className="resume-grid">
          {resumeOptions.map((resume) => <article className={`resume-option ${resume.pending ? "resume-option--pending" : ""}`} key={resume.title}><div className="resume-top"><span className="mono-label">{resume.number}</span>{resume.pending && <span className="pending-label">PDF pending</span>}</div><h3>{resume.title}</h3><p className="resume-focus">{resume.focus}</p><p>{resume.description}</p><div className="resume-actions">{resume.url ? <><Button asChild size="sm"><a href={resume.url} {...external}>View Resume <ExternalLink size={14} /></a></Button><Button asChild size="sm" variant="ghost"><a href={resume.url} download={resume.download}>Download PDF <Download size={14} /></a></Button></> : <Button size="sm" variant="outline" disabled>Awaiting DevOps PDF</Button>}</div></article>)}
        </div>
      </section>

      <section id="writing" className="page-section activity-section">
        <div className="activity-grid">
          <div><SectionIntro eyebrow="11 — Engineering Activity" title="Build, document, contribute." copy="The current resume records 100+ GitHub repositories and 300+ contributions. This is a provided snapshot, not a live API count." /><Button asChild variant="outline"><a href="https://github.com/Sajal-12" {...external}>Explore GitHub <Github size={15} /></a></Button></div>
          <div className="activity-stat"><strong>100<span>+</span></strong><p>GitHub repositories</p><strong>300<span>+</span></strong><p>GitHub contributions</p></div>
        </div>
        <div className="writing-row"><div><p className="eyebrow">Writing & Engineering Notes</p><h3>Documenting technical ideas with the same care used to build them.</h3></div><Button asChild variant="ghost"><a href="https://medium.com/@sajalvictorious83" {...external}>Read on Medium <ArrowUpRight size={15} /></a></Button></div>
      </section>

      <section className="page-section contact-section">
        <div className="contact-layout"><SectionIntro eyebrow="12 — Contact" title="Have a system worth thinking through?" copy="Reach out for engineering conversations, collaboration or roles across software engineering, DevOps, cloud and quality engineering." /><div className="contact-actions"><Button asChild size="lg"><a href="mailto:sajalvictorious83@gmail.com"><Mail size={16} /> Start a conversation</a></Button><div className="social-links"><a href="https://www.linkedin.com/in/sajal-swapnil-a93a741ba" {...external}>LinkedIn <ArrowUpRight size={14} /></a><a href="https://github.com/Sajal-12" {...external}>GitHub <ArrowUpRight size={14} /></a><a href="https://portfolio-sajal.lovable.app/" {...external}>Previous portfolio <ArrowUpRight size={14} /></a></div></div></div>
      </section>

      <footer className="site-footer"><span>© {new Date().getFullYear()} Sajal Swapnil</span><span>Software Engineer · DevOps · Cloud · Quality Engineering</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></footer>
    </main>
  );
};

export default Index;