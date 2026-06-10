import React from "react";
import Link from "next/link";

import TerminalHero from "@components/TerminalHero";
import { FloatingChatWidget } from "./chat";

import {
  SiReact,
  SiNextdotjs,
  SiKubernetes,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFirebase,
  SiGraphql,
  SiPostgresql,
  SiOpenai,
  SiPython,
  SiLangchain,
  SiN8N,
} from "react-icons/si";

const experiences = [
  {
    title: "Senior Full Stack Engineer",
    company: "PrivateID",
    date: "Sep 2022 – Present",
    link: "https://privateid.com/",
    caption:
      "Integrating Machine Learning models into ID verification workflows, enhancing system efficiency and accuracy. Built a configurable rules builder that lets users customize verification workflows to their exact requirements — significantly expanding the product's capabilities in secure identity verification.",
  },
  {
    title: "React Developer",
    company: "Atentiv LLC",
    date: "Sep 2021 – Sep 2022",
    link: "https://www.linkedin.com/company/atentiv-llc",
    caption:
      "Built and managed a comprehensive Patient Management Portal with React, TypeScript and Material UI — serving patients, caregivers, physicians and admins. Created interactive D3.js data visualizations as reusable React components, powering the platform's analytics.",
  },
  {
    title: "JavaScript Developer",
    company: "Jslytics",
    date: "Mar 2020 – Sep 2021",
    link: "https://www.jslytics.com",
    caption:
      "Implemented server-side tracking with Google Tag Manager, developing custom JavaScript variables to transform data before it reached analytics platforms. Integrated enterprise web applications with HubSpot, Salesforce and other marketing stacks for precise data tracking.",
  },
  {
    title: "Fullstack JavaScript Developer",
    company: "Independent Contractor",
    date: "Sep 2019 – Mar 2021",
    link: "https://www.upwork.com",
    caption:
      "Delivered ~40 projects for clients worldwide across healthcare, ecommerce and edtech — earning Top Rated Plus status on Upwork with a 100% Job Success Score, using JavaScript, TypeScript, React, Node.js, Next.js, Firebase and MongoDB.",
  },
];

const testimonials = [
  {
    quote:
      "Haroon is a great UI/UX developer. He has worked well with our distributed teams to build out the world's best ADHD digital therapeutic solution. Without his knowledge and creativity we would never have been as successful.",
    name: "Shane Robinett",
    role: "CTO, Atentiv LLC",
    img: "/shane-robinett.jpg",
  },
  {
    quote:
      "Haroon does excellent work and looks for alternative solutions. He is a great team player and has a positive attitude. I highly recommend him.",
    name: "Joe Rensin",
    role: "CEO, Bondbury",
    img: "/joe.webp",
  },
  {
    quote:
      "Great freelancer, thanks so much! Great communication and delivery.",
    name: "Jason Spanomanolis",
    role: "CEO, Jslytics",
    img: "/jason.jpeg",
  },
];

