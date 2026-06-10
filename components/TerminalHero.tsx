import React from "react";
import { useRouter } from "next/router";

type Line = {
  kind: "cmd" | "out" | "ok" | "info" | "err";
  text: string;
};

const BOOT: Line[] = [
  { kind: "cmd", text: "whoami" },
  {
    kind: "out",
    text: "Haroon Jawad — Senior Full Stack Engineer · AI Applications",
  },
  { kind: "cmd", text: "agent.boot()" },
  { kind: "ok", text: "stack loaded: React · Next.js · Node · TypeScript" },
  {
    kind: "ok",
    text: "ai loaded: OpenAI · LangChain · LangGraph · RAG · CrewAI",
  },
  {
    kind: "ok",
    text: "memory: 40+ projects — healthcare · fintech · identity",
  },
  { kind: "cmd", text: "agent.reputation()" },
  { kind: "out", text: "Upwork Top Rated Plus · 100% Job Success Score" },
  { kind: "cmd", text: "agent.status()" },
  { kind: "info", text: "● online — ready to build with you" },
  { kind: "out", text: "type 'help' to explore →" },
];

const TYPE_MS = 34;
const OUT_DELAY = 350;
const CMD_PAUSE = 420;

const HELP: Line[] = [
  { kind: "out", text: "available commands:" },
  { kind: "out", text: "  about         who is this guy" },
  { kind: "out", text: "  stack         technologies I use" },
  { kind: "out", text: "  experience    where I've built things" },
  { kind: "out", text: "  testimonials  what people say" },
  { kind: "out", text: "  contact       get in touch" },
  { kind: "out", text: "  chat          talk to my AI assistant" },
  { kind: "out", text: "  hire          the important one" },
  { kind: "out", text: "  clear         clean the screen" },
];

const TerminalHero = (): JSX.Element => {
  const router = useRouter();
  const [lineIdx, setLineIdx] = React.useState(0);
  const [charIdx, setCharIdx] = React.useState(0);
  const [history, setHistory] = React.useState<Line[]>([]);
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const bodyRef = React.useRef<HTMLDivElement>(null);
  const done = lineIdx >= BOOT.length;

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mq.matches) setLineIdx(BOOT.length);
    }
  }, []);

  React.useEffect(() => {
    if (done) return;
    const line = BOOT[lineIdx];
    let timer: ReturnType<typeof setTimeout>;
    if (line.kind === "cmd") {
      if (charIdx < line.text.length) {
        timer = setTimeout(() => setCharIdx((c) => c + 1), TYPE_MS);
      } else {
        timer = setTimeout(() => {
          setLineIdx((l) => l + 1);
          setCharIdx(0);
        }, CMD_PAUSE);
      }
    } else {
      timer = setTimeout(() => {
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      }, OUT_DELAY);
    }
    return () => clearTimeout(timer);
  }, [lineIdx, charIdx, done]);

  // keep scrolled to the latest line
  React.useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lineIdx, history]);

  const scrollTo = (id: string): void => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const run = (raw: string): void => {
    const cmd = raw.trim().toLowerCase();
    const echo: Line = { kind: "cmd", text: raw };
    const push = (...lines: Line[]): void =>
      setHistory((h) => [...h, echo, ...lines]);

    if (!cmd) return;
    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    if (cmd === "help" || cmd === "ls" || cmd === "?") {
      push(...HELP);
    } else if (cmd === "about" || cmd === "whoami") {
      push({ kind: "ok", text: "scrolling to about…" });
      scrollTo("about");
    } else if (cmd === "stack" || cmd === "tech" || cmd === "skills") {
      push({ kind: "ok", text: "scrolling to technologies…" });
      scrollTo("tech-stack");
    } else if (cmd === "experience" || cmd === "work" || cmd === "xp") {
      push({ kind: "ok", text: "scrolling to experience…" });
      scrollTo("work-experiences");
    } else if (cmd === "testimonials" || cmd === "reviews") {
      push({ kind: "ok", text: "scrolling to testimonials…" });
      scrollTo("testimonials");
    } else if (cmd === "contact" || cmd === "email" || cmd === "hello") {
      push({ kind: "ok", text: "opening mail client…" });
      window.location.href = "mailto:haroonjawad6@gmail.com";
    } else if (cmd === "chat" || cmd === "ai" || cmd === "assistant") {
      push({ kind: "ok", text: "launching AI assistant…" });
      router.push("/chat");
    } else if (cmd === "hire" || cmd === "hire haroon") {
      push(
        { kind: "ok", text: "excellent decision. preparing email…" },
        { kind: "info", text: "● response time: usually < 24h" },
      );
      window.location.href =
        "mailto:haroonjawad6@gmail.com?subject=Let%27s%20work%20together";
    } else if (cmd.startsWith("sudo")) {
      push({
        kind: "info",
        text: "permission granted. you clearly know what you're doing — try 'hire'.",
      });
    } else if (cmd === "coffee" || cmd === "brew") {
      push({ kind: "out", text: "☕ brewing… fuel for the next deploy." });
    } else if (cmd === "exit" || cmd === "quit") {
      push({ kind: "out", text: "nice try. this agent doesn't quit." });
    } else {
      push({
        kind: "err",
        text: `command not found: ${cmd} — try 'help'`,
      });
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    }
  };

  const focusInput = (): void => {
    if (!done) {
      setLineIdx(BOOT.length);
      setCharIdx(0);
    } else if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const visible: { line: Line; partial?: string }[] = [];
  for (let i = 0; i < Math.min(lineIdx + 1, BOOT.length); i++) {
    const line = BOOT[i];
    if (i < lineIdx) visible.push({ line });
    else if (line.kind === "cmd")
      visible.push({ line, partial: line.text.slice(0, charIdx) });
  }

  return (
    <div className="terminal" onClick={focusInput}>
      <div className="terminal-bar">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="t-title">haroon@ai — zsh</span>
        <span className="t-skip">
          {done ? "interactive — type 'help'" : "click to skip"}
        </span>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {visible.map(({ line, partial }, i) => {
          const isCurrent = partial !== undefined;
          if (line.kind === "cmd") {
            return (
              <div className="t-line" key={`b${i}`}>
                <span className="t-prompt">haroon@ai ~ %</span>
                <span className="t-cmd">{isCurrent ? partial : line.text}</span>
                {isCurrent && <span className="t-caret" />}
              </div>
            );
          }
          return (
            <div className={`t-line t-${line.kind}`} key={`b${i}`}>
              {line.text}
            </div>
          );
        })}
        {done &&
          history.map((line, i) => {
            if (line.kind === "cmd") {
              return (
                <div className="t-line" key={`h${i}`}>
                  <span className="t-prompt">haroon@ai ~ %</span>
                  <span className="t-cmd">{line.text}</span>
                </div>
              );
            }
            return (
              <div className={`t-line t-${line.kind}`} key={`h${i}`}>
                {line.text}
              </div>
            );
          })}
        {done && (
          <div className="t-line t-input-line">
            <span className="t-prompt">haroon@ai ~ %</span>
            <input
              ref={inputRef}
              className="t-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              aria-label="Terminal input — type 'help' to explore"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalHero;
