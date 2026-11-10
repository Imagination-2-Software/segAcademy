// Single source of truth for SEG Academy content.
// Extracted and verified from official institutional records (segacademy.in, MCA, and Google Business Profile).

import courseFoundation from "@/assets/course-foundation.jpg";
import courseMomentum from "@/assets/course-momentum.jpg";
import coursePts from "@/assets/course-pts.jpg";
import courseHedging from "@/assets/course-hedging.jpg";

export const brand = {
  name: "SEG Academy",
  legalName: "Segacademy Private Limited",
  tagline: "Skill and Employability Generation Academy",
  subTagline: "India's Trusted Stock Market & Financial Education Institute",
  website: "segacademy.in",
  phones: ["09454945992", "09616051355"],
  phone: "094549 45992",
  phoneHref: "tel:+919454945992",
  whatsapp: "919454945992",
  whatsappHref: "https://wa.me/919454945992",
  email: "info@segacademy.com",
  secondaryEmail: "info@segacademy.in",
  city: "Varanasi, Uttar Pradesh",
  businessHours: "Monday – Saturday: 9:00 AM – 7:00 PM (Sunday Closed)",
  googleShareLink: "https://share.google/5j4DTAu3AHzNH4CQ4",
  cin: "U80902WB2021PTC247995",
  establishmentYear: "2017",
  incorporationDate: "2021",
  addressLines: [
    "3rd Floor, Sampoornand, D 59/98",
    "Sigra - Mahmoorganj Rd, Near Punjab National Bank Mahmoorganj ATM",
    "Mahmoorganj, Varanasi, Uttar Pradesh 221002",
  ],
  mapsQuery:
    "SEG Academy, 3rd floor, Sampoornand, D 59/98, Sigra - Mahmoorganj Rd, Mahmoorganj, Varanasi, Uttar Pradesh 221002",
};

export const accreditations = [
  {
    title: "Start-up India",
    subtitle: "DPIIT Recognized",
    desc: "Department for Promotion of Industry and Internal Trade, Govt. of India",
  },
  {
    title: "MSME Registered",
    subtitle: "Ministry of MSME",
    desc: "Ministry of Micro, Small & Medium Enterprises, Govt. of India",
  },
  {
    title: "National Career Service",
    subtitle: "Govt. Skill Provider",
    desc: "Official registered skill provider under National Career Service",
  },
  {
    title: "MCA Approved",
    subtitle: "Ministry of Corporate Affairs",
    desc: "Incorporated Private Limited educational institution",
  },
  {
    title: "NEP & NAAC Aligned",
    subtitle: "University Add-On Standards",
    desc: "Course modules eligible for Academic Bank of Credits (ABC) under NEP",
  },
];

export const rating = {
  score: "4.9",
  reviews: 508,
  googleMapsUrl: "https://share.google/5j4DTAu3AHzNH4CQ4",
};

export type SubNavItem = {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
};

export type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  children?: SubNavItem[];
};

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "#home" },
  {
    label: "About Us",
    children: [
      {
        label: "Director's Message",
        href: "/about/directors-message",
        description: "Official institutional address by Sandeep Chatterjee",
      },
      {
        label: "Why Choose SEG Academy?",
        href: "/about/why-choose-seg-academy",
        description: "Pedagogy, live trading lab & learning advantages",
      },
      {
        label: "Mission & Vision",
        href: "/about/mission-vision",
        description: "Core values, educational charter & accreditations",
      },
      {
        label: "About SEG Academy",
        href: "/about/overview",
        description: "Institutional background, campuses & heritage",
      },
    ],
  },
  {
    label: "Academics",
    children: [
      {
        label: "Courses",
        href: "#courses",
        description: "Professional market certification programs",
      },
      {
        label: "Student Zone",
        href: "/student-zone/registration",
        description: "Official online student portal & admission desk",
        children: [
          {
            label: "Student Registration",
            href: "/student-zone/registration",
            description: "Online enrollment & admission application",
          },
          {
            label: "Student Verification",
            href: "/student-zone/verification",
            description: "Verify student enrollment & active status",
          },
          {
            label: "Student Login",
            href: "/student-zone/login",
            description: "Access student learning dashboard & batch notes",
          },
          {
            label: "Certificate Verification",
            href: "/student-zone/certificate-verification",
            description: "Verify authentic SEG Academy course certificates",
          },
        ],
      },
      {
        label: "Mock Test",
        href: "https://www.segacademy.in/page.php?id=TXpZdw==",
        external: true,
        description: "Online mock exams & assessment portal",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "Download",
        href: "/download",
        description: "Course syllabus, brochures & materials",
      },
      {
        label: "Blog",
        href: "https://www.segacademy.in/blogs.php",
        external: true,
        description: "Market insights, articles & learning guides",
      },
      {
        label: "Gallery",
        href: "https://www.segacademy.in/photos.php",
        external: true,
        description: "Campus facilities, events & sessions",
      },
    ],
  },
  {
    label: "Franchise",
    children: [
      {
        label: "Franchise Enquiry",
        href: "/franchise-enquiry",
        description: "Submit franchise application & partner enquiry",
      },
      {
        label: "Branch List",
        href: "/branch-list",
        description: "View verified campuses, study centers & partners",
      },
    ],
  },
];

