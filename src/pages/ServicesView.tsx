import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Heart, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  Info, 
  HelpCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA, FAQS } from '../data/content';
import { SpecialtyId } from '../types';

interface ServicesViewProps {
  onSelectBookingWithReason: (specialty: SpecialtyId, reason: string) => void;
  onOpenBooking: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onSelectBookingWithReason,
  onOpenBooking
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const filteredServices = selectedFilter === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.id === selectedFilter);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-teal-50/80 to-transparent pt-10 pb-12 border-b border-teal-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
            Specialized Pediatric Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 mt-3 tracking-tight">
            Specialized Care for Common Childhood Illnesses
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            From high-fever throat infections and midnight croup to persistent eczema and playground fractures, we combine gentle bedside manner with pediatric specialty diagnostics.
          </p>

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-brand-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Specialties ({SERVICES_DATA.length})
            </button>
            {SERVICES_DATA.map((srv) => (
              <button
                key={srv.id}
                onClick={() => setSelectedFilter(srv.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedFilter === srv.id
                    ? 'bg-brand-700 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {srv.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredServices.map((service, index) => (
          <div 
            key={service.id}
            id={service.id}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-10 scroll-mt-28"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2.5 py-1 rounded-full">
                    Age Group: {service.ageGroups}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  {service.name}
                </h2>
                <p className="text-sm font-semibold text-brand-800 mt-1">
                  {service.tagline}
                </p>
              </div>

              <button
                onClick={() => onSelectBookingWithReason(service.id, `Consultation for ${service.name}`)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-coral-600 hover:bg-coral-700 shadow-sm transition self-start lg:self-auto shrink-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Book for {service.name}</span>
              </button>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed my-6">
              {service.description}
            </p>

            {/* 3-Column Detailed Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              
              {/* Column 1: Conditions */}
              <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>Conditions Evaluated</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {service.commonConditions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: When to see doctor */}
              <div className="bg-amber-50/50 rounded-2xl p-5 border border-amber-100 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  <span>When to Seek Prompt Care</span>
                </h3>
                <ul className="space-y-2 text-xs text-amber-950/80">
                  {service.whenToSeeDoctor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Our Gentle Approach & Home Tips */}
              <div className="bg-teal-50/50 rounded-2xl p-5 border border-teal-100 space-y-4">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-teal-900 flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-teal-700" />
                    <span>Our Gentle Clinic Approach</span>
                  </h3>
                  <p className="text-xs text-teal-950/80 leading-relaxed">
                    {service.ourApproach}
                  </p>
                </div>

                <div className="pt-3 border-t border-teal-200/50">
                  <h4 className="text-[11px] font-bold text-teal-900 uppercase tracking-wider mb-1">
                    Gentle Tip for Parents:
                  </h4>
                  <p className="text-xs text-teal-800 italic leading-relaxed">
                    "{service.gentleTipsForParents}"
                  </p>
                </div>
              </div>

            </div>

          </div>
        ))}
      </section>

      {/* SPECIALTY CLINIC FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Common Pediatric Questions from Parents
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Have questions about fevers, tonsils, or limping? We have answers.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-brand-700 transition"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <span className="text-lg text-slate-400 font-normal shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM BOOKING PROMPT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-card space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold font-display">
            Need Dr. Munir to examine your child?
          </h3>
          <p className="text-sm text-teal-100 max-w-xl mx-auto">
            We reserve same-day acute slots specifically for fever spikes, swollen tonsils, painful coughs, and sudden joint pain.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full text-sm font-bold bg-coral-600 hover:bg-coral-700 text-white shadow-soft transition"
            >
              Book an Appointment Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
