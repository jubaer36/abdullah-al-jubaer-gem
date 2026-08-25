import { hero } from "@/data/hero";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#achievements", label: "Achievements" },
  { href: "#hobbies", label: "Beyond work" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 bg-bg/85 backdrop-blur-md border-b border-border">
      <a href="#" className="font-display font-semibold text-sm tracking-tight text-text">
        <span className="text-signal">●</span> {hero.name}
      </a>
      <nav className="flex items-center gap-1 overflow-x-auto">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-3 py-2 rounded-md font-sans text-[13px] font-medium text-dim transition-all duration-150 hover:text-text hover:bg-surface active:scale-[0.96] whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
