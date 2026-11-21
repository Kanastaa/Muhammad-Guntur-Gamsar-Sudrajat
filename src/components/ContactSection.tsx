import { Check, CheckCircle2, Copy, ExternalLink, Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback copy method if clipboard API is restricted
      const input = document.createElement('input');
      input.value = PERSONAL_INFO.email;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-[1280px] mx-auto px-gutter md:px-margin pt-space-xl pb-space-xl"
    >
      <div className="relative bg-gradient-to-b from-surface-container to-surface-container-lowest rounded-2xl p-space-lg md:p-space-xl shadow-2xl flex flex-col gap-space-lg overflow-hidden border border-white/[0.08]">
        {/* Top Eyebrow */}
        <div className="flex flex-col gap-space-xs">
          <div className="inline-flex items-center gap-2">
            <span className="font-label-caption text-label-caption tracking-[0.16em] uppercase text-primary-container font-semibold">
              06 // CONNECT
            </span>
            <span className="h-[1px] w-12 bg-primary-container/40" />
          </div>
          <h2 className="font-headline-lg text-headline-md sm:text-headline-lg font-extrabold tracking-tight text-inverse-surface">
            Let&apos;s build something remarkable.
          </h2>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
            Open for university collaborations, engineering research, youth organizational roles,
            and high-impact innovation projects.
          </p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
          {/* Email Action Card */}
          <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between gap-space-md shadow-md border border-white/[0.06]">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-caption text-label-caption uppercase tracking-wider text-secondary">
                  DIRECT EMAIL TRANSMISSION
                </span>
                <span className="font-telemetry-md text-telemetry-md font-semibold text-inverse-surface truncate">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-space-sm">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-space-md rounded-lg bg-primary-container text-inverse-surface font-body-sm text-body-sm font-semibold hover:shadow-[0_0_24px_rgba(255,40,0,0.45)] transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Send className="w-[17px] h-[17px]" />
                <span>Send Mail</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                title="Copy email address"
                className="inline-flex items-center justify-center p-2.5 rounded-lg bg-surface-container text-inverse-surface hover:bg-surface-container-highest transition-colors shadow-sm border border-white/[0.08] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
              >
                {copied ? (
                  <Check className="w-[18px] h-[18px] text-primary-container" />
                ) : (
                  <Copy className="w-[18px] h-[18px]" />
                )}
              </button>
            </div>
          </div>

          {/* WhatsApp Action Card */}
          <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between gap-space-md shadow-md border border-white/[0.06]">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-caption text-label-caption uppercase tracking-wider text-secondary">
                  INSTANT TELEMETRY // WHATSAPP
                </span>
                <span className="font-telemetry-md text-telemetry-md font-semibold text-inverse-surface tabular-nums">
                  {PERSONAL_INFO.phoneDisplay}
                </span>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-space-md rounded-lg bg-surface-container-highest text-inverse-surface font-body-sm text-body-sm font-semibold hover:bg-surface-bright transition-all shadow-sm border border-white/[0.08] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
            >
              <ExternalLink className="w-[17px] h-[17px]" />
              <span>Initiate WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-lg shadow-2xl font-telemetry-md text-telemetry-md transition-all duration-300 ${
          copied
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <CheckCircle2 className="w-[18px] h-[18px] text-primary-container shrink-0" />
        <span>Email copied to clipboard!</span>
      </div>
    </section>
  );
}
