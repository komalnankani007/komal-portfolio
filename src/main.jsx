import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowRight,
  AtSign,
  BriefcaseBusiness,
  Check,
  Code2,
  Download,
  ExternalLink,
  MapPin,
  Menu,
  Sparkles,
  X,
  Zap,
  Layers3,
  Gauge,
  ShieldCheck,
  Bot
} from "lucide-react";
import './styles.css';

const email = 'komalnankani007@gmail.com';
const linkedIn = 'https://www.linkedin.com/in/komal-nankani-177891162/';

const experience = [
  {
    role: 'Sr. Software Engineer — Frontend',
    company: 'Schneider Electric',
    location: 'Bengaluru, India',
    dates: 'Sep 2023 — Present',
    current: true,
    accent: 'green',
    points: [
      <>Architected component-driven experiences with <b>React, Stencil JS and Java</b>, using code splitting, lazy loading and bundle optimization to reduce bundle size by <b>30%+</b>.</>,
      <>Led a cross-functional team of <b>6 developers</b>, building reusable UI components and strengthening code quality through reviews and linting.</>,
      <>Implemented structured metadata and AEO/SEO improvements to help make UI content more discoverable.</>,
      <>Supported reliable releases through AWS and Docker/Jenkins CI/CD workflows.</>
    ],
    tags: ['React', 'Stencil JS', 'Performance', 'AWS', 'CI/CD']
  },
  {
    role: 'Sr. Software Engineer — Frontend',
    company: 'Cardinal Health International',
    location: 'Bengaluru, India',
    dates: 'Jul 2022 — Sep 2023',
    accent: 'blue',
    points: [
      <>Architected and maintained large-scale React applications and reusable component libraries connected to REST APIs.</>,
      <>Raised unit-test coverage to <b>85%+</b> with Jest and React Testing Library.</>,
      <>Resolved critical production UI issues, improving stability and responsiveness within Agile sprints.</>
    ],
    tags: ['React', 'REST APIs', 'Jest', 'React Testing Library']
  },
  {
    role: 'Software Engineer',
    company: 'Cardinal Health International',
    location: 'Bengaluru, India',
    dates: 'Sep 2020 — Jun 2022',
    accent: 'purple',
    points: [
      <>Built responsive, accessible web applications with React, Angular and Java, following <b>WCAG 2.1</b> guidelines.</>,
      <>Improved frontend performance with lazy loading, memoization and asset compression.</>,
      <>Partnered with backend engineers to integrate Java/Spring Boot services through REST APIs.</>
    ],
    tags: ['React', 'Angular', 'Accessibility', 'Java', 'Spring Boot']
  },
  {
    role: 'Full Stack Intern',
    company: 'Mscripts System India',
    location: 'India',
    dates: 'Jan 2020 — Aug 2020',
    accent: 'orange',
    points: [
      <>Built a Job Scheduler dashboard using React.js and Material UI for real-time task monitoring and internal team workflows.</>,
      <>Implemented end-to-end CRUD flows for managing organizational tasks.</>
    ],
    tags: ['React', 'Material UI', 'Dashboard', 'CRUD']
  }
];

const capabilities = [
  { icon: Layers3, title: 'UI architecture', text: 'Reusable component systems, scalable frontend patterns and maintainable interfaces.' },
  { icon: Gauge, title: 'Performance engineering', text: 'Bundle optimization, lazy loading, memoization and Core Web Vitals awareness.' },
  { icon: ShieldCheck, title: 'Quality & accessibility', text: 'Testable UI, Jest, React Testing Library and WCAG-aware implementation.' },
  { icon: Bot, title: 'AI-enabled workflows', text: 'Practical use of AI development tools and growing expertise in RAG and agentic AI.' }
];

