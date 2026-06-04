import socials from "../data/socials";
import { LuMail, LuGithub, LuLinkedin } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

type NavbarProps = {
  scrollToId: (id: string) => void;
}

const socialLinks = [
  { label: "Mail", icon: LuMail, href: `mailto:${socials.Mail}` },
  { label: "LinkedIn", icon: LuLinkedin, href: socials.LinkedIn },
  { label: "GitHub", icon: LuGithub, href: socials.GitHub },
  { label: "LeetCode", icon: SiLeetcode, href: socials.LeetCode },
  { label: "X", icon: FaXTwitter, href: socials.X },
]

const Footer = ({ scrollToId }: NavbarProps) => {
  return (
    <footer className="border-t border-border/40 max-w-7xl mx-auto  py-4 grid grid-cols-3 items-center">
      <button onClick={() => scrollToId("home")} className="flex justify-start text-xl font-bold gradient-text tracking-tight cursor-pointer">
        Rohit Raj
      </button>
      <p className="text-sm text-muted-foreground text-center">
        Built with ❤️ by Rohit Raj
      </p>
      <div className="flex justify-end items-center">
        {socialLinks.map((socialLink) => (
          <a key={socialLink.label} href={socialLink.href} target="_blank" rel="noreferrer" aria-label={socialLink.label}
            className="h-10 w-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-smooth"
          >
            <socialLink.icon size={20} />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;