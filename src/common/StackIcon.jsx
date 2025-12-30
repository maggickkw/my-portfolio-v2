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
  SiGit,
  SiJest,
  SiRust,
} from "react-icons/si";
import { FaCss3Alt, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { TbBrandFirebase, TbBrandReactNative } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import { TechStack } from "./data";

function StackIcon({ stack }) {
  const className = "text-xl md:text-2xl transition-colors duration-300";

  const iconConfig = {
    [TechStack.HTML]: { Icon: TiHtml5, color: "#c9a87c" },
    [TechStack.CSS]: { Icon: FaCss3Alt, color: "#64748b" },
    [TechStack.TAILWIND]: { Icon: SiTailwindcss, color: "#64748b" },
    [TechStack.JAVASCRIPT]: { Icon: SiJavascript, color: "#c9a87c" },
    [TechStack.TYPESCRIPT]: { Icon: SiTypescript, color: "#64748b" },
    [TechStack.REACTJS]: { Icon: FaReact, color: "#84a98c" },
    [TechStack.REACTNATIVE]: { Icon: TbBrandReactNative, color: "#84a98c" },
    [TechStack.NODEJS]: { Icon: FaNodeJs, color: "#84a98c" },
    [TechStack.MONGODB]: { Icon: SiMongodb, color: "#84a98c" },
    [TechStack.FIREBASE]: { Icon: TbBrandFirebase, color: "#c9a87c" },
    [TechStack.GIT]: { Icon: SiGit, color: "#a68a5b" },
    [TechStack.ELECTRON]: { Icon: SiElectron, color: "#64748b" },
    [TechStack.PYTHON]: { Icon: FaPython, color: "#64748b" },
    [TechStack.DOCKER]: { Icon: SiDocker, color: "#64748b" },
    [TechStack.FLASK]: { Icon: SiFlask, color: "#94a3b8" },
    [TechStack.POSTGRESQL]: { Icon: SiPostgresql, color: "#64748b" },
    [TechStack.DJANGO]: { Icon: SiDjango, color: "#84a98c" },
    [TechStack.SELENIUM]: { Icon: SiSelenium, color: "#84a98c" },
    [TechStack.GO_LANG]: { Icon: SiGo, color: "#64748b" },
    [TechStack.LARAVEL]: { Icon: SiLaravel, color: "#a68a5b" },
    [TechStack.PHP]: { Icon: SiPhp, color: "#64748b" },
    [TechStack.DENO]: { Icon: SiDeno, color: "#d4d4d8" },
    [TechStack.JEST]: { Icon: SiJest, color: "#a68a5b" },
    [TechStack.WEBMAN]: { Icon: VscCode, color: "#64748b" },
    [TechStack.RUST]: { Icon: SiRust, color: "#c9a87c" },
  };

  const config = iconConfig[stack];

  if (!config) {
    return null;
  }

  const { Icon, color } = config;

  return <Icon style={{ color }} className={className} />;
}

export default StackIcon;
