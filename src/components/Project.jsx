import React from "react";
import { ProjectType } from "../common/data";
import { HiArrowTopRightOnSquare, HiCodeBracket } from "react-icons/hi2";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { motion } from "framer-motion";

function Project({ project }) {
  const isMobile = project?.type === ProjectType.MOBILE;
  const typeLabelMap = {
    [ProjectType.MOBILE]: "Mobile",
    [ProjectType.WEB]: "Web",
    [ProjectType.BACKEND]: "Backend",
    [ProjectType.DESKTOP]: "Desktop",
  };
  const typeLabel = typeLabelMap[project?.type] || "Project";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group h-full bg-base-900/40 rounded-lg overflow-hidden border border-base-800/50 hover:border-base-700/80 transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-80"
          src={project?.projectImage}
          alt={project?.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/40 to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded text-[10px] font-mono text-accent bg-base-950/80 border border-accent/15">
          {typeLabel}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h4 className="font-display font-medium text-lg text-base-200 group-hover:text-accent transition-colors leading-snug">
            {project?.name}
          </h4>
          <div className="flex gap-3 mt-0.5 shrink-0">
            {project?.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="text-base-500 hover:text-accent transition-colors"
                title="Source code"
              >
                <HiCodeBracket className="text-lg" />
              </a>
            )}
            {project?.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-base-500 hover:text-accent transition-colors"
                title={isMobile ? "Download" : "Live demo"}
              >
                {isMobile ? (
                  project?.link?.includes("apple") ? (
                    <FaAppStore className="text-lg" />
                  ) : (
                    <FaGooglePlay className="text-[15px]" />
                  )
                ) : (
                  <HiArrowTopRightOnSquare className="text-lg" />
                )}
              </a>
            )}
          </div>
        </div>

        <p className="text-base-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {project?.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project?.technologies?.map((tech, index) => (
            <span key={index} className="tech-badge text-[11px]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