const skillGroups = [
  { label: 'Frontend engineering', skills: ['React.js', 'Angular', 'Svelte.js', 'Stencil.js', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3'] },
  { label: 'Performance & quality', skills: ['Core Web Vitals', 'Code splitting', 'Lazy loading', 'Jest', 'React Testing Library', 'Unit & integration testing', 'WCAG 2.1'] },
  { label: 'Cloud & delivery', skills: ['AWS', 'Docker', 'Jenkins', 'CI/CD', 'Git', 'GitHub', 'Kafka'] },
  { label: 'Backend & AI tools', skills: ['Java', 'Spring Boot', 'REST APIs', 'GitHub Copilot', 'Builder.io', 'Claude', 'OpenAI', 'Google Gemini'] }
];

const projects = [
  {
    number: '01',
    type: 'ENTERPRISE UI · PERFORMANCE',
    title: 'High-performance web experiences',
    description: 'Component-driven pages designed for global users, with a focus on load performance, maintainability and reusable UI patterns.',
    impact: '30%+ smaller bundles',
    stack: ['React', 'Stencil JS', 'Code splitting', 'Lazy loading'],
    icon: Gauge
  },
  {
    number: '02',
    type: 'QUALITY ENGINEERING',
    title: 'Reliable React application suite',
    description: 'Expanded automated UI coverage and supported stable production releases across a large-scale React application.',
    impact: '85%+ test coverage',
    stack: ['React', 'Jest', 'React Testing Library', 'REST APIs'],
    icon: ShieldCheck
  },
  {
    number: '03',
    type: 'INTERNAL TOOLING',
    title: 'Job Scheduler dashboard',
    description: 'A dashboard for internal teams to monitor organizational tasks in real time and manage them through complete CRUD workflows.',
    impact: 'Real-time task monitoring',
    stack: ['React.js', 'Material UI', 'CRUD', 'Dashboard UX'],
    icon: Code2
  }
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const close = () => setMenuOpen(false);
  return <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
    <a className="brand" href="#home" onClick={close} aria-label="Komal Nankani home"><span className="brand-mark">K<span>.</span></span><span className="brand-name">KOMAL NANKANI</span></a>
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={21}/> : <Menu size={21}/>}</button>
    <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
      <a href="#about" onClick={close}>About</a><a href="#experience" onClick={close}>Experience</a><a href="#work" onClick={close}>Selected work</a><a href="#skills" onClick={close}>Skills</a>
      <a className="nav-contact" href="#contact" onClick={close}>Let's talk <ArrowUpRight size={15}/></a>
    </nav>
  </header>;
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Performance', 'Quality', 'Product UI'];
  const visibleProjects = projects.filter((p) => activeFilter === 'All' ||
    (activeFilter === 'Performance' && p.number === '01') ||
    (activeFilter === 'Quality' && p.number === '02') ||
    (activeFilter === 'Product UI' && p.number === '03'));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <><Header />
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"></span> SENIOR FRONTEND DEVELOPER <span className="eyebrow-line"></span> 6+ YEARS</div>
            <h1>Building interfaces<br/>that feel <span className="headline-accent">effortless.</span></h1>
            <p className="hero-intro">I’m Komal — a frontend engineer focused on scalable UI architecture, thoughtful user experiences and performance that holds up in production.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a>
              <a className="button button-ghost" href="/Komal_Nankani_CV.pdf" download>Download résumé <Download size={16}/></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={14}/> Bengaluru, India</span>
              <span className="meta-divider"></span>
              <a href={linkedIn} target="_blank" rel="noreferrer"><ExternalLink size={14}/> LinkedIn <ArrowUpRight size={12}/></a>
              <a href={`mailto:${email}`}><AtSign size={14}/> Email me</a>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative frontend engineering illustration">
            <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
            <div className="art-core"><div className="core-glow"></div><span className="core-k">K<span>.</span></span><span className="core-caption">FRONTEND / ENGINEERING</span></div>
            <div className="float-card card-code"><span className="mini-dot"></span><span>component.tsx</span><Code2 size={15}/><div className="code-lines"><i></i><i></i><i></i><i></i></div></div>
            <div className="float-card card-speed"><Zap size={16}/><div><strong>30%+</strong><small>bundle reduction</small></div></div>
            <div className="float-card card-stack"><span className="stack-symbol">{"{ }"}</span><div><strong>Clean by design</strong><small>Reusable. Tested. Scalable.</small></div></div>
            <div className="art-label label-top">CRAFT / 001</div><div className="art-label label-bottom">BUILT FOR PEOPLE</div>
          </div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-line"></div><span className="mono">UI ENGINEERING · 2026</span></div>
      </section>

      <section className="intro-strip">
        <div className="section-wrap strip-inner"><span className="strip-label">MY APPROACH</span><p>Good frontend engineering is more than pixels — <em>it’s clarity, speed, accessibility and systems that scale.</em></p><ArrowDownRight className="strip-arrow" size={28}/></div>
      </section>

      <section className="section-wrap section-pad" id="about">
        <div className="section-heading reveal"><div className="section-index">01 / ABOUT</div><h2>Engineer the details.<br/><span className="muted-heading">Never lose the big picture.</span></h2></div>
        <div className="about-grid">
          <div className="about-copy reveal"><p className="lead">I turn complex product requirements into polished, production-ready interfaces.</p><p>With 6+ years across enterprise software and internal tools, I work at the intersection of component architecture, UI performance and product usability. I enjoy making complicated experiences feel straightforward — for the people using them and the teams maintaining them.</p><p>My day-to-day spans React and Angular development, API integration, automated testing, accessibility, and dependable delivery with cloud-based CI/CD workflows.</p><a className="text-link" href={linkedIn} target="_blank" rel="noreferrer">More on LinkedIn <ArrowUpRight size={16}/></a></div>
          <div className="about-side reveal"><div className="profile-card"><div className="profile-top"><span className="profile-avatar">KN</span><span className="availability"><span className="status-dot"></span> OPEN TO THE RIGHT OPPORTUNITY</span></div><h3>Komal Nankani</h3><p>Senior Frontend Developer</p><div className="profile-rule"></div><div className="profile-facts"><div><span>BASED IN</span><b>Bengaluru, India</b></div><div><span>CORE FOCUS</span><b>React · Angular · UI Systems</b></div><div><span>EDUCATION</span><b>B.Tech, Computer Science</b></div></div></div>
            <div className="stat-row"><div className="stat"><strong>6<span>+</span></strong><small>Years building</small></div><div className="stat"><strong>30<span>%+</span></strong><small>Bundle reduction</small></div><div className="stat"><strong>85<span>%+</span></strong><small>Test coverage</small></div></div>
          </div>
        </div>
        <div className="capabilities">
          {capabilities.map((item, i) => <article className="capability reveal" key={item.title}><div className="cap-icon"><item.icon size={19}/></div><span className="cap-number">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <section className="experience-section" id="experience"><div className="section-wrap section-pad">
        <div className="section-heading reveal"><div className="section-index">02 / EXPERIENCE</div><h2>Built through real work.<br/><span className="muted-heading">Shaped by collaboration.</span></h2><p className="heading-note">A career centered on dependable interfaces, better performance and teams that ship with confidence.</p></div>
        <div className="timeline">{experience.map((job, i) => <article className={`timeline-item reveal ${job.accent}`} key={job.company + job.dates}><div className="timeline-marker"><span>{String(i+1).padStart(2,'0')}</span></div><div className="timeline-card"><div className="job-top"><div><div className="job-company">{job.company} {job.current && <span className="current-tag">CURRENT</span>}</div><h3>{job.role}</h3><div className="job-location"><MapPin size={13}/>{job.location}</div></div><div className="job-date">{job.dates}</div></div><ul>{job.points.map((point, idx) => <li key={idx}><span className="bullet"></span><span>{point}</span></li>)}</ul><div className="tag-row">{job.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </div></section>

      <section className="section-wrap section-pad" id="work">
        <div className="section-heading work-heading reveal"><div className="section-index">03 / SELECTED WORK</div><h2>Problems solved.<br/><span className="muted-heading">Outcomes delivered.</span></h2><p className="heading-note">A few representative case studies based on my professional experience. Some work is enterprise or internal, so public demos aren't available.</p></div>
        <div className="filter-row reveal" role="group" aria-label="Filter selected work">{filters.map(f => <button className={activeFilter === f ? 'filter active' : 'filter'} onClick={() => setActiveFilter(f)} key={f}>{f}</button>)}</div>
        <div className="project-grid">{visibleProjects.map((p) => <article className="project-card reveal" key={p.number}><div className="project-top"><span className="project-number">{p.number}</span><span className="project-type">{p.type}</span><div className="project-icon"><p.icon size={21}/></div></div><h3>{p.title}</h3><p className="project-description">{p.description}</p><div className="project-impact"><span>KEY OUTCOME</span><strong>{p.impact}</strong></div><div className="tag-row">{p.stack.map(s => <span className="tag" key={s}>{s}</span>)}</div></article>)}</div>
      </section>

      <section className="skills-section" id="skills"><div className="section-wrap section-pad">
        <div className="section-heading reveal"><div className="section-index">04 / TOOLKIT</div><h2>Tools for thoughtful<br/><span className="muted-heading">frontend engineering.</span></h2></div>
        <div className="skills-layout"><div className="skills-intro reveal"><div className="skill-orb"><Code2 size={33}/><span></span></div><p className="lead">A practical toolkit for building interfaces that are fast, resilient and easy to evolve.</p><p>I go deepest on frontend systems, and collaborate across APIs, testing and deployment to bring features all the way to production.</p></div><div className="skill-groups">{skillGroups.map((group, i) => <div className="skill-group reveal" key={group.label}><div className="skill-group-head"><span className="mono">0{i+1}</span><h3>{group.label}</h3><ArrowUpRight size={15}/></div><div className="skill-pills">{group.skills.map(skill => <span className="skill-pill" key={skill}>{skill}</span>)}</div></div>)}</div></div>
      </div></section>

      <section className="section-wrap section-pad education-section">
        <div className="section-heading reveal"><div className="section-index">05 / LEARNING</div><h2>Strong foundations.<br/><span className="muted-heading">Always learning.</span></h2></div>
        <div className="learning-grid">
          <article className="education-card reveal"><div className="education-icon"><BriefcaseBusiness size={19}/></div><div><span className="card-kicker">EDUCATION · 2020</span><h3>B.Tech — Computer Science & Engineering</h3><p>CMR Institute of Technology, Bangalore</p><span className="gpa">GPA 8.01</span></div></article>
          <article className="education-card cert-card reveal"><div className="education-icon"><Sparkles size={19}/></div><div><span className="card-kicker">CERTIFICATIONS</span><h3>Continued learning</h3><div className="cert-list"><span>React.js</span><span>Artificial Intelligence</span><span>AWS</span><span>RAG & Agentic AI</span><span>Agentic AI with LangGraph & LangChain</span></div></div></article>
        </div>
      </section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="section-index reveal">06 / CONTACT</div><div className="contact-main reveal"><div><span className="contact-kicker"><span className="status-dot"></span> HAVE A ROLE OR IDEA IN MIND?</span><h2>Let’s build something<br/><span>meaningful.</span></h2><p>I’m always happy to talk about frontend engineering, product challenges and opportunities to make digital experiences better.</p><a className="button button-primary contact-button" href={`mailto:${email}?subject=${encodeURIComponent('Let’s connect — Frontend opportunity')}`}>Start a conversation <ArrowUpRight size={17}/></a></div><div className="contact-links"><a href={`mailto:${email}`}><span className="contact-link-icon"><AtSign size={18}/></span><span><small>EMAIL</small><b>{email}</b></span><ArrowUpRight size={17}/></a><a href={linkedIn} target="_blank" rel="noreferrer"><span className="contact-link-icon"><ExternalLink size={18}/></span><span><small>LINKEDIN</small><b>Connect professionally</b></span><ArrowUpRight size={17}/></a><a href="/Komal_Nankani_CV.pdf" download><span className="contact-link-icon"><Download size={18}/></span><span><small>RÉSUMÉ</small><b>Download PDF</b></span><ArrowUpRight size={17}/></a></div></div><footer className="footer"><a className="brand" href="#home"><span className="brand-mark">K<span>.</span></span><span className="brand-name">KOMAL NANKANI</span></a><span>Designed with intention. Built for the web.</span><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={13}/></a><span className="copyright">© {new Date().getFullYear()} KOMAL NANKANI</span></footer></div></section>
    </main>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
