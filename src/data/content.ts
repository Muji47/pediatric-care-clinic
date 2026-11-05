import { ServiceDetail, DoctorProfile, Testimonial, FaqItem, PatientResourceGuide } from '../types';

export const CLINIC_INFO = {
  name: "Bloom Pediatric Care",
  tagline: "Gentle, Specialized Care for Little Throats, Colds, Skin & Growing Bones",
  phone: "(555) 234-5678",
  emergencyPhone: "(555) 911-KIDS",
  whatsapp: "+1 (555) 234-5678",
  email: "care@bloompediatrics.com",
  address: "428 Blossom Valley Parkway, Suite 210, Sunnyvale, CA 94087",
  landmarks: "Ground floor, stroller-accessible with dedicated family parking",
  hours: [
    { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { days: "Saturday", hours: "9:00 AM - 2:00 PM (Urgent Care & Sick Visits)" },
    { days: "Sunday", hours: "On-Call Pediatric Nurse Triage Hotline" }
  ],
  amenities: [
    "No-wait calming sensory reception",
    "Separate well-child and sick-child entrances",
    "Child-friendly exam rooms with interactive toy walls",
    "Gentle, warmed stethoscopes and soft lighting",
    "On-site rapid diagnostic testing (Strep, Flu, RSV in 10 mins)"
  ]
};

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'throat',
    name: "Children's Throat & ENT",
    tagline: "Relief for sore throats, swollen tonsils, and swallowing discomfort",
    badge: "Specialized ENT Focus",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    iconName: "Stethoscope",
    description: "Throat infections can be scary for little ones and exhausting for parents. We provide gentle examinations, rapid in-house testing without painful scraping, and conservative, evidence-based treatments for acute and chronic throat conditions.",
    ageGroups: "Infants (0-12m) • Toddlers (1-3y) • School Age (4-12y) • Teens (13-18y)",
    commonConditions: [
      "Recurrent Strep throat & tonsillitis",
      "Adenoid hypertrophy & mouth-breathing issues",
      "Hoarseness & vocal strain in young kids",
      "Post-nasal drip & nighttime throat tickles",
      "Difficulty swallowing & tender neck lymph nodes",
      "Throat-related sleep disturbance & snoring"
    ],
    whenToSeeDoctor: [
      "Severe pain when swallowing or refusing fluids",
      "Fever over 101°F accompanied by throat redness or white spots",
      "Throat pain lasting longer than 48-72 hours",
      "Excessive drooling or difficulty opening mouth comfortably",
      "Child sounds hoarse or raspy for more than 7 days"
    ],
    ourApproach: "We use pediatric illuminated scopes with playful, game-like techniques so children never feel trapped or panicked during examination. Rapid 10-minute strep testing avoids unnecessary antibiotics.",
    gentleTipsForParents: "Keep your child hydrated with cool liquids, fruit popsicles, and warm honey water (strictly for children over 1 year of age). A cool-mist humidifier in the bedroom eases overnight irritation."
  },
  {
    id: 'cold',
    name: "Cold, Flu & Respiratory Care",
    tagline: "Gentle breathing support, persistent cough relief, and viral triage",
    badge: "Rapid Viral Testing",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    iconName: "Wind",
    description: "Colds, RSV, croup, and seasonal flu affect developing airways quickly. Our clinic specializes in pediatric respiratory assessment, ensuring early detection of chest congestion, safe nebulizer treatments, and clear home management plans.",
    ageGroups: "Newborns to Adolescents",
    commonConditions: [
      "Barking cough (Croup) and nocturnal coughing fits",
      "Bronchiolitis & Respiratory Syncytial Virus (RSV)",
      "Seasonal Influenza (Flu A & B) and lingering viral colds",
      "Childhood wheezing & pediatric asthma action plans",
      "Nasal congestion preventing sleep or feeding in infants",
      "Sinus pressure and green/yellow nasal discharge"
    ],
    whenToSeeDoctor: [
      "Fast breathing, flared nostrils, or ribs pulling in while inhaling (retractions)",
      "Fever lasting more than 3 consecutive days",
      "Cough accompanied by high-pitched whistling (wheezing) or seal-like barking",
      "Lethargy, decreased wet diapers (under 3 in 24 hours), or inability to stay hydrated",
      "A cold that seems to get better, then suddenly spikes a high fever again"
    ],
    ourApproach: "We check oxygen saturation with child-friendly animal finger sensors, provide gentle saline suction demonstrations for infants, and avoid over-prescribing sedating cold medicines which are unsuitable for young children.",
    gentleTipsForParents: "Saline nasal drops before nursing or sleep thin thick mucus. Elevate the head of the mattress slightly for older toddlers and prioritize fluid intake over solid foods while feverish."
  },
  {
    id: 'skin',
    name: "Pediatric Dermatology & Skin",
    tagline: "Soothing care for itchy eczema, unexplained rashes, and baby skin barriers",
    badge: "Sensitive Skin Specialist",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    iconName: "Sparkles",
    description: "Young skin is delicate, thin, and prone to rapid allergic or infectious reactions. We help parents decode worrisome spots, manage painful eczema flare-ups, and restore their child's natural skin barrier without harsh steroid overuse.",
    ageGroups: "Newborns • Toddlers • School Age",
    commonConditions: [
      "Atopic dermatitis & intense dry, itchy eczema",
      "Infantile cradle cap & severe diaper dermatoses",
      "Hand, Foot, and Mouth Disease (HFMD) blisters",
      "Viral exanthems (Roseola, Fifth Disease / Slapped Cheek)",
      "Molluscum contagiosum & viral warts",
      "Hives, contact dermatitis & mystery allergic rashes"
    ],
    whenToSeeDoctor: [
      "Rash with tiny purple/red pinprick spots that don't fade when pressed (petechiae)",
      "Skin that is warm, honey-crusted, swelling, or oozing pus (signs of bacterial infection)",
      "Severe itching disrupting your child's sleep and causing open skin tears",
      "Rash accompanied by high fever or listlessness",
      "Eczema patches that fail to respond to standard sensitive baby creams"
    ],
    ourApproach: "We take a non-judgmental, holistic look at family triggers—from laundry detergents and bathing habits to food sensitivities—and provide custom barrier-repair routines that relieve itching safely and quickly.",
    gentleTipsForParents: "Practice 'soak and seal': give a 10-minute lukewarm bath without foaming bubbles, pat skin gently leaving it damp, and apply fragrance-free thick ointment within 3 minutes to trap hydration."
  },
  {
    id: 'bone',
    name: "Pediatric Orthopedics & Bone Health",
    tagline: "Specialized assessment for growing joints, toddler limps, and playground injuries",
    badge: "Growing Bones & Joint Care",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    iconName: "Activity",
    description: "Children's bones are actively growing with open growth plates that require specialized pediatric orthopedic knowledge. From toddler limps and playground sprains to growing pains and flat feet, we provide gentle, thorough physical assessments.",
    ageGroups: "Walking Toddlers • Active Kids • Student Athletes",
    commonConditions: [
      "Sudden toddler limping or refusal to bear weight (Toxic / Transient Synovitis)",
      "Nighttime aching 'growing pains' in shins, calves, or behind knees",
      "Nursemaid's elbow (subluxation of the radial head - quickly reducible)",
      "Playground falls, hairline / greenstick fractures & sprained ankles",
      "In-toeing (pigeon-toed walking), bowlegs, or knock-knees evaluation",
      "Postural asymmetry, flat feet discomfort, and pediatric sport injuries"
    ],
    whenToSeeDoctor: [
      "Child suddenly refuses to walk, bear weight, or hold an object with one arm",
      "Visible swelling, localized warmth, or redness around a joint",
      "Limp that persists for more than 24 hours without a clear mild bruise",
      "Pain waking a child up from deep sleep on multiple nights, especially with fever",
      "Inability to move fingers or toes normally after a fall or bump"
    ],
    ourApproach: "We evaluate motion through play—asking kids to jump like kangaroos or walk on tiptoes—making the exam fun and non-intimidating. We coordinate quick low-radiation pediatric imaging when truly necessary.",
    gentleTipsForParents: "For minor bumps, use R.I.C.E. (Rest, gentle Ice with a towel buffer, light Comfort wrapping, and Elevation). Never force an elbow or joint back into place without clinical guidance."
  },
  {
    id: 'general',
    name: "Comprehensive Well-Child & Preventative",
    tagline: "Guiding developmental milestones, calm immunizations, and thriving growth",
    badge: "Holistic Family Wellness",
    badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
    iconName: "HeartHandshake",
    description: "Beyond acute illness, we partner with families from their first newborn check to teenage wellness visits, offering developmental guidance, nutrition advice, and a comforting medical home.",
    ageGroups: "0 to 18 Years",
    commonConditions: [
      "Milestone and physical growth monitoring",
      "Vaccine consultations with gentle numbing techniques",
      "School, camp, and sports physical evaluations",
      "Nutrition, sleep routines, and allergy counseling"
    ],
    whenToSeeDoctor: [
      "Scheduled milestone checks at 2m, 4m, 6m, 9m, 12m, 18m, 2y, and yearly after",
      "Questions about growth percentiles, pickiness, or speech development",
      "Pre-school and sports clearance forms required by schools"
    ],
    ourApproach: "We listen to parents' instincts. You know your child best; our job is to provide calm, evidence-based guidance to help your little sprout flourish.",
    gentleTipsForParents: "Keep a quick list of everyday questions on your phone between well visits so we can address your curiosities together with zero rush."
  }
];

