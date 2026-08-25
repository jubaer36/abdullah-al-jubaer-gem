import { hobbies } from "@/data/hobbies";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Reveal } from "@/components/primitives/Reveal";

const groups = [
  { title: "Clubs", items: hobbies.clubs },
  { title: "Sports", items: hobbies.sports },
  { title: "Interests", items: hobbies.interests },
];

export function HobbiesSection() {
  return (
    <section id="hobbies" className="px-6 md:px-12 py-16 md:py-24 border-b border-border">
      <Reveal>
        <SectionLabel num="07" label="Beyond work" />
        <h2 className="font-display font-bold text-[clamp(28px,5vw,52px)] leading-[1.05] mb-12 text-text">
          Beyond work
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8">
        {groups.map((group) => (
          <Reveal key={group.title} className="border-t border-border pt-6">
            <h3 className="font-display font-semibold text-base mb-4 text-text">{group.title}</h3>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-soft leading-relaxed">
                  <span className="text-edge mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
