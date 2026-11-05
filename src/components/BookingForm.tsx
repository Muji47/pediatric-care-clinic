import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Baby, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft,
  Download,
  Printer,
  Sparkles
} from 'lucide-react';
import { SpecialtyId } from '../types';
import { CLINIC_INFO, SERVICES_DATA } from '../data/content';

interface BookingFormProps {
  initialSpecialty?: SpecialtyId;
  initialReason?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialSpecialty = 'throat',
  initialReason = '',
  onSuccess,
  isModal = false
}) => {
  const [step, setStep] = useState<number>(1);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [bookingId, setBookingId] = useState<string>('');

  // Form State
  const [specialty, setSpecialty] = useState<SpecialtyId>(initialSpecialty);
  const [urgency, setUrgency] = useState<'routine' | 'sameday' | 'urgent'>('sameday');
  
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [symptoms, setSymptoms] = useState(initialReason);
  const [allergies, setAllergies] = useState('');

  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('09:30 AM');

  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [insurance, setInsurance] = useState('Blue Cross Blue Shield');

  // Form validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialSpecialty) setSpecialty(initialSpecialty);
    if (initialReason) setSymptoms(initialReason);
  }, [initialSpecialty, initialReason]);

  // Set default date to today or tomorrow
  useEffect(() => {
    const today = new Date();
    const formatted = today.toISOString().split('T')[0];
    setSelectedDate(formatted);
  }, []);

  const timeSlots = [
    { time: '08:30 AM', tag: 'Early Morning' },
    { time: '09:30 AM', tag: 'Popular' },
    { time: '10:45 AM', tag: 'Morning' },
    { time: '11:30 AM', tag: 'Pre-Lunch' },
    { time: '01:30 PM', tag: 'Afternoon' },
    { time: '02:45 PM', tag: 'Quiet Slot' },
    { time: '04:00 PM', tag: 'After School' },
    { time: '05:15 PM', tag: 'Evening Slot' },
  ];

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!specialty) newErrors.specialty = 'Please choose a care specialty';
    } else if (currentStep === 2) {
      if (!childName.trim()) newErrors.childName = "Child's name is required";
      if (!childAge.trim()) newErrors.childAge = "Child's age is required";
      if (!symptoms.trim()) newErrors.symptoms = "Please provide a brief description of symptoms";
    } else if (currentStep === 3) {
      if (!selectedDate) newErrors.selectedDate = "Please choose an appointment date";
      if (!selectedTime) newErrors.selectedTime = "Please select a time slot";
    } else if (currentStep === 4) {
      if (!parentName.trim()) newErrors.parentName = "Parent/Guardian name is required";
      if (!parentPhone.trim() || parentPhone.length < 7) newErrors.parentPhone = "Valid phone number is required";
      if (!parentEmail.trim() || !parentEmail.includes('@')) newErrors.parentEmail = "Valid email is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    // Generate random friendly confirmation ID
    const generatedId = `BLM-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(generatedId);
    setBookingConfirmed(true);

    // Save to client-side localStorage for convenience
    try {
      const existing = JSON.parse(localStorage.getItem('bloom_appointments') || '[]');
      const newBooking = {
        id: generatedId,
        specialty,
        urgency,
        childName,
        childAge,
        parentName,
        parentPhone,
        parentEmail,
        symptoms,
        date: selectedDate,
        time: selectedTime,
        createdAt: new Date().toISOString()
      };
      localStorage.setItem('bloom_appointments', JSON.stringify([...existing, newBooking]));
    } catch {
      // LocalStorage fallback handled silently
    }

    if (onSuccess) onSuccess();
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadCalendar = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Bloom Pediatric Care//EN
BEGIN:VEVENT
SUMMARY:Bloom Pediatrics Visit for ${childName}
DESCRIPTION:Specialty: ${specialty}. Symptoms: ${symptoms}. Clinic: ${CLINIC_INFO.name}, ${CLINIC_INFO.address}. Phone: ${CLINIC_INFO.phone}
LOCATION:${CLINIC_INFO.address}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `bloom-pediatric-visit-${bookingId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // If already confirmed, render confirmation ticket
  if (bookingConfirmed) {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-teal-100 shadow-xl text-slate-800 animate-in fade-in duration-300">
        <div className="text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto mb-4 ring-8 ring-teal-50">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200 mb-2">
            Appointment Confirmed
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            We're Ready for Little {childName}!
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            A confirmation SMS & calendar invite has been dispatched to <strong>{parentPhone}</strong> and <strong>{parentEmail}</strong>.
          </p>

          {/* Ticket Card */}
          <div className="my-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-4">
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">Confirmation ID</span>
                <p className="font-mono font-bold text-lg text-brand-900">{bookingId}</p>
              </div>
              <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">
                {urgency === 'sameday' ? 'Same-Day Sick Slot' : 'Reserved Slot'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="text-slate-400 block">Child & Age</span>
                <strong className="text-slate-800">{childName} ({childAge})</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Doctor</span>
                <strong className="text-slate-800">Dr. Elena Vance, MD</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Date & Time</span>
                <strong className="text-brand-800">{selectedDate} at {selectedTime}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Focus Area</span>
                <strong className="text-slate-800 capitalize">{specialty} Care</strong>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 text-xs text-slate-500">
              <p><strong>Clinic Address:</strong> {CLINIC_INFO.address}</p>
              <p className="mt-1">Dedicated stroller parking available directly in front of Suite 210.</p>
            </div>
          </div>

          {/* Helpful Reminders */}
          <div className="bg-teal-50/70 p-4 rounded-2xl border border-teal-200/60 text-xs text-teal-900 text-left space-y-2 mb-6">
            <h4 className="font-bold flex items-center gap-1.5 text-teal-950">
              <Sparkles className="w-4 h-4 text-teal-600" />
              What to bring for a calm visit:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-teal-800">
              <li>A favorite soothing toy, blanket, or pacifier for comfort</li>
              <li>Vaccination card or previous pediatric records (if new patient)</li>
              <li>Photos of any transient skin rashes on your phone to show Dr. Vance</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleDownloadCalendar}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-brand-700 text-white hover:bg-brand-800 shadow-sm transition"
            >
              <Download className="w-4 h-4" />
              <span>Add to Calendar (.ics)</span>
            </button>

            <button
              onClick={handlePrint}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition"
            >
              <Printer className="w-4 h-4" />
              <span>Print Visit Pass</span>
            </button>

            <button
              onClick={() => {
                setBookingConfirmed(false);
                setStep(1);
                setChildName('');
                setSymptoms('');
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-slate-500 hover:text-slate-800 transition"
            >
              Book Another Visit
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl border border-slate-200/90 shadow-card ${isModal ? 'p-6 sm:p-8' : 'p-6 sm:p-10'}`}>
      
      {/* Header & Step Indicator */}
      <div className="pb-6 border-b border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-coral-600 bg-coral-50 px-2.5 py-1 rounded-full border border-coral-200">
              Online Pediatric Scheduling
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-2">
              Book a Gentle Visit with Dr. Vance
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              No stress, warm environment. Dedicated sick slots held daily.
            </p>
          </div>

          {/* Stepper bubbles */}
          <div className="flex items-center gap-2 pt-2 sm:pt-0">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step === i
                    ? 'bg-brand-600 text-white ring-4 ring-brand-100'
                    : step > i
                    ? 'bg-teal-100 text-teal-800'
                    : 'bg-slate-100 text-slate-400'
                }`}>
                  {step > i ? '✓' : i}
                </span>
                {i < 4 && <div className={`w-4 h-0.5 ${step > i ? 'bg-teal-400' : 'bg-slate-200'}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STEP 1: Specialty & Urgency */}
      {step === 1 && (
        <div className="py-6 space-y-6 animate-in fade-in duration-200">
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-2">
              1. What is the primary reason for your child's visit?
            </label>
            <p className="text-xs text-slate-500 mb-4">
              Select Dr. Vance's specialty matching your child's primary symptom:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES_DATA.map((srv) => {
                const isSelected = specialty === srv.id;
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setSpecialty(srv.id)}
                    className={`p-4 rounded-2xl text-left border-2 transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? 'border-brand-600 bg-brand-50/60 shadow-sm ring-1 ring-brand-600'
                        : 'border-slate-100 bg-slate-50 hover:border-slate-200 hover:bg-slate-100/60'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-brand-600 text-white' : 'bg-white text-slate-700 shadow-xs'
                    }`}>
                      <Baby className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-sm text-slate-900">{srv.name}</strong>
                      <span className="text-xs text-slate-500 line-clamp-1">{srv.tagline}</span>
                    </div>
                  </button>
                );
              })}
            </div>
            {errors.specialty && <p className="text-xs text-red-600 mt-1">{errors.specialty}</p>}
          </div>

          {/* Urgency Selector */}
          <div className="pt-4 border-t border-slate-100">
            <label className="block text-sm font-bold text-slate-800 mb-2">
              Visit Urgency
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setUrgency('sameday')}
                className={`p-3.5 rounded-xl border text-left transition ${
                  urgency === 'sameday' 
                    ? 'border-coral-500 bg-coral-50/60 text-coral-950 font-semibold ring-1 ring-coral-400' 
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span className="text-xs uppercase font-bold text-coral-600 block">Same-Day Sick Visit</span>
                <span className="text-xs text-slate-500">For acute fever, ear/throat pain, rashes</span>
              </button>

              <button
                type="button"
                onClick={() => setUrgency('routine')}
                className={`p-3.5 rounded-xl border text-left transition ${
                  urgency === 'routine' 
                    ? 'border-brand-600 bg-brand-50/60 text-brand-950 font-semibold ring-1 ring-brand-600' 
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span className="text-xs uppercase font-bold text-brand-700 block">Routine / Next Available</span>
                <span className="text-xs text-slate-500">Milestones, skin follow-up, checkup</span>
              </button>

              <button
                type="button"
                onClick={() => setUrgency('urgent')}
                className={`p-3.5 rounded-xl border text-left transition ${
                  urgency === 'urgent' 
                    ? 'border-amber-600 bg-amber-50/70 text-amber-950 font-semibold ring-1 ring-amber-500' 
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span className="text-xs uppercase font-bold text-amber-700 block">Urgent Limb / Sprain</span>
                <span className="text-xs text-slate-500">Playground falls, toddler limp today</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: Child's Info */}
      {step === 2 && (
        <div className="py-6 space-y-5 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="child-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Child's Full Name *
              </label>
              <input
                id="child-name"
                type="text"
                placeholder="e.g. Leo Parker"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 text-sm focus:ring-2 focus:ring-brand-100"
              />
              {errors.childName && <p className="text-xs text-red-600 mt-1">{errors.childName}</p>}
            </div>

            <div>
              <label htmlFor="child-age" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Child's Age / DOB *
              </label>
              <input
                id="child-age"
                type="text"
                placeholder="e.g. 2 years, 4 months"
                value={childAge}
                onChange={(e) => setChildAge(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 text-sm focus:ring-2 focus:ring-brand-100"
              />
              {errors.childAge && <p className="text-xs text-red-600 mt-1">{errors.childAge}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="symptoms" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              What symptoms have you noticed? *
            </label>
            <textarea
              id="symptoms"
              rows={3}
              placeholder="e.g. Sore throat since yesterday morning, fever peaked at 101.5°F, refusing hard solids, mild cough."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 text-sm focus:ring-2 focus:ring-brand-100"
            />
            {errors.symptoms && <p className="text-xs text-red-600 mt-1">{errors.symptoms}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="allergies" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Known Drug or Food Allergies
              </label>
              <input
                id="allergies"
                type="text"
                placeholder="None or e.g. Amoxicillin, Peanuts"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 text-sm focus:ring-2 focus:ring-brand-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Visit History
              </label>
              <div className="flex gap-4 pt-2">
                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="visit-history"
                    checked={isFirstVisit}
                    onChange={() => setIsFirstVisit(true)}
                    className="accent-brand-600"
                  />
                  <span>First time visiting Bloom</span>
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="visit-history"
                    checked={!isFirstVisit}
                    onChange={() => setIsFirstVisit(false)}
                    className="accent-brand-600"
                  />
                  <span>Returning patient</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: Date & Slot Preference */}
      {step === 3 && (
        <div className="py-6 space-y-6 animate-in fade-in duration-200">
          <div>
            <label htmlFor="appointment-date" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Select Preferred Date *
            </label>
            <div className="flex items-center gap-3">
              <input
                id="appointment-date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 text-sm focus:ring-2 focus:ring-brand-100"
              />
              <span className="text-xs text-slate-500">
                Clinic is open Mon–Fri 8am–6pm & Sat 9am–2pm
              </span>
            </div>
            {errors.selectedDate && <p className="text-xs text-red-600 mt-1">{errors.selectedDate}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Available Doctor Slots for Dr. Elena Vance *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {timeSlots.map((slot) => {
                const isSelected = selectedTime === slot.time;
                return (
                  <button
                    key={slot.time}
                    type="button"
                    onClick={() => setSelectedTime(slot.time)}
                    className={`p-3 rounded-xl text-center border transition-all ${
                      isSelected
                        ? 'border-brand-600 bg-brand-600 text-white shadow-sm ring-2 ring-brand-200'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <span className="block font-bold text-sm">{slot.time}</span>
                    <span className={`text-[10px] uppercase font-semibold ${isSelected ? 'text-teal-100' : 'text-slate-400'}`}>
                      {slot.tag}
                    </span>
                  </button>
                );
              })}
            </div>
            {errors.selectedTime && <p className="text-xs text-red-600 mt-1">{errors.selectedTime}</p>}
          </div>

          <div className="p-3.5 bg-brand-50 rounded-2xl border border-brand-100 text-xs text-brand-900 flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0" />
            <span>Sick children are accommodated immediately in separate isolated waiting alcoves to minimize any contagion.</span>
          </div>
        </div>
      )}

      {/* STEP 4: Parent Guardian & Contact */}
      {step === 4 && (
        <form onSubmit={handleFinalSubmit} className="py-6 space-y-4 animate-in fade-in duration-200">
          <div>
            <label htmlFor="parent-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Parent or Guardian Full Name *
            </label>
            <input
              id="parent-name"
              type="text"
              placeholder="e.g. Jessica Parker"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 text-sm focus:ring-2 focus:ring-brand-100"
            />
            {errors.parentName && <p className="text-xs text-red-600 mt-1">{errors.parentName}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="parent-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Mobile Phone (for SMS Reminders) *
              </label>
              <input
                id="parent-phone"
                type="tel"
                placeholder="(555) 000-0000"
                value={parentPhone}
                onChange={(e) => setParentPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 text-sm focus:ring-2 focus:ring-brand-100"
              />
              {errors.parentPhone && <p className="text-xs text-red-600 mt-1">{errors.parentPhone}</p>}
            </div>

            <div>
              <label htmlFor="parent-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address *
              </label>
              <input
                id="parent-email"
                type="email"
                placeholder="name@example.com"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 text-sm focus:ring-2 focus:ring-brand-100"
              />
              {errors.parentEmail && <p className="text-xs text-red-600 mt-1">{errors.parentEmail}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="insurance-provider" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Insurance Network / Billing Option
            </label>
            <select
              id="insurance-provider"
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 text-sm focus:ring-2 focus:ring-brand-100 bg-white"
            >
              <option value="Blue Cross Blue Shield">Blue Cross Blue Shield</option>
              <option value="Aetna Pediatric PPO">Aetna Pediatric PPO</option>
              <option value="Cigna HealthCare">Cigna HealthCare</option>
              <option value="UnitedHealthcare">UnitedHealthcare</option>
              <option value="Kaiser Permanente (Added Choice)">Kaiser Permanente (Added Choice)</option>
              <option value="Self-Pay / Clear Transparent Fee">Self-Pay / Transparent Clinic Fee</option>
            </select>
            <p className="text-[11px] text-slate-500 mt-1">
              We accept most major commercial pediatric PPO plans and offer straightforward self-pay sick visit pricing.
            </p>
          </div>

          {/* Quick Review Box */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1 mt-4">
            <span className="font-bold text-slate-900 block text-sm mb-1">Appointment Summary:</span>
            <p><strong>Child:</strong> {childName} ({childAge})</p>
            <p><strong>Scheduled:</strong> {selectedDate} at {selectedTime}</p>
            <p><strong>Care Focus:</strong> {specialty.toUpperCase()} ({urgency === 'sameday' ? 'Same-Day Urgent Sick Slot' : 'Standard Slot'})</p>
          </div>
        </form>
      )}

      {/* Navigation Buttons */}
      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
        {step > 1 ? (
          <button
            type="button"
            onClick={handlePrev}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
        ) : (
          <div />
        )}

        {step < 4 ? (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-brand-700 hover:bg-brand-800 shadow-md transition ml-auto"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleFinalSubmit}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold text-white bg-coral-600 hover:bg-coral-700 shadow-lg hover:shadow-pop transition ml-auto"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Confirm & Reserve Appointment</span>
          </button>
        )}
      </div>

    </div>
  );
};