export const DOCTOR_PROFILE: DoctorProfile = {
  name: "Dr. Maryem Munir, MD, FAAP",
  title: "Board-Certified Pediatrician & Pediatric ENT / Musculoskeletal Care Specialist",
  credentials: ["MD, Harvard Medical School", "Fellow of the American Academy of Pediatrics (FAAP)", "Specialized Fellowship in Pediatric Triage & Urgent Medicine"],
  experienceYears: 14,
  languages: ["English", "Spanish", "Conversational Mandarin"],
  bio: "Dr. Maryem Munir founded Bloom Pediatric Care with a singular vision: to create a healthcare sanctuary where frightened children feel safe, and overwhelmed parents feel genuinely heard. Having treated over 18,000 children across her 14-year career, Dr. Munir combines academic precision with a soothing, playful bedside manner. She specifically focuses on four of childhood's most distressing challenges—stubborn throat infections, recurring respiratory colds, uncomfortable skin conditions, and pediatric bone/joint aches.",
  philosophy: "I don't wear a formal white coat because it creates an unnecessary barrier of fear. Every child deserves to be spoken to with respect, at their eye level. Before touching an ear or throat, we show them on a plush bear first. Medicine should feel like a warm hug, not an ordeal.",
  clinicAtmosphere: "Our clinic is engineered for sensory calm: soft acoustic paneling to prevent echoing cries, warm 2700K lighting, interactive wall puzzles, and separate clean spaces so a well-check baby never shares air with a flu-ridden toddler.",
  education: [
    { degree: "Doctor of Medicine (MD)", institution: "Harvard Medical School", year: "2010" },
    { degree: "Pediatric Residency", institution: "Boston Children's Hospital", year: "2010 - 2013" },
    { degree: "Chief Resident in Ambulatory Pediatrics", institution: "Boston Children's Hospital", year: "2013 - 2014" },
    { degree: "BS in Biopsychology, Summa Cum Laude", institution: "Stanford University", year: "2006" }
  ],
  fellowships: [
    "Clinical Fellowship in Pediatric Ambulatory Care & Otolaryngology Triage",
    "Certification in Pediatric Musculoskeletal Ultrasound & Joint Screening",
    "Pediatric Advanced Life Support (PALS) Master Instructor"
  ],
  certifications: [
    "American Board of Pediatrics (ABP) - Board Certified",
    "California State Medical License #C149822",
    "American Academy of Pediatrics (AAP) Active Fellow"
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    parentName: "Sarah M.",
    childAge: "Mother of Leo (3 yrs)",
    conditionTreated: "Chronic Tonsillitis & Recurrent Strep",
    quote: "Leo used to scream bloody murder anytime a doctor pulled out a tongue depressor. Dr. Munir turned the throat check into a silly singing game with her owl light. Within two visits, we had a clear, gentle treatment plan that finally stopped his recurrent infections.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    id: "2",
    parentName: "Marcus & David T.",
    childAge: "Parents of Maya (18 mos)",
    conditionTreated: "Severe Atopic Eczema Flare-ups",
    quote: "Maya couldn't sleep because she was scratching her cheeks raw. Other clinics just handed us strong steroid tubes without instructions. Dr. Munir spent 45 minutes teaching us the soak-and-seal method and barrier repair. Her skin was baby-soft in five days. Total lifesaver.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: "3",
    parentName: "Priya K.",
    childAge: "Mother of Arjun (5 yrs)",
    conditionTreated: "Sudden Limp & Playground Knee Sprain",
    quote: "When Arjun woke up limping on a Saturday morning, we were terrified of a fracture. We booked a sick slot at Bloom within 2 hours. Dr. Munir had him giggling while she gently tested his knee ligaments. Her calm reassurance saved us an exhausting ER bill.",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    id: "4",
    parentName: "Amina R.",
    childAge: "Mother of Sophia (10 mos)",
    conditionTreated: "Barking Croup & Winter Cold",
    quote: "Hearing your baby struggle to breathe at 2 AM is pure nightmare fuel. Bloom's on-call triage gave us step-by-step steam advice, and Dr. Munir examined her first thing Sunday morning. The clinic environment is so peaceful and clean.",
    rating: 5,
    date: "Last month"
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "throat",
    question: "How do I know if my child's sore throat is Strep or just a common viral cold?",
    answer: "Viral colds usually come with runny nose, cough, hoarseness, and watery eyes alongside a sore throat. Strep throat tends to come on suddenly with a higher fever, painful swallowing, swollen tender neck glands, and sometimes stomachache/headache WITHOUT a runny nose. We run a rapid 10-minute strep test in-office to give you certainty before starting any antibiotics."
  },
  {
    category: "cold",
    question: "When does a child's cough require immediate medical attention?",
    answer: "You should seek prompt care if you notice signs of respiratory distress: nostrils flaring with each breath, chest skin pulling between or below the ribs (retractions), an audible high-pitched squeak when inhaling (stridor), or if your child cannot say a few words without gasping. If your child is alert, drinking fluids, and playing between coughing spells, it is usually safe to manage with humidity and hydration."
  },
  {
    category: "skin",
    question: "How can I tell the difference between viral rashes (like Hand, Foot & Mouth) and allergic hives?",
    answer: "Allergic hives are typically raised, intensely itchy pink/red welts that shift location on the body within hours. Viral rashes like Hand-Foot-Mouth produce small, tender, water-drop-like blisters on palms, soles, inside the cheeks, and around the diaper area. They generally don't change location and often accompany a mild fever. We always inspect rash patterns carefully in our clinic."
  },
  {
    category: "bone",
    question: "My 4-year-old complains of leg pain at night. Are these really 'growing pains' or something worse?",
    answer: "True growing pains typically happen in the late evening or wake the child from sleep, affect both legs (shins, calves, or behind the knees), and respond wonderfully to gentle massage or a warm heating pad. By morning, the child runs normally without any limp. If pain is localized to one joint, causes daytime limping, or is accompanied by morning stiffness or joint swelling, we should perform a formal orthopedic screening."
  },
  {
    category: "appointments",
    question: "Do you offer same-day appointments for acute sick visits?",
    answer: "Yes! We reserve dedicated same-day and next-morning urgent slots every weekday and Saturday specifically for acute high fevers, painful throats, breathing distress, sudden rashes, and playground falls. You can book directly through our online portal or call our front desk."
  },
  {
    category: "general",
    question: "What makes Bloom Pediatric Care different from a standard walk-in clinic?",
    answer: "Unlike adult urgent cares where children are treated with adult-scale tools, our entire practice is designed around child psychology and pediatric physiology. Dr. Munir has deep specialist training in pediatric ENT, respiratory triage, dermatology, and pediatric musculoskeletal checks. We minimize waiting room stress, utilize gentle painless diagnostic tools, and provide direct parent support."
  }
];

