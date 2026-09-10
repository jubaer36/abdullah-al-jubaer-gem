import { current } from "@/data/current";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Reveal } from "@/components/primitives/Reveal";

export function CurrentSection() {
  return (
    <section id="now" className="px-6 md:px-12 py-16 md:py-24 border-b border-border">
      <Reveal>
        <SectionLabel num="08" label="Now" />
        <h2 className="font-display font-bold text-[clamp(28px,5vw,52px)] leading-[1.05] text-text">
          What I&apos;m working on now
        </h2>
        <p className="mt-1 mb-12 font-sans text-[15px] italic text-muted">
          A lot to do with so little time. Constantly switching between these projects based on only god knows what. 
        </p>
      </Reveal>

      <div className="space-y-3">
        {current.map((item) => (
          <Reveal key={item.title}>
            <div className="rounded-lg border border-border bg-surface p-6 transition-colors duration-300 hover:border-signal/40">
              <p className="font-display font-semibold text-base text-text max-w-2xl">
                {item.title}
              </p>
              <p className="text-xs text-signal font-medium mt-1.5">{item.meta}</p>
              <ul className="mt-3 space-y-1.5">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-soft leading-relaxed">
                    <span className="text-edge mt-0.5">—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
