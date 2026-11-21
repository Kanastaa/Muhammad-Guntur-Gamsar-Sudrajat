import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { InnovationSection } from './components/InnovationSection';
import { Navbar } from './components/Navbar';
import { ProfileModal } from './components/ProfileModal';
import { SkillsSection } from './components/SkillsSection';
import { NAV_ITEMS } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [profileOpen, setProfileOpen] = useState<boolean>(false);

  useEffect(() => {
    const sectionIds = [...NAV_ITEMS.map((item) => item.id), 'skills', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      let current = 'overview';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      if (current === 'skills') {
        current = 'experience';
      }
      if (current === 'contact') {
        current = 'achievements';
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 76;
      const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
      if (NAV_ITEMS.some((item) => item.id === sectionId)) {
        setActiveSection(sectionId);
      }
    }
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased relative overflow-x-hidden min-h-screen">
      {/* Ambient Radial Underglow */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,86,56,0.08)_0%,rgba(19,19,19,0)_70%)]" />

      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenProfile={() => setProfileOpen(true)}
      />

      <main className="w-full pt-[76px] bg-transparent relative z-10 flex flex-col">
        <HeroSection onExplore={() => scrollToSection('about')} />
        <AboutSection />
        <InnovationSection />
        <ExperienceSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />

      <ProfileModal
        isOpen={profileOpen}
        onClose={() => setProfileOpen(false)}
        onGoToContact={() => scrollToSection('contact')}
      />
    </div>
  );
}
