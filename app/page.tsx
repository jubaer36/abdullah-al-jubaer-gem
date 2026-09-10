import { NavBar } from "@/components/navigation/NavBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { MomentsSection } from "@/components/sections/MomentsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { CurrentSection } from "@/components/sections/CurrentSection";
import { HobbiesSection } from "@/components/sections/HobbiesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <SkillsSection />
      <MomentsSection />
      <ExperienceSection />
      <EducationSection />
      <ResearchSection />
      <ProjectsSection />
      <AchievementsSection />
      <CurrentSection />
      <HobbiesSection />
      <ContactSection />
    </>
  );
}