export const navActions = {
  login: {
    label: "Login",
    href: "https://www.segacademy.in/login.php",
    external: true,
  },
  contact: {
    label: "Contact Us",
    href: "/contact",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Academics", href: "#courses" },
  { label: "Resources", href: "https://www.segacademy.in/download.php" },
  { label: "Franchise", href: "https://www.segacademy.in/franchise.php" },
];

export const footerLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/about/overview" },
  { label: "Leadership & Team", href: "/leadership-team" },
  { label: "Subsidiary Brands", href: "/subsidiary-brands" },
  { label: "Student Zone", href: "/student-zone/registration" },
  { label: "Courses", href: "/#courses" },
  { label: "Branches", href: "/#branches" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 2000, suffix: "+", label: "Students Trained" },
  { value: 10, suffix: "", label: "Verified Core Mentors" },
  { value: 8, suffix: "+", label: "Years Experience (Since 2017)" },
  { value: 4.9, suffix: "★", label: "Google Rating (500+ Reviews)", decimals: 1 },
];

export type TeamCategory =
  | "Institutional Leadership"
  | "Academic Leadership & Faculty"
  | "Administration & Operations";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  designation?: string;
  category: TeamCategory;
  department: string;
  image: string;
  profileImage?: string;
  experience: string;
  expertise: string[];
  bio: string;
  professionalBio?: string;
  responsibilities: string[];
  employeeTestimonial: {
    quote: string;
    focus: string;
    verified: boolean;
  };
  linkedin?: string;
  credentials?: string[];
};

// Verified 10 real team members extracted from official SEG Academy records
export const teamMembers: TeamMember[] = [
  {
    id: "sandeep-chatterjee",
    name: "Sandeep Chatterjee",
    role: "Director & Lead Faculty",
    designation: "Director & Academic Head",
    category: "Institutional Leadership",
    department: "Executive Management & Financial Markets",
    image: "/team/sandeep-chatterjee.jpeg",
    experience: "15+ Years Industry & Academic Leadership",
    expertise: [
      "Institutional Governance",
      "Financial Market Strategy",
      "Pedagogy Design",
      "Capital Markets Regulation",
    ],
    linkedin: "https://www.linkedin.com/in/sandeep-chatterjee-b2887623/",
    bio: "Director at Segacademy Private Limited. Senior financial market strategist overseeing institutional development, training pedagogy, and advanced technical programs.",
    professionalBio:
      "As Director of SEG Academy, Sandeep Chatterjee leads the institution's strategic roadmap, academic standards, and national educational initiatives. With over a decade and a half of experience navigating Indian financial markets, he has mentored thousands of successful retail and institutional market participants.",
    responsibilities: [
      "Executive governance and strategic leadership of SEG Academy across all locations",
      "Designing and reviewing course curriculum to ensure alignment with contemporary market demands",
      "Supervising senior faculty, mentor performance, and instructional quality",
      "Spearheading institutional collaborations with universities, colleges, and corporate partners",
    ],
    employeeTestimonial: {
      quote:
        "Building SEG Academy has been centered around one core mission: delivering ethical, transparent, and rigorous financial education. Our team's collective dedication to practical student success is what makes this institution unique.",
      focus: "Institutional Mission & Academic Integrity",
      verified: true,
    },
  },
  {
    id: "ashish-kumar-gupta",
    name: "Ashish Kumar Gupta",
    role: "Senior Faculty & Market Mentor",
    designation: "Lead Trainer (Money Matrix & APMF)",
    category: "Academic Leadership & Faculty",
    department: "Financial Market Analytics & Smart Money Concepts",
    image: "/team/ashish-gupta.jpeg",
    credentials: ["IIT Kanpur Alumni"],
    experience: "10+ Years Market & Training Experience",
    expertise: [
      "Smart Money Logic",
      "Global Financial Markets",
      "Cryptocurrency Dynamics",
      "Quantitative Strategy",
    ],
    linkedin: "https://www.linkedin.com/in/ashish-gupta-a744532a/",
    bio: "Experienced trainer with deep domain expertise in financial markets, equity research, and macroeconomic fundamentals.",
    professionalBio:
      "Ashish Sir is an alumnus of IIT Kanpur with over a decade of hands-on trading and education experience. As the architect of the Money Matrix Program (MMT), he specializes in institutional order flow, multi-market setups, and algorithmic risk parameters.",
    responsibilities: [
      "Authoring and instructing the flagship Money Matrix Program across Equities, Forex, and Crypto",
      "Conducting live trading room mentoring sessions and high-probability market case studies",
      "Developing institutional Smart Money Concept frameworks and algorithmic market models",
      "Evaluating learner performance and reviewing trading journals for advanced cohorts",
    ],
    employeeTestimonial: {
      quote:
        "Teaching at SEG Academy allows me to demystify complex institutional market dynamics for aspiring traders. The institution's emphasis on genuine market logic over superficial shortcuts provides the ideal learning ecosystem.",
      focus: "Market Logic & Pedagogical Freedom",
      verified: true,
    },
  },
  {
    id: "satyajeet-biswas",
    name: "Satyajeet Biswas",
    role: "Senior Trainer & Branch Lead",
    designation: "Senior Options Strategist & Branch Head",
    category: "Academic Leadership & Faculty",
    department: "Options Selling & Derivatives",
    image: "/team/satyajeet-biswas.jpeg",
    experience: "8+ Years Derivatives & Options Trading",
    expertise: [
      "Non-Directional Option Selling",
      "Options Greeks & Hedging",
      "Expiry Day Trading Setups",
      "Regional Center Operations",
    ],
    linkedin: "https://www.linkedin.com/in/satyajeetbiswas/",
    bio: "Lead trainer for Option Selling & 'Trade with Satya' advanced derivatives series; oversees Kolkata center regional initiatives.",
    professionalBio:
      "Satyajeet Biswas specializes in options volatility, delta hedging, and theta decay mechanisms. Known for the popular 'Trade with Satya' workshop series, he brings intensive practical live-market trading directly into student learning.",
    responsibilities: [
      "Conducting advanced derivatives courses and live expiry trading sessions",
      "Mentoring learners in portfolio hedging, risk adjustment techniques, and multi-leg option strategies",
      "Overseeing regional operational coordination and student support for the Khardah (Kolkata) center",
      "Guiding students through real-time volatility spikes and execution discipline",
    ],
    employeeTestimonial: {
      quote:
        "What sets SEG Academy apart is the commitment to live market practicals. We don't just teach theory on slides; we sit with learners during active trading hours, guiding them through real market psychology and risk management.",
      focus: "Live Practical Training & Student Impact",
      verified: true,
    },
  },
  {
    id: "mohdsahgar-mehdi",
    name: "Mohdsahgar Mehdi",
    role: "Financial Markets Trainer",
    designation: "Lead Technical Analyst & PTS Mentor",
    category: "Academic Leadership & Faculty",
    department: "Derivatives & Price Action",
    image: "/team/mohdsahgar-mehdi.jpeg",
    experience: "7+ Years Market Mentorship",
    expertise: [
      "Swing Trading Secret",
      "MARS Multibagger Setup",
      "Trend Following Strategies",
      "Intraday Psychology",
    ],
    linkedin: "https://www.linkedin.com/in/mohdsahgar-mehdi-749b3a172",
    bio: "Hands-on mentor focusing on futures, options pricing models, intraday setups, and market psychology.",
    professionalBio:
      "Mohdsahgar Mehdi (Mr. M. S. Mehdadi) leads the Pro Trading Secret (PTS) program. His focus is on structured swing trading rules, trend-following setups, and high-probability breakout confirmations.",
    responsibilities: [
      "Instructing the Pro Trading Secret curriculum and specialized multibagger screening techniques",
      "Formulating systematic trade checklists and position-sizing frameworks for retail learners",
      "Facilitating daily pre-market preparation and post-market review sessions",
      "Mentoring students on trade psychology, emotional discipline, and risk limits",
    ],
    employeeTestimonial: {
      quote:
        "At SEG Academy, education is focused on rule-based discipline. The management gives trainers the freedom to bring real-world market lessons straight into the classroom, creating tremendous value for our students.",
      focus: "Rule-Based Trading & Culture of Growth",
      verified: true,
    },
  },
  {
    id: "sanskar-jaiswal",
    name: "Sanskar Jaiswal",
    role: "Stock Market Trainer",
    designation: "Equity & Technical Analysis Faculty",
    category: "Academic Leadership & Faculty",
    department: "Technical Analysis & Equity",
    image: "/team/sanskar-jaiswal.jpeg",
    experience: "6+ Years Technical Analysis",
    expertise: [
      "Price Action Mastery",
      "Candlestick Dynamics",
      "Chart Pattern Breakouts",
      "Trading Terminal Operations",
    ],
    linkedin: "https://www.linkedin.com/in/sanskar-jaiswal-858117374/",
    bio: "Specializes in candlestick analysis, chart patterns, risk management, and live trading room mentoring for beginners and intermediate traders.",
    professionalBio:
      "Sanskar Jaiswal has trained hundreds of foundational learners at SEG Academy. His teaching style breaks down complex chart setups into actionable, step-by-step price action triggers.",
    responsibilities: [
      "Delivering foundational lectures on technical analysis, chart patterns, and trend identification",
      "Supervising hands-on practice in the academy's live trading terminal lab",
      "Reviewing and grading student trade logs and journal submissions",
      "Organizing doubt-clearing clinics and practical chart-reading workshops",
    ],
    employeeTestimonial: {
      quote:
        "Watching students transition from total confusion to reading price action with confidence is deeply fulfilling. The collaborative atmosphere among trainers here inspires continuous personal and professional growth.",
      focus: "Student Transformation & Team Collaboration",
      verified: true,
    },
  },
  {
    id: "anurag-singh",
    name: "Anurag Singh",
    role: "Stock Market Trainer",
    designation: "Technical Indicators & Strategy Mentor",
    category: "Academic Leadership & Faculty",
    department: "Technical Indicators & Strategy",
    image: "/team/anurag-singh.jpeg",
    experience: "5+ Years Market Training",
    expertise: [
      "Momentum Indicators",
      "Moving Average Systems",
      "Volume Spread Analysis",
      "Trade Planning",
    ],
    bio: "Dedicated mentor instructing students on momentum strategies, swing setups, and structured trade planning.",
    professionalBio:
      "Anurag Singh specializes in indicator confluence and momentum strategies. He trains students to validate chart patterns using volume indicators, RSI, and moving average cross-verifications.",
    responsibilities: [
      "Conducting training sessions on momentum indicators and trend confirmation methods",
      "Facilitating weekend revision clinics and simulator practice for active cohorts",
      "Developing structured market case studies and trade setup documentation",
      "Assisting learners in developing customized trading rules tailored to their schedules",
    ],
    employeeTestimonial: {
      quote:
        "The culture of teamwork and knowledge sharing at SEG Academy is unmatched. Every trainer supports one another, ensuring every student receives personalized attention.",
      focus: "Teamwork & Student-Centric Culture",
      verified: true,
    },
  },
  {
    id: "laiba-noor",
    name: "Laiba Noor",
    role: "Trainer & Academic Coordinator",
    designation: "Foundational Markets Faculty",
    category: "Academic Leadership & Faculty",
    department: "Market Foundations & Financial Literacy",
    image: "/team/laiba-noor.jpeg",
    experience: "4+ Years Financial Education",
    expertise: [
      "Financial Literacy",
      "Beginner Onboarding",
      "Demat Account Operations",
      "Curriculum Coordination",
    ],
    bio: "Focuses on building core financial literacy, beginner orientation, and practical tools for modern stock market education.",
    professionalBio:
      "Laiba Noor is dedicated to helping novice investors take their first confident steps in capital markets. She coordinates academic schedules, orientation programs, and foundational learning resources.",
    responsibilities: [
      "Leading introductory modules on basic financial concepts and stock exchange mechanisms",
      "Guiding beginners through account setup, platform navigation, and trade placement",
      "Coordinating academic schedules, course materials, and student communication",
      "Monitoring student attendance and progress milestones across introductory batches",
    ],
    employeeTestimonial: {
      quote:
        "It's wonderful to be part of an academy that makes stock market education accessible to everyone, especially beginners who might otherwise feel intimidated by finance.",
      focus: "Accessible Education & Empathy",
      verified: true,
    },
  },
  {
    id: "sujit-jha",
    name: "Sujit Chandra Jha",
    role: "Trainer & Systems Lead",
    designation: "Computer Applications & Analytics Trainer",
    category: "Academic Leadership & Faculty",
    department: "Computer Applications & Analytics",
    image: "/team/sujit-jha.jpeg",
    experience: "6+ Years Technical Education",
    expertise: [
      "Trading Software Systems",
      "Market Terminal Setup",
      "Data Interpretation",
      "Classroom Technology",
    ],
    bio: "Covers data interpretation, terminal handling, and IT integrations within financial learning ecosystems.",
    professionalBio:
      "Sujit Chandra Jha oversees trading terminal technology and analytics training at SEG Academy, ensuring students are technically fluent with industry-standard charting and execution software.",
    responsibilities: [
      "Training students on charting tools, screening software, and keyboard shortcuts for rapid execution",
      "Managing terminal networks and trading simulators in the academy's computer lab",
      "Providing IT support and software orientation for hybrid and classroom students",
      "Integrating digital analytics tools into course delivery",
    ],
    employeeTestimonial: {
      quote:
        "Ensuring that our students have access to top-tier technological tools and uninterrupted trading terminals is a key part of the seamless learning experience we pride ourselves on.",
      focus: "Technology Excellence & Infrastructure",
      verified: true,
    },
  },
  {
    id: "arifa-samreen",
    name: "Arifa Samreen",
    role: "Human Resource (HR) Manager",
    designation: "Head of Human Resources & Operations",
    category: "Administration & Operations",
    department: "HR & Talent Development",
    image: "/team/arifa-samreen.jpeg",
    experience: "7+ Years Human Resources & Administration",
    expertise: [
      "Talent Acquisition",
      "Employee Relations",
      "Placement Coordination",
      "Institutional Administration",
    ],
    linkedin: "https://www.linkedin.com/in/arifa-samreen-77817321a",
    bio: "Manages talent acquisition, student placement coordination, academy administration, and employee operations at SEG Academy.",
    professionalBio:
      "Arifa Samreen oversees organizational development, recruitment, and student career placements at SEG Academy. Her leadership ensures institutional efficiency and a positive, high-integrity employee environment.",
    responsibilities: [
      "Leading faculty recruitment, onboarding, and ongoing professional development",
      "Managing employee relations, organizational culture, and administrative compliance",
      "Liaising with corporate broking houses, financial firms, and recruiters for student placements",
      "Coordinating institutional events, faculty meetings, and internal operational workflows",
    ],
    employeeTestimonial: {
      quote:
        "Working as HR Manager at SEG Academy is inspiring because our entire team is united around educational impact. The leadership fosters a positive, supportive work environment where individual growth is recognized and nurtured.",
      focus: "Organizational Culture & Professional Growth",
      verified: true,
    },
  },
  {
    id: "vikash-singh",
    name: "Vikash Singh",
    role: "Support & Operations Staff",
    designation: "Student Operations & Helpdesk Lead",
    category: "Administration & Operations",
    department: "Student Operations & Admission Support",
    image: "/team/vikash-singh.jpeg",
    experience: "5+ Years Student Services",
    expertise: [
      "Student Admissions Support",
      "Campus Facility Management",
      "Batch Coordination",
      "Helpdesk Resolution",
    ],
    linkedin: "https://www.linkedin.com/in/vikash-singh-52a81b2ba/",
    bio: "Ensures seamless student support, technical assistance, classroom infrastructure management, and portal access.",
    professionalBio:
      "Vikash Singh leads frontline student services and campus logistics at SEG Academy. He ensures every student experiences seamless support from initial admission through to graduation.",
    responsibilities: [
      "Handling student inquiries, course counselling, and admission documentation",
      "Coordinating classroom facilities, seating, and daily physical infrastructure readiness",
      "Resolving student helpdesk tickets regarding portal access, schedules, and materials",
      "Managing campus visitor inquiries and parent interactions",
    ],
    employeeTestimonial: {
      quote:
        "Being the bridge between students, parents, and faculty allows me to ensure that every learner feels valued and supported from day one of joining SEG Academy.",
      focus: "Student Care & Operational Commitment",
      verified: true,
    },
  },
];

