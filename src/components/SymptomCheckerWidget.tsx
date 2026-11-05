import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Calendar, 
  ArrowRight,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { SpecialtyId } from '../types';

interface SymptomCheckerProps {
  onSelectBookingWithReason: (specialty: SpecialtyId, description: string) => void;
}

interface QuestionFlow {
  specialty: SpecialtyId;
  title: string;
  symptoms: Array<{
    id: string;
    label: string;
    urgency: 'home' | 'clinic' | 'urgent';
    advice: string;
    actionLabel: string;
  }>;
}

export const SymptomCheckerWidget: React.FC<SymptomCheckerProps> = ({ onSelectBookingWithReason }) => {
  const [selectedCategory, setSelectedCategory] = useState<SpecialtyId>('throat');
  const [selectedSymptomId, setSelectedSymptomId] = useState<string | null>(null);

  const categories: Array<{ id: SpecialtyId; label: string; icon: string; subtitle: string }> = [
    { id: 'throat', label: "Throat & Tonsils", icon: "🧣", subtitle: "Soreness, swallowing pain, strep" },
    { id: 'cold', label: "Colds & Breathing", icon: "🌬️", subtitle: "Cough, croup, congestion, fever" },
    { id: 'skin', label: "Skin & Eczema", icon: "✨", subtitle: "Rashes, itching, blisters, cradle cap" },
    { id: 'bone', label: "Bones & Limping", icon: "🦴", subtitle: "Toddler limps, sprains, falls" },
  ];

  const flows: Record<SpecialtyId, QuestionFlow> = {
    throat: {
      specialty: 'throat',
      title: "What is your child experiencing in their throat?",
      symptoms: [
        {
          id: 'th-1',
          label: "Mild scratchy throat with runny nose & clear cough (Drinking liquids normally)",
          urgency: 'home',
          advice: "Likely a mild viral cold. Offer cool liquids, ice pops, and honey water (if older than 1 year). Rest and monitor.",
          actionLabel: "Home Care & Hydration"
        },
        {
          id: 'th-2',
          label: "Sudden sore throat with fever > 101°F, swollen neck glands, NO runny nose",
          urgency: 'clinic',
          advice: "Possible Strep infection. We recommend a rapid 10-minute in-clinic swab before starting antibiotics.",
          actionLabel: "Book 10-Min Strep Test"
        },
        {
          id: 'th-3',
          label: "Difficulty swallowing saliva, continuous drooling, unable to open mouth or breathe easily",
          urgency: 'urgent',
          advice: "Red flag for acute epiglottitis or peritonsillar abscess. Please seek emergency medical care immediately.",
          actionLabel: "Emergency Attention Required"
        }
      ]
    },
    cold: {
      specialty: 'cold',
      title: "What are your child's cold or respiratory symptoms?",
      symptoms: [
        {
          id: 'co-1',
          label: "Runny nose, sneezing, mild cough, alert and playing normally",
          urgency: 'home',
          advice: "Standard viral upper respiratory infection. Use saline nasal spray and a cool mist humidifier at night.",
          actionLabel: "Comfort Care at Home"
        },
        {
          id: 'co-2',
          label: "Barking 'seal-like' cough at night, raspy voice, or wheezing after 3+ days",
          urgency: 'clinic',
          advice: "Suspicious for Croup or reactive airway / bronchiolitis. Our pediatrician should evaluate airway inflammation.",
          actionLabel: "Book Respiratory Evaluation"
        },
        {
          id: 'co-3',
          label: "Chest ribs sinking in (retractions), nostril flaring, or lips looking pale / bluish",
          urgency: 'urgent',
          advice: "Sign of respiratory distress. Immediate medical care or emergency services (911) needed.",
          actionLabel: "Emergency Care Needed"
        }
      ]
    },
    skin: {
      specialty: 'skin',
      title: "What does the skin irritation or rash look like?",
      symptoms: [
        {
          id: 'sk-1',
          label: "Dry, rough red patches in elbow creases, knees, or cheeks; mild itching",
          urgency: 'home',
          advice: "Typical mild atopic eczema. Practice 'soak & seal' with thick ointment (ceramide/petroleum). Avoid scented soaps.",
          actionLabel: "Moisture Barrier Routine"
        },
        {
          id: 'sk-2',
          label: "Spreading rash, blisters on hands/feet/mouth, or weeping honey-colored crusts",
          urgency: 'clinic',
          advice: "Likely Hand-Foot-Mouth, impetigo, or acute eczema flare needing prescription barrier soothing therapy.",
          actionLabel: "Book Pediatric Skin Check"
        },
        {
          id: 'sk-3',
          label: "Tiny purple or dark red pinprick spots that DO NOT lighten when a clear glass is pressed on them",
          urgency: 'urgent',
          advice: "Non-blanching petechiae can indicate a serious systemic infection. Seek immediate emergency evaluation.",
          actionLabel: "Emergency Care Needed"
        }
      ]
    },
    bone: {
      specialty: 'bone',
      title: "What bone, joint, or walking difficulty did you observe?",
      symptoms: [
        {
          id: 'bo-1',
          label: "Aching legs in evening/night, happy and running normally by morning, no limp",
          urgency: 'home',
          advice: "Classic benign growing pains. Gentle calf massage, a warm heating pad, and gentle stretches provide soothing relief.",
          actionLabel: "Soothing Home Massage"
        },
        {
          id: 'bo-2',
          label: "Toddler woke up limping, refuses to bear weight, or fell at the playground yesterday",
          urgency: 'clinic',
          advice: "Could be transient synovitis, a nursemaid's elbow, or a minor pediatric hairline fracture. Needs gentle exam.",
          actionLabel: "Book Pediatric Joint / Limp Exam"
        },
        {
          id: 'bo-3',
          label: "Visible limb deformity, severe swelling with fever, or extreme excruciating pain to the touch",
          urgency: 'urgent',
          advice: "Potential fracture or septic joint infection. Head directly to the nearest pediatric emergency facility.",
          actionLabel: "Emergency Care Needed"
        }
      ]
    },
    general: {
      specialty: 'general',
      title: "Preventative & Wellness Guidance",
      symptoms: [
        {
          id: 'ge-1',
          label: "Routine developmental milestone, vaccine, or growth check",
          urgency: 'clinic',
          advice: "Regular well-child checks are the foundation of healthy development and preventative peace of mind.",
          actionLabel: "Book Well-Child Visit"
        }
      ]
    }
  };

  const currentFlow = flows[selectedCategory];
  const activeSymptom = currentFlow.symptoms.find(s => s.id === selectedSymptomId);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200/60 mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>Interactive Pediatric Triage Helper</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
            What's troubling your little one today?
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Select a specialty area below to get pediatric guidance and know when to book.
          </p>
        </div>

        {selectedSymptomId && (
          <button
            onClick={() => setSelectedSymptomId(null)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 self-start md:self-auto bg-slate-100 px-3 py-1.5 rounded-lg transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Questions</span>
          </button>
        )}
      </div>

      {/* Specialty Tab Selector */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-6">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setSelectedSymptomId(null);
              }}
              className={`p-4 rounded-2xl text-left border-2 transition-all duration-200 ${
                isSelected
                  ? 'border-brand-600 bg-brand-50/70 shadow-sm ring-1 ring-brand-600'
                  : 'border-slate-100 bg-slate-50/70 hover:border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span className="text-2xl mb-1 block">{cat.icon}</span>
              <span className="font-bold text-sm text-slate-900 block">{cat.label}</span>
              <span className="text-[11px] text-slate-500 line-clamp-1">{cat.subtitle}</span>
            </button>
          );
        })}
      </div>

      {/* Question / Symptoms List */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider text-xs mb-3">
          {currentFlow.title}
        </h4>

        <div className="space-y-2.5">
          {currentFlow.symptoms.map((symptom) => {
            const isChosen = selectedSymptomId === symptom.id;
            return (
              <button
                key={symptom.id}
                onClick={() => setSelectedSymptomId(symptom.id)}
                className={`w-full text-left p-4 rounded-2xl border text-sm transition-all duration-200 flex items-start justify-between gap-3 ${
                  isChosen
                    ? 'border-brand-600 bg-teal-50/40 shadow-sm'
                    : 'border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/80'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                    isChosen 
                      ? 'border-brand-600 bg-brand-600 text-white' 
                      : 'border-slate-300 bg-white'
                  }`}>
                    {isChosen && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </span>
                  <span className={`font-medium ${isChosen ? 'text-slate-900 font-semibold' : 'text-slate-700'}`}>
                    {symptom.label}
                  </span>
                </div>

                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shrink-0 ${
                  symptom.urgency === 'urgent'
                    ? 'bg-red-100 text-red-800'
                    : symptom.urgency === 'clinic'
                    ? 'bg-amber-100 text-amber-900'
                    : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {symptom.urgency === 'urgent' ? 'Emergency' : symptom.urgency === 'clinic' ? 'Doctor Visit' : 'Home Care'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Result Box */}
      {activeSymptom && (
        <div className={`mt-6 p-5 sm:p-6 rounded-2xl border animate-in fade-in slide-in-from-top-2 duration-200 ${
          activeSymptom.urgency === 'urgent'
            ? 'bg-red-50 border-red-200 text-red-950'
            : activeSymptom.urgency === 'clinic'
            ? 'bg-brand-50/90 border-brand-200 text-brand-950'
            : 'bg-emerald-50 border-emerald-200 text-emerald-950'
        }`}>
          <div className="flex items-start gap-3">
            {activeSymptom.urgency === 'urgent' ? (
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
            ) : activeSymptom.urgency === 'clinic' ? (
              <Calendar className="w-6 h-6 text-brand-700 shrink-0 mt-0.5" />
            ) : (
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            )}

            <div className="space-y-2 flex-1">
              <h5 className="font-bold text-base sm:text-lg">
                Pediatric Assessment Recommendation:
              </h5>
              <p className="text-sm leading-relaxed">
                {activeSymptom.advice}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                {activeSymptom.urgency !== 'urgent' ? (
                  <button
                    onClick={() => onSelectBookingWithReason(selectedCategory, activeSymptom.label)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-coral-600 hover:bg-coral-700 shadow-md transition"
                  >
                    <span>{activeSymptom.actionLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href="tel:911"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-md transition"
                  >
                    <span>Call Emergency (911)</span>
                  </a>
                )}

                <span className="text-xs text-slate-500">
                  Questions? Call clinic triage: <strong>(555) 234-5678</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
