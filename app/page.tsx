import { BootSequence } from "@/components/boot/BootSequence";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Dock } from "@/components/nav/Dock";
import { Hero } from "@/components/hero/Hero";
import { SystemMap } from "@/components/system-map/SystemMap";
import { CommandCenter } from "@/components/leadership/CommandCenter";
import { VartalAppMicrosite } from "@/components/projects/vartalapp/VartalAppMicrosite";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { ResearchLab } from "@/components/research/ResearchLab";
import { ExperienceStrip } from "@/components/experience/ExperienceStrip";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <BootSequence />
      <Dock />
      <main>
        <Hero />
        <SystemMap />
        <CommandCenter />
        <VartalAppMicrosite />
        <ProjectsGrid />
        <ResearchLab />
        <ExperienceStrip />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
