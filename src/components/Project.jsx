import React from "react";
import { ProjectType } from "../common/data";
import { HiArrowTopRightOnSquare, HiCodeBracket } from "react-icons/hi2";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { motion } from "framer-motion";

function Project({ project }) {
  const isMobile = project?.type === ProjectType.MOBILE;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="project-card group h-full"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-video">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={project?.projectImage}
          alt={project?.name}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/60 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Project Type Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-base-950/70 backdrop-blur-sm border border-base-800/50 text-base-300">
            {isMobile ? "Mobile" : "Web"}
          </span>
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {project?.link && (
            <a
              href={project?.link}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-accent flex items-center justify-center text-base-950 hover:bg-accent-light transition-colors"
            >
              {isMobile ? (
                project?.link?.includes("apple") ? (
                  <FaAppStore className="text-base" />
                ) : (
                  <FaGooglePlay className="text-base" />
                )
              ) : (
                <HiArrowTopRightOnSquare className="text-base" />
              )}
            </a>
          )}
          {project?.repo && (
            <a
              href={project?.repo}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-base-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-base-700 transition-colors border border-base-700/50"
            >
              <HiCodeBracket className="text-base" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h4 className="font-display font-medium text-lg text-white mb-2 group-hover:text-accent transition-colors">
          {project?.name}
        </h4>
        <p className="text-base-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {project?.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project?.technologies?.slice(0, 4).map((tech, index) => (
            <span key={index} className="tech-badge text-xs">
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 4 && (
            <span className="tech-badge text-xs">+{project.technologies.length - 4}</span>
          )}
        </div>

        {/* Action Links - Mobile Visible */}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-base-800/30 md:hidden">
          {project?.link && (
            <a
              href={project?.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-accent text-sm font-medium hover:text-accent-light transition-colors"
            >
              <HiArrowTopRightOnSquare className="text-sm" />
              {isMobile ? "Download" : "Live Demo"}
            </a>
          )}
          {project?.repo && (
            <a
              href={project?.repo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-base-400 text-sm font-medium hover:text-white transition-colors"
            >
              <HiCodeBracket className="text-sm" />
              Source
            </a>
          )}
          {!project?.repo && (
            <span className="flex items-center gap-1.5 text-base-600 text-sm">
              <HiCodeBracket className="text-sm" />
              Private
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
