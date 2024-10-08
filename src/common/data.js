import fav_places from "assets/images/my-fav-places.png";
import fintech from "assets/images/fintech.png";
import luupli_legal from "assets/images/luupli_legal.png";
import luupli from "assets/images/luupli-website.png";
import shop from 'assets/images/shop-api.jpg';

import EduanePa from "assets/images/EduanePa.png";

export const experience_data = [
  {
    title: "Full-Stack Developer",
    description:
      "Rebuilding and currently Managing the IHDM and IGPCM portals, for data records and exam registration.",
    company: "IHDM (Institute of Humanitarian and Disaster Management)",
    location: "",
    from: "January,2024",
    to: "Present",
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
    location: "San Francisco, CA",
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
];

export const ProjectType = {
  WEB: "web",
  MOBILE: "mobile",
  DESKTOP: "desktop",
  BACKEND: "backend"
};
export const Project_data = [
  {
    type: ProjectType.WEB,
    name: "Luupli website",
    projectImage: luupli,
    description:
      "This is the official website of the luupli company based in the United Kingdom",
    repo: "",
    link: "https://www.luupli.com",
    technologies: ["React js", "Tailwind Css", "React-router-dom", "Axios"],
  },
  {
    type: ProjectType.MOBILE,
    name: "Fintech App",
    projectImage: fintech ,
    description:
      "A clone of Relevo crypto app to enable users buy and sell crypto easily.",
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
    technologies: ["Python", "FLASK", "FLASK_SMOREST", "POSTGRESQL", "DOCKER", "JWT"],
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
  },
  {
    type: ProjectType.MOBILE,
    name: "my-fav-places",
    projectImage: fav_places,
    description:
      "An app to record and cherish your favorite memories along with the places where they happened",
    repo: "https://github.com/maggickkw/my-fav-places",
    link: "",
    technologies: ["React-Native", "Expo", "Expo-Location", "React-Navigation"],
  },


];
