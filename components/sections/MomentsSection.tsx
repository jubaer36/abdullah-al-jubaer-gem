import { moments } from "@/data/moments";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { Slideshow } from "@/components/primitives/Slideshow";

export function MomentsSection() {
  return (
    <section
      id="moments"
      className="px-6 md:px-12 py-16 md:py-24 border-b border-border"
    >
      <Reveal>
        <SectionLabel num="02" label="Lately" />
        <h2 className="font-display font-bold text-[clamp(28px,5vw,52px)] leading-[1.05] mb-12 text-text">
          What I&apos;ve been up to
        </h2>
      </Reveal>

      <Reveal>
        <Slideshow slides={moments} />
      </Reveal>
    </section>
  );
}
