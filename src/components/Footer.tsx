import React from 'react';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowUp,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
  onOpenDosageModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenBooking,
  onOpenDosageModal
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-white shadow-md">
                <Heart className="w-5 h-5 fill-white/20 stroke-white stroke-[2.2]" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white tracking-tight">
                  Bloom <span className="text-teal-400">Pediatric Care</span>
                </span>
                <p className="text-xs text-slate-400">Gentle Care for Growing Children</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Specialized pediatric care focusing on children's throat & tonsils, colds & respiratory relief, delicate skin & eczema, and growing bone or joint injuries. Calm, reassuring care without the intimidating white coats.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-teal-300 border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                Board-Certified Pediatrician
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                FAAP Fellow
              </span>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-coral-600 hover:bg-coral-700 transition shadow-sm"
              >
                Book an Appointment
              </button>
              <button
                onClick={onOpenDosageModal}
                className="px-4 py-2.5 rounded-full text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
              >
                Dosage & Fever Calculator
              </button>
            </div>
          </div>

          {/* Column 2: Core Specialties */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase font-display">
              Specialties
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => navigateTo('services')}
                  className="hover:text-teal-400 transition text-left"
                >
                  Throat & Tonsil Care
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')}
                  className="hover:text-teal-400 transition text-left"
                >
                  Colds, Croup & Flu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')}
                  className="hover:text-teal-400 transition text-left"
                >
                  Skin & Eczema Relief
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')}
                  className="hover:text-teal-400 transition text-left"
                >
                  Bone, Joint & Limp Care
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('services')}
                  className="hover:text-teal-400 transition text-left"
                >
                  Well-Child Checkups
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase font-display">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-teal-400 transition">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-teal-400 transition">
                  About Dr. Munir, MD
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('resources')} className="hover:text-teal-400 transition">
                  Parent Resources & Guides
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-teal-400 transition">
                  Location & Parking
                </button>
              </li>
              <li>
                <button onClick={onOpenDosageModal} className="hover:text-amber-400 text-amber-200 transition">
                  Pediatric Dosage Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Clinic Contact */}
          <div className="space-y-3 text-sm">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase font-display">
              Clinic & Hours
            </h3>
            
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-300">
                  {CLINIC_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-coral-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone.replace(/\D/g, '')}`} className="text-xs hover:text-white font-medium">
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300">
                  WhatsApp Support Available
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="text-xs hover:text-white">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>Office Hours:</span>
              </div>
              <p>Mon - Fri: 8:00 AM – 6:00 PM</p>
              <p className="text-teal-300">Sat: 9:00 AM – 2:00 PM (Sick visits)</p>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="max-w-2xl text-center md:text-left space-y-1">
            <p>
              <strong className="text-slate-400">Medical Guidance Notice:</strong> Content provided on this website is for general parental education only and does not replace professional medical evaluation, diagnosis, or personalized care. If your child is in immediate danger, dial 911 or visit the nearest pediatric emergency room.
            </p>
            <p>
              © {new Date().getFullYear()} Bloom Pediatric Care LLC. All rights reserved. Designed for child health & calm families.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
