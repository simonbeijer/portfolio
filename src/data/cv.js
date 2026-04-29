export const CV = {
  name: "Simon Beijer",
  role: "Fullstack Developer",
  location: "Göteborg, Sverige",
  email: "beijer.simon@gmail.com",
  intro:
    "Fullstack-utvecklare med fyra års produktionserfarenhet, främst inom fintech. Senaste året har jag fördjupat mig inom AI och maskininlärning genom utbildning och egna projekt där fullstack möter LLM, RAG och agentic arbetsflöden.",
  social: [
    { label: "GitHub", href: "https://github.com/simonbeijer" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/simon-beijer-a27b37181" },
    { label: "Email", href: "mailto:beijer.simon@gmail.com" },
  ],

  work: [
    {
      year: "2021 — 2024",
      company: "Keeros AB",
      role: "Developer",
      city: "Göteborg",
      blurb:
        "Cloud-plattformar för factoring, företagslån och leasing. Byggde UI-komponenter, REST API:er och DB-scheman. Utvecklade chattlösning för bank-till-kund-kommunikation, bidrog till säkerhetsarbete mot SQL-injection och refaktorerade legacy jQuery till återanvändbara Vue-komponenter.",
    },
    {
      year: "2020 — 2021",
      company: "Hive and Five",
      role: "Developer Intern",
      city: "Borås",
      blurb:
        "LIA inom webb- och mobilutveckling. Byggde mobilfunktioner i React Native med Redux och ny funktionalitet för adventurehero.se i React och TypeScript.",
    },
    {
      year: "2020",
      company: "Imseb",
      role: "Web Developer",
      city: "Göteborg",
      blurb:
        "Sommarjobb, remote. Byggde en responsiv webbplats i Vue från Figma-designer för en amerikansk kund.",
    },
  ],

  projects: [
    {
      name: "PhysioLink",
      tag: "Fullstack · 2025",
      desc: "Verktyg där tränare skapar och delar träningsprogram med klienter via en länk. Klienten följer övningar med inbyggd timer och loopade YouTube-videor, utan konto. Vue 3, Laravel 12, Tailwind, Docker.",
      href: "#",
      image: "/images/projects/physiolink.webp",
    },
    {
      name: "dayboard",
      tag: "MCP / Agentic · 2026",
      desc: "MCP-verktyg som kopplar AI till en todo-app. Chatta in dagen, AI:n fyller listan via MCP, Electron-appen visar den live. end_day rensar brädet inför nästa dag.",
      href: "#",
      image: "/images/projects/dayboard.webp",
    },
    {
      name: "Skooli",
      tag: "RAG · 2025",
      desc: "AI-verktyg för lärare. Genererar tematiska lektionsplaner via RAG över kurerat källmaterial och låter läraren förfina planen genom LLM-konversation. Next.js, Tailwind, OpenAI.",
      href: "https://skooli-lilac.vercel.app/",
      image: "/images/projects/skooli.webp",
    },
    {
      name: "Mat Mind",
      tag: "LLM / Persona · 2025",
      desc: "LLM-driven Jiu Jitsu-coach. Fråga om en position, ett scenario eller en submission och få game plans på expertnivå. Next.js med prompt engineering tunad för grappling.",
      href: "https://mat-mind.vercel.app/",
      image: "/images/projects/matmind.webp",
    },
  ],

  skills: {
    "Djup erfarenhet": ["Vue.js", "React", "Next.js", "TypeScript", "PHP"],
    "Van användare": ["Python", "Node.js", "Docker", "Tailwind", "GitHub Actions", "Vercel", "MCP", "RAG", "Claude Code"],
    "Arbetat med": ["JavaScript", "SQL / MySQL", "Git / GitHub", "LangChain", "AWS", "Laravel"],
    "Stött på": ["C#", "jQuery", "Jest", "Cypress", "TensorFlow", "Figma", "React Native", "Redux", "MongoDB"],
  },

  education: [
    { year: "2025 — 2026", school: "Medieinstitutet Göteborg", program: "AI & Machine Learning, YH" },
    { year: "2019 — 2021", school: "Medieinstitutet Göteborg", program: "Front-End Development, YH" },
    { year: "2018 — 2019", school: "Blekinge Institute of Technology", program: "Webbprogrammering, 30 hp" },
  ],

  interests: [
    { label: "Jiu Jitsu" },
    { label: "Musikproduktion" },
    { label: "Gaming" },
  ],
};
