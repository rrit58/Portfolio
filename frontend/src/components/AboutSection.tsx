import { LuDownload, LuCode, LuArrowUpRight, LuAward, LuGlobe, LuExternalLink } from "react-icons/lu";
import SectionHeading from "./SectionHeading.tsx";
import projects from "../data/projects.ts";
import certificates from "../data/certificates.ts";
import socials from "../data/socials.ts";

type NavbarProps = {
  scrollToId: (id: string) => void;
}
const stats = [
  { label: "Total Projects", icon: LuCode, value: projects.length, desc: "Innovative web solutions crafted", },
  { label: "Certificates", icon: LuAward, value: certificates.length, desc: "Professional skills validated" },
  { label: "Years of Experience", icon: LuGlobe, value: 1, desc: "Continuous learning journey" },
];

const AboutSection = ({scrollToId}: NavbarProps) => {
  return (
    <section id="about" className="relative max-w-7xl mx-auto px-6 lg:px-0 py-10 md:py-25">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative text-center">
        <SectionHeading
          title="About Me"
          description="I am a Full-Stack Developer with 3 years of experience building scalable and responsive web applications. My expertise includes modern front-end frameworks, robust back-end development, and database management. I am passionate about creating seamless user experiences and continuously learning new technologies."
        />

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <button onClick={()=>{scrollToId("experience")}} className="cursor-pointer inline-flex items-center gap-2 gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-medium transition-smooth hover:opacity-90 glow-sm">
            Experience <LuExternalLink size={16} />
          </button>

          <a
            href={socials.Resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-7 py-3 rounded-xl font-medium transition-smooth hover:opacity-90 glow-sm"
          >
            <LuDownload size={16} /> Download CV
          </a>
        </div>

        <div className="relative mt-16 grid sm:grid-cols-3 gap-5">
          {stats.map((stat) => (
            <div key={stat.label} className="group relative overflow-hidden gradient-card border border-border rounded-2xl p-6 backdrop-blur transition-smooth hover:border-primary/50 hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary">
                  <stat.icon size={22} />
                </div>
                <span className="text-5xl font-bold text-foreground">{stat.value}</span>
              </div>
              <div className="mt-6">
                <p className="text-base font-semibold tracking-wider text-left text-foreground uppercase">
                  {stat.label}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground text-left">
                    {stat.desc}
                  </p>
                  <LuArrowUpRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection
