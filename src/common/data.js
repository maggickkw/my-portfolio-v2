import tinytag from "assets/images/tinytag-mobile.png";
import fintech from "assets/images/fintech.png";
import luupli_legal from "assets/images/luupli_legal.png";
import ninepointfive from "assets/images/ninepointfive.png";
import shop from "assets/images/shop-api.jpg";
import Luupli_Banner from "assets/images/Luupli_banner.png";
import TaskPulse from "../assets/images/dashboard.png";
import { isIOS } from "react-device-detect";

export const experience_data = [
  {
    title: "Technical Manager",
    description:
      "Led the technical retraining and transition of the mobile development team from Flutter to React Native. Conducted technical assessments, code reviews, and architecture evaluations for prospective engineering hires. Designed and led technical interviews focused on React.js and Next.js. Mentored developers through hands-on code reviews, technical guidance, and knowledge-sharing sessions.",
    company: "AutomatedPros",
    location: "Remote",
    from: "Aug 2025",
    to: "Jan 2026",
  },
  {
    title: "Full-stack Developer",
    description:
      "Developed and maintained a Loan Management System — a scalable backend platform automating loan processing, credit decisioning, and portfolio management. Revamped the company's checkout system using Webman PHP for higher performance and lower latency. Managed the settlement middleware API (Rust) ensuring seamless integration between transaction processing and financial systems. Built a School Management System using Laravel and Next.js.",
    company: "PaySwitch Company Limited",
    location: "Accra, Ghana",
    from: "Nov 2024",
    to: "Jan 2026",
  },
  {
    title: "Frontend Developer",
    description:
      "Participated in the development and maintenance of the Luupli mobile application and all web functions. Contributed to technical architecture and design of mobile and web applications, ensuring scalability, performance, and adherence to coding standards throughout the entire development lifecycle.",
    company: "Luupli",
    location: "London, UK",
    from: "Jul 2023",
    to: "Present",
  },
  {
    title: "Full-stack Developer",
    description:
      "Built and managed the IHDM and IGPCM student portals for data records and exam registration.",
    company: "IHDM (Institute of Humanitarian and Disaster Management)",
    location: "Abuja, Nigeria",
    from: "Jan 2024",
    to: "Mar 2025",
  },
  {
    title: "Volunteer Staff",
    description:
      "Reviewed student code and assisted them with areas of struggle. Helped students understand React.js and JavaScript, taught best practices, and helped troubleshoot bugs.",
    company: "Code The Dream",
    location: "San Francisco, CA, USA",
    from: "Jul 2023",
    to: "Feb 2024",
  },
  {
    title: "Software Engineering Technician",
    description:
      "Worked as a software technician during the period of the mass registration for the Ghana Card, assisting with system and logistical issues during the nationwide roll-out.",
    company: "National Identification Authority (NIA)",
    location: "Accra, Ghana",
    from: "Sep 2018",
    to: "Jul 2020",
  },
];

export const education_data = [
  {
    title: "BSc Computer Science",
    description: "",
    company: "Ghana Institute of Management and Public Administration (GIMPA)",
    location: "Accra, Ghana",
    from: "2023",
    to: "",
  },
  {
    title: "CS 50 (Online Introductory Program)",
    description: "",
    company: "Harvard University",
    location: "Massachusetts, Cambridge",
    from: "",
    to: "2021",
  },
  {
    title: "Full Stack Development",
    description: "",
    company: "Udemy",
    location: "",
    from: "",
    to: "2021",
  },
  {
    title: "BSc Agricultural Science",
    description: "",
    company: "University of Ghana",
    location: "Accra, Ghana",
    from: "2013",
    to: "2017",
  },
];

export const TechStack = {
  HTML: "html",
  CSS: "css",
  JAVASCRIPT: "javascript",
  NODEJS: "NodeJs",
  TYPESCRIPT: "Typescript",
  REACTJS: "ReactJS",
  REACTNATIVE: "ReactNative",
  ELECTRON: "ElectronJS",
  ANGULAR: "AngularJS",
  TAILWIND: "TailwindCss",
  GIT: "Git",
  MONGODB: "MongoDB",
  FIREBASE: "Firebase",
  PYTHON: "Python",
  DOCKER: "Docker",
  FLASK: "Flask",
  POSTGRESQL: "Postgresql",
  DJANGO: "Django",
  SELENIUM: "Selenium",
  GO_LANG: "Go lang",
  PHP: "Php",
  LARAVEL: "Laravel",
  DENO: "Deno",
  WEBMAN: "Webman",
  JEST: "Jest",
  RUST: "Rust",
};

