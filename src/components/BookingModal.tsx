import React from 'react';
import { X } from 'lucide-react';
import { BookingForm } from './BookingForm';
import { SpecialtyId } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecialty?: SpecialtyId;
  initialReason?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialSpecialty = 'throat',
  initialReason = ''
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl my-6"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-slate-500 hover:text-slate-900 hover:bg-slate-100 shadow-sm transition"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        <BookingForm
          initialSpecialty={initialSpecialty}
          initialReason={initialReason}
          onSuccess={() => {}}
          isModal={true}
        />
      </div>
    </div>
  );
};
