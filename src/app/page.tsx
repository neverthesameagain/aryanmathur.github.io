import { Navbar } from "@/components/navbar";
import { PointerParticles } from "@/components/effects/pointer-particles";
import { AchievementsSection } from "@/components/sections/achievements";
import { ContactSection } from "@/components/sections/contact";
import { CurrentlyBuildingSection } from "@/components/sections/currently-building";
import { ExperienceSection } from "@/components/sections/experience";
import { FeaturedWorkSection } from "@/components/sections/featured-work";
import { HeroSection } from "@/components/sections/hero";
import { LeadershipSection } from "@/components/sections/leadership";
import { ResearchSection } from "@/components/sections/research";
import { SkillsSection } from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-grid">
      <PointerParticles />
      <Navbar />
      <main id="main">
        <HeroSection />
        <CurrentlyBuildingSection />
        <ExperienceSection />
        <FeaturedWorkSection />
        <ResearchSection />
        <SkillsSection />
        <LeadershipSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-white/50">
          © {new Date().getFullYear()} Aryan Mathur. Built with Next.js.
        </div>
      </footer>
    </div>
  );
}