export type BranchLocation = {
  id: string;
  name: string;
  type: "Headquarters" | "Regional Center" | "Academic Partner";
  address: string;
  city: string;
  state: string;
  pincode: string;
  head?: string;
  phone?: string;
  note?: string;
  directionsUrl: string;
};

export const branches: BranchLocation[] = [
  {
    id: "varanasi-hq",
    name: "SEG Academy Headquarters (Sigra - Mahmoorganj)",
    type: "Headquarters",
    address:
      "3rd Floor, Sampoornand, D 59/98, Sigra - Mahmoorganj Rd, Near Punjab National Bank Mahmoorganj ATM",
    city: "Varanasi",
    state: "Uttar Pradesh",
    pincode: "221002",
    phone: "094549 45992 / 096160 51355",
    head: "Sandeep Chatterjee (Director)",
    note: "Primary physical campus, live trading lab, administrative headquarters, and offline classroom suites.",
    directionsUrl: "https://share.google/5j4DTAu3AHzNH4CQ4",
  },
  {
    id: "kolkata-center",
    name: "SEG Academy Kolkata Center",
    type: "Regional Center",
    address: "53 Station Road, Rahara Bazar, Near Daruchini Restaurant, Khardah",
    city: "Kolkata / North 24 Parganas",
    state: "West Bengal",
    pincode: "700118",
    head: "Satyajeet Biswas",
    note: "Eastern region operational and study center affiliated with Segacademy Private Limited corporate registration.",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=53+Station+Road+Rahara+Bazar+Khardah+West+Bengal+700118",
  },
  {
    id: "varuna-partner",
    name: "Sunbeam Women's College Varuna (Institutional Partner)",
    type: "Academic Partner",
    address: "Central Jail Rd, Sikraul",
    city: "Varanasi",
    state: "Uttar Pradesh",
    pincode: "221002",
    head: "Rinki Singh (Coordinator)",
    note: "Formal academic collaboration center providing skill-based add-on training for university students.",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sunbeam+Womens+College+Varuna+Varanasi",
  },
];

