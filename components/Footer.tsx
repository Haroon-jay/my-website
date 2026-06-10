import React from "react";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdMail } from "react-icons/md";

const Footer = (): JSX.Element => (
  <footer className="site-footer">
    <div className="wrap footer-inner">
      <div className="footer-links">
        <Link href="/#about">
          <a>About</a>
        </Link>
        <Link href="/#tech-stack">
          <a>Technologies</a>
        </Link>
        <Link href="/#work-experiences">
          <a>Experience</a>
        </Link>
        <Link href="/chat">
          <a>AI Assistant</a>
        </Link>
        <a href="mailto:haroonjawad6@gmail.com">Contact</a>
      </div>
      <div className="footer-social">
        <a
          href="https://github.com/haroon-jay"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          {/* @ts-ignore */}
          <SiGithub size={20} />
        </a>
        <a href="mailto:haroonjawad6@gmail.com" aria-label="Email">
          {/* @ts-ignore */}
          <MdMail size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/haroon-jawad-7942151ba/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          {/* @ts-ignore */}
          <SiLinkedin size={20} />
        </a>
      </div>
      <div className="footer-copy">
        <span className="t-mono">haroon@ai ~ % </span>©{" "}
        {new Date().getFullYear()} Haroon Jawad — built with Next.js, designed
        to feel like the future.
      </div>
    </div>
  </footer>
);

export default Footer;
