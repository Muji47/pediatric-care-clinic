# Bloom Pediatric Care - Modern Pediatric Clinic Website

A modern, mobile-friendly, accessible website designed specifically for a pediatrician specializing in children's **throat**, **cold/respiratory**, **skin (dermatology)**, and **bone/joint (orthopedics)** issues.

> **100% Pure Frontend (UI Only):** Zero backend or database dependencies required. All forms, appointment booking wizards, dosage calculators, symptom checkers, and filters operate entirely client-side.

---

## 🌟 Key Features

### 1. Specialized Pediatric Focus Areas
- **Children's Throat & ENT:** Tonsillitis, recurrent strep, adenoid checks, painless throat swabs, swallowing issues.
- **Cold, Flu & Respiratory:** Nighttime barking cough (croup), RSV, bronchiolitis, gentle nebulizer support, asthma action plans.
- **Pediatric Dermatology & Skin:** Eczema barrier repair ("soak & seal"), baby cradle cap, Hand-Foot-Mouth, viral exanthems, rash decoding.
- **Pediatric Orthopedics & Bone Health:** Toddler limps (transient synovitis), growing pains, nursemaid's elbow, playground sprains and minor fractures.
- **Well-Child & Preventative:** Milestone tracking, gentle immunizations, unhurried 30-45 min visits.

### 2. Parent-Centric Interactive Tools
- **Interactive Pediatric Symptom Checker:** Parents select throat, respiratory, skin, or bone symptoms and receive immediate triage guidance (Home Care, Doctor Visit, or Emergency 911).
- **Weight-Based Dosage & Fever Helper:** Calculates exact acetaminophen (Tylenol) and ibuprofen (Motrin) dosages based on the child's weight in lbs or kg with clear pediatric safety disclaimers (e.g. no aspirin, no ibuprofen under 6 months).
- **Interactive Multi-Step Appointment Booking:** Step-by-step wizard for condition selection, child details, date/time slot picker, and parent contact with instant confirmation tickets and `.ics` calendar file generation.
- **Printable / Downloadable Patient Forms:** New patient intake, eczema action plans, asthma logs, and sports clearance forms.

### 3. Aesthetics & Accessibility
- **Warm & Calming Color Palette:** Deep marine teal (`#0f766e`), soothing oat/warm linen backgrounds (`#fdfbf7`), and gentle coral/terracotta accents (`#ea580c`).
- **Modern Typography:** Styled with *Outfit* and *Plus Jakarta Sans* for warm, legible, human-centered reading.
- **Mobile-Responsive & Accessible:** Touch-friendly buttons, high-contrast text, clear emergency callouts, screen-reader labels, and smooth navigation.

---

## 🚀 Running the Project

```bash
# Navigate to the project directory
cd /home/mujtaba/.gemini/antigravity/scratch/pediatric-care-clinic

# Install dependencies (if not already installed)
npm install

# Start the Vite development server
npm run dev

# Or build the production bundle
npm run build
```

Currently running live on: **`http://localhost:3001/`**

---

## 📁 Directory Structure
```
pediatric-care-clinic/
├── index.html                 # HTML shell with Google Fonts & accessibility meta
├── package.json               # Pure frontend dependencies (React 18, Vite, Lucide Icons, Tailwind CSS)
├── tailwind.config.js         # Custom colors (brand, coral, warmbg, sage) & typography
├── src/
│   ├── types.ts               # TypeScript data models
│   ├── data/
│   │   └── content.ts         # Authentic pediatric clinical data, doctor bio, FAQs, guides
│   ├── components/
│   │   ├── Navbar.tsx         # Responsive navbar with mobile drawer and quick CTAs
│   │   ├── Footer.tsx         # Comprehensive clinic footer with medical disclaimer
│   │   ├── EmergencyBanner.tsx# Top triage banner for urgent pediatric red flags
│   │   ├── BookingForm.tsx    # Multi-step booking wizard with ticket generation
│   │   ├── BookingModal.tsx   # Modal wrapper for instant appointment booking
│   │   ├── SymptomCheckerWidget.tsx # Interactive triage tool for parents
│   │   └── DosageHelperModal.tsx    # Weight-based fever reducer calculator
│   ├── pages/
│   │   ├── HomeView.tsx       # Welcoming hero, 4 specialties, testimonials, triage
│   │   ├── ServicesView.tsx   # Detailed breakdowns for throat, cold, skin, bones
│   │   ├── AboutDoctorView.tsx# Dr. Elena Vance's bio, Harvard credentials, philosophy
│   │   ├── ResourcesView.tsx  # Parent medical guides, ER vs clinic matrix, form downloads
│   │   ├── BookingView.tsx    # Dedicated booking page with slots & clinic hours
│   │   └── ContactView.tsx    # Clinic location map, hours, directions, inquiry form
│   ├── App.tsx                # Client-side tab navigation & modal controllers
│   ├── main.tsx               # React root entrypoint
│   └── index.css              # Custom styling & animations
└── dist/                      # Production build assets
```
