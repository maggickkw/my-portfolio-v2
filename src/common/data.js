import tinytag from "assets/images/tinytag-mobile.png";
import fintech from "assets/images/fintech.png";
import luupli_legal from "assets/images/luupli_legal.png";
import ninepointfive from "assets/images/ninepointfive.png";
import shop from "assets/images/shop-api.jpg";
import Luupli_Banner from "assets/images/Luupli_banner.png";
import TaskPulse from "../assets/images/dashboard.png";
import { isIOS } from "react-device-detect";

import EduanePa from "assets/images/EduanePa.png";

export const experience_data = [
  {
    title: "Fullstack Mobile & Web Developer",
    description:
      "At Payswitch, a fintech company offering alternative banking solutions to banks and merchants, I contribute to the design, development, and maintenance of mobile and web applications. My role includes building scalable, secure, and user-friendly solutions tailored to financial services. I focus on end-to-end development processes, delivering high-performance systems that enhance user experiences and drive operational efficiency.",
    company: "Payswitch Company Limited",
    location: "Accra, Ghana",
    from: "November, 2024",
    to: "Present",
  },
  {
    title: "Full-Stack Developer",
    description:
      "Rebuilding and currently Managing the IHDM and IGPCM portals, for data records and exam registration.",
    company: "IHDM (Institute of Humanitarian and Disaster Management)",
    location: "Abuja, Nigeria",
    from: "January,2024",
    to: "April, 2025",
  },
  {
    title: "Frontend  Mobile & Web Engineer",
    description:
      "My responsibilities  include particpation in the development and maintenance of Luupli mobile application and all web functions including the website. I participate in technical architecture and design of mobile and web applications, ensuring scalability, performance, and adherence to coding standards the entire application development lifecycle, producing functional mobile and web apps with clean code and designing user interfaces for better user experiences.",
    company: "Luupli",
    location: "London, UK",
    from: "July,2023",
    to: "Present",
  },
  {
    title: "Teaching Aide",
    description:
      "My task as a teaching aide and Mentor at Code the dream involved helping students understand React js and Javascript and helping them with assignments that they may be having problems with. I teach them best practices and helped them troubleshoot their code in the cases where bugs arose.",
    company: "Code The Dream",
    location: "San Francisco, CA, USA",
    from: "July,2023",
    to: "Feb, 2024",
  },
  {
    title: "Technician",
    description:
      "I assisted with fixing system and logistical errors for the Ghana Card roll-out. ",
    company: "National Identification Authority",
    location: "Accra, Ghana",
    from: "November, 2018",
    to: "November, 2020",
  },
];

export const education_data = [
  {
    title: "BSC Computer Science",
    description: "",
    company: "Ghana Institute of Management and Public Administration (GIMPA)",
    location: "Accra, Ghana",
    from: "2023",
    to: "",
  },
  {
    title: "CS 50 (Online Introductory Program)",
    description: "",
    company: "Havard University",
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
    title: "BSc Agricultural Science.",
    description: "",
    company: "University of Ghana,",
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
  TYPESCRIPT: "typescript",
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
    type: ProjectType.WEB,
    name: "Shop-API",
    projectImage: shop,
    description:
      "Created an API for online shopping that links shops to items and uses JWT for secure authentication.",
    repo: "https://github.com/maggickkw/store-api",
    link: "https://store-api-mmr8.onrender.com/swagger-ui",
    technologies: [
      "Python",
      "FLASK",
      "FLASK_SMOREST",
      "POSTGRESQL",
      "DOCKER",
      "JWT",
    ],
  },
  {
    type: ProjectType.MOBILE,
    name: "TinyTag",
    projectImage: tinytag,
    description:
      "An app created to enable unicef volunteers register children in remote areas of Ghana for a birth certificate. Its offline first and works in low network connectivity areas. The data is synced to the server when the device is online.",
    repo: "https://github.com/maggickkw/tinytag_mobile.git",
    link: "",
    technologies: ["React-Native", "Axios", "Async storage", "React-Navigation"],
  },
  {
    type: ProjectType.MOBILE,
    name: "EDUANEPA",
    projectImage: EduanePa,
    description:
      "Food recipe app with search functionality to help you make the tastiest meals no matter the mood or time of day",
    repo: "https://github.com/maggickkw/food-recipe-app",
    link: "",
    technologies: ["React-Native", "React-Navigation"],
  }
];
