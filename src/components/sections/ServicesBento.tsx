import {
  Briefcase,
  Layers,
  Link2,
  MapPin,
  Newspaper,
  PenLine,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/seo-content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  PenLine,
  Link2,
  Newspaper,
  MapPin,
  Briefcase,
};

export function ServicesBento() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="or-section-dark py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core services"
          title="Link building built for SaaS growth teams"
          description="Modular bento cards ready to scale into dedicated service pages—swap copy in seo-content.ts when your Google Doc is finalized."
          id="services-heading"
        />

        <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Layers;
            return (
              <article
                key={service.id}
                className={cn(
                  "group or-surface-card rounded-2xl p-6 transition hover:border-or-orange/30 hover:bg-or-surface/70",
                  service.span,
                )}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-or-orange/15 text-or-orange ring-1 ring-or-orange/25">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-or-muted">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}