import { Check, Copy, Download, MapPin, School, Trophy, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { EDUCATION_RECORD, INNOVATION_PROJECT, PERSONAL_INFO } from '../data/portfolioData';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToContact: () => void;
}

export function ProfileModal({ isOpen, onClose, onGoToContact }: ProfileModalProps) {
  const [copiedJson, setCopiedJson] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const dossierPayload = {
    personal: {
      fullName: PERSONAL_INFO.fullName,
      preferredName: PERSONAL_INFO.preferredName,
      dob: PERSONAL_INFO.dob,
      pob: PERSONAL_INFO.pob,
      currentBase: PERSONAL_INFO.currentBase,
      email: PERSONAL_INFO.email,
      phone: PERSONAL_INFO.phoneDisplay,
    },
    education: {
      institution: EDUCATION_RECORD.institution,
      period: EDUCATION_RECORD.period,
      track: EDUCATION_RECORD.track,
    },
    flagshipProject: {
      name: INNOVATION_PROJECT.title,
      code: INNOVATION_PROJECT.code,
      award: INNOVATION_PROJECT.awardPill,
    },
  };

  const handleDownloadJson = () => {
    const blob = new Blob([JSON.stringify(dossierPayload, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'guntur-sudrajat-dossier.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(dossierPayload, null, 2));
      setCopiedJson(true);
      window.setTimeout(() => setCopiedJson(false), 2500);
    } catch {
      setCopiedJson(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-dossier-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-surface-container-lowest border border-white/[0.12] p-space-lg md:p-space-xl shadow-2xl flex flex-col gap-space-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-label-badge text-label-badge text-primary-container uppercase tracking-widest">
              CANDIDATE DOSSIER // 2026
            </span>
            <h3
              id="profile-dossier-title"
              className="font-headline-sm text-headline-sm font-bold text-inverse-surface"
            >
              {PERSONAL_INFO.fullName}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dossier modal"
            className="p-2 rounded-lg bg-surface-container text-secondary hover:text-inverse-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-space-sm bg-surface-container-low p-space-md rounded-xl border border-white/[0.06]">
          <div className="flex items-center gap-2.5 text-body-sm text-secondary">
            <MapPin className="w-4 h-4 text-primary-container shrink-0" />
            <span>
              Born in {PERSONAL_INFO.pob} ({PERSONAL_INFO.dob}) · Based in{' '}
              {PERSONAL_INFO.currentBase}
            </span>
          </div>
          <div className="flex items-center gap-2.5 text-body-sm text-secondary">
            <School className="w-4 h-4 text-primary-container shrink-0" />
            <span>
              {EDUCATION_RECORD.institution} ({EDUCATION_RECORD.period})
            </span>
          </div>
          <div className="flex items-center gap-2.5 text-body-sm text-secondary">
            <Trophy className="w-4 h-4 text-primary-container shrink-0" />
            <span>{INNOVATION_PROJECT.awardPill}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-space-sm pt-1">
          <button
            type="button"
            onClick={() => {
              onClose();
              onGoToContact();
            }}
            className="flex-1 py-2.5 px-4 rounded-lg bg-primary-container text-inverse-surface font-body-sm font-semibold hover:shadow-[0_0_24px_rgba(255,40,0,0.45)] transition-all cursor-pointer whitespace-nowrap"
          >
            Contact Guntur
          </button>
          <button
            type="button"
            onClick={handleDownloadJson}
            className="inline-flex items-center gap-1.5 py-2.5 px-3.5 rounded-lg bg-surface-container text-inverse-surface font-body-sm font-medium hover:bg-surface-container-high transition-colors border border-white/[0.08] cursor-pointer whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            <span>Export JSON</span>
          </button>
          <button
            type="button"
            onClick={handleCopyJson}
            aria-label="Copy profile JSON"
            className="inline-flex items-center gap-1.5 py-2.5 px-3 rounded-lg bg-surface-container text-inverse-surface hover:bg-surface-container-high transition-colors border border-white/[0.08] cursor-pointer"
          >
            {copiedJson ? (
              <Check className="w-4 h-4 text-primary-container" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
