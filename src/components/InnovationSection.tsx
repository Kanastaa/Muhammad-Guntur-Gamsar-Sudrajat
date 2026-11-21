import { BadgeCheck } from 'lucide-react';
import { useState } from 'react';
import { INNOVATION_PROJECT } from '../data/portfolioData';

type PressureMode = 'low' | 'optimal' | 'peak';

const PRESSURE_PROFILES: Record<
  PressureMode,
  {
    label: string;
    ratioText: string;
    rx: number;
    ry: number;
    opacity: number;
    barLabel: string;
  }
> = {
  low: {
    label: 'Low',
    ratioText: 'PRESSURE RATIO: 42 PSI (GENTLE)',
    rx: 38,
    ry: 13,
    opacity: 0.08,
    barLabel: '42 PSI',
  },
  optimal: {
    label: 'Optimal',
    ratioText: 'PRESSURE RATIO: OPTIMAL',
    rx: 55,
    ry: 18,
    opacity: 0.14,
    barLabel: '78 PSI',
  },
  peak: {
    label: 'Peak',
    ratioText: 'PRESSURE RATIO: 110 PSI (DEEP)',
    rx: 74,
    ry: 24,
    opacity: 0.22,
    barLabel: '110 PSI',
  },
};

export function InnovationSection() {
  const [pressureMode, setPressureMode] = useState<PressureMode>('optimal');
  const activeProfile = PRESSURE_PROFILES[pressureMode];

  return (
    <section
      id="innovation"
      className="w-full max-w-[1280px] mx-auto px-gutter md:px-margin py-space-xl"
    >
      <div className="flex flex-col gap-space-xs mb-space-lg">
        <div className="inline-flex items-center gap-2">
          <span className="font-label-caption text-label-caption tracking-[0.16em] uppercase text-primary-container font-semibold">
            02 // FLAGSHIP PROJECT
          </span>
          <span className="h-[1px] w-12 bg-primary-container/40" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
          <div>
            <h2 className="font-headline-lg text-headline-md sm:text-headline-lg font-extrabold tracking-tight text-inverse-surface">
              {INNOVATION_PROJECT.title}
            </h2>
            <p className="font-headline-sm text-body-lg text-secondary mt-1">
              {INNOVATION_PROJECT.subtitle}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container-highest text-inverse-surface font-label-badge text-label-badge tracking-wider self-start md:self-auto border border-white/[0.08]">
            <BadgeCheck className="w-4 h-4 text-primary-container shrink-0" />
            <span>{INNOVATION_PROJECT.laurel}</span>
          </div>
        </div>
      </div>

      {/* Bento Showcase Card */}
      <div className="relative w-full rounded-2xl bg-gradient-to-br from-surface-container to-surface-container-lowest p-space-lg md:p-space-xl shadow-2xl overflow-hidden border border-white/[0.08]">
        {/* Glow Underlay */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-primary-container/15 rounded-full blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Side: Innovation Overview & 3 Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            {/* Award Pill */}
            <div className="inline-flex flex-wrap items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-surface-container-highest max-w-max shadow-sm border border-white/[0.06]">
              <span className="text-[14px]">🥈</span>
              <span className="font-label-badge text-label-badge text-inverse-surface font-semibold tracking-wider">
                {INNOVATION_PROJECT.awardPill}
              </span>
            </div>

            <div className="flex flex-col gap-space-xs">
              <span className="font-label-caption text-label-caption uppercase tracking-widest text-primary-container">
                FIELD DOMAIN
              </span>
              <h3 className="font-headline-sm text-headline-sm text-inverse-surface font-bold">
                {INNOVATION_PROJECT.domainTitle}
              </h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                {INNOVATION_PROJECT.summary}
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="flex flex-col gap-space-md">
              {INNOVATION_PROJECT.pillars.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-space-sm">
                  <span className="text-primary-container font-bold text-[14px] mt-0.5 select-none">
                    ◆
                  </span>
                  <div className="flex flex-col">
                    <h4 className="font-headline-sm text-body-md font-bold text-inverse-surface">
                      {pillar.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-secondary">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Recessed Telemetry Panel + Interactive Schematic Diagram */}
          <div className="lg:col-span-5 flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-2xl border border-white/[0.08]">
            <div className="flex items-center justify-between gap-2">
              <span className="font-telemetry-md text-label-badge text-primary-container font-bold tracking-widest">
                PROJECT TELEMETRY // SCT-2024
              </span>
              <span className="w-2 h-2 rounded-full bg-primary-container" />
            </div>

            {/* Interactive Pneumatic Pressure Mode Selector */}
            <div
              role="group"
              aria-label="Pneumatic pressure calibration"
              className="flex items-center justify-between gap-1 p-1 rounded-lg bg-[#050505] border border-white/[0.08]"
            >
              {(['low', 'optimal', 'peak'] as PressureMode[]).map((mode) => {
                const isSelected = pressureMode === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setPressureMode(mode)}
                    className={`flex-1 py-1.5 px-2 rounded text-[11px] font-label-badge uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container ${
                      isSelected
                        ? 'bg-primary-container text-inverse-surface font-semibold shadow-[0_0_16px_rgba(255,40,0,0.35)]'
                        : 'text-secondary hover:text-inverse-surface hover:bg-surface-container-low'
                    }`}
                  >
                    {PRESSURE_PROFILES[mode].label} ({PRESSURE_PROFILES[mode].barLabel})
                  </button>
                );
              })}
            </div>

            {/* Technical Schematic Graphic */}
            <div className="w-full bg-[#050505] p-space-sm rounded-lg overflow-hidden shadow-inner flex flex-col items-center border border-white/[0.06]">
              <div className="w-full flex justify-between gap-2 font-label-caption text-label-caption text-secondary mb-1">
                <span>SCHEMATIC: CAVITY PENETRATION</span>
                <span className="text-primary-container font-medium">
                  {activeProfile.ratioText}
                </span>
              </div>
              <svg
                className="w-full h-auto text-primary-container"
                fill="none"
                viewBox="0 0 380 140"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Soil Cavity Tool pneumatic airflow penetration schematic"
              >
                {/* Ground Plane */}
                <line
                  stroke="rgba(255,255,255,0.2)"
                  strokeDasharray="4 3"
                  strokeWidth="1.5"
                  x1="20"
                  x2="360"
                  y1="50"
                  y2="50"
                />
                <text
                  fill="rgba(255,255,255,0.45)"
                  fontFamily="JetBrains Mono"
                  fontSize="9"
                  x="25"
                  y="44"
                >
                  SOIL SURFACE LEVEL (Z-AXIS 0.0)
                </text>

                {/* Injector Nozzle */}
                <rect
                  fill="#1C1B1B"
                  height="42"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  width="20"
                  x="180"
                  y="10"
                />
                <polygon
                  fill="currentColor"
                  opacity="0.9"
                  points="175,52 205,52 190,68"
                />

                {/* Air Stream Vectors */}
                <path
                  d="M190 68 V115"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
                <path
                  d={`M190 85 Q${190 - activeProfile.rx * 0.55} 100 ${190 - activeProfile.rx * 0.9} 125`}
                  stroke="currentColor"
                  strokeDasharray="3 3"
                  strokeWidth="1.5"
                />
                <path
                  d={`M190 85 Q${190 + activeProfile.rx * 0.55} 100 ${190 + activeProfile.rx * 0.9} 125`}
                  stroke="currentColor"
                  strokeDasharray="3 3"
                  strokeWidth="1.5"
                />
                <path
                  d={`M190 98 Q${190 - activeProfile.rx * 0.35} 110 ${190 - activeProfile.rx * 0.5} 130`}
                  stroke="currentColor"
                  strokeDasharray="2 2"
                  strokeWidth="1.5"
                />
                <path
                  d={`M190 98 Q${190 + activeProfile.rx * 0.35} 110 ${190 + activeProfile.rx * 0.5} 130`}
                  stroke="currentColor"
                  strokeDasharray="2 2"
                  strokeWidth="1.5"
                />

                {/* Cavity Pocket */}
                <ellipse
                  cx="190"
                  cy="115"
                  fill={`rgba(255,40,0,${activeProfile.opacity})`}
                  rx={activeProfile.rx}
                  ry={activeProfile.ry}
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="transition-all duration-300"
                />
                <circle cx="190" cy="115" fill="#FFFFFF" r="3" />
                <text
                  fill="rgba(255,255,255,0.65)"
                  fontFamily="JetBrains Mono"
                  fontSize="9"
                  x="266"
                  y="118"
                >
                  Δ AERATION CHAMBER
                </text>
              </svg>
            </div>

            {/* Key-Value Specifications */}
            <div className="flex flex-col gap-2 font-telemetry-md text-body-sm">
              {INNOVATION_PROJECT.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between gap-2 py-1.5 bg-surface-container-low px-space-sm rounded border border-white/[0.04]"
                >
                  <span className="text-on-surface-variant font-label-caption text-label-caption uppercase tracking-wider">
                    {spec.label}
                  </span>
                  <span
                    className={
                      spec.highlight
                        ? 'text-primary-container font-bold'
                        : 'text-inverse-surface font-semibold'
                    }
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
