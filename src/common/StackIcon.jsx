import React from "react";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiFirebase,
  SiElectron,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiDocker,
  SiSelenium
} from "react-icons/si";
import { FaCss3Alt, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { TbBrandReactNative } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { TechStack } from "./data";
function StackIcon({ stack }) {
  const className = `text-3xl md:text-4xl text-black dark:text-white`;

  switch (stack) {
    case TechStack.HTML:
      return <TiHtml5 className={className} />;
    case TechStack.CSS:
      return <FaCss3Alt className={className} />;
    case TechStack.TAILWIND:
      return <SiTailwindcss className={className} />;
    case TechStack.JAVASCRIPT:
      return <SiJavascript className={className} />;
    case TechStack.TYPESCRIPT:
      return <SiTypescript className={className} />;
    case TechStack.REACTJS:
      return <FaReact className={className} />;
    case TechStack.REACTNATIVE:
      return <TbBrandReactNative className={className} />;
    case TechStack.NODEJS:
      return <FaNodeJs className={className} />;
    case TechStack.MONGODB:
      return <SiMongodb className={className} />;
    case TechStack.FIREBASE:
      return <SiFirebase className={className} />;
    case TechStack.GIT:
      return <BsGithub className={className} />;
    case TechStack.ELECTRON:
      return <SiElectron className={className} />;
    case TechStack.PYTHON:
      return <FaPython className={className} />;
    case TechStack.DOCKER:
      return <SiDocker className={className} />;
    case TechStack.FLASK:
      return <SiFlask className={className} />;
    case TechStack.POSTGRESQL:
      return <SiPostgresql className={className} />;
    case TechStack.DJANGO:
      return <SiDjango className={className} />;
    case TechStack.SELENIUM:
      return <SiSelenium className={className} />;
    default:
      return <div />;
  }
}

export default StackIcon;
