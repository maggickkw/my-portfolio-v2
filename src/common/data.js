import IHDM_Image from "assets/images/Ihdm_image.png";
import IGPCM_Image from "assets/images/igpcm_image.png";
import SimplifyBlog_Image from "assets/images/simplifyBlog_image.png";
import Goboomit_Image from "assets/images/Goboomit.png";
// import SimpuGo_Image from "assets/images/SimpuGo_image.png";
import SimpuGo_Banner from "assets/images/simpuBanner.png";
import Monie_Image from "assets/images/Monie_image.png";
import DailyTask_Image from "assets/images/Dailytask_image.png";

export const experience_data = [
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
      "My task as a teaching aide and Mentor at Code the dream involved helping students understand React js and Javascript and helping them with assignements that they may be having problems with. I teach them best practices and helped them troubleshoot their code in the cases where bugs arose.",
    company: "Code The Dream",
    location: "San Francisco, CA",
    from: "July,2023",
    to: "Feb, 2024",
  },
  {
    title: "Technician",
    description:
      "I assited with fixing system and logistical errors for the Ghana Card roll-out. ",
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
};
export const Project_data = [
  {
    type: ProjectType.MOBILE,
    name: "SimpuGO",
    projectImage: SimpuGo_Banner,

    description:
      "Simpu is the all-in-one communication platform for your teams' and customer interaction needs from email, social media, SMS to Live chat.",
    repo: "",
    link: "https://play.google.com/store/apps/details?id=co.simpu.inbox",
    technologies: ["React-Native", "React-Query", "UI-kitten", "Firebase"],
  },
  {
    type: ProjectType.MOBILE,
    name: "Goboomit",
    projectImage: Goboomit_Image,

    description:
      "Goboomit is a platform that makes it easy for influencers and businesses to collaborate. Paving the way for good cooperation between our influencers and their partners. we also have a strong focus on companies and their campaigns, so on goboomit, you can find all kinds of products, companies and campaigns",
    repo: "",
    link: "https://play.google.com/store/apps/details?id=com.goboomit",
    technologies: ["React-Native", "Expo", "Firebase"],
  },
  {
    type: ProjectType.MOBILE,
    name: "Moniee Mobile",
    projectImage: Monie_Image,

    description:
      "Moniee is a mobile fintech app for sending and recieving funds directly to anyone from your contact. ",
    repo: "https://github.com/tdammy92/Moniee",
    link: "https://drive.google.com/file/d/1-LImj4UBOstDWKjDeEw1JBTvtLxthN30/view?usp=drive_link",
    technologies: ["React-Native", "Async-storage", "redux"],
  },
  {
    type: ProjectType.MOBILE,
    name: "DailyTask",
    projectImage: DailyTask_Image,
    description:
      "Daily Task is a close replica of google task, with more features such as nested List.",
    repo: "",
    link: "https://drive.google.com/file/d/1JPX3IRVUXNLTu94DACJzR1CPyE9F6H3Y/view?usp=drive_link",
    technologies: ["React-Native", "Async-storage", "Firebase"],
  },
  {
    type: ProjectType.WEB,
    name: "IHDM Portal",
    projectImage: IHDM_Image,
    description:
      "Ihdm portal, is owned by a research body, that conducts independent result-based research on vulnerable communities, carries out public education and training, advance policy advocacy.",
    repo: "https://github.com/tdammy92/ihdm-web",
    link: "https://ihdm.org.ng/",
    technologies: ["ReactJS", "MaterialUI", "Node/StrapiJs", "MongoDb"],
  },
  {
    type: ProjectType.WEB,
    name: "IGPCM Portal",
    projectImage: IGPCM_Image,
    description:
      "A Registration portal, IGPCM professionally raises, trains and primes individuals and corporate bodies, with practical skills training, in peace building.",
    repo: "https://github.com/tdammy92/ipcm-web",
    link: "https://igpcm.org.ng/",
    technologies: ["ReactJS", "MaterialUI", "NodeJs", "MongoDb", "Cloudinary"],
  },
  {
    type: ProjectType.MOBILE,
    name: "FugaGpa",
    projectImage:
      "https://twproject.com/blog/wp-content/uploads/how-to-manage-project-integration.png",
    description:
      "FugaGpa is a mobile app for student of the federal university gashua, which serves as a guild to many things on campus like GPA calculation, Time table, Library etc.",
    repo: "https://github.com/tdammy92/FugaApp",
    link: "https://drive.google.com/file/d/1h0soxyODfMDt9tnlkgIMTTcaCzTaRS8I/view?usp=sharing",
    technologies: ["React-Native"],
  },
  {
    type: ProjectType.WEB,
    name: "Simplify Blog",
    projectImage: SimplifyBlog_Image,
    description:
      "The Blog is a journal to provide insight, about Simpilify, which is a simple and modern point of sales with integrated inventory management system for growing businesses.",
    repo: "",
    link: "https://simplifyblog.netlify.app/",
    technologies: ["GatsbyJS", "CSS", "Node/StrapiJs", "MongoDb", "Cloudinary"],
  },
  {
    type: ProjectType.DESKTOP,
    name: "Tic Tac Toa (XandO)",
    projectImage:
      "https://twproject.com/blog/wp-content/uploads/how-to-manage-project-integration.png",
    description:
      "XandO popularly known as Tic Tac Toe Electron-react App for Desktop PC/Mac and linux",
    repo: "https://github.com/tdammy92/XandO",
    link: "",
    technologies: ["ElectronJS", "CSS"],
  },
];
