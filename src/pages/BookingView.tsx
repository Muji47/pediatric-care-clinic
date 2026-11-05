import React from 'react';
import { BookingForm } from '../components/BookingForm';
import { SpecialtyId } from '../types';
import { CLINIC_INFO } from '../data/content';
import { Clock, Phone, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';

interface BookingViewProps {
  initialSpecialty?: SpecialtyId;
  initialReason?: string;
  onOpenDosageModal: () => void;
}

export const BookingView: React.FC<BookingViewProps> = ({
  initialSpecialty = 'throat',
  initialReason = '',
  onOpenDosageModal
}) => {
  return (
    <div className="space-y-12 pb-16">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-teal-50/70 to-transparent pt-10 pb-10 border-b border-teal-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
            Convenient Online Scheduling
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 mt-3 tracking-tight">
            Schedule Your Child's Visit
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Reserve a specialized consultation or same-day sick slot with Dr. Elena Vance in just under two minutes.
          </p>
        </div>
      </section>

      {/* Main Booking Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Booking Wizard */}
          <div className="lg:col-span-8">
            <BookingForm
              initialSpecialty={initialSpecialty}
              initialReason={initialReason}
              isModal={false}
            />
          </div>

          {/* Right Column: Clinic Assistance & Quick Facts */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Urgent Phone Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-card space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-coral-100 text-coral-800 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Prefer to book by phone?
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our front desk nurses can assist you with immediate triage questions, insurance checks, or scheduling multiple siblings back-to-back.
              </p>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\D/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>

            {/* Clinic Hours & Arrival Notice */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-card space-y-3 text-xs text-slate-600">
              <h3 className="font-display font-bold text-base text-slate-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>Office &amp; Walk-in Hours</span>
              </h3>
              
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span>Monday – Friday</span>
                  <strong className="text-slate-800">8:00 AM – 6:00 PM</strong>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span>Saturday (Sick visits)</span>
                  <strong className="text-teal-800">9:00 AM – 2:00 PM</strong>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-slate-400">On-Call Nurse Hotline</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <p className="flex items-start gap-1.5 text-slate-500">
                  <MapPin className="w-4 h-4 text-coral-500 shrink-0 mt-0.5" />
                  <span>{CLINIC_INFO.address}</span>
                </p>
              </div>
            </div>

            {/* Reassurance Guarantee */}
            <div className="bg-teal-50/70 rounded-3xl p-6 border border-teal-200 text-xs text-teal-900 space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-teal-950">
                <HeartHandshake className="w-4 h-4 text-teal-700" />
                <span>The Bloom Guarantee</span>
              </div>
              <p className="leading-relaxed">
                If your child feels overwhelmed or tearful during their visit, we take an immediate break. We never rush physical assessments or force uncooperative examinations.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