export const PATIENT_RESOURCES: PatientResourceGuide[] = [
  {
    id: "fever-guide",
    title: "Parent's First-Aid Guide to Childhood Fevers",
    category: "Fever & Home Care",
    readTime: "4 min read",
    summary: "Fever is not an enemy—it is your child's immune system fighting back. Learn when to treat comfort versus when to call the clinic.",
    keyPoints: [
      "Fever is clinically defined as 100.4°F (38.0°C) or higher taken rectally or forehead temporal.",
      "Treat how your child feels, not just the number on the thermometer. A playful child with 102°F is doing better than a limp child with 100.8°F.",
      "Always dose fever reducers by your child's current weight, never by age alone."
    ],
    redFlags: [
      "Any infant younger than 3 months with a temperature of 100.4°F requires immediate emergency evaluation.",
      "Fever lasting more than 3 to 4 consecutive days.",
      "Fever with a stiff neck, unusual confusion, or purple spots."
    ],
    homeComfortTips: [
      "Dress your child in a single layer of breathable cotton clothing.",
      "Encourage small, frequent sips of electrolyte solution or cold popsicles.",
      "Avoid ice-cold baths or rubbing alcohol, which can cause severe shivering and rapid internal temperature spikes."
    ]
  },
  {
    id: "croup-and-colds",
    title: "Croup, RSV & The Nighttime Barking Cough",
    category: "Throat & Breathing",
    readTime: "5 min read",
    summary: "How to safely calm sudden midnight barking coughs, open narrowed airways, and know when respiratory support is required.",
    keyPoints: [
      "Croup causes swelling just below the vocal cords, producing a telltale seal-like bark.",
      "Symptoms almost always peak on night 2 and 3, frequently worsening between 10 PM and 2 AM.",
      "Cool humidified air is the fastest natural way to shrink vocal cord inflammation."
    ],
    redFlags: [
      "Inspiratory stridor (a high-pitched whistling noise when inhaling while resting quietly).",
      "Skin sucking into the hollow at the base of the throat or under the rib cage.",
      "Pale, dusky, or bluish coloring around the mouth or fingernails."
    ],
    homeComfortTips: [
      "Turn your bathroom shower on hot with the door shut. Sit in the steamy room with your child on your lap for 15 minutes.",
      "Alternatively, bundle your child warmly and step into the cool night air for 10 minutes—the cold crisp air often relieves swelling instantly.",
      "Keep your child upright to make breathing mechanically easier."
    ]
  },
  {
    id: "eczema-action-plan",
    title: "Soothing Eczema & Restoring the Skin Barrier",
    category: "Skin & Rashes",
    readTime: "4 min read",
    summary: "Stop the itch-scratch cycle with our clinic-tested soak-and-seal routine and gentle trigger identification.",
    keyPoints: [
      "Childhood eczema is fundamentally a leaky skin barrier that loses water and lets irritants enter.",
      "Lotions with high water content can actually sting and dry skin further; ointments (like petroleum jelly or ceramide balms) are far superior.",
      "Scratching damages the barrier and invites secondary staph infections."
    ],
    redFlags: [
      "Honey-colored crusting, yellow pus bumps, or intensely tender skin (indicates impetigo infection).",
      "Clusters of tiny painful blisters that look like cold sores on eczema patches (eczema herpeticum).",
      "Skin is hot to the touch or spreading redness with a fever."
    ],
    homeComfortTips: [
      "Bath time should be warm, never hot, lasting strictly 5-10 minutes with mild, soap-free cleansers.",
      "Pat gently with a soft towel—do not rub dry.",
      "Slather thick balm everywhere within 180 seconds of leaving the bath.",
      "Use 100% organic cotton pajamas and keep fingernails trimmed short and filed smooth."
    ]
  },
  {
    id: "limping-and-sprains",
    title: "Toddler Limping, Nursemaid's Elbow & Playground Sprains",
    category: "Bones & Injuries",
    readTime: "6 min read",
    summary: "Why toddlers sometimes wake up refusing to walk, how to spot common elbow dislocations, and caring for minor fractures.",
    keyPoints: [
      "Transient Synovitis is a harmless temporary inflammation of the hip joint that often appears 1-2 weeks after a routine viral cold.",
      "Nursemaid's elbow occurs when a child's arm is gently pulled while walking; the child will hold their arm limp by their side.",
      "Children's bones are more flexible than adult bones, often bending (torus/greenstick) rather than cleanly snapping."
    ],
    redFlags: [
      "Inability to bear any weight accompanied by a high fever (must rule out septic joint).",
      "Visible bone deformity, severe angulation, or open skin breaks.",
      "Numbness, tingling, or cold, pale fingers/toes."
    ],
    homeComfortTips: [
      "Allow the child to rest in whatever position feels comfortable—never force walking.",
      "Apply a soft ice pack wrapped in a plush dishcloth for 15 minutes at a time.",
      "Schedule a gentle orthopedic physical assessment to check range of motion and joint stability."
    ]
  }
];
