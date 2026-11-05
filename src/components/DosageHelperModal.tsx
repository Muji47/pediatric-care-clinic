import React, { useState } from 'react';
import { X, Calculator, AlertTriangle, ShieldCheck, Info } from 'lucide-react';

interface DosageHelperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DosageHelperModal: React.FC<DosageHelperModalProps> = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState<'lbs' | 'kg'>('lbs');
  const [weight, setWeight] = useState<number>(24); // default ~24 lbs (toddler)

  if (!isOpen) return null;

  // Standard pediatric dosages:
  // Acetaminophen (Tylenol): 10 - 15 mg/kg per dose every 4-6 hours (max 5 doses in 24 hrs)
  // Standard liquid concentration: 160 mg / 5 mL (which is 32 mg/mL)
  // Ibuprofen (Motrin/Advil): 10 mg/kg per dose every 6-8 hours (children 6 months and older)
  // Standard liquid concentration: 100 mg / 5 mL (20 mg/mL) or Infant drops 50 mg / 1.25 mL (40 mg/mL)

  const weightInKg = unit === 'lbs' ? weight * 0.453592 : weight;

  // Acetaminophen 12.5 mg/kg target
  const acetMg = Math.round(weightInKg * 12.5);
  // Volume in mL for 160mg/5mL (32 mg/mL):
  const acetMl = (acetMg / 32).toFixed(1);

  // Ibuprofen 10 mg/kg target
  const ibuMg = Math.round(weightInKg * 10);
  // Volume in mL for 100mg/5mL (20 mg/mL):
  const ibuMl = (ibuMg / 20).toFixed(1);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-labelledby="dosage-modal-title"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          aria-label="Close dosage calculator"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h2 id="dosage-modal-title" className="text-xl font-bold font-display text-slate-900">
              Pediatric Fever & Dosage Helper
            </h2>
            <p className="text-xs text-slate-500">
              Evidence-based weight dosage guidelines
            </p>
          </div>
        </div>

        {/* Safety Disclaimer Warning */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 mb-5 text-xs text-amber-900 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Critical Safety Rules:</strong> Always dose by your child's <em>current weight</em>, not age. Never give Aspirin to children under 19 (risk of fatal Reye's Syndrome). Never give Ibuprofen to infants under 6 months without direct doctor instructions.
          </p>
        </div>

        {/* Weight Selector */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-6 space-y-3">
          <div className="flex justify-between items-center">
            <label htmlFor="child-weight" className="text-sm font-semibold text-slate-800">
              Child's Approximate Weight:
            </label>
            <div className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => {
                  if (unit !== 'lbs') {
                    setWeight(Math.round(weight * 2.20462));
                    setUnit('lbs');
                  }
                }}
                className={`px-3 py-1 rounded-md transition ${unit === 'lbs' ? 'bg-brand-600 text-white' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Pounds (lbs)
              </button>
              <button
                type="button"
                onClick={() => {
                  if (unit !== 'kg') {
                    setWeight(Math.round(weight * 0.453592));
                    setUnit('kg');
                  }
                }}
                className={`px-3 py-1 rounded-md transition ${unit === 'kg' ? 'bg-brand-600 text-white' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Kilograms (kg)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <input
              id="child-weight"
              type="range"
              min={unit === 'lbs' ? 6 : 3}
              max={unit === 'lbs' ? 100 : 45}
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full accent-brand-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <span className="text-xl font-bold text-brand-800 shrink-0 w-20 text-right">
              {weight} {unit}
            </span>
          </div>

          <div className="text-[11px] text-slate-500 flex justify-between">
            <span>Infant ~12 lbs / 5.5 kg</span>
            <span>Toddler ~25 lbs / 11 kg</span>
            <span>Child ~50 lbs / 23 kg</span>
          </div>
        </div>

        {/* Calculated Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Acetaminophen Box */}
          <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-teal-900 text-sm">Acetaminophen</span>
              <span className="text-[10px] uppercase font-bold bg-teal-200 text-teal-800 px-2 py-0.5 rounded-full">Tylenol</span>
            </div>
            <p className="text-xs text-teal-700 mb-3">Concentration: 160 mg / 5 mL</p>

            <div className="bg-white p-3 rounded-xl border border-teal-100 shadow-sm text-center">
              <span className="text-2xl font-black text-teal-800">{acetMl} mL</span>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">({acetMg} mg dose)</p>
            </div>

            <p className="text-[11px] text-teal-900/80 mt-2.5">
              • Wait at least <strong>4 to 6 hours</strong> between doses.<br/>
              • Do not exceed 5 doses in 24 hours.
            </p>
          </div>

          {/* Ibuprofen Box */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-amber-900 text-sm">Ibuprofen</span>
              <span className="text-[10px] uppercase font-bold bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">Motrin / Advil</span>
            </div>
            <p className="text-xs text-amber-700 mb-3">Concentration: 100 mg / 5 mL</p>

            <div className="bg-white p-3 rounded-xl border border-amber-100 shadow-sm text-center">
              <span className="text-2xl font-black text-amber-900">{ibuMl} mL</span>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">({ibuMg} mg dose)</p>
            </div>

            <p className="text-[11px] text-amber-900/80 mt-2.5">
              • Only for children <strong>6 months and older</strong>.<br/>
              • Wait at least <strong>6 to 8 hours</strong> between doses.<br/>
              • Best given with a light snack or milk.
            </p>
          </div>
        </div>

        {/* Tip info */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-slate-50 p-3 rounded-xl">
          <Info className="w-4 h-4 text-brand-600 shrink-0" />
          <span>Always verify the concentration listed on your specific bottle before administering medicine. Use the included syringe, not a household kitchen spoon.</span>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
