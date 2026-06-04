import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { LuMinus, LuSquare, LuX } from "react-icons/lu";
import socials from "../data/socials";

type Line = {
  type: "input" | "output" | "system" | "success" | "error" | "muted";
  text: string;
};

const PROMPT = "rohit@portfolio:~$";

const HELP_TEXT: Line[] = [
  { type: "muted", text: "Available commands:" },
  { type: "output", text: "  help       — show this list" },
  { type: "output", text: "  about      — who I am" },
  { type: "output", text: "  skills     — tech I work with" },
  { type: "output", text: "  projects   — featured work" },
  { type: "output", text: "  experience — what I've been up to" },
  { type: "output", text: "  contact    — how to reach me" },
  { type: "output", text: "  socials    — find me online" },
  { type: "output", text: "  clear      — clear the terminal" },
];

const COMMANDS: Record<string, Line[]> = {
  about: [
    { type: "success", text: "→ Rohit Raj" },
    { type: "output", text: " · B.Tech, Information Technology" },
    { type: "output", text: " · SIH 2025 Winner 🏆" },
    { type: "output", text: " · Full Stack Developer" },
    { type: "output", text: " I build smooth, scalable, and responsive web applications." },
  ],
  skills: [
    { type: "success", text: "→ Tech Stack" },
    { type: "output", text: "  Frontend  : React · TypeScript · Tailwind CSS · React.js" },
    { type: "output", text: "  Backend   : Node.js · Express" },
    { type: "output", text: "  Database  : MongoDB · PostgreSQL" },
    { type: "output", text: "  Tools     : Git · Docker · Vite · C++" },
  ],
  projects: [
    { type: "success", text: "→ Featured Projects" },
    { type: "output", text: "  1. Grocify   — online grocery shopping platform" },
    { type: "output", text: "  2. CareConnect   — healthcare platform" },
    { type: "output", text: "  3. DBT Setu   — awareness platform" },
    { type: "output", text: "  4. Wave   — social communication platform" },
    { type: "output", text: "  5. Vora   — music streaming platform" },
    { type: "muted", text: "  visit portfolio for more" },
  ],
  experience: [
    { type: "success", text: "→ Experience" },
    { type: "output", text: "  • SIH Winner 2025 🏆" },
    { type: "muted", text: "  visit experience for full timeline" },
  ],
  contact: [
    { type: "success", text: "→ Contact" },
    { type: "output", text: `  email   : ${socials.Mail}` },
    { type: "muted", text: "  visit contact for more" },
  ],
  socials: [
    { type: "success", text: "→ Socials" },
    { type: "output", text: `  github    : ${socials.GitHub}` },
    { type: "output", text: `  linkedin  : ${socials.LinkedIn}` },
    { type: "output", text: `  leetcode : ${socials.LeetCode}` },
    { type: "output", text: `  X : ${socials.X}` },
  ],
};

const BOOT_SEQUENCE: Line[] = [
  { type: "muted", text: "$ npm run intro" },
  { type: "muted", text: "▸ booting portfolio.exe..." },
  { type: "muted", text: "▸ loading modules..." },
  { type: "success", text: "▸ ready ✓" },
  { type: "output", text: "" },
  { type: "system", text: "Welcome — I'm Rohit 👋" },
  { type: "muted", text: "type 'help' to see what I can do." },
  { type: "output", text: "" },
];

const colorFor = (type: Line["type"]) => {
  switch (type) {
    case "success":
      return "text-emerald-400";
    case "error":
      return "text-red-400";
    case "muted":
      return "text-muted-foreground";
    case "system":
      return "text-primary";
    case "input":
      return "text-foreground";
    default:
      return "text-foreground/85";
  }
};

const InteractiveTerminal = () => {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number | null>(null);
  const [booting, setBooting] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Boot sequence
  useEffect(() => {
    let cancelled = false;
    let i = 0;
    setLines([]);
    const tick = () => {
      if (cancelled) return;
      if (i >= BOOT_SEQUENCE.length) {
        setBooting(false);
        return;
      }
      const nextLine = BOOT_SEQUENCE[i];
      i += 1;
      if (nextLine) {
        setLines((prev) => [...prev, nextLine]);
      }
      setTimeout(tick, 280);
    };
    const start = setTimeout(tick, 400);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, []);

  // Defensive filter — never render undefined entries
  const safeLines = lines.filter((l): l is Line => Boolean(l && l.type));

  // Auto-scroll on new lines
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const focusInput = () => inputRef.current?.focus();

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const inputLine: Line = { type: "input", text: `${PROMPT} ${raw}` };

    if (!cmd) {
      setLines((prev) => [...prev, inputLine]);
      return;
    }

    setHistory((h) => [...h, raw]);
    setHistoryIdx(null);

    if (cmd === "clear" || cmd === "cls") {
      setLines([]);
      return;
    }

    if (cmd === "help") {
      setLines((prev) => [...prev, inputLine, ...HELP_TEXT, { type: "output", text: "" }]);
      return;
    }

    if (COMMANDS[cmd]) {
      setLines((prev) => [...prev, inputLine, ...COMMANDS[cmd], { type: "output", text: "" }]);
      return;
    }

    setLines((prev) => [
      ...prev,
      inputLine,
      { type: "error", text: `command not found: ${cmd}` },
      { type: "muted", text: "type 'help' to see available commands" },
      { type: "output", text: "" },
    ]);
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next = historyIdx === null ? history.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(next);
      setInput(history[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx === null) return;
      const next = historyIdx + 1;
      if (next >= history.length) {
        setHistoryIdx(null);
        setInput("");
      } else {
        setHistoryIdx(next);
        setInput(history[next]);
      }
    }
  };

  return (
    <div
      onClick={focusInput}
      className="relative w-full max-w-xl rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl shadow-primary/20 overflow-hidden cursor-text"
    >
      {/* Glow */}
      <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 pointer-events-none opacity-50" />

      {/* Title bar */}
      <div className="relative flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/40">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-xs font-mono text-muted-foreground">
          Terminal
        </span>
        <div className="flex items-center gap-2 text-muted-foreground/60">
          <LuMinus size={12} />
          <LuSquare size={10} />
          <LuX size={12} />
        </div>
      </div>

      {/* Body */}
      <div
        ref={scrollRef}
        className="relative h-[420px] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:rgba(168,85,247,0.3)_transparent] px-4 py-4 font-mono text-[13px] leading-relaxed">
        {safeLines.map((line, idx) => (
          <div key={idx} className={`whitespace-pre-wrap ${colorFor(line.type)}`}>
            {line.text || "\u00A0"}
          </div>
        ))}

        {!booting && (
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 shrink-0">{PROMPT}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              autoFocus
              spellCheck={false}
              autoComplete="off"
              aria-label="Terminal input"
              className="flex-1 bg-transparent outline-none border-none text-foreground caret-primary"
            />
          </div>
        )}

        {booting && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
          </div>
        )}
      </div>

      {/* Hint footer */}
      <div className="relative px-4 py-2 border-t border-border bg-muted/30 flex flex-wrap gap-2 text-[11px] font-mono text-muted-foreground">
        <span className="opacity-60">try:</span>
        {["help", "skills", "projects", "contact"].map((c) => (
          <button
            key={c}
            onClick={(e) => {
              e.stopPropagation();
              runCommand(c);
              focusInput();
            }}
            className="px-2 py-0.5 rounded border border-border hover:border-primary/50 hover:text-primary transition-smooth"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

export default InteractiveTerminal;