import { useEffect, useState } from "react";
import { LuSparkles, LuExternalLink, LuMail, LuGithub, LuLinkedin } from "react-icons/lu";
import InteractiveTerminal from "../components/InteractiveTerminal";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import socials from "../data/socials.ts";

type NavbarProps = {
  scrollToId: (id: string) => void;
}

const highlights = ["🏆 SIH 2025 Winner", "MERN Stack", "PERN Stack", "REST API Design"];
const roles = ["Information Technology", "Engineering Student", "Tech Enthusiast", "Web Developer", "AI/ML Enthusiast", "Full Stack Developer", "Backend Developer", "Frontend Developer", "Open-Source Contributor"];
const socialLinks = [
  { label: "Mail", icon: LuMail, href: `mailto:${socials.Mail}` },
  { label: "LinkedIn", icon: LuLinkedin, href: socials.LinkedIn },
  { label: "GitHub", icon: LuGithub, href: socials.GitHub },
  { label: "LeetCode", icon: SiLeetcode, href: socials.LeetCode },
  { label: "X", icon: FaXTwitter, href: socials.X },
]

function useTypewriter(words: string[], speed = 90, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (text.length < word.length) {
            setText(word.slice(0, text.length + 1));
          } else {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          if (text.length > 0) {
            setText(word.slice(0, text.length - 1));
          } else {
            setDeleting(false);
            setWordIdx((i) => (i + 1) % words.length);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, speed, pause]);

  return text;
}

const HeroSection = ({ scrollToId }: NavbarProps) => {
  const typed: any = useTypewriter(roles);

  return (
    <section id="home" className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-5 py-5 lg:py-25 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm">
            <LuSparkles size={14} />
            Ready to Innovate
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="text-foreground">Full Stack</span>
            <br />
            <span className="gradient-text">Developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/90 font-medium h-8">
            <span>{typed}</span>
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle animate-pulse" />
          </p>

          <p className="text-muted-foreground text-base md:text-lg max-w-lg">
            Enhancing digital experiences that are smooth, scalable, and made to impress.
          </p>

          <div className="flex flex-wrap gap-2">
            {highlights.map((highlight) => (
              <span key={highlight} className="px-4 py-1.5 rounded-full border border-border bg-card/60 text-sm text-foreground/80 backdrop-blur">
                {highlight}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button onClick={()=>{scrollToId("portfolio")}} className="cursor-pointer inline-flex items-center gap-2 gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-medium transition-smooth hover:opacity-90 glow-sm">
              Projects <LuExternalLink size={16} />
            </button>
            <button onClick={()=>{scrollToId("contact")}} className="cursor-pointer inline-flex items-center gap-2 border border-border bg-card/60 backdrop-blur px-6 py-3 rounded-xl font-medium transition-smooth hover:border-primary/50 hover:text-primary">
              Contact Me
            </button>
          </div>

          <div className="flex items-center gap-3 pt-4">
            {socialLinks.map(socialLink => (
              <a key={socialLink.label} href={socialLink.href} target="_blank" rel="noreferrer" className="h-11 w-11 rounded-xl border border-border bg-card/60 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-smooth">
                <socialLink.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;