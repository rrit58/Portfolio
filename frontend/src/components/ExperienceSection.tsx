import { LuBriefcase, LuCalendar, LuBuilding2, LuSparkles } from "react-icons/lu";
import SectionHeading from "./SectionHeading.tsx";
import timelines from '../data/timelines.ts';

type Item = {
  icon: typeof LuBriefcase;
  type: "Work" | "Education" | "Certification";
  title: string;
  org: string;
  year: string;
  description: string;
  tags?: string[];
};

const typeStyles: Record<Item["type"], string> = {
  Work: "bg-primary/15 text-primary border-primary/30",
  Education: "bg-accent/15 text-accent border-accent/30",
  Certification: "bg-primary-glow/15 text-primary-glow border-primary-glow/30",
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 lg:px-10 py-25">
      <SectionHeading
        eyebrow="Journey"
        title="Experience & Education"
        description="A timeline of roles, learning milestones and certifications that shaped my path as a developer."
      />

      <div className="relative mt-20">
        {/* Vertical line with gradient and pulse */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-linear-to-b from-primary via-primary/40 to-transparent" />

        {/* Start sparkle */}
        <div className="absolute left-6 md:left-1/2 -top-3 -translate-x-1/2 h-6 w-6 rounded-full gradient-primary glow-md flex items-center justify-center">
          <LuSparkles size={12} className="text-primary-foreground" />
        </div>

        <div className="space-y-14">
          {timelines.map((item, idx) => {
            const Icon = item.icon;
            const isRight = idx % 2 == 0;
            return (
              <div key={idx} className="relative md:grid md:grid-cols-2 md:gap-12">
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 z-10 flex items-center">
                  <div className="h-5 w-5 rounded-full gradient-primary glow-sm ring-4 ring-background" />
                </div>
                {/* Horizontal Connector Arm */}
                <div className={`hidden md:block absolute top-[42px] h-px bg-linear-to-r ${isRight
                  ? "left-1/2 ml-3 w-12 from-primary/60 to-transparent"
                  : "right-1/2 mr-3 w-12 from-transparent to-primary/60"
                  }`}
                />

                {/* Year Badge */}
                <div className={`hidden md:flex items-start pt-2 ${isRight ? "md:col-start-1 md:row-start-1 md:justify-end md:pr-12" : "md:col-start-2 md:justify-start md:pl-12"}`}>
                  <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/60 border border-border text-xs font-semibold text-foreground">
                    <LuCalendar size={12} className="text-primary" />
                    {item.year}
                  </div>
                </div>

                {/* Card */}
                <div className={`pl-16 md:pl-0 ${isRight ? "md:col-start-2 md:pl-12" : "md:col-start-1 md:row-start-1 md:pr-12"}`}>
                  <article className="group relative gradient-card border border-border rounded-2xl p-6 transition-smooth hover:border-primary/40 hover:-translate-y-1 overflow-hidden">
                    {/* Hover Glow Blob */}
                    <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-smooth" />

                    <div className="relative flex items-start gap-4">
                      <div className="h-11 w-11 rounded-xl gradient-primary glow-sm flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-primary-foreground" />
                      </div>
                      <div className="min-w-0">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[10px] font-semibold uppercase tracking-wider ${typeStyles[item.type]}`}>
                          {item.type}
                        </span>
                        <h3 className="mt-2 text-lg font-semibold text-foreground leading-tight">
                          {item.title}
                        </h3>
                        <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-primary">
                          <LuBuilding2 size={12} />
                          {item.org}
                        </p>
                      </div>
                    </div>

                    <p className="relative mt-4 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {item.tags && (
                      <div className="relative mt-5 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 rounded-md bg-secondary text-[11px] text-secondary-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </div>
              </div>
            );
          })}
        </div>

        {/* End cap */}
        <div className="absolute left-6 md:left-1/2 -bottom-3 -translate-x-1/2 h-6 w-6 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;