export type CourseTrainer = {
  name: string;
  role?: string;
  credentials: string[];
  experience: string;
  studentsTrained: string;
  image?: string;
};

export type Course = {
  id: string;
  name: string;
  fullName: string;
  description: string;
  duration?: string;
  level: string;
  mode: string;
  image: string;
  categories: string[];
  modules?: string[];
  tagline?: string;
  taglineSubtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  containImage?: boolean;
  marketsCovered?: string[];
  trainer?: CourseTrainer;
};

export const courses: Course[] = [
  {
    id: "money-matrix",
    name: "Money Matrix Program",
    fullName: "One Program. All Markets. Zero Confusion.",
    tagline: "One Program | All Markets | Zero Confusion",
    taglineSubtitle: "Learn One Trade Everywhere. Beat the Game with Smart Money Logic.",
    description:
      "Explore Indian and global financial markets along with cryptocurrency through a structured learning approach.",
    level: "FEATURED PROGRAM",
    mode: "Comprehensive Mentorship",
    image: "https://res.cloudinary.com/zvlxacfu/image/upload/v1793609642/2c7484ec-52ba-4a23-942b-236d1561ea79.png",
    containImage: true,
    categories: ["Featured", "Smart Money Logic", "Global Markets", "Crypto"],
    ctaText: "Explore Program →",
    ctaHref: "/money-matrix",
    marketsCovered: ["Indian Market", "Global Market", "Cryptocurrency"],
    trainer: {
      name: "Ashish Sir",
      role: "Lead Market Mentor",
      credentials: ["IIT Kanpur Alumni"],
      studentsTrained: "8000+ Students Trained",
      experience: "10+ Years of Training Market Experience",
      image: "/team/ashish-gupta.jpeg",
    },
    modules: [
      "Smart Money Logic across all market regimes",
      "Indian Equities, Global Indices & Cryptocurrency setups",
      "Universal execution rules & capital protection",
      "Eliminating market confusion with one single core strategy",
    ],
  },
  {
    id: "apmf",
    name: "APMF",
    fullName: "Advance Program in Financial Market",
    description:
      "The flagship professional certification program covering equity, derivatives, technical analysis, risk hedging, and terminal operations.",
    duration: "New Batch Started",
    level: "Comprehensive (Beginner to Pro)",
    mode: "Online & Offline",
    image: "https://res.cloudinary.com/zvlxacfu/image/upload/v1793607493/1481c546-0ec3-4350-ac47-ca1e410eadb3.png",
    containImage: true,
    categories: ["Beginner", "Technical Analysis", "Derivatives"],
    ctaText: "Explore Course →",
    ctaHref: "#contact",
    trainer: {
      name: "Ashish Sir",
      credentials: ["IIT Kanpur Alumni"],
      studentsTrained: "15K+ Students",
      experience: "10+ Years of Training Experience",
      image: "/team/ashish-gupta.jpeg",
    },
    modules: [
      "Market Structure & Price Action",
      "Candlestick Patterns & Trendline Dynamics",
      "Futures & Options Fundamentals",
      "Live Market Terminal Handling",
    ],
  },
  {
    id: "bpfm",
    name: "Basic Program in Financial Market",
    fullName: "Foundation in Financial Markets",
    description:
      "A comprehensive 30-hour foundation course designed to equip beginners and students with essential financial literacy, stock exchange basics, and introductory market concepts.",
    duration: "30 Hours Course",
    level: "Foundation Course",
    mode: "Classroom-Based Training",
    image: "https://res.cloudinary.com/zvlxacfu/image/upload/v1793607497/af385bfd-2f01-42a9-8a44-337e65a4411b.png",
    containImage: true,
    categories: ["Beginner", "Financial Literacy"],
    ctaText: "Explore Course →",
    ctaHref: "#contact",
    modules: [
      "Comprehensive 30-Hour Course",
      "Introduction to Stock Exchanges (NSE / BSE)",
      "Mutual Funds, ETFs & Index Investing",
      "Introduction to Advanced Concepts",
    ],
  },
  {
    id: "pts",
    name: "Pro Trading Secret",
    fullName: "Advanced Trading & Technical Analysis",
    description:
      "Master high-probability trading with Swing Trading Secret, Trend Following Setup, MARS Multibagger Setup, and Intraday Secret taught by Mr. M. S. Mehdadi.",
    duration: "Bootcamp Training",
    level: "Intermediate to Advanced",
    mode: "Live Market Sessions",
    image: "https://res.cloudinary.com/zvlxacfu/image/upload/v1793607541/3fc09a90-a92f-4773-9fd6-08fcf98e3ced.png",
    containImage: true,
    categories: ["Technical Analysis", "Advanced Strategies"],
    ctaText: "Explore Course →",
    ctaHref: "#contact",
    trainer: {
      name: "Mr. M. S. Mehdadi",
      credentials: ["Senior Market Mentor"],
      studentsTrained: "Active Traders",
      experience: "Professional Technical Analyst",
      image: "/team/mohdsahgar-mehdi.jpeg",
    },
    modules: [
      "Swing Trading Secret",
      "Trend Following Setup",
      "MARS Multibagger Setup",
      "Intraday Secret & Risk Management",
    ],
  },
  {
    id: "trade-with-satya",
    name: "Trade with Satya",
    fullName: "Options Trading & Expiry Day Strategies",
    description:
      "Specialized options and expiry day trading program featuring 1 week of intensive classes followed by 3 weeks of practical training and live trading with Satyajeet Biswas.",
    duration: "1 Wk Class + 3 Wks Live Trading",
    level: "Advanced Options",
    mode: "Evening Live Classes",
    image: "https://res.cloudinary.com/zvlxacfu/image/upload/v1793607555/18f3fe69-80d3-4ec5-8535-8123c1c044c2.png",
    containImage: true,
    categories: ["Options", "Advanced Strategies", "Risk Management"],
    ctaText: "Explore Course →",
    ctaHref: "#contact",
    trainer: {
      name: "Satyajeet Biswas",
      credentials: ["Options Strategist"],
      studentsTrained: "Senior Derivatives Mentor",
      experience: "Branch Lead & Trainer",
      image: "/team/satyajeet-biswas.jpeg",
    },
    modules: [
      "Options Trading Setups",
      "Expiry Day Trading Tactics",
      "1-Week Class + 3 Weeks Practical Live Trading",
      "Evening Live Interactive Sessions",
    ],
  },
];

