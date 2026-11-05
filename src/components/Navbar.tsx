import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  Clock, 
  Sparkles,
  ShieldCheck,
  Calculator
} from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
  onOpenDosageModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenBooking,
  onOpenDosageModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Specialties' },
    { id: 'about', label: 'About Dr. Vance' },
    { id: 'resources', label: 'Patient Resources' },
    { id: 'contact', label: 'Contact & Clinic' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' 
        : 'bg-warmbg-50/90 backdrop-blur-sm border-b border-stone-200/60'
    }`}>
      {/* Top micro bar for clinic status */}
      <div className="hidden lg:block bg-brand-900 text-brand-50 text-xs py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-teal-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Specialized in Pediatric Throat, Respiratory, Skin & Bones</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-teal-300" />
              <span>Mon-Fri: 8am-6pm • Sat Urgent Care: 9am-2pm</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenDosageModal}
              className="text-xs text-amber-200 hover:text-white flex items-center gap-1 transition underline-offset-2 hover:underline"
              title="Quick Pediatric Dosage Calculator"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Fever & Dosage Helper</span>
            </button>
            <span className="text-brand-700">|</span>
            <a 
              href={`tel:${CLINIC_INFO.phone.replace(/\D/g, '')}`} 
              className="text-xs font-semibold text-white hover:text-teal-200 flex items-center gap-1.5 transition"
            >
              <Phone className="w-3 h-3 text-coral-400" />
              <span>Front Desk: {CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-700 to-brand-500 flex items-center justify-center text-white shadow-soft group-hover:scale-105 transition-transform">
              <Heart className="w-6 h-6 fill-white/20 stroke-white stroke-[2.2]" />
            </div>
            <div>
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors flex items-center gap-1.5">
                Bloom <span className="text-brand-600 font-semibold text-lg sm:text-xl">Pediatric Care</span>
              </span>
              <p className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                Throat • Cold • Skin • Bone Health
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'text-brand-800 bg-brand-50/80 font-bold'
                      : 'text-slate-600 hover:text-brand-700 hover:bg-slate-100/70'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\D/g, '')}`}
              className="hidden xl:inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-700 transition"
            >
              <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-700">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xs text-left">
                <span className="block text-slate-400 font-normal">Need Advice?</span>
                <span className="font-bold text-slate-800">{CLINIC_INFO.phone}</span>
              </span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-coral-600 hover:bg-coral-700 active:bg-coral-800 shadow-soft hover:shadow-pop hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:ring-offset-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-xs font-bold text-white bg-coral-600 rounded-full shadow-sm hover:bg-coral-700 active:scale-95 transition"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-brand-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition ${
                    isActive
                      ? 'bg-brand-50 text-brand-800 font-bold border-l-4 border-brand-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDosageModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold bg-amber-50 text-amber-900 border border-amber-200"
            >
              <Calculator className="w-4 h-4 text-amber-700" />
              <span>Pediatric Dosage & Fever Helper</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-base font-bold text-white bg-coral-600 hover:bg-coral-700 shadow-md transition"
            >
              <Calendar className="w-5 h-5" />
              <span>Book an Appointment</span>
            </button>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 px-1">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                Same-Day Sick Slots Open
              </span>
              <a 
                href={`tel:${CLINIC_INFO.phone.replace(/\D/g, '')}`} 
                className="font-bold text-brand-700 hover:underline"
              >
                Call: {CLINIC_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
