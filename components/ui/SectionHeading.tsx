import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`section-title ${light ? "text-white" : "text-navy"} ${isCenter ? "max-w-3xl" : ""}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed md:text-lg ${light ? "text-cream/80" : "text-ink/70"}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