export const TeckStack = [
  {
    name: TechStack.HTML,
  },
  {
    name: TechStack.CSS,
  },
  {
    name: TechStack.TAILWIND,
  },
  {
    name: TechStack.JAVASCRIPT,
  },
  {
    name: TechStack.TYPESCRIPT,
  },
  {
    name: TechStack.REACTJS,
  },
  {
    name: TechStack.REACTNATIVE,
  },
  {
    name: TechStack.ELECTRON,
  },
  {
    name: TechStack.NODEJS,
  },
  {
    name: TechStack.GIT,
  },
  {
    name: TechStack.MONGODB,
  },
  {
    name: TechStack.JEST,
  },
  {
    name: TechStack.FIREBASE,
  },
  {
    name: TechStack.PYTHON,
  },
  {
    name: TechStack.DOCKER,
  },
  {
    name: TechStack.FLASK,
  },
  {
    name: TechStack.POSTGRESQL,
  },
  {
    name: TechStack.DJANGO,
  },
  {
    name: TechStack.SELENIUM,
  },
  {
    name: TechStack.GO_LANG,
  },
  { name: TechStack.PHP },
  { name: TechStack.LARAVEL },
  { name: TechStack.DENO },
  { name: TechStack.WEBMAN },
  { name: TechStack.RUST },
];

export const ProjectType = {
  WEB: "web",
  MOBILE: "mobile",
  DESKTOP: "desktop",
  BACKEND: "backend",
};
export const Project_data = [
  {
    type: ProjectType.MOBILE,
    name: "Luupli",
    projectImage: Luupli_Banner,
    description:
      "luupli, the revolutionary social media platform that empowers genuine self-expression and promotes authentic human connections. Join a diverse global community where your voice takes center stage.",
    repo: "",
    link: isIOS
      ? "https://apps.apple.com/gb/app/luupli/id6463861554"
      : "https://play.google.com/store/apps/details?id=com.dev.luupli.uat&hl=en",
    technologies: ["React-Native", "React-Query", "Firebase", "Websocket"],
  },
  {
    type: ProjectType.WEB,
    name: "TaskPulse Dashboard",
    projectImage: TaskPulse,
    description:
      "Developed a comprehensive project management dashboard using Next.js for the frontend and Node.js for the backend. This full-stack application includes intuitive drag-and-drop functionality for seamless task organization, empowering teams to streamline their workflows efficiently.",
    repo: "https://github.com/maggickkw/TaskPulse",
    link: "https://task-pulse-dashboard.vercel.app/",
    technologies: [
      "Next js",
      "Node js",
      "Tailwind Css",
      "Redux Toolkit",
      "Redux",
    ],
  },
  {
    type: ProjectType.WEB,
    name: "NinePointFive E-commerce Shop",
    projectImage: ninepointfive,
    repo: "",
    description:
      "An e-commerce website for NinePointFive, a premium clothing brand. The website features a sleek and modern design, built with Shopify Hydrogen, graphql, and Tailwind CSS. It offers a seamless shopping experience with easy navigation, product browsing, and secure checkout.",
    link: "https://www.ninepointfive.store/",
    technologies: ["Shopify Hydrogen", "Graphql", "React-router", "Tailwind Css"],
  },
  {
    type: ProjectType.MOBILE,
    name: "Fintech App",
    projectImage: fintech,
    description:
      "A clone of Revolut fintech app to enable users buy and sell crypto easily as well as added security with Face ID and other modern authentication methos.",
    repo: "https://github.com/maggickkw/crypto-app",
    link: "",
    technologies: [
      "React-Native",
      "Tanstack Query",
      "Clerk",
      "Expo Router",
      "Typescript",
    ],
  },
  {
    type: ProjectType.WEB,
    name: "Luupli-Legal",
    projectImage: luupli_legal,
    description:
      "All the legal documents governing luupli mobile usage for both web and mobile.",
    repo: "",
    link: "https://legal.luupli.com",
    technologies: ["Markdown"],
  },
  {
    type: ProjectType.BACKEND,
    name: "Kingsway Foods Backend",
    projectImage: shop,
    description:
      "Built a production-grade food delivery backend using Clean Architecture, handling real-time logistics, wallet systems, gamification, and multi-role operations at scale.",
    repo: "",
    link: "",
    technologies: [
      "Go",
      "Fiber",
      "POSTGRESQL",
      "Redis",
      "WebSockets",
      "gRPC",
      "Clean Architecture",
    ],
  },
  {
    type: ProjectType.MOBILE,
    name: "TinyTag",
    projectImage: tinytag,
    description:
      "A mobile app built for a UNICEF contest to help register children in remote areas with an offline-first workflow and reliable sync when connectivity returns.",
    repo: "https://github.com/maggickkw/tinytag_mobile.git",
    link: "",
    technologies: ["React-Native", "Axios", "Async storage", "React-Navigation"],
  },
  {
    type: ProjectType.BACKEND,
    name: "TinyTag API",
    projectImage: tinytag,
    description:
      "Backend system for UNICEF-backed child registration platform enabling offline-first data collection and secure synchronization from remote regions.",
    repo: "",
    link: "",
    technologies: ["Node.js", "TypeScript", "Express", "MongoDB", "JWT Auth"],
  },
];
