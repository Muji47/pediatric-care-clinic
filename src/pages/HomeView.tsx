import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Wind, 
  Sparkles, 
  Activity, 
  Clock, 
  Phone, 
  MapPin, 
  Star,
  Users,
  Smile,
  AlertTriangle
} from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA, DOCTOR_PROFILE, TESTIMONIALS } from '../data/content';
import { SymptomCheckerWidget } from '../components/SymptomCheckerWidget';
import { SpecialtyId } from '../types';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
  onSelectBookingWithReason: (specialty: SpecialtyId, reason: string) => void;
  onOpenDosageModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActiveTab,
  onOpenBooking,
  onSelectBookingWithReason,
  onOpenDosageModal
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20">
        {/* Soft background glow circles */}
        <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-brand-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline & Value Prop */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                <span>Specialized Pediatric Medicine • Sunnyvale, CA</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.12]">
                Gentle, expert care for little{' '}
                <span className="text-brand-700 underline decoration-teal-300 decoration-wavy decoration-2">throats</span>,{' '}
                <span className="text-blue-600">colds</span>,{' '}
                <span className="text-amber-600">skin rashes</span>, &amp;{' '}
                <span className="text-emerald-700">growing bones</span>.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                When your child is hurting, you need reassurance, not rush. Dr. Maryem Munir provides specialized pediatric medicine in a warm, sensory-calm setting—without intimidating white coats or cold waiting rooms.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-coral-600 hover:bg-coral-700 active:bg-coral-800 shadow-soft hover:shadow-pop hover:-translate-y-0.5 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book an Appointment</span>
                </button>

                <button
                  onClick={onOpenDosageModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm transition"
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Dosage & Fever Calculator</span>
                </button>
              </div>

              {/* Trust checklist */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-600 font-medium text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Same-Day Sick Visits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>10-Min Rapid Tests</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Zero White-Coat Fear</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Feature Card & Doctor Intro */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-pop relative overflow-hidden">
                  
                  {/* Subtle top banner badge */}
                  <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Clinic Open Today
                      </span>
                    </div>
                    <span className="text-xs text-brand-800 font-bold bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/60">
                      4 Sick Slots Left
                    </span>
                  </div>

                  {/* Doctor Card Snippet */}
                  <div className="my-6 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-700 to-teal-500 flex items-center justify-center text-white text-2xl font-black shadow-md shrink-0">
                      MM
                    </div>
                    <div>
                      <h3 className="font-bold font-display text-lg text-slate-900">
                        {DOCTOR_PROFILE.name}
                      </h3>
                      <p className="text-xs text-brand-700 font-semibold">
                        Pediatrician & Clinical Specialist
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Harvard Med • Boston Children's Alumni • 14y Exp.
                      </p>
                    </div>
                  </div>

                  {/* 4 Focus Badges inside hero card */}
                  <div className="space-y-2.5 my-6">
                    <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-100 flex items-center justify-between text-xs">
                      <span className="font-bold text-teal-900 flex items-center gap-2">
                        <span>🧣</span> Children's Throat &amp; Strep
                      </span>
                      <span className="text-teal-700 font-semibold">Painless Swabs</span>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between text-xs">
                      <span className="font-bold text-blue-900 flex items-center gap-2">
                        <span>🌬️</span> Colds, Croup &amp; RSV
                      </span>
                      <span className="text-blue-700 font-semibold">Gentle Nebulizers</span>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100 flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-900 flex items-center gap-2">
                        <span>✨</span> Pediatric Skin &amp; Eczema
                      </span>
                      <span className="text-amber-700 font-semibold">Soak &amp; Seal Plans</span>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between text-xs">
                      <span className="font-bold text-emerald-900 flex items-center gap-2">
                        <span>🦴</span> Bones, Joints &amp; Limping
                      </span>
                      <span className="text-emerald-700 font-semibold">Playful Exams</span>
                    </div>
                  </div>

                  {/* Doctor quote snippet */}
                  <blockquote className="bg-warmbg-100 p-4 rounded-2xl text-xs text-slate-600 italic border border-stone-200/60">
                    "{DOCTOR_PROFILE.philosophy.slice(0, 140)}..."
                  </blockquote>

                  {/* Direct Contact Row */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-1 font-semibold text-slate-800">
                      <Phone className="w-3.5 h-3.5 text-coral-600" />
                      {CLINIC_INFO.phone}
                    </span>
                    <button
                      onClick={() => setActiveTab('contact')}
                      className="text-brand-700 font-bold hover:underline"
                    >
                      View Map & Directions →
                    </button>
                  </div>

                </div>

                {/* Floating parent review badge */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    ★
                  </div>
                  <div className="text-xs">
                    <div className="flex text-amber-500 font-bold">
                      ★★★★★ <span className="text-slate-800 ml-1 font-bold">4.98</span>
                    </div>
                    <span className="text-slate-500">Over 350+ local parent reviews</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK EMERGENCY / TRIAGE HELPER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-800 to-brand-900 rounded-3xl p-6 sm:p-8 text-white shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold text-teal-300 tracking-wider">
                Parent Peace of Mind
              </span>
              <h3 className="text-xl font-bold font-display text-white">
                Worried about your child right now?
              </h3>
              <p className="text-xs text-teal-100">
                Check symptoms, calculate safe fever reducer dosage, or talk with our nurse.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:col-span-2 md:justify-end">
              <button
                onClick={onOpenDosageModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold bg-white text-slate-900 hover:bg-teal-50 transition shadow-sm"
              >
                <span>Fever Dosage Calculator</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('symptom-triage-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold bg-teal-700 hover:bg-teal-600 text-white border border-teal-500/50 transition"
              >
                <span>Interactive Symptom Guide ↓</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold bg-coral-600 hover:bg-coral-700 text-white shadow-sm transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Clinic Triage</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* THE 4 SPECIALTIES DEEP EXPLORATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Specialized Pediatric Domains
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900">
            Our 4 Core Clinical Specialties
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Children are not small adults. Their developing airways, delicate skin barriers, and open bone growth plates demand focused expertise and tender patience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES_DATA.slice(0, 4).map((srv) => (
            <div 
              key={srv.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card hover:shadow-pop transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${srv.badgeColor}`}>
                    {srv.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {srv.ageGroups.split('•')[0]}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 group-hover:text-brand-700 transition-colors">
                  {srv.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-brand-800 mt-1 mb-3">
                  {srv.tagline}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {srv.description}
                </p>

                {/* Conditions Treated Checklist */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6 space-y-2">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block">
                    Common Conditions Evaluated:
                  </span>
                  <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-700">
                    {srv.commonConditions.slice(0, 3).map((cond, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                        <span>{cond}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setActiveTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs sm:text-sm font-bold text-slate-700 hover:text-brand-700 inline-flex items-center gap-1 group-hover:underline"
                >
                  <span>Read Full Specialty Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onSelectBookingWithReason(srv.id, `Consultation for ${srv.name}`)}
                  className="px-4 py-2 rounded-full text-xs font-bold text-white bg-coral-600 hover:bg-coral-700 shadow-sm transition"
                >
                  Book for This
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE SYMPTOM CHECKER SECTION */}
      <section id="symptom-triage-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SymptomCheckerWidget onSelectBookingWithReason={onSelectBookingWithReason} />
      </section>

      {/* WHY PARENTS TRUST BLOOM */}
      <section className="bg-warmbg-100/70 border-y border-stone-200/70 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              The Bloom Experience
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900">
              Designed Entirely for a Child's Calm
            </h2>
            <p className="text-sm text-slate-600">
              Every detail of our practice was thoughtfully chosen to replace pediatric medical dread with comfort and curiosity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 mb-2">
                Painless &amp; Playful Examinations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Stethoscopes are warmed before touching bare skin. We demonstrate ear and throat checks on plush animal buddies first, giving toddlers control and ending tears before they start.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 mb-2">
                Unhurried 30 to 45-Minute Visits
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We refuse 7-minute conveyor-belt appointments. Dr. Munir takes the time to listen to subtle parent instincts, answer every question on your phone, and thoroughly examine without rushing.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 mb-2">
                Separate Well &amp; Sick Spaces
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our clinic features independent ventilation and dedicated arrival entrances. A newborn coming in for a 2-month vaccine check never shares waiting space with a toddler with flu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTOR SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 text-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-tr from-brand-800 to-teal-500 mx-auto flex items-center justify-center text-white shadow-pop">
                <div className="text-center p-4">
                  <span className="text-4xl font-black block">MM</span>
                  <span className="text-xs font-semibold text-teal-100 tracking-wider uppercase mt-1 block">
                    Dr. Maryem Munir
                  </span>
                  <span className="text-[10px] text-teal-200 block">MD, FAAP</span>
                </div>
              </div>
              
              <div className="mt-4 flex justify-center gap-1 text-amber-500 text-sm">
                ★★★★★
              </div>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                14+ Years Dedicated Pediatric Practice
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Meet Your Pediatrician
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                "A doctor's visit should feel like comfort, not an ordeal."
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {DOCTOR_PROFILE.bio}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Harvard Medical School (MD, 2010)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Boston Children's Chief Resident</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Fellow, American Academy of Pediatrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Fluent in English &amp; Spanish</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs sm:text-sm font-bold text-brand-800 hover:text-brand-900 underline"
                >
                  Read Doctor Munir's Full Philosophy &amp; Credentials →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PARENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Real Stories From Real Parents
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Trusted by Over 2,400 Bay Area Families
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div 
              key={item.id}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400 text-xs">
                    {'★'.repeat(item.rating)}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{item.date}</span>
                </div>

                <p className="text-xs font-bold text-teal-800 mb-2">
                  Treated for: {item.conditionTreated}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center font-bold text-xs">
                  {item.parentName.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{item.parentName}</h4>
                  <p className="text-[11px] text-slate-500">{item.childAge}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-brand-900 via-teal-900 to-slate-900 rounded-3xl p-8 sm:p-14 text-center text-white relative overflow-hidden shadow-pop">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-teal-200 border border-white/20">
              Same-Day Appointments &amp; Welcoming New Families
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-white">
              Give your child calm, compassionate medical care today.
            </h2>
            <p className="text-sm text-teal-100 leading-relaxed">
              No waiting weeks for an appointment. Book online in 60 seconds or call our friendly nursing staff directly.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-coral-600 hover:bg-coral-700 shadow-lg hover:shadow-pop transition"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\D/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition"
              >
                <Phone className="w-4 h-4 text-teal-300" />
                <span>Call Clinic: {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
