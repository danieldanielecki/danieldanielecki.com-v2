import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
// import { NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Daniel Danielecki",
  initials: "DM",
  url: "https://danieldanielecki.com",
  location: "Amsterdam 🇳🇱",
  locationLink: "https://www.google.com/maps/place/amsterdam",
  description:
    "🏆 Top Stack Overflow 🧑‍🏫 EdTech Instructor (GitHub, Udemy) 🎤 International Speaker 🏃 Long-distance Runner.",
  summary:
    "My name is Daniel Danielecki, and I'm a FullStack Web & Mobile JavaScript Developer. Working commercially in the Web, since being 19 years old. I'm also quite handy with Cloud with plenty of certifications you can find on my LinkedIn, and even co-developed & published few [multiplatform casual games](https://doyban.com). I also advocate for [learning by teaching](/#talks). Outside sitting on a computer, you can find me running & doing other sports on [Strava](https://strava.com/athletes/87158328). PR's: 5K: 15:59, 10K: 33:36, HM: 1:14:52. I support small & creative creators on [Kickstarter](https://www.kickstarter.com/profile/danieldanielecki), and even [created one myself](https://www.kickstarter.com/projects/danieldanielecki/games-without-installation).",
  avatarUrl: "/me.jpg",
  skills: [
    "Angular",
    "Apache Cordova",
    "Azure",
    "ChatGPT",
    "CSS",
    "Firebase",
    "Git",
    "HTML",
    "JavaScript",
    "Jest",
    "Next.js",
    "Node.js",
    "Nuxt",
    "Ollama",
    "Qodo",
    "React",
    "React Native",
    "Terminal",
    "TestCafe",
    "TypeScript",
    "Visual Studio Code",
    "Vue.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/danieldanielecki",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/danieldanielecki/",
        icon: Icons.linkedin,
        navbar: true,
      },
      StackOverflow: {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/users/11127383/daniel-danielecki-ditectrev",
        icon: Icons.stackoverflow,
        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/danieldanielecki",
        icon: Icons.telegram,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ddanielecki",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "ABN AMRO Bank N.V.",
      badges: ["contract switch", "promotion"],
      title: "Staff Software Engineer",
      logoUrl: "/abn.png",
      start: "January 2023",
      end: null,
      description:
        "Leading introduction of Mastercard debit card via our Internet Banking channel for our bank. In the Netherlands, all debit cards are Maestro without the possibility to pay overseas online (no CVV/CVC).",
    },
    {
      company: "ABN AMRO Bank N.V. (via Capgemini)",
      badges: [],
      title: "Senior Software Engineer",
      logoUrl: "/abn.png",
      start: "May 2021",
      end: "December 2022",
      description:
        "Part of the Internet Banking (IB) Rebuild massive bank transformation, I've been working to develop, from a total scratch, Debit Cards (critical for the bank) application in Azure and Vue.js. We've developed it to make it compatible concurrently with 2 extensive API bank systems: a legacy one and a newly introduced one a few weeks after our initial release. Debit Cards is one of the most often used application with the most traffic and high importance across the entire bank.",
    },
    {
      company: "Capgemini",
      badges: ["promotion"],
      title: "Senior Software Engineer",
      logoUrl: "/capgemini.png",
      start: "July 2022",
      end: "December 2022",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Capgemini",
      badges: [],
      title: "Software Engineer",
      logoUrl: "/capgemini.png",
      start: "December 2020",
      end: "June 2022",
      description:
        "One out of 5 Frontend Developers selected from ~400 applicants (https://www.linkedin.com/jobs/view/2011186452/).",
    },
    {
      company: "KPMG",
      badges: [],
      title: "Consultant",
      logoUrl: "/kpmg.webp",
      start: "September 2019",
      end: "November 2020",
      description:
        "Migration of legacy UI and Software Quality Engineering (Bugs, Code Smells, Vulnerabilities) of internal questionnaire tool called Qubus, with Security Engineering (CWE, FISMA, GDPR, OWASP, PCI, STIG) preparation for a global launch across Member Firms (150+ countries) in HQ one of the Big Four. Sometimes working on smaller projects with React (code reviews) and Vue.js.",
    },
    {
      company: "KPMG",
      badges: ["university project"],
      title: "Master's Thesis",
      logoUrl: "/kpmg.webp",
      start: "January 2019",
      end: "August 2019",
      description:
        "Performing full time Master's Thesis topic 'Security First approach in development of Single-Page Application based on Angular'.",
    },
    {
      company: "IBStructure",
      badges: [],
      title: "Owner / Developer",
      logoUrl: "",
      start: "February 2017",
      end: "December 2018",
      description:
        "Umbrella company for various entrepreneurial/hobby/student projects. Tailor-made web software and Games Development, legally associated under 1 company, realisation with EU grant for 2017-2018.",
    },
    {
      company: "CNSI",
      badges: [],
      title: "Software Engineer",
      logoUrl: "/cnsi.png",
      start: "April 2016",
      end: "November 2016",
      description:
        "AIESEC Global Talent Programme. Working on front-end development in multinational company at Research & Development (R&D) office as a part of e-health project for Illinois citizens in the United States.",
    },
    {
      company: "IBM",
      badges: ["internship"],
      title: "Mobile Application Developer",
      logoUrl: "/ibm.svg",
      start: "September 2015",
      end: "October 2015",
      description:
        "Apache Cordova-related internship finalized with Mobile Application Developer with Worklight Foundation v6.2 certification.",
    },
    {
      company: "Affiliate Marketing",
      badges: [],
      title: "Webmaster / Developer",
      logoUrl: "",
      start: "May 2013",
      end: "November 2015",
      description:
        "Cooperation within several companies throughout affiliate programs, technically programming simple desktop application in VisualBasic, creating websites based on Content Management System (CMS) and positioning them in Bing/Google/Yahoo using Search Engine Optimization (SEO) techniques.",
    },
  ],
  education: [
    {
      school: "EIT Digital Master School 🇧🇪",
      href: "https://masterschool.eitdigital.eu",
      degree: "Master's Degree, Security and Privacy",
      logoUrl: "/eit.jpeg",
      start: "2017",
      end: "2019",
    },
    {
      school: "University of Turku 🇫🇮",
      href: "https://www.utu.fi/en",
      degree: "Master's Degree of Information Security and Cryptography, Networked Systems Security",
      logoUrl: "/turku.png",
      start: "2018",
      end: "2019",
    },
    {
      school: "University of Twente 🇳🇱",
      href: "https://www.utwente.nl/en/",
      degree: "Master's Degree of Computer Science, Security and Privacy - Cyber Security: High Tech Human Touch",
      logoUrl: "/twente.png",
      start: "2017",
      end: "2018",
    },
    {
      school: "Academind 🇩🇪",
      href: "https://academind.com",
      degree: "Self-study: Angular, JavaScript, Node.js, React Native, TypeScript, Vue.js.",
      logoUrl: "/academind.jpg",
      start: "2017",
      end: "present",
    },
    {
      school: "Wroclaw University of Technology 🇵🇱",
      href: "https://pwr.edu.pl/en/",
      degree: "Engineer’s Degree of Telecommunications, Multimedia in Telecommunications",
      logoUrl: "/wroclaw.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  talks: [
    {
      title: "Memory Leaks in JavaScript",
      dates: "March 21, 2025",
      location: "Amsterdam 🇳🇱",
      description:
        "Discover what Memory Leaks are in practice. We'll use MemLab and Chrome DevTools to debug leakage in our sample application, and it'll no longer be a black box for Developers attending the session!",
      image:
        "./webdevcon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/danieldanielecki/memory-leaks-in-javascript",
        },
        {
          title: "Watch now",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com",
        },
      ],
    },
    {
      title: "Is GraphQL really helpful in contrast to REST API's?",
      dates: "July 2, 2024",
      location: "Nuremberg 🇩🇪",
      description:
        "The talk starts with a small introduction about GraphQL, followed by a small reminder (1-2 sliders) about how REST APIs work, differences in the learning curve, performance, and an answered question if those can be compared (REST - architectural concept, GraphQL - query language). Later, I present a GraphQL demo and discuss the tooling it offers. The presentation finishes with a summary of the pros and cons and when it could be used instead of, but also together with, REST.",
      image:
        "./dwx.jpeg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/danieldanielecki/Is-GraphQL-really-helpful-in-contrast-to-REST-API-s-",
        },
        {
          title: "Watch now",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=azoe49N3Dt4",
        },
      ],
    },
    {
      title: "Uncovering Browser Storage",
      dates: "November 30, 2022",
      location: "Amsterdam 🇳🇱",
      description:
        "Walkthrough what browsers are offering us: Cookies, IndexedDB, Local Storage and Session Storage with lots of practical demos, and examples.",
      image:
        "/abn.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/danieldanielecki/Uncovering-Browser-Storage",
        },
        {
          title: "Watch now",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=WObKU3u_-qw",
        },
      ],
    },
    {
      title: "tsc --strict@vue",
      dates: "February 11, 2022",
      location: "online 🌐",
      description:
        "Vue comes out of the box only with 'strict' compiler option, but it accounts only for several of TypeScript's strict compiler options. The talk showcases a couple of examples with 'strict' enabled and several bugs/flaws which can still be introduced unless a specific TypeScript strict(er) compiler rule won't be enabled.",
      image:
        "./vuejsamsterdam.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/danieldanielecki/tsc--strict-vue",
        },
        {
          title: "Watch now",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=pVun2TNT8dk",
        },
      ],
    },
    {
      title: "TypeScript's Strict Compiler Options",
      dates: "October 28, 2021",
      location: "online 🌐",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "./conf42.jpeg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/danieldanielecki/TypeScript-s-Strict-Compiler-Options",
        },
        {
          title: "Watch now",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=o0HEbXdCyKg",
        },
      ],
    },
    {
      title: "JavaScript Security Engineering",
      dates: "Q3/Q4 2021",
      location: "Utrecht 🇳🇱",
      description:
        "2.5 hours workshop with demos around JavaScript Security. Topics covered are: Cross-Origin Resource Sharing (CORS), Content Security Policy (CSP), Cross Site Request Forgery (CSRF) using MEAN stack, Serverless (Firebase) Security, Cross Site Scripting (XSS) - using a Keylogger, and Web Scanners.",
      image:
        "/capgemini.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/danieldanielecki/JavaScript-Security-Engineering",
        },
      ],
    },
  ],
} as const;
