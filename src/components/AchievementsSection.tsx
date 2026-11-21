import { ArrowUpRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { HONORS_LIST, HonorItem } from '../data/portfolioData';

type FilterScope = 'All' | 'International' | 'Regional';

export function AchievementsSection() {
  const [filterScope, setFilterScope] = useState<FilterScope>('All');
  const [selectedHonor, setSelectedHonor] = useState<HonorItem | null>(null);

  useEffect(() => {
    if (!selectedHonor) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedHonor(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedHonor]);

  const filteredHonors =
    filterScope === 'All'
      ? HONORS_LIST
      : HONORS_LIST.filter((honor) => honor.scope === filterScope);

  return (
    <section
      id="achievements"
      className="w-full max-w-[1280px] mx-auto px-gutter md:px-margin py-space-xl"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md mb-space-lg">
        <div className="flex flex-col gap-space-xs">
          <div className="inline-flex items-center gap-2">
            <span className="font-label-caption text-label-caption tracking-[0.16em] uppercase text-primary-container font-semibold">
              05 // TRACK RECORD
            </span>
            <span className="h-[1px] w-12 bg-primary-container/40" />
          </div>
          <h2 className="font-headline-lg text-headline-md sm:text-headline-lg font-extrabold tracking-tight text-inverse-surface">
            Honors &amp; Achievements
          </h2>
        </div>

        {/* Interactive Scope Filter */}
        <div
          role="group"
          aria-label="Filter honors by competition scope"
          className="inline-flex items-center gap-1 p-1 rounded-lg bg-surface-container-low border border-white/[0.08] self-start sm:self-auto"
        >
          {(['All', 'International', 'Regional'] as FilterScope[]).map((scope) => {
            const active = filterScope === scope;
            return (
              <button
                key={scope}
                type="button"
                onClick={() => setFilterScope(scope)}
                className={`px-3 py-1.5 rounded text-xs font-label-badge uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container ${
                  active
                    ? 'bg-primary-container text-inverse-surface font-semibold'
                    : 'text-secondary hover:text-inverse-surface'
                }`}
              >
                {scope}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        {filteredHonors.map((honor) => (
          <button
            key={honor.id}
            type="button"
            onClick={() => setSelectedHonor(honor)}
            className="text-left relative bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between gap-space-md shadow-xl group hover:bg-surface-container transition-all border border-white/[0.08] hover:border-primary-container/45 overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
          >
            <div
              className={`absolute left-0 top-0 bottom-0 w-1 transition-colors ${
                honor.highlight
                  ? 'bg-primary-container'
                  : 'bg-white/20 group-hover:bg-primary-container'
              }`}
            />

            <div className="flex flex-col gap-space-sm w-full">
              <div className="flex justify-between items-center gap-2">
                <span
                  className={`font-telemetry-md text-label-badge font-bold tracking-wider uppercase ${
                    honor.highlight ? 'text-primary-container' : 'text-secondary'
                  }`}
                >
                  {honor.scopeLabel}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-surface-container-highest text-inverse-surface font-label-badge text-label-badge tabular-nums">
                  {honor.year}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <span className="text-2xl shrink-0">{honor.medal}</span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-inverse-surface leading-snug">
                  {honor.title}
                </h3>
              </div>

              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                {honor.description}
              </p>
            </div>

            <div className="pt-space-xs w-full flex items-center justify-between gap-2 text-on-surface-variant font-label-caption text-label-caption border-t border-white/[0.06]">
              <span>{honor.location}</span>
              <span
                className={`inline-flex items-center gap-1 font-semibold ${
                  honor.highlight ? 'text-primary-container' : 'text-inverse-surface'
                }`}
              >
                {honor.badgeText}
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Achievement Detail Modal */}
      {selectedHonor && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="honor-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setSelectedHonor(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-surface-container-lowest border border-white/[0.12] p-space-lg md:p-space-xl shadow-2xl flex flex-col gap-space-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl">{selectedHonor.medal}</span>
                <div className="flex flex-col">
                  <span className="font-label-badge text-label-badge text-primary-container uppercase tracking-widest">
                    {selectedHonor.scopeLabel} · {selectedHonor.year}
                  </span>
                  <h3
                    id="honor-modal-title"
                    className="font-headline-sm text-headline-sm font-bold text-inverse-surface"
                  >
                    {selectedHonor.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedHonor(null)}
                aria-label="Close achievement details"
                className="p-2 rounded-lg bg-surface-container text-secondary hover:text-inverse-surface hover:bg-surface-container-high transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              {selectedHonor.description}
            </p>

            <div className="bg-surface-container-low rounded-xl p-space-md border border-white/[0.06] flex flex-col gap-2">
              <span className="font-label-caption text-label-caption text-on-surface-variant uppercase tracking-widest">
                RECORD VERIFICATION
              </span>
              <ul className="flex flex-col gap-1.5">
                {selectedHonor.details.map((detail) => (
                  <li
                    key={detail}
                    className="font-body-sm text-body-sm text-inverse-surface flex items-start gap-2"
                  >
                    <span className="text-primary-container font-bold">◆</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-2 text-label-caption font-label-caption text-secondary">
              <span>LOCATION: {selectedHonor.location}</span>
              <span className="text-primary-container font-semibold">
                {selectedHonor.badgeText}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
