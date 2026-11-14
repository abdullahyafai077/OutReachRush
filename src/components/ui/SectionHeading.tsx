import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
        {eyebrow ? (
          <p className="or-eyebrow">
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={id}
          className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-or-muted">{description}</p>
        ) : null}
    </header>
  );
}
