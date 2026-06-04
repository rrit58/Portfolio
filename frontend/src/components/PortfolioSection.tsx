import { useState } from "react";
import { LuCode, LuAward, LuBoxes, LuExternalLink } from "react-icons/lu";
import SectionHeading from "./SectionHeading.tsx";
import projects from "../data/projects.ts";
import certificates from "../data/certificates.ts";
import techStacks from "../data/techStacks.ts";

type Tab = "Projects" | "Certificates" | "Tech Stacks";

const tabs: { label: Tab; icon: typeof LuCode }[] = [
  { label: "Projects", icon: LuCode },
  { label: "Certificates", icon: LuAward },
  { label: "Tech Stacks", icon: LuBoxes },
];

const PortfolioSection = () => {
  const [active, setActive] = useState<Tab>("Projects");

  return (
    <section id="portfolio" className="relative max-w-7xl mx-auto px-6 lg:px-0 py-10 md:py-25">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <SectionHeading
        eyebrow="Showcase"
        title="Portfolio"
        description="Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path."
      />

      {/* Tabs */}
      <div className="relative mt-12 mx-auto max-w-4xl gradient-card border border-border rounded-2xl p-2 grid grid-cols-3 gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.label;
          return (
            <button
              key={tab.label}
              onClick={() => setActive(tab.label)}
              className={`cursor-pointer flex flex-col items-center justify-center gap-2 py-4 rounded-xl transition-smooth ${isActive
                ? "bg-primary/15 border border-primary/30 text-foreground glow-sm"
                : "border border-transparent text-muted-foreground hover:text-foreground hover:bg-card/50"
                }`}
            >
              <Icon size={20} className={isActive ? "text-primary" : ""} />
              <span className="font-medium text-sm">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative mt-12">
        {active === "Projects" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article key={project.name} className="flex flex-col group gradient-card border border-border rounded-2xl overflow-hidden transition-smooth hover:border-primary/50 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img src={project.img} alt={`${project.name} preview`} loading="lazy" className="w-full h-full object-cover transition-smooth group-hover:scale-105" />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-10">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto p-5 flex items-center justify-between">
                  <a href={project.codeLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-primary-glow transition-smooth font-medium bg-primary/20 hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-smooth text-secondary-foreground hover:scale-105 transition-smooth">
                    View Code <LuExternalLink size={14} />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-primary-glow transition-smooth font-medium bg-primary/20 hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-smooth text-secondary-foreground hover:scale-105 transition-smooth">
                    Live Demo <LuExternalLink size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {active === "Certificates" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate) => (
              <div key={certificate.name} className="gradient-card border border-border rounded-2xl p-5 transition-smooth hover:border-primary/50 hover:-translate-y-1">
                <div className="aspect-16/10 overflow-hidden bg-muted">
                  <img src={certificate.img} alt={`${certificate.name} preview`} loading="lazy" className="w-full h-full object-cover transition-smooth group-hover:scale-105" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{certificate.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground font-bold">{certificate.year}</p>
              </div>
            ))}
          </div>
        )}

        {active === "Tech Stacks" && (
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-10">
            {techStacks.map((techStack) => (
              <div key={techStack.name} className="h-45 w-45 gradient-card border border-border rounded-2xl flex flex-col items-center justify-center gap-3 p-5 transition-smooth hover:border-primary/50 hover:-translate-y-1">
                <img src={techStack.img} alt={`${techStack.name} preview`} loading="lazy" className="w-25 h-25 object-contain transition-smooth group-hover:scale-105" />
                <p className="text-sm font-semibold text-foreground text-center leading-tight">
                  {techStack.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section >
  );
}

export default PortfolioSection;