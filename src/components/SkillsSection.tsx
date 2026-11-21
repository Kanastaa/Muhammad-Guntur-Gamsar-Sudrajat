import { Brain, Compass, Cpu, Terminal, Users, Wrench } from 'lucide-react';
import {
  COGNITIVE_SKILLS,
  CognitiveSkill,
  TECHNICAL_SKILLS,
} from '../data/portfolioData';

function CognitiveIcon({ icon }: { icon: CognitiveSkill['icon'] }) {
  switch (icon) {
    case 'thinking':
      return <Cpu className="w-5 h-5 text-primary-container" />;
    case 'engineering':
      return <Wrench className="w-5 h-5 text-primary-container" />;
    case 'adaptability':
      return <Compass className="w-5 h-5 text-primary-container" />;
    case 'collaboration':
      return <Users className="w-5 h-5 text-primary-container" />;
  }
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full max-w-[1280px] mx-auto px-gutter md:px-margin py-space-xl"
    >
      <div className="flex flex-col gap-space-xs mb-space-lg">
        <div className="inline-flex items-center gap-2">
          <span className="font-label-caption text-label-caption tracking-[0.16em] uppercase text-primary-container font-semibold">
            04 // CAPABILITIES
          </span>
          <span className="h-[1px] w-12 bg-primary-container/40" />
        </div>
        <h2 className="font-headline-lg text-headline-md sm:text-headline-lg font-extrabold tracking-tight text-inverse-surface">
          Core Skills &amp; Competencies
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-start">
        {/* 1) Technical & Digital Tools with Calibrated Meters */}
        <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-md shadow-xl border border-white/[0.08]">
          <div className="flex items-center justify-between pb-space-xs">
            <h3 className="font-headline-sm text-headline-sm font-bold text-inverse-surface flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary-container shrink-0" />
              <span>Technical &amp; Digital Tools</span>
            </h3>
            <span className="font-label-caption text-label-caption text-secondary uppercase tracking-widest">
              CALIBRATED
            </span>
          </div>

          {TECHNICAL_SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col gap-1.5 p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors border border-white/[0.05]"
            >
              <div className="flex justify-between items-center gap-2 font-telemetry-md text-telemetry-md">
                <span className="text-inverse-surface font-semibold">{skill.name}</span>
                <span
                  className={`font-label-badge text-label-badge tabular-nums whitespace-nowrap ${
                    skill.active ? 'text-primary-container' : 'text-secondary'
                  }`}
                >
                  {skill.levelLabel}
                </span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-container rounded-full transition-all duration-500"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 2) Cognitive & Interpersonal Strengths */}
        <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-md shadow-xl border border-white/[0.08]">
          <div className="flex items-center justify-between pb-space-xs">
            <h3 className="font-headline-sm text-headline-sm font-bold text-inverse-surface flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary-container shrink-0" />
              <span>Cognitive &amp; Interpersonal</span>
            </h3>
            <span className="font-label-caption text-label-caption text-secondary uppercase tracking-widest">
              TACTICAL
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
            {COGNITIVE_SKILLS.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container p-space-md rounded-lg flex flex-col gap-1.5 shadow-sm border border-white/[0.05] hover:bg-surface-container-high transition-colors"
              >
                <CognitiveIcon icon={item.icon} />
                <h4 className="font-headline-sm text-body-md font-bold text-inverse-surface">
                  {item.title}
                </h4>
                <p className="font-body-sm text-body-sm text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
