import { SiteHeader } from "./_components/SiteHeader";
import { HeroSection } from "./_components/HeroSection";
import { AboutSection } from "./_components/AboutSection";
import { MarqueeSection } from "./_components/MarqueeSection";
import { ProjectsSection } from "./_components/ProjectsSection";
import { ContactSection } from "./_components/ContactSection";
import { SiteFooter } from "./_components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <MarqueeSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
