import React, { useState } from "react";
import { Project_data, ProjectType } from "common/data";
import { motion } from "framer-motion";
import Project from "./Project";

const FILTER_OPTIONS = [
  { label: "All", value: "all" },
  { label: "Web", value: ProjectType.WEB },
  { label: "Mobile", value: ProjectType.MOBILE },
  { label: "Backend", value: ProjectType.BACKEND },
];

function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? Project_data
      : Project_data.filter((project) => project.type === filter);

  return (
    <section name="project" id="project" className="py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="flex items-center gap-2 font-display font-semibold text-2xl md:text-[28px] text-base-200 whitespace-nowrap">
            <span className="font-mono font-normal text-accent text-lg md:text-xl">
              02.
            </span>
            Things I've Built
          </h2>
          <div className="h-px bg-base-800 flex-1 max-w-[300px]" />
        </div>
        <div className="flex gap-2 mb-10">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`px-4 py-2 text-sm rounded transition-all duration-200 font-mono text-xs ${
                filter === option.value
                  ? "text-accent bg-accent/[0.08] border border-accent/20"
                  : "text-base-500 border border-transparent hover:text-base-300"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects?.map((project, index) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Project project={project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
