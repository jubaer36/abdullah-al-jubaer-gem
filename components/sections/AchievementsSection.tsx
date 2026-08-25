import { achievements } from "@/data/achievements";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { DetailHeading } from "@/components/primitives/DetailHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { ExpandableCard } from "@/components/primitives/ExpandableCard";
import { StopClickPropagation } from "@/components/primitives/StopClickPropagation";
import { ExternalLinkIcon } from "@/components/primitives/icons";

export function AchievementsSection() {
  return (
    <section id="achievements" className="px-6 md:px-12 py-16 md:py-24 border-b border-border">
      <Reveal>
        <SectionLabel num="06" label="Achievements" />
        <h2 className="font-display font-bold text-[clamp(28px,5vw,52px)] leading-[1.05] mb-4 text-text">
          Achievements
        </h2>
        <p className="text-sm text-soft max-w-xl mb-12">
          I&apos;ve competed in numerous datathons and hackathons, progressing to top teams in most of them.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-4">
        {achievements.map((item) => (
          <Reveal key={item.title}>
            <ExpandableCard
              header={
                <>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <p className="font-display font-semibold text-sm text-text">{item.title}</p>
                    {item.link && (
                      <StopClickPropagation className="shrink-0">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View reference for ${item.title}`}
                          className="flex items-center gap-1 rounded-md text-xs border border-border px-2 py-1 text-dim transition-all duration-150 hover:text-text hover:border-muted hover:bg-elevated active:scale-[0.94]"
                        >
                          <ExternalLinkIcon />
                        </a>
                      </StopClickPropagation>
                    )}
                  </div>
                  <p className="text-xs text-signal font-medium mt-1.5">{item.event}</p>
                  <p className="text-sm text-soft leading-relaxed mt-3">{item.desc}</p>
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
