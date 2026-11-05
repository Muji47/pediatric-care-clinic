import React, { useState } from 'react';
import { AlertCircle, Phone, X, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

interface EmergencyBannerProps {
  onOpenSymptomChecker?: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onOpenSymptomChecker }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside 
      aria-label="Pediatric triage and urgent guidance"
      className="bg-amber-500/10 border-b border-amber-200/80 text-amber-950 px-4 py-2.5 transition-all text-xs sm:text-sm"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 text-center sm:text-left">
          <span className="p-1 rounded-full bg-amber-100 text-amber-800 shrink-0">
            <AlertCircle className="w-4 h-4" />
          </span>
          <p className="font-medium text-slate-800">
            <strong className="text-amber-900 font-semibold">Anxious about severe symptoms?</strong>{' '}
            If your child has severe difficulty breathing, blue lips, or is unresponsive, call <span className="font-bold text-red-600">911</span> immediately.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {onOpenSymptomChecker && (
            <button
              onClick={onOpenSymptomChecker}
              className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-900 hover:underline"
            >
              <span>Check Symptoms Guide</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}

          <a 
            href={`tel:${CLINIC_INFO.emergencyPhone.replace(/\D/g, '')}`}
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition shadow-sm text-xs"
          >
            <Phone className="w-3 h-3" />
            <span>Nurse Triage: {CLINIC_INFO.phone}</span>
          </a>

          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="p-1 text-slate-400 hover:text-slate-600 rounded-md ml-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