export const discoveryCategories = [
  "Beginner",
  "Technical Analysis",
  "Derivatives",
  "Options",
  "Advanced Strategies",
  "Risk Management",
];

export const darkFeatures = [
  {
    title: "Practical Market Learning",
    body: "Concepts taught through live market charts and case studies, not theory alone.",
  },
  {
    title: "10+ Experienced Mentors",
    body: "Led by industry practitioners and trainers with verified market experience.",
  },
  {
    title: "NEP & University Aligned",
    body: "Add-on programs meeting NAAC standards, recognized for Academic Bank of Credits.",
  },
  {
    title: "Government Recognized",
    body: "Start-up India (DPIIT), MSME registered, and National Career Service partner.",
  },
];

export const whyBenefits = [
  {
    n: "01",
    title: "Government Accreditations",
    body: "DPIIT Start-up India recognized, MSME registered, and National Career Service skill provider.",
  },
  {
    n: "02",
    title: "Live Market Classrooms",
    body: "Equipped terminal setups in Sigra, Varanasi where students trade and analyze in live market hours.",
  },
  {
    n: "03",
    title: "Dedicated Mentorship",
    body: "Individual doubt resolution and mentorship led by Director Sandeep Chatterjee and certified trainers.",
  },
  {
    n: "04",
    title: "Institutional Heritage",
    body: "Active since 2017 conducting finance workshops in premier universities and colleges across India.",
  },
  {
    n: "05",
    title: "Capital Protection Focus",
    body: "Heavy emphasis on risk management, stop-loss adherence, and psychological conditioning before size.",
  },
  {
    n: "06",
    title: "Hybrid Accessibility",
    body: "Study offline in our Varanasi or Kolkata classrooms or join interactive live online cohorts.",
  },
];

