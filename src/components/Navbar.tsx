import { Menu, User, X } from 'lucide-react';
import { useState } from 'react';
import { NAV_ITEMS } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenProfile: () => void;
}

export function Navbar({ activeSection, onNavigate, onOpenProfile }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-[14px] bg-[#050505]/75 border-b border-white/[0.08]">
      <div className="h-[76px] w-full px-gutter md:px-margin flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#overview"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('overview');
          }}
          className="flex items-center gap-space-xs group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded"
        >
          <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">
            Guntur<span className="text-[#FF2800]">.</span>
          </span>
        </a>

        {/* Zone 2: Primary Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-space-xl"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`font-body-sm text-body-sm whitespace-nowrap shrink-0 transition-colors py-space-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded-sm ${
                  isActive
                    ? 'text-on-surface border-b-2 border-primary-container font-medium'
                    : 'text-on-surface-variant hover:text-on-surface border-b-2 border-transparent'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Quick Profile */}
        <div className="flex items-center gap-space-md shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="hidden sm:inline-flex items-center justify-center font-headline-sm text-body-sm font-semibold rounded-full bg-inverse-surface text-inverse-on-surface px-[22px] py-[10px] whitespace-nowrap shrink-0 transition-all duration-200 hover:shadow-[0_0_24px_rgba(255,40,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
          >
            Get in Touch
          </a>
          <button
            type="button"
            onClick={onOpenProfile}
            aria-label="Open Candidate Dossier"
            title="View Candidate Dossier"
            className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 text-on-primary transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container cursor-pointer"
          >
            <User className="w-[18px] h-[18px]" strokeWidth={2.2} />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-inverse-surface hover:bg-surface-container-high transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0a0a0a]/95 backdrop-blur-xl px-gutter py-space-md flex flex-col gap-space-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`px-space-md py-2.5 rounded-lg font-body-md text-body-md transition-colors ${
                  isActive
                    ? 'bg-surface-container text-inverse-surface border-l-2 border-primary-container font-semibold'
                    : 'text-secondary hover:bg-surface-container-low hover:text-inverse-surface'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="mt-1 inline-flex items-center justify-center font-headline-sm text-body-sm font-semibold rounded-full bg-inverse-surface text-inverse-on-surface px-[22px] py-3"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
