import { BootSequence } from "@/components/boot/BootSequence";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Dock } from "@/components/nav/Dock";
import { Hero } from "@/components/hero/Hero";
import { Skills } from "@/components/skills/Skills";
import { Achievements } from "@/components/achievements/Achievements";
import { SystemMap } from "@/components/system-map/SystemMap";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { CommandCenter } from "@/components/leadership/CommandCenter";
import { VartalAppMicrosite } from "@/components/projects/vartalapp/VartalAppMicrosite";
import { ResearchLab } from "@/components/research/ResearchLab";
import { HackathonWarRoom } from "@/components/hackathons/HackathonWarRoom";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { Footer } from "@/components/footer/Footer";
import { Terminal } from "@/components/terminal/Terminal";

export default function Home() {
  return (
    <SmoothScroll>
      <BootSequence />
      <Dock />
      <Terminal />
      <main>
        <Hero />
        <Skills />
        <Achievements />
        <SystemMap />
        <ExperienceSection />
        <CommandCenter />
        <VartalAppMicrosite />
        <ResearchLab />
        <HackathonWarRoom />
        <ProjectsGrid />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
