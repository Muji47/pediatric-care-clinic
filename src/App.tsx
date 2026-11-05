import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EmergencyBanner } from './components/EmergencyBanner';
import { BookingModal } from './components/BookingModal';
import { DosageHelperModal } from './components/DosageHelperModal';
import { HomeView } from './pages/HomeView';
import { ServicesView } from './pages/ServicesView';
import { AboutDoctorView } from './pages/AboutDoctorView';
import { ResourcesView } from './pages/ResourcesView';
import { BookingView } from './pages/BookingView';
import { ContactView } from './pages/ContactView';
import { SpecialtyId } from './types';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [isDosageModalOpen, setIsDosageModalOpen] = useState<boolean>(false);
  
  const [prefilledSpecialty, setPrefilledSpecialty] = useState<SpecialtyId>('throat');
  const [prefilledReason, setPrefilledReason] = useState<string>('');

  // Handle URL hash changes or internal links if needed
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'services', 'about', 'resources', 'booking', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = () => {
    setPrefilledSpecialty('throat');
    setPrefilledReason('');
    setIsBookingModalOpen(true);
  };

  const handleSelectBookingWithReason = (specialty: SpecialtyId, reason: string) => {
    setPrefilledSpecialty(specialty);
    setPrefilledReason(reason);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-warmbg-50 text-slate-800 antialiased selection:bg-brand-100 selection:text-brand-900">
      
      {/* Emergency Triage Banner */}
      <EmergencyBanner 
        onOpenSymptomChecker={() => {
          handleTabChange('home');
          setTimeout(() => {
            const el = document.getElementById('symptom-triage-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />

      {/* Main Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenBooking={handleOpenBooking}
        onOpenDosageModal={() => setIsDosageModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            setActiveTab={handleTabChange}
            onOpenBooking={handleOpenBooking}
            onSelectBookingWithReason={handleSelectBookingWithReason}
            onOpenDosageModal={() => setIsDosageModalOpen(true)}
          />
        )}

        {activeTab === 'services' && (
          <ServicesView
            onSelectBookingWithReason={handleSelectBookingWithReason}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activeTab === 'about' && (
          <AboutDoctorView
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activeTab === 'resources' && (
          <ResourcesView
            onOpenDosageModal={() => setIsDosageModalOpen(true)}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activeTab === 'booking' && (
          <BookingView
            initialSpecialty={prefilledSpecialty}
            initialReason={prefilledReason}
            onOpenDosageModal={() => setIsDosageModalOpen(true)}
          />
        )}

        {activeTab === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onOpenBooking={handleOpenBooking}
        onOpenDosageModal={() => setIsDosageModalOpen(true)}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialSpecialty={prefilledSpecialty}
        initialReason={prefilledReason}
      />

      {/* Interactive Dosage & Fever Guide Modal */}
      <DosageHelperModal
        isOpen={isDosageModalOpen}
        onClose={() => setIsDosageModalOpen(false)}
      />

    </div>
  );
}

export default App;
