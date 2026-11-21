import { ArrowDown, GraduationCap, MapPin } from 'lucide-react';
import { useState } from 'react';
import { HERO_CAR_HOTLINK, HERO_CAR_LOCAL, PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onExplore: () => void;
}

export function HeroSection({ onExplore }: HeroSectionProps) {
  const [imgSrc, setImgSrc] = useState<string>(HERO_CAR_LOCAL);
  const [imgFailed, setImgFailed] = useState(false);

  const handleImageError = () => {
    if (imgSrc === HERO_CAR_LOCAL) {
      setImgSrc(HERO_CAR_HOTLINK);
    } else {
      setImgFailed(true);
    }
  };

  return (
    <section
      id="overview"
      className="relative w-full min-h-[calc(100vh-76px)] flex flex-col justify-between overflow-hidden bg-[#050505] px-gutter md:px-margin py-space-xl"
    >
      {/* Atmospheric Crimson Underglow */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[720px] max-w-full h-[360px] bg-[radial-gradient(ellipse_at_center,rgba(255,40,0,0.22)_0%,rgba(255,40,0,0.06)_45%,transparent_70%)] blur-2xl" />
      </div>

      {/* Top Left Cockpit Cluster */}
      <div className="relative z-10 flex flex-col items-start gap-space-md max-w-2xl">
        {/* Location Glass Capsule */}
        <div className="inline-flex items-center gap-space-xs px-space-md py-[7px] rounded-full bg-white/[0.06] backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)] border border-white/[0.06]">
          <MapPin className="w-[16px] h-[16px] text-primary-container shrink-0" />
          <span className="font-label-badge text-label-badge text-inverse-surface tracking-wider uppercase">
            {PERSONAL_INFO.locationBadge}
          </span>
        </div>

        {/* Hero Tagline */}
        <p className="font-headline-sm text-headline-sm text-inverse-surface leading-tight font-medium max-w-xl">
          {PERSONAL_INFO.tagline}
        </p>

        {/* Telemetry Status Badges */}
        <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
          <div className="flex items-center gap-2 px-space-md py-1.5 rounded-lg bg-surface-container-lowest shadow-sm border border-white/[0.06]">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
            <span className="font-label-badge text-label-badge text-inverse-surface tracking-widest uppercase">
              WICE 2024 SILVER MEDALIST
            </span>
          </div>
          <div className="flex items-center gap-2 px-space-md py-1.5 rounded-lg bg-surface-container-lowest shadow-sm border border-white/[0.06]">
            <GraduationCap className="w-[16px] h-[16px] text-primary-container shrink-0" />
            <span className="font-label-badge text-label-badge text-secondary tracking-widest uppercase tabular-nums">
              SAINTEK 91 / 100
            </span>
          </div>
        </div>
      </div>

      {/* Centerpiece Supercar Silhouette */}
      <div className="relative z-0 my-auto w-full max-w-5xl mx-auto flex items-center justify-center py-space-md group">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
          {!imgFailed ? (
            <img
              src={imgSrc}
              alt="Ferrari LaFerrari in dark luxury automotive studio with crimson underglow"
              referrerPolicy="no-referrer"
              onError={handleImageError}
              className="w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(255,40,0,0.32)] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          ) : (
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-surface-container via-[#0e0e10] to-[#050505] border border-white/[0.08] flex flex-col items-center justify-center gap-2 p-space-lg">
              <span className="font-telemetry-md text-telemetry-md text-primary-container tracking-widest uppercase">
                AVELON CORSA // STUDIO RENDER
              </span>
              <span className="font-body-sm text-secondary">
                Ferrari LaFerrari Dark Studio Edition
              </span>
            </div>
          )}
          {/* Horizon Ray Overlay */}
          <div className="pointer-events-none absolute -bottom-4 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-primary-container/80 to-transparent" />
        </div>
      </div>

      {/* Bottom Bar: Navigation Cue + Split Typography */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-space-lg pt-space-md">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            onExplore();
          }}
          className="group inline-flex items-center gap-space-xs text-on-surface-variant hover:text-inverse-surface transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded"
        >
          <span className="font-label-caption text-label-caption tracking-widest uppercase text-secondary group-hover:text-inverse-surface transition-colors">
            EXPLORE TELEMETRY
          </span>
          <ArrowDown className="w-4 h-4 text-primary-container transition-transform duration-200 group-hover:translate-y-1" />
        </a>

        {/* Identity Typography Split */}
        <div className="flex flex-col text-left md:text-right">
          <span className="font-display-xl text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] leading-[1.05] tracking-tight font-bold text-white/30 select-none">
            {PERSONAL_INFO.firstNameSplit}
          </span>
          <h1 className="font-display-xl text-[2.5rem] sm:text-[3.25rem] md:text-[4.5rem] lg:text-[5.25rem] leading-[0.95] tracking-tighter font-extrabold text-inverse-surface mt-[-4px]">
            {PERSONAL_INFO.lastNameSplit}
            <span className="text-primary-container">.</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
