import { HeroBlock } from "@/components/ui/hero-block-shadcnui";
import { ScrollyExperience } from "@/components/sections/scrolly-experience";
import { FullTimeline } from "@/components/sections/full-timeline";
import { FinaleSection } from "@/components/sections/finale-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroBlock />
      <div id="experience">
        <ScrollyExperience />
      </div>
      <FullTimeline />
      <FinaleSection />
    </main>
  );
}
