import { ClipboardCheck, Cog, Package, Speaker, Wrench } from 'lucide-react';
import { DutyItem, ORGANIZATION_EXPERIENCE } from '../data/portfolioData';

function DutyIcon({ icon }: { icon: DutyItem['icon'] }) {
  switch (icon) {
    case 'inventory':
      return <Package className="w-5 h-5 shrink-0" />;
    case 'permit':
      return <ClipboardCheck className="w-5 h-5 shrink-0" />;
    case 'maintenance':
      return <Wrench className="w-5 h-5 shrink-0" />;
    case 'event':
      return <Speaker className="w-5 h-5 shrink-0" />;
  }
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full max-w-[1280px] mx-auto px-gutter md:px-margin py-space-xl"
    >
      <div className="flex flex-col gap-space-xs mb-space-lg">
        <div className="inline-flex items-center gap-2">
          <span className="font-label-caption text-label-caption tracking-[0.16em] uppercase text-primary-container font-semibold">
            03 // LEADERSHIP &amp; OPERATIONS
          </span>
          <span className="h-[1px] w-12 bg-primary-container/40" />
        </div>
        <h2 className="font-headline-lg text-headline-md sm:text-headline-lg font-extrabold tracking-tight text-inverse-surface">
          Organization Experience
        </h2>
      </div>

      {/* Timeline Master Card */}
      <div className="relative bg-surface-container-low rounded-2xl p-space-lg md:p-space-xl shadow-xl flex flex-col gap-space-lg overflow-hidden border border-white/[0.08]">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0 shadow-md border border-white/[0.08]">
              <Cog className="w-6 h-6 text-primary-container" />
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-inverse-surface">
                {ORGANIZATION_EXPERIENCE.title}
              </h3>
              <span className="font-body-sm text-body-sm text-secondary">
                {ORGANIZATION_EXPERIENCE.subtitle}
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container text-inverse-surface font-label-badge text-label-badge tracking-widest uppercase self-start md:self-auto whitespace-nowrap border border-white/[0.08]">
            <span className="w-2 h-2 rounded-full bg-primary-container" />
            <span className="tabular-nums">{ORGANIZATION_EXPERIENCE.tenure}</span>
          </div>
        </div>

        {/* 2x2 Duty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {ORGANIZATION_EXPERIENCE.duties.map((duty) => (
            <div
              key={duty.id}
              className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-xs hover:bg-surface-container-high transition-colors shadow-sm border border-white/[0.06]"
            >
              <div className="flex items-center gap-2 text-primary-container font-telemetry-md text-telemetry-md font-semibold">
                <DutyIcon icon={duty.icon} />
                <span>{duty.title}</span>
              </div>
              <p className="font-body-md text-body-sm text-secondary leading-relaxed">
                {duty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
