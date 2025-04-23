import React from "react";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiElectron,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiDocker,
  SiSelenium,
  SiGo,
  SiLaravel,
  SiPhp,
  SiDeno,
  SiGit
} from "react-icons/si";
import { FaCss3Alt, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { TbBrandFirebase, TbBrandReactNative } from "react-icons/tb";
import { TechStack } from "./data";
function StackIcon({ stack }) {
  const className = `text-3xl md:text-4xl text-black dark:text-white`;

  switch (stack) {
    case TechStack.HTML:
      return <TiHtml5 color="#E44D26" className={className} />;
    case TechStack.CSS:
      return <FaCss3Alt color="#264de4" className={className} />;
    case TechStack.TAILWIND:
      return <SiTailwindcss color="#38BDF8" className={className} />;
    case TechStack.JAVASCRIPT:
      return <SiJavascript color="#F7DF1E" className={className} />;
    case TechStack.TYPESCRIPT:
      return <SiTypescript color="#3178C6" className={className} />;
    case TechStack.REACTJS:
      return <FaReact color="#61DBFB" className={className} />;
    case TechStack.REACTNATIVE:
      return <TbBrandReactNative color="#61DBFB" className={className} />;
    case TechStack.NODEJS:
      return <FaNodeJs color="#68A063" className={className} />;
    case TechStack.MONGODB:
      return <SiMongodb color="#47A248" className={className} />;
    case TechStack.FIREBASE:
      return <TbBrandFirebase color="#FFCA28" className={className} />;
    case TechStack.GIT:
      return <SiGit color="#F05032" className={className} />;
    case TechStack.ELECTRON:
      return <SiElectron color="#47848F" className={className} />;
    case TechStack.PYTHON:
      return <FaPython color="#3776AB" className={className} />;
    case TechStack.DOCKER:
      return <SiDocker color="#0db7ed" className={className} />;
    case TechStack.FLASK:
      return <SiFlask color="#4fd8df" className={className} />;
    case TechStack.POSTGRESQL:
      return <SiPostgresql color="#336791" className={className} />;
    case TechStack.DJANGO:
      return <SiDjango color="#136149" className={className} />;
    case TechStack.SELENIUM:
      return <SiSelenium color="#43B02A" className={className} />;
    case TechStack.GO_LANG:
      return <SiGo color="#00ADD8" className={className} />
    case TechStack.LARAVEL:
      return <SiLaravel color="#FF2D20" className={className} />
    case TechStack.PHP:
      return <SiPhp color="#777BB4" className={className} />
    case TechStack.DENO:
      return <SiDeno  className={className} />
    default:
      return <div />;
  }
}

export default StackIcon;