const Home = (): JSX.Element => {
  const stacks = React.useMemo(
    () => [
      { Icon: SiReact, url: "https://reactjs.org/", title: "React" },
      { Icon: SiNextdotjs, url: "https://nextjs.org/", title: "Next.js" },
      {
        Icon: SiTypescript,
        url: "https://www.typescriptlang.org/",
        title: "TypeScript",
      },
      { Icon: SiNodedotjs, url: "https://nodejs.org/", title: "Node.js" },
      { Icon: SiOpenai, url: "https://openai.com/", title: "OpenAI" },
      {
        Icon: SiLangchain,
        url: "https://www.langchain.com/",
        title: "LangChain",
      },
      { Icon: SiPython, url: "https://www.python.org/", title: "Python" },
      { Icon: SiMongodb, url: "https://mongodb.com/", title: "MongoDB" },
      {
        Icon: SiPostgresql,
        url: "https://www.postgresql.org/",
        title: "PostgreSQL",
      },
      { Icon: SiGraphql, url: "https://graphql.org/", title: "GraphQL" },
      { Icon: SiExpress, url: "https://expressjs.com/", title: "Express.js" },
      {
        Icon: SiFirebase,
        url: "https://firebase.google.com/",
        title: "Firebase",
      },
      {
        Icon: SiKubernetes,
        url: "https://kubernetes.io/",
        title: "Kubernetes",
      },
      { Icon: SiN8N, url: "https://n8n.io/", title: "n8n" },
      {
        Icon: SiJavascript,
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        title: "JavaScript",
      },
      {
        Icon: SiHtml5,
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        title: "HTML5",
      },
      {
        Icon: SiCss3,
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        title: "CSS3",
      },
    ],
    [],
  );

  // scroll reveals
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <FloatingChatWidget />

      {/* ============================== HERO ============================== */}
      <section className="hero" id="about">
        <div className="wrap hero-grid">
          <div className="hero-left">
            <TerminalHero />
          </div>
          <div className="hero-right">
            <span className="kicker">Open to interesting problems</span>
            <h1>
              I build web platforms <br />
              and <span className="grad">AI agents</span> that ship.
            </h1>
            <p className="lede">
              Senior Full Stack Engineer &amp; AI Applications Developer —
              React, Node and TypeScript on one end; LangChain, LangGraph, RAG
              and agentic systems on the other.
            </p>
            <div className="btn-row">
              <Link href="/chat">
                <a className="btn btn-primary">Talk to my AI assistant ⚡</a>
              </Link>
              <a className="btn btn-ghost" href="mailto:haroonjawad6@gmail.com">
                Contact me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== ABOUT ============================= */}
      <section className="section alt">
        <div className="wrap">
          <div className="about-grid">
            <div className="portrait-card reveal">
              <div className="portrait-glow" />
              <div className="portrait-frame">
                <img src="/me.jpeg" alt="Haroon Jawad" />
                <div className="portrait-name">
                  <strong>Haroon Jawad</strong>
                  <span>● available for select projects</span>
                </div>
              </div>
            </div>
            <div className="about-copy reveal">
              <div className="section-head">
                <div className="s-kicker">about</div>
                <h2>Engineer first. AI-native by practice.</h2>
              </div>
              <p>
                I&apos;m a Senior Full Stack Engineer with deep experience
                building <strong>scalable web platforms</strong> and{" "}
                <strong>intelligent systems</strong>. My work spans both ends of
                the stack — React, Node.js, MongoDB and SQL — as well as
                advanced AI integrations using OpenAI, LangChain, LangGraph and
                Retrieval-Augmented Generation.
              </p>
              <p>
                My specialty is <strong>agentic AI</strong>: autonomous systems
                that reason, plan and take action — from LLM-powered assistants
                to AI woven into real-world workflows, wrapped in robust,
                production-grade APIs.
              </p>
              <p>
                I&apos;ve shipped for startups, healthcare platforms,
                ML-integrated identity verification tools and analytics
                dashboards — and I&apos;m a Top Rated Plus developer on Upwork.
              </p>
              <div className="stat-strip">
                <div className="stat">
                  <div className="num">6+</div>
                  <div className="lbl">Years of engineering</div>
                </div>
                <div className="stat">
                  <div className="num">40+</div>
                  <div className="lbl">Projects delivered</div>
                </div>
                <div className="stat">
                  <div className="num">100%</div>
                  <div className="lbl">Job Success · Top Rated Plus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== TECHNOLOGIES ========================= */}
      <section className="section" id="tech-stack">
        <div className="wrap">
          <div className="section-head center reveal">
            <div className="s-kicker">stack</div>
            <h2>Technologies I work with daily</h2>
            <p className="sub">
              The toolkit behind everything I ship — from pixel to pipeline to
              prompt.
            </p>
          </div>
          <div className="tech-grid reveal">
            {stacks.map(({ Icon, url, title }) => (
              <a
                className="tech-chip"
                href={url}
                key={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* @ts-ignore */}
                <Icon size="1.35rem" />
                <span>{title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ EXPERIENCE ========================== */}
      <section className="section alt" id="work-experiences">
        <div className="wrap">
          <div className="section-head center reveal">
            <div className="s-kicker">experience</div>
            <h2>Where I&apos;ve built things</h2>
          </div>
          <div className="xp-list">
            {experiences.map((xp, i) => (
              <div className="xp-item reveal" key={xp.company}>
                <div className="xp-index">0{i + 1}</div>
                <div className="xp-card">
                  <div className="xp-top">
                    <h3>
                      <a
                        href={xp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {xp.title} · <span className="xp-co">{xp.company}</span>
                      </a>
                    </h3>
                    <span className="xp-date">{xp.date}</span>
                  </div>
                  <p>{xp.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== TESTIMONIALS ========================= */}
      <section className="section" id="testimonials">
        <div className="wrap">
          <div className="section-head center reveal">
            <div className="s-kicker">signal</div>
            <h2>What people say after we ship</h2>
          </div>
          <div className="t-grid">
            {testimonials.map((t) => (
              <div className="t-card reveal" key={t.name}>
                <p className="t-quote">{t.quote}</p>
                <div className="t-person">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= CONTACT ============================ */}
      <section className="section" id="contact" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="contact-band reveal">
            <span className="t-mono">$ haroon.contact --priority high</span>
            <h2>Let&apos;s build something intelligent.</h2>
            <p>
              A million people know how to code. Far fewer listen carefully,
              follow up promptly, hit deadlines, and explain the work without
              jargon. I aim to be both — strong execution, easy collaboration.
            </p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <a
                className="btn btn-primary"
                href="mailto:haroonjawad6@gmail.com"
              >
                👋 Say hello
              </a>
              <Link href="/chat">
                <a className="btn btn-ghost">Ask my AI assistant instead</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
