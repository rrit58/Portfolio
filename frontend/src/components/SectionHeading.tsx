import { LuSparkles } from "react-icons/lu";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
}

const SectionHeading = ({ eyebrow, title, description, align = "center" }: Props) => {
  return (
    <div className={align === "center" ? "text-center max-w-4xl mx-auto" : "max-w-4xl"}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 text-sm font-medium text-muted-foreground">
          <LuSparkles size={14} className="text-primary" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-6xl font-bold gradient-text leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading
