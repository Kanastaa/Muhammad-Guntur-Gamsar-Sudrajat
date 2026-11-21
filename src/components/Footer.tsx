export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-white/[0.08] relative z-10">
      <div className="w-full px-gutter md:px-margin py-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="font-label-caption text-label-caption text-on-surface-variant">
          © 2026 Muhammad Guntur Gamsar Sudrajat. All rights reserved.
        </div>
        <div className="font-telemetry-md text-telemetry-md text-secondary flex items-center gap-space-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
          <span>Palembang, ID • Ferrari LaFerrari Edition</span>
        </div>
      </div>
    </footer>
  );
}
