import React from "react";
import Link from "next/link";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#tech-stack", label: "Technologies" },
  { href: "/#work-experiences", label: "Experience" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
];

const Nav = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={open ? "menu-open" : ""}>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link href="/">
            <a className="brand" onClick={() => setOpen(false)}>
              <span className="monogram">HJ</span>
              <span>Haroon Jawad</span>
            </a>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            {LINKS.map((l) => (
              <Link href={l.href} key={l.href}>
                <a>{l.label}</a>
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <Link href="/chat">
              <a className="btn btn-primary btn-sm">Talk to my AI 🤖</a>
            </Link>
          </div>

          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className="mobile-menu" onClick={() => setOpen(false)}>
        {LINKS.map((l) => (
          <Link href={l.href} key={l.href}>
            <a>{l.label}</a>
          </Link>
        ))}
        <Link href="/chat">
          <a className="btn btn-primary">Talk to my AI assistant 🤖</a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