export const learningPath = [
  { n: "01", title: "Market Foundations & Macro Economics" },
  { n: "02", title: "Price Action & Candlestick Analysis" },
  { n: "03", title: "Futures, Options & Derivative Math" },
  { n: "04", title: "Smart Money Concepts & Order Flow" },
  { n: "05", title: "Hedging, Theta & Risk Protocols" },
  { n: "06", title: "Live Market Execution & Trading Psychology" },
];

export const learningAreas = [
  { title: "Equity Markets", body: "Cash segments, swing setups, and long-term portfolio selection." },
  { title: "Futures & Derivatives", body: "Leverage mechanics, margin rules, and contract roll-overs." },
  { title: "Options Strategies", body: "Buying vs selling, Greeks management, and multi-leg delta-neutral spreads." },
  { title: "Forex & Global Markets", body: "Currency pairs, global macro indicators, and commodity behavior." },
  { title: "Smart Money Concepts", body: "Identifying institutional liquidity, order blocks, and market structures." },
  { title: "Tally GST & Finance", body: "Financial accounting, GST compliance, and corporate financial workflows." },
  { title: "University Skill Add-ons", body: "NEP-aligned credit courses conducted for top degree colleges." },
  { title: "Capital Protection", body: "Discipline systems, position sizing calculators, and drawdown control." },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarText: string;
  avatarBg: string;
};

export const testimonials: Testimonial[] = [
  // Slide 1
  {
    id: "1",
    name: "Shivam Gupta",
    role: "APFM Graduate • Equity & Technical Trader",
    avatarText: "SG",
    avatarBg: "#2563eb",
    quote:
      "The trainers explain stock market concepts in a very simple and practical way, making it easy for beginners as well as experienced learners to understand. The sessions are interactive, and real market examples help in building confidence for trading and investing. The staff is supportive, and the learning environment in Mahmoorganj is professional.",
  },
  {
    id: "2",
    name: "Ananya Banerjee",
    role: "Pro Traders Secrets (PTS) • Independent Trader",
    avatarText: "AB",
    avatarBg: "#7c3aed",
    quote:
      "Choosing the SEG Academy bootcamp was one of the best decisions I've made. The entire program was well-structured, the instructors like Sandeep Sir were highly knowledgeable and supportive, and the hands-on live chart exercises were incredibly valuable for my daily market discipline.",
  },
  {
    id: "3",
    name: "Rohan Kumar",
    role: "BPFM Alum • Investment Analyst, Varanasi",
    avatarText: "RK",
    avatarBg: "#059669",
    quote:
      "A great academy in Varanasi for anyone looking to build genuine skills in trading and investing. The mentors are experienced, the sessions are informative, and the post-course community guidance and terminal setups gave me complete clarity on market movements.",
  },

  // Slide 2
  {
    id: "4",
    name: "Mukesh Dubey",
    role: "Option Hedging Workshop • Derivatives Trader",
    avatarText: "MD",
    avatarBg: "#d97706",
    quote:
      "The clarity taught on Risk Management and Option Hedging completely changed my trading approach. Unlike random social media courses, SEG Academy teaches discipline, terminal skills, and capital safety first.",
  },
  {
    id: "5",
    name: "Pooja Mishra",
    role: "Financial Markets Alum • Portfolio Management",
    avatarText: "PM",
    avatarBg: "#db2777",
    quote:
      "The depth of chart reading and live trade analysis at SEG Academy is unmatched. The mentors patiently clear every single doubt, and the practical exposure during live market hours gave me the confidence to trade systematically.",
  },
  {
    id: "6",
    name: "Aditya Verma",
    role: "APFM Certified • Active Swing Trader",
    avatarText: "AV",
    avatarBg: "#4f46e5",
    quote:
      "The structured curriculum from basics to advanced derivatives helped me develop an edge in price action. The mentorship provided by Sandeep Sir and the team is exceptional and continues long after course completion.",
  },

  // Slide 3
  {
    id: "7",
    name: "Vikas Agrawal",
    role: "Stock Market Masterclass • Business Owner",
    avatarText: "VA",
    avatarBg: "#0891b2",
    quote:
      "I joined SEG Academy with zero knowledge about candles or technical charts. Within two months, I understood how market institutional orders work. The Sigra campus trading lab has state-of-the-art terminal setups.",
  },
  {
    id: "8",
    name: "Neha Srivastava",
    role: "BPFM Alum • Mutual Funds & Financial Planning",
    avatarText: "NS",
    avatarBg: "#9333ea",
    quote:
      "The practical trading approach rather than just textbook theory is what sets SEG Academy apart. Concepts like stop-loss placement, risk-reward ratios, and trade journaling are drilled into your daily routine.",
  },
  {
    id: "9",
    name: "Deepak Pandey",
    role: "Trade with Satya Workshop • Option Seller",
    avatarText: "DP",
    avatarBg: "#ea580c",
    quote:
      "Trade with Satya option selling session was worth every minute. Understanding Greeks, managing adjustments during high volatility, and non-directional strategies gave me complete peace of mind while trading weekly expiries.",
  },

  // Slide 4
  {
    id: "10",
    name: "Ritika Sen",
    role: "University Skill Add-on Alum • Finance Associate",
    avatarText: "RS",
    avatarBg: "#0d9488",
    quote:
      "Attended the university add-on financial workshop organized by SEG Academy. The faculty makes finance genuinely interesting and accessible. The certificate added immense credibility to my resume during campus placements.",
  },
  {
    id: "11",
    name: "Abhishek Chaubey",
    role: "PTS Bootcamp • Full-time Intraday Trader",
    avatarText: "AC",
    avatarBg: "#4338ca",
    quote:
      "SEG Academy teaches trading psychology and capital preservation above all else. Learning Smart Money Concepts (SMC) helped me avoid retail traps and identify high-probability breakout trades.",
  },
  {
    id: "12",
    name: "Saurabh Tiwari",
    role: "Advance Program Alum • Research Analyst",
    avatarText: "ST",
    avatarBg: "#0284c7",
    quote:
      "Very resourceful learning environment in Mahmoorganj. From the supportive administrative staff to the experienced mentors, everyone genuinely cares about the students' growth and independent trading capability.",
  },

  // Slide 5
  {
    id: "13",
    name: "Manish Keshari",
    role: "Equity & Derivatives • Retail Trader",
    avatarText: "MK",
    avatarBg: "#c026d3",
    quote:
      "Before joining SEG Academy, I suffered multiple losses following tips from Telegram channels. The mentors helped me unlearn bad habits, understand market trends, and rely solely on verified price action setups.",
  },
  {
    id: "14",
    name: "Shalini Rai",
    role: "BPFM Graduate • Commerce Student, BHU",
    avatarText: "SR",
    avatarBg: "#e11d48",
    quote:
      "The best institute for stock market education in Eastern UP. The trainers simplify difficult topics like futures pricing and options chain analysis with ease. Highly recommended for students and professionals alike.",
  },
  {
    id: "15",
    name: "Gaurav Jaiswal",
    role: "APFM Certified • Algorithmic & Terminal Trader",
    avatarText: "GJ",
    avatarBg: "#16a34a",
    quote:
      "The hands-on practice in live market hours is invaluable. Sitting alongside experienced traders while analyzing charts gives you real market intuition that no recorded video course can provide.",
  },

  // Slide 6
  {
    id: "16",
    name: "Kunal Ghosh",
    role: "Kolkata Center Alum • Derivatives Specialist",
    avatarText: "KG",
    avatarBg: "#b45309",
    quote:
      "Attended the specialized derivatives workshop through the Kolkata center. Satyajeet Sir and Sandeep Sir provide realistic market guidance without false promises. Truly an empowering institutional experience.",
  },
  {
    id: "17",
    name: "Priyanka Patel",
    role: "Financial Literacy & Wealth Planning Alum",
    avatarText: "PP",
    avatarBg: "#6d28d9",
    quote:
      "I appreciate the personal attention given to each learner. Even after batch completion, doubt sessions and weekend market discussions help us stay disciplined and updated with new market trends.",
  },
  {
    id: "18",
    name: "Harsh Vardhan Singh",
    role: "PTS Bootcamp Alum • Equity Investor",
    avatarText: "HS",
    avatarBg: "#0f766e",
    quote:
      "SEG Academy provides genuine education and real skills. The focus on risk management, position sizing, and emotional control is what transformed my trading from gambling into a disciplined business.",
  },
];

