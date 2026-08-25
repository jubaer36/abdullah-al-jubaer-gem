import { research } from "@/data/research";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { DetailHeading } from "@/components/primitives/DetailHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { ExpandableCard } from "@/components/primitives/ExpandableCard";
import { StopClickPropagation } from "@/components/primitives/StopClickPropagation";
import { ExternalLinkIcon } from "@/components/primitives/icons";

export function ResearchSection() {
  return (
    <section id="research" className="px-6 md:px-12 py-16 md:py-24 border-b border-border">
      <Reveal>
        <SectionLabel num="05" label="Research" />
        <h2 className="font-display font-bold text-[clamp(28px,5vw,52px)] leading-[1.05] mb-12 text-text">
          Research
        </h2>
      </Reveal>

      <div className="space-y-3">
        {research.map((item) => (
          <Reveal key={item.title}>
            <ExpandableCard
              header={
                <>
                  <div className="flex justify-between items-start flex-wrap gap-3">
                    <p className="font-display font-semibold text-base text-text max-w-2xl">{item.title}</p>
                    {item.link && (
                      <StopClickPropagation className="shrink-0">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 rounded-md text-xs font-mono border border-border px-2.5 py-1 text-dim transition-all duration-150 hover:text-text hover:border-muted hover:bg-elevated active:scale-[0.96]"
                        >
                          <ExternalLinkIcon /> Code
                        </a>
                      </StopClickPropagation>
                    )}
                  </div>
                  <p className="text-xs text-signal font-medium mt-1.5">{item.status}</p>
                  <ul className="mt-3 space-y-1.5">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-soft leading-relaxed">
                        <span className="text-edge mt-0.5">—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </>
              }
            >
              <DetailHeading>Additional details</DetailHeading>
              <p className="text-sm text-soft leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </ExpandableCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
