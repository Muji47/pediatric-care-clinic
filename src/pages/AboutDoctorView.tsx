import React from 'react';
import { 
  Heart, 
  Award, 
  GraduationCap, 
  BookOpen, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  Smile, 
  CheckCircle2, 
  Coffee,
  Globe,
  Building
} from 'lucide-react';
import { DOCTOR_PROFILE, CLINIC_INFO } from '../data/content';

interface AboutDoctorViewProps {
  onOpenBooking: () => void;
}

export const AboutDoctorView: React.FC<AboutDoctorViewProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Top Banner / Bio Header */}
      <section className="bg-gradient-to-b from-teal-50/70 to-transparent pt-10 pb-12 border-b border-teal-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Doctor Portrait / Badging */}
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-3xl bg-gradient-to-tr from-brand-800 via-teal-700 to-teal-500 mx-auto lg:mx-0 flex items-center justify-center text-white shadow-pop relative overflow-hidden">
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-white/20 mx-auto flex items-center justify-center text-2xl font-black mb-2">
                    MM
                  </div>
                  <span className="font-display font-bold text-xl block">Dr. Maryem Munir</span>
                  <span className="text-xs text-teal-200 block font-medium">MD, FAAP</span>
                  <span className="text-[10px] text-teal-300 block mt-1 uppercase tracking-wider">
                    Board-Certified Pediatrician
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 font-semibold">
                  14+ Years Experience
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
                  18,000+ Kids Treated
                </span>
              </div>
            </div>

            {/* Doctor Title & Mission */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
                Board-Certified Pediatrician &amp; Founder
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
                {DOCTOR_PROFILE.name}
              </h1>
              <p className="text-base sm:text-lg text-brand-800 font-medium">
                {DOCTOR_PROFILE.title}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {DOCTOR_PROFILE.bio}
              </p>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-semibold">
                  <Globe className="w-4 h-4 text-brand-600" />
                  <span>Languages: {DOCTOR_PROFILE.languages.join(' • ')}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-coral-600 hover:bg-coral-700 shadow-soft transition"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule a Visit with Dr. Munir</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PHILOSOPHY OF CARE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-card">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Bedside Approach
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1 mb-4">
              "No White Coats, No Rushed Goodbyes"
            </h2>
            <blockquote className="text-base sm:text-lg text-slate-700 italic border-l-4 border-brand-600 pl-4 py-1 mb-6">
              "{DOCTOR_PROFILE.philosophy}"
            </blockquote>
            <p className="text-sm text-slate-600 leading-relaxed">
              Dr. Munir noticed early in her residency that the biggest hurdle in pediatrics wasn't diagnosing illness—it was getting a terrified child to relax enough to permit an honest exam. By eliminating cold white coats, warming stethoscopes, examining ears while toddlers sit comfortably in their parent's lap, and using plush animal toys as teaching models, children leave Bloom with high-fives and bravery stickers rather than trauma.
            </p>
          </div>

          {/* 4 Pillars of Gentle Care */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-slate-100">
            <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <Smile className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Child-Eye Level First</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We sit on small stools or kneel on the soft rug to address toddlers and children face-to-face, earning their trust before any medical instruments appear.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Parent Intuition Matters</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parents live with their children 24/7. When a mother says "something is just off with his breathing," Dr. Munir listens with utmost respect and urgency.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Sensory-Calm Clinic</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No buzzing fluorescent lights or blaring waiting-room TVs. Warm lighting, noise-absorbing walls, and private check-in suites soothe sensory-sensitive children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS & EDUCATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Education & Residency */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-card space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Education &amp; Training
                </h3>
                <p className="text-xs text-slate-500">Rigorous Academic Background</p>
              </div>
            </div>

            <div className="space-y-4">
              {DOCTOR_PROFILE.education.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                  <span className="w-2 h-2 rounded-full bg-brand-600 mt-2 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.degree}</h4>
                    <p className="text-xs text-slate-600">{item.institution}</p>
                    <span className="text-[11px] text-slate-400 font-medium">{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Fellowships & Hospital Privileges */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-card space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Fellowships &amp; Hospital Affiliations
                </h3>
                <p className="text-xs text-slate-500">Specialized Triage &amp; Clinical Ties</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Specialized Fellowships:
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {DOCTOR_PROFILE.fellowships.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 pt-3">
                Local Hospital Affiliations &amp; Referral Network:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active clinical referral privileges with <strong>Lucile Packard Children's Hospital Stanford</strong> and <strong>El Camino Health Mountain View</strong>, ensuring smooth, direct escalation should your child ever require pediatric sub-specialty surgery or intensive care.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CLINIC AMENITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-warmbg-100/80 rounded-3xl border border-stone-200/80 p-8 sm:p-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              The Clinic Environment
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
              Thoughtfully Built for Strollers, Toddlers &amp; Peace of Mind
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CLINIC_INFO.amenities.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/70 flex items-center gap-3 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM BOOKING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-brand-900 text-white rounded-3xl p-8 sm:p-12 shadow-pop space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display">
            Ready to experience gentle, personalized pediatric care?
          </h2>
          <p className="text-sm text-teal-100 max-w-xl mx-auto">
            Book an appointment online in seconds or meet Dr. Munir for a complimentary 10-minute expectant parent consultation.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full text-sm font-bold bg-coral-600 hover:bg-coral-700 text-white shadow-soft transition"
            >
              Book an Appointment with Dr. Munir
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