export const reviewThemes = [
  "DPIIT Start-up India",
  "MSME Certified",
  "Varanasi Sigra Campus",
  "Experienced Trainers",
  "Live Market Trading Lab",
  "500+ Verified Google Reviews",
  "Option Selling Mastery",
  "Supportive Operations Team",
];

export const faqs = [
  {
    q: "Is SEG Academy a registered educational institution?",
    a: "Yes. Segacademy Private Limited is incorporated under the Ministry of Corporate Affairs (CIN: U80902WB2021PTC247995), recognized under Start-up India (DPIIT), registered with MSME, and a registered skill provider on the National Career Service (Govt. of India).",
  },
  {
    q: "Who leads the training and management at SEG Academy?",
    a: "The academy's leadership is spearheaded by Director Sandeep Chatterjee, along with HR Manager Arifa Samreen and senior mentors including Satyajeet Biswas, Sanskar Jaiswal, Ashish Kumar Gupta, and Mohdsahgar Mehdi.",
  },
  {
    q: "Where is the SEG Academy headquarters located?",
    a: "Our headquarters is located at 3rd Floor, Sampoornand, D 59/98, Sigra - Mahmoorganj Rd, near Punjab National Bank ATM, Mahmoorganj, Varanasi, Uttar Pradesh 221002.",
  },
  {
    q: "Does SEG Academy have other branches or partner centers?",
    a: "Yes. In addition to our Varanasi headquarters, we have a study center in Khardah, Kolkata (West Bengal) and an institutional academic training partnership with Sunbeam Women's College Varuna in Varanasi.",
  },
  {
    q: "What programs are offered at SEG Academy?",
    a: "We offer the Advance Program in Financial Market (APFM), Basic Program in Financial Market (BPFM), Pro Traders Secrets (PTS) Bootcamp, Option Selling & Hedging, as well as institutional NEP-aligned add-on workshops for universities.",
  },
  {
    q: "Are the courses suitable for complete beginners?",
    a: "Yes. Both our BPFM and APFM programs start from foundational financial literacy and stock exchange mechanisms before progressing to advanced chart analysis and risk protocols.",
  },
  {
    q: "How can I get in touch for admissions or visit the academy?",
    a: "You can call us directly on 094549 45992 or 096160 51355, email us at info@segacademy.com, message us on WhatsApp, or visit our Mahmoorganj campus from Monday to Saturday between 9:00 AM and 7:00 PM.",
  },
];
