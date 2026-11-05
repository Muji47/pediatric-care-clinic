import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Navigation,
  Car
} from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-teal-50/70 to-transparent pt-10 pb-12 border-b border-teal-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
            Get in Touch &amp; Visit Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 mt-3 tracking-tight">
            We're Always Here for Your Family
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Conveniently located on Blossom Valley Parkway in Sunnyvale with dedicated ground-level family parking, stroller accessibility, and rapid phone support.
          </p>
        </div>
      </section>

      {/* Main Grid: Details & Inquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contacts & Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card space-y-6">
              <h2 className="text-xl font-bold font-display text-slate-900">
                Clinic Contact Details
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                      Main Phone &amp; Triage
                    </span>
                    <a href={`tel:${CLINIC_INFO.phone.replace(/\D/g, '')}`} className="font-bold text-slate-900 hover:text-brand-700 text-base">
                      {CLINIC_INFO.phone}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Answered by registered pediatric nurses</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                      WhatsApp Quick Chat
                    </span>
                    <a 
                      href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/\D/g, '')}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold text-slate-900 hover:text-emerald-700 text-base"
                    >
                      {CLINIC_INFO.whatsapp}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">For prescription refills &amp; non-urgent queries</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                      Email Inquiries
                    </span>
                    <a href={`mailto:${CLINIC_INFO.email}`} className="font-bold text-slate-900 hover:text-blue-700 text-base">
                      {CLINIC_INFO.email}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Replies typically within 2-4 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                      Clinic Location
                    </span>
                    <p className="font-bold text-slate-900 text-sm leading-snug">
                      {CLINIC_INFO.address}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{CLINIC_INFO.landmarks}</p>
                  </div>
                </div>
              </div>

              {/* Hours of Operation */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>Clinic Office Hours</span>
                </h3>
                <div className="space-y-1.5 text-xs text-slate-600">
                  {CLINIC_INFO.hours.map((h, idx) => (
                    <div key={idx} className="flex justify-between py-1 border-b border-slate-50 last:border-0">
                      <span className="font-medium">{h.days}:</span>
                      <strong className="text-slate-900">{h.hours}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Parking & Accessibility Card */}
            <div className="bg-warmbg-100/90 rounded-3xl p-6 border border-stone-200/80 space-y-3 text-xs text-slate-700">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <Car className="w-4 h-4 text-brand-700" />
                <span>Stroller &amp; Parking Instructions</span>
              </h3>
              <p className="leading-relaxed">
                Reserved "Bloom Family" parking bays are situated directly opposite the main entrance doors. Our ground-floor suite has automatic wheelchair &amp; stroller ramps, with wide exam doorways suitable for double strollers.
              </p>
            </div>

          </div>

          {/* Right Column: Send a Message Form & Interactive Map Mockup */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Form Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
              <span className="text-xs font-bold uppercase tracking-wider text-coral-600 bg-coral-50 px-2.5 py-1 rounded-full border border-coral-200">
                Direct Message
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-2 mb-1">
                Have a Question for Our Team?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill out the quick form below. For acute illnesses requiring same-day care, please book an appointment directly or call our triage line.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-3 animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold font-display text-lg text-teal-950">
                    Thank you, {name}!
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-800 max-w-md mx-auto">
                    We've received your inquiry. One of our pediatric patient coordinators will get back to you via <strong>{email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setMessage('');
                    }}
                    className="text-xs font-bold text-brand-800 underline mt-2 inline-block"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Rachel Adams"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 text-sm focus:ring-2 focus:ring-brand-100"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 text-sm focus:ring-2 focus:ring-brand-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="rachel@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 text-sm focus:ring-2 focus:ring-brand-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      How can we help your child? *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Ask about our throat & ENT treatments, vaccine records transfer, or new patient consultations..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 text-sm focus:ring-2 focus:ring-brand-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-brand-700 hover:bg-brand-800 shadow-md transition"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Clinic</span>
                  </button>
                </form>
              )}
            </div>

            {/* Interactive Map Visual Mockup */}
            <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-brand-700" />
                  <span className="font-bold text-slate-800 text-sm">Interactive Clinic Location Preview</span>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-700 hover:underline"
                >
                  Open in Google Maps ↗
                </a>
              </div>

              {/* Stylized Map Canvas */}
              <div className="bg-teal-900/5 rounded-2xl h-52 border border-slate-300/80 relative flex items-center justify-center p-4 overflow-hidden">
                {/* Visual grid lines representing streets */}
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
                
                {/* Mock streets */}
                <div className="absolute top-1/2 left-0 right-0 h-6 bg-slate-200/90 -translate-y-1/2" />
                <div className="absolute top-0 bottom-0 left-1/3 w-6 bg-slate-200/90" />

                {/* Pin in center */}
                <div className="relative z-10 text-center animate-bounce">
                  <div className="w-12 h-12 rounded-full bg-coral-600 text-white flex items-center justify-center shadow-pop mx-auto ring-4 ring-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="inline-block mt-2 px-3 py-1 bg-white/95 rounded-full text-xs font-black text-slate-800 shadow-md border border-slate-200">
                    Bloom Pediatric Clinic
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
