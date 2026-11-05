export type SpecialtyId = 'throat' | 'cold' | 'skin' | 'bone' | 'general';

export interface ServiceDetail {
  id: SpecialtyId;
  name: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  iconName: string;
  description: string;
  commonConditions: string[];
  whenToSeeDoctor: string[];
  ourApproach: string;
  gentleTipsForParents: string;
  ageGroups: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  credentials: string[];
  experienceYears: number;
  languages: string[];
  bio: string;
  philosophy: string;
  clinicAtmosphere: string;
  education: Array<{ degree: string; institution: string; year: string }>;
  fellowships: string[];
  certifications: string[];
}

export interface Testimonial {
  id: string;
  parentName: string;
  childAge: string;
  conditionTreated: string;
  quote: string;
  rating: number;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'throat' | 'cold' | 'skin' | 'bone' | 'appointments';
}

export interface AppointmentFormData {
  childName: string;
  childAgeYears: string;
  childAgeMonths: string;
  parentName: string;
  phone: string;
  email: string;
  specialty: SpecialtyId;
  preferredDate: string;
  preferredTimeSlot: string;
  symptomsDescription: string;
  isFirstVisit: boolean;
  urgentCareNeeded: boolean;
}

export interface PatientResourceGuide {
  id: string;
  title: string;
  category: 'Throat & Breathing' | 'Skin & Rashes' | 'Bones & Injuries' | 'Fever & Home Care';
  summary: string;
  readTime: string;
  keyPoints: string[];
  redFlags: string[];
  homeComfortTips: string[];
}
