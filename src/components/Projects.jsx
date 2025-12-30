import React, { useState } from "react";
import { Project_data, ProjectType } from "common/data";
import { motion } from "framer-motion";
import Project from "./Project";

const FILTER_OPTIONS = [
  { label: "All", value: "all" },
  { label: "Web", value: ProjectType.WEB },
  { label: "Mobile", value: ProjectType.MOBILE },
];

function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? Project_data
      : Project_data.filter((project) => project.type === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      name="project"
      id="project"
      className="py-24 md:py-32 px-6"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-widest">
            My Work
          </span>
          <h2 className="section-title mt-3">
            Featured Projects
          </h2>
          <p className="section-subtitle max-w-xl mx-auto mt-4">
            A selection of projects I've built, from mobile apps to web platforms
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div variants={itemVariants} className="flex justify-center mb-12">
          <div className="glass p-1 inline-flex gap-1">
            {FILTER_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  filter === option.value
                    ? "bg-accent text-base-950"
                    : "text-base-400 hover:text-white"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {filteredProjects?.map((project, index) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
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
