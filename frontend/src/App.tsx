import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.tsx'
import HeroSection from './components/HeroSection.tsx'
import AboutSection from './components/AboutSection.tsx'
import ExperienceSection from './components/ExperienceSection.tsx'
import PortfolioSection from './components/PortfolioSection.tsx'
import ContactSection from './components/ContactSection.tsx'
import Footer from './components/Footer.tsx'

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar
        activeSection={activeSection}
        scrollToId={scrollToId}
      />
      <HeroSection
        scrollToId={scrollToId}
      />
      <AboutSection
        scrollToId={scrollToId}
      />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection/>
      <Footer
        scrollToId={scrollToId}
      />
    </>
  )
}

export default App