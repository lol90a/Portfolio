import { useState } from "react";
import { Navigation } from "../components/portfolio/Navigation";
import { BlockchainBackground } from "../components/portfolio/BlockchainBackground";
import { LoadingScreen } from "../components/portfolio/LoadingScreen";
import { ScrollProgress } from "../components/portfolio/ScrollProgress";
import { BackToTop } from "../components/portfolio/BackToTop";
import { Hero } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { Skills } from "../components/portfolio/Skills";
import { Projects } from "../components/portfolio/Projects";
import { Experience } from "../components/portfolio/Experience";
import { Contact } from "../components/portfolio/Contact";
import { Footer } from "../components/portfolio/Footer";

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#0a0a1a] to-[#0f0f2a] relative">
      <ScrollProgress />
      <BlockchainBackground />
      <BackToTop />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}