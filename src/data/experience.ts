import type { LucideIcon } from "lucide-react";
import {
  Braces,
  CalendarClock,
  Gamepad2,
  Landmark,
  Layers,
} from "lucide-react";

export interface Role {
  company: string;
  location: string;
  role: string;
  period: string;
  freelance?: boolean;
  bullets: string[];
  stack: string[];
}

export interface Chapter {
  id: string;
  index: string;
  period: string;
  title: string;
  hook: string;
  summary: string;
  accent: string;
  icon: LucideIcon;
  roles: Role[];
}

export const chapters: Chapter[] = [
  {
    id: "foundations",
    index: "01",
    period: "2018 — 2021",
    title: "Foundations",
    hook: "Three stacks, one instinct for the front end.",
    summary:
      "Started on .NET managing financial data, then moved into Ruby on Rails and Flutter — learning early that the framework changes, the craft doesn't.",
    accent: "#52525B",
    icon: Braces,
    roles: [
      {
        company: "Bio Farma",
        location: "Bandung",
        role: "DotNet Developer",
        period: "Aug 2018 – Oct 2018",
        freelance: true,
        bullets: ["Built a website to manage financial cash."],
        stack: [".NET Framework", "SQL", "Web Management System"],
      },
      {
        company: "Biido",
        location: "Central Jakarta",
        role: "Front-End Developer",
        period: "Dec 2020 – Apr 2021",
        bullets: [
          "Enhanced the performance and UI of Biido's website, ensuring better load times and improved UX across devices.",
        ],
        stack: ["Ruby on Rails"],
      },
      {
        company: "Xaurius Asset Digital",
        location: "Central Jakarta",
        role: "Flutter Developer & Front-End Web Developer",
        period: "Apr 2021 – Aug 2021",
        bullets: [
          "Frontend enhancement on the Xaurius website, improving user experience and responsiveness.",
          "Developed Crypto Mobile App (Android & iOS) for Xaurius.",
        ],
        stack: ["Flutter with GetX", "Ruby on Rails"],
      },
    ],
  },
  {
    id: "flutter-era",
    index: "02",
    period: "2022 — 2023",
    title: "The Flutter Era Begins",
    hook: "Health, education, childhood — shipping apps that mattered.",
    summary:
      "Went deep on Flutter with GetX across three very different domains: wellness, early-childhood learning, and digital education — while picking up Vue.js on the side.",
    accent: "#2563EB",
    icon: Layers,
    roles: [
      {
        company: "PT. Fokus Pangan Sehat Indonesia",
        location: "Jakarta",
        role: "Flutter Developer",
        period: "Feb 2022 – Feb 2023",
        bullets: [
          "Built a mobile health assistant app (Android & iOS) to help users monitor nutrition and wellness through a user-friendly interface.",
        ],
        stack: ["Flutter with GetX"],
      },
      {
        company: "PT. Molome Dalome Sukses Makmur",
        location: "West Jakarta",
        role: "Flutter Developer",
        period: "May 2022 – Apr 2024",
        bullets: [
          "Built a cross-platform mobile app (Android & iOS) for an early childhood learning center to improve accessibility and engagement for parents and educators.",
        ],
        stack: ["Flutter with GetX"],
      },
      {
        company: "PT. Motekar Edukasi Indonesia (Dilatih.co)",
        location: "Bandung",
        role: "Frontend Developer",
        period: "Nov 2022 – May 2024",
        bullets: [
          "Developed the entire front-end interface for the Dilatih.co digital learning platform.",
          "Built responsive pages for course listing and certificate downloads using Vue.js.",
        ],
        stack: ["Vue.js", "Bootstrap CSS", "Responsive Layout Principles"],
      },
    ],
  },
  {
    id: "scaling-up",
    index: "03",
    period: "2023 — 2024",
    title: "Scaling Up",
    hook: "Loyalty points, esports tournaments, real money on the line.",
    summary:
      "Moved into products with real transactional stakes — reward systems, payment gateways, and live data sync — for a loyalty app and an esports gaming hub.",
    accent: "#7C3AED",
    icon: Gamepad2,
    roles: [
      {
        company: "PT. Mideli Makmur Jaya — Shigeru Deli Loyalty App",
        location: "Jakarta",
        role: "Flutter Developer",
        period: "Dec 2023 – May 2024",
        freelance: true,
        bullets: [
          "Developed a cross-platform loyalty application for Shigeru Deli, focusing on customer engagement.",
          "Implemented point tracking, redemption features, and real-time user data sync via RESTful APIs.",
        ],
        stack: ["Flutter with GetX"],
      },
      {
        company: "PT. Dunia Digital Terdepan (Good Games Guild)",
        location: "Jakarta",
        role: "Flutter Developer",
        period: "Jul 2023 – Sep 2024",
        freelance: true,
        bullets: [
          "Initiated GGPlay gaming hub featuring esports tournaments, gamified quests, and event ticketing.",
          "Implemented a GGG Coin-based reward system and integrated GoPay/Midtrans payments.",
        ],
        stack: ["Flutter with GetX", "Modular Backend APIs", "Midtrans"],
      },
    ],
  },
  {
    id: "enterprise-banking",
    index: "04",
    period: "2024 — 2025",
    title: "Enterprise Banking",
    hook: "Bank-grade security, Gen Z UX, one national bank.",
    summary:
      "At Bank DKI Jakarta, built and maintained mission-critical banking products — a secure internal loan app and a next-gen mobile banking experience — under real security constraints.",
    accent: "#0EA5E9",
    icon: Landmark,
    roles: [
      {
        company: "PT. Evolusi Teknologi Solusi — Bank DKI Jakarta",
        location: "Jakarta",
        role: "Flutter Developer",
        period: "Jun 2024 – Jul 2025",
        bullets: [
          "Developed FILO, a secure digital loan application for internal employees with streamlined workflows.",
          "Designed and built VELLO, a next-generation mobile banking app targeting Gen Z with modern UI/UX.",
          "Maintained the JakOne Mobile App's stability and performed cross-platform debugging for product excellence.",
        ],
        stack: ["Flutter with GetX", "Dart", "Banking API Security"],
      },
    ],
  },
  {
    id: "vue-mastery",
    index: "05",
    period: "2025 — 2026",
    title: "Full-Stack Vue Mastery",
    hook: "Complex scheduling, medical bookings, architecture that scales.",
    summary:
      "Now architecting front-end systems from the ground up in Vue — intelligent booking flows, conflict-resolving scheduling engines, and payment-secured medical transactions.",
    accent: "#10B981",
    icon: CalendarClock,
    roles: [
      {
        company: "PT. Pila Indonesia Mandiri Sejahtera",
        location: "West Jakarta",
        role: "Front-End Developer (Vue)",
        period: "Apr 2025 – Apr 2026",
        freelance: true,
        bullets: [
          "Architected Pila Care, a medical service booking web-app featuring intelligent provider search and a 3-step registration workflow.",
          "Built a Doctor's Management Dashboard with real-time availability toggling and automated order tracking.",
          "Integrated the Midtrans (Snap) payment gateway for secure medical transaction processing.",
        ],
        stack: ["Vue 3", "PrimeVue", "Tailwind CSS", "Midtrans"],
      },
      {
        company: "PT. Molome Dalome Sukses Makmur",
        location: "West Jakarta",
        role: "Front-End Developer (Vue)",
        period: "Nov 2025 – Aug 2026",
        freelance: true,
        bullets: [
          "Engineered a high-complexity class booking system (MDC Parent Portal) supporting Fixed Bundles, Flexible, and Pay Per Visit scheduling models.",
          "Developed an advanced Academic Year & Attendance Engine using FullCalendar for automated conflict resolution.",
          "Designed a dynamic billing architecture that decoupled registration fees into independent master data.",
        ],
        stack: ["Vue.js", "Pinia", "FullCalendar", "Canvas capturing"],
      },
    ],
  },
];

export const skills = {
  frameworks: ["Flutter", "Vue", "Git", "Adobe XD", "Figma", "Shorebird (OTA)", "Jenkins"],
  soft: [
    "Problem Solving",
    "Public Speaking",
    "Adaptation",
    "Time Management",
    "Critical Thinking",
  ],
  tools: ["Notion", "Trello", "Jira"],
};

export const education = {
  school: "Computer University (UNIKOM)",
  degree: "Informatics Engineering",
  graduated: "February 2020",
};

export const profile = {
  name: "Adli Faldi Zulfikasani",
  role: "Flutter & Vue Developer",
  location: "Cisauk, Kab. Tangerang",
  email: "adlifaldizulfikasani@gmail.com",
  phone: "+6282117688166",
  summary:
    "Result-oriented multi-platform developer with extensive experience in Flutter and Vue.js. Proven track record building high-scale applications for banking, healthcare, and fintech sectors — architecting scalable front-end systems, integrating secure payment gateways, and optimizing app performance across Android, iOS, and Web.",
};
