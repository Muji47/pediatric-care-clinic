import React, { useState } from 'react';
import { 
  BookOpen, 
  Calculator, 
  Download, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Search, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Printer
} from 'lucide-react';
import { PATIENT_RESOURCES } from '../data/content';
import { PatientResourceGuide } from '../types';

interface ResourcesViewProps {
  onOpenDosageModal: () => void;
  onOpenBooking: () => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({
  onOpenDosageModal,
  onOpenBooking
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeGuide, setActiveGuide] = useState<PatientResourceGuide | null>(PATIENT_RESOURCES[0]);

  const categories = ['all', 'Fever & Home Care', 'Throat & Breathing', 'Skin & Rashes', 'Bones & Injuries'];

  const filteredGuides = PATIENT_RESOURCES.filter(guide => {
    const matchesCat = selectedCategory === 'all' || guide.category === selectedCategory;
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          guide.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const downloadFormTemplate = (formTitle: string) => {
    const text = `BLOOM PEDIATRIC CARE - PATIENT FORM TEMPLATE
Document: ${formTitle}
Clinic: 428 Blossom Valley Parkway, Suite 210, Sunnyvale, CA 94087
Phone: (555) 234-5678

1. CHILD INFORMATION:
Child Full Name: _______________________ Date of Birth: __/__/____
Gender: [ ] M  [ ] F  [ ] Other
Primary Care Doctor: Dr. Maryem Munir, MD

2. ALLERGIES & MEDICATIONS:
Current Daily Medications: _____________________________________
Known Drug / Food Allergies: __________________________________

3. EMERGENCY CONTACT:
Parent/Guardian Name: _________________ Phone: _________________
Signature: ____________________________ Date: __________________`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${formTitle.toLowerCase().replace(/\s+/g, '-')}.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-teal-50/70 to-transparent pt-10 pb-12 border-b border-teal-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
            Parent Care Guides &amp; Tools
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 mt-3 tracking-tight">
            Clear, Calm Health Resources for Parents
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Written by Dr. Maryem Munir to help you safely manage fevers, nighttime croup, stubborn eczema, and playground bumps with clinical confidence.
          </p>

          {/* Quick interactive shortcut bar */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenDosageModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-soft transition"
            >
              <Calculator className="w-4 h-4" />
              <span>Open Pediatric Dosage Helper</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-xs transition"
            >
              <span>Schedule a Clinic Visit</span>
            </button>
          </div>
        </div>
      </section>

      {/* INTERACTIVE GUIDE VIEWER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search guides (fever, croup, eczema)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 text-xs sm:text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold capitalize transition ${
                  selectedCategory === cat
                    ? 'bg-brand-700 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat === 'all' ? 'All Guides' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Split: List on Left, Active Guide on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Guides List */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-1">
              Select a Clinical Guide:
            </span>

            {filteredGuides.map((guide) => {
              const isSelected = activeGuide?.id === guide.id;
              return (
                <button
                  key={guide.id}
                  onClick={() => setActiveGuide(guide)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all ${
                    isSelected
                      ? 'border-brand-600 bg-brand-50/70 shadow-sm ring-1 ring-brand-600'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-bold text-brand-800 uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded-full border border-slate-200">
                      {guide.category}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3" />
                      {guide.readTime}
                    </span>
                  </div>

                  <h3 className={`font-bold font-display text-sm sm:text-base ${isSelected ? 'text-slate-900' : 'text-slate-800'}`}>
                    {guide.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {guide.summary}
                  </p>
                </button>
              );
            })}

            {filteredGuides.length === 0 && (
              <div className="p-8 text-center text-xs text-slate-500 bg-white rounded-2xl border border-slate-200">
                No guides matching "{searchQuery}". Try searching for 'fever', 'croup', or 'limp'.
              </div>
            )}
          </div>

          {/* Right Column: Full Active Guide Reading Box */}
          <div className="lg:col-span-7">
            {activeGuide ? (
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                      {activeGuide.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {activeGuide.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                    {activeGuide.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {activeGuide.summary}
                  </p>
                </div>

                {/* Key Points */}
                <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-2.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-teal-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    <span>Key Clinical Principles:</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {activeGuide.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Red Flags / Emergency Warnings */}
                <div className="p-5 rounded-2xl bg-red-50/70 border border-red-200 space-y-2.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-red-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Red Flags: When to Seek Immediate Doctor Evaluation</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-red-950/80">
                    {activeGuide.redFlags.map((flag, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Home Comfort Tips */}
                <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/70 space-y-2.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-700" />
                    <span>Gentle Home Comfort Strategies</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {activeGuide.homeComfortTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action inside Guide */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-slate-500">
                    Reviewed by Dr. Maryem Munir, MD, FAAP
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="px-5 py-2 rounded-full text-xs font-bold text-white bg-coral-600 hover:bg-coral-700 shadow-sm transition"
                  >
                    Book an Appointment
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-10 border border-slate-200 text-center text-slate-500">
                Please select a guide from the list to view detailed recommendations.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* EMERGENCY VS CLINIC COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-card">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Parent Triage Decision Matrix
            </span>
            <h2 className="text-2xl font-bold font-display text-slate-900 mt-1">
              Should I Call 911/ER or Book a Bloom Sick Visit?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Keep this quick checklist handy when you're unsure where to take your child.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1: Head to Emergency Room (911) */}
            <div className="p-6 rounded-2xl bg-red-50/70 border border-red-200 space-y-3">
              <div className="flex items-center gap-2 text-red-900 font-bold text-base">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span>Go to Emergency Room / Call 911</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-red-950/80">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Severe breathing struggle (lips bluish, unable to talk, chest sinking)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Infant under 3 months with a rectal temp of 100.4°F or higher</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Seizure lasting more than 3 minutes or unusual limp unresponsiveness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Compound bone fracture with visible skin break or severe angulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Purple or dark red spots that do not fade when pressed</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Bloom Sick Visit */}
            <div className="p-6 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-3">
              <div className="flex items-center gap-2 text-teal-900 font-bold text-base">
                <ShieldCheck className="w-5 h-5 text-teal-700" />
                <span>Book a Bloom Pediatric Sick Slot</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-teal-950/80">
                <li className="flex items-start gap-2">
                  <span className="text-teal-700 font-bold">•</span>
                  <span>Sore throat, suspected strep, swollen tonsils, white patches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-700 font-bold">•</span>
                  <span>Barking croup cough, mild wheeze, lingering chest cold</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-700 font-bold">•</span>
                  <span>Itchy eczema flares, mistery rashes, cradle cap, hives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-700 font-bold">•</span>
                  <span>Sudden toddler limping, minor playground fall, sprained ankle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-700 font-bold">•</span>
                  <span>Ear pulling, continuous earache, fluid drainage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOADABLE CLINIC FORMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-card">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Printable Clinic Resources
            </span>
            <h2 className="text-2xl font-bold font-display text-slate-900 mt-1">
              Download Patient Registration &amp; Care Forms
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Save time on your visit day by reviewing or downloading these ahead of time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "New Patient Intake & History", size: "Printable Form", icon: "FileText" },
              { title: "Pediatric Eczema Action Plan", size: "Parent Handout", icon: "FileText" },
              { title: "Asthma & Nebulizer Log", size: "Tracking Sheet", icon: "FileText" },
              { title: "Sports & Camp Clearance", size: "School Physical", icon: "FileText" },
            ].map((form, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-slate-300 transition"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-2">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900">{form.title}</h3>
                  <span className="text-[11px] text-slate-500">{form.size}</span>
                </div>

                <button
                  onClick={() => downloadFormTemplate(form.title)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download (.txt)</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
