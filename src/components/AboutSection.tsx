import { Award, Dna } from 'lucide-react';
import { BIODATA_ITEMS, EDUCATION_RECORD, PERSONAL_INFO } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section id="about" className="w-full max-w-[1280px] mx-auto px-gutter md:px-margin py-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
        {/* Left Column: Biography & Biodata */}
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <div className="inline-flex items-center gap-2">
              <span className="font-label-caption text-label-caption tracking-[0.16em] uppercase text-primary-container font-semibold">
                01 // PROFILE
              </span>
              <span className="h-[1px] w-12 bg-primary-container/40" />
            </div>
            <h2 className="font-headline-lg text-headline-md sm:text-headline-lg font-extrabold tracking-tight text-inverse-surface text-balance">
              Precision in thought, adaptability in action.
            </h2>
          </div>

          <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          {/* Biodata Strip (3 Dark Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-sm">
            {BIODATA_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative bg-surface-container-low p-space-md rounded-lg flex flex-col gap-1 overflow-hidden group hover:bg-surface-container transition-colors shadow-sm border border-white/[0.06]"
              >
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 ${
                    item.accent ? 'bg-primary-container' : 'bg-white/20'
                  }`}
                />
                <span className="font-label-caption text-label-caption tracking-widest text-on-surface-variant uppercase">
                  {item.label}
                </span>
                {item.isScore ? (
                  <div className="flex items-baseline gap-1">
                    <span className="font-telemetry-lg text-telemetry-lg text-inverse-surface font-bold tabular-nums">
                      {item.value}
                    </span>
                    <span className="font-label-caption text-label-caption text-secondary">
                      / 100 AVG
                    </span>
                  </div>
                ) : (
                  <span className="font-headline-sm text-body-md font-semibold text-inverse-surface">
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Elevated Glass Education Bento */}
        <div className="lg:col-span-5 relative bg-surface-container-lowest rounded-xl p-space-lg flex flex-col gap-space-md shadow-2xl backdrop-blur-md border border-white/[0.08]">
          <div className="flex items-center justify-between gap-2">
            <span className="px-3 py-1 rounded bg-surface-container text-primary-container font-label-badge text-label-badge font-semibold tracking-wider tabular-nums">
              {EDUCATION_RECORD.period}
            </span>
            <span className="font-label-caption text-label-caption uppercase tracking-widest text-on-surface-variant text-right">
              EDUCATION RECORD
            </span>
          </div>

          <div className="flex flex-col gap-space-xs">
            <h3 className="font-headline-sm text-headline-sm font-bold text-inverse-surface leading-tight">
              {EDUCATION_RECORD.institution}
            </h3>
            <p className="font-body-sm text-body-sm text-secondary flex items-center gap-1.5">
              <Dna className="w-4 h-4 text-primary-container shrink-0" />
              <span>{EDUCATION_RECORD.track}</span>
            </p>
          </div>

          {/* Highlight Callout Box */}
          <div className="relative bg-surface-container p-space-md rounded-lg flex flex-col gap-2 shadow-inner overflow-hidden border border-white/[0.05]">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary-container" />
            <div className="flex items-center gap-2">
              <Award className="w-[18px] h-[18px] text-primary-container shrink-0" />
              <span className="font-label-badge text-label-badge text-primary-container uppercase font-bold tracking-wider">
                {EDUCATION_RECORD.highlightTitle}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-inverse-surface leading-relaxed">
              {EDUCATION_RECORD.highlightText}
            </p>
          </div>

          {/* Secondary Specs Details */}
          <div className="grid grid-cols-2 gap-space-sm pt-space-xs text-on-surface-variant font-label-caption text-label-caption">
            <div className="flex flex-col gap-0.5 bg-surface-container-low p-2.5 rounded border border-white/[0.04]">
              <span>CURRICULUM FOCUS</span>
              <span className="text-inverse-surface font-semibold text-body-sm font-body-sm">
                {EDUCATION_RECORD.curriculumFocus}
              </span>
            </div>
            <div className="flex flex-col gap-0.5 bg-surface-container-low p-2.5 rounded border border-white/[0.04]">
              <span>LANGUAGE APPARATUS</span>
              <span className="text-inverse-surface font-semibold text-body-sm font-body-sm">
                {EDUCATION_RECORD.languageTrack}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
