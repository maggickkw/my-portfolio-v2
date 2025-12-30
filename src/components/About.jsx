import React, { useState } from "react";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi2";
import { motion } from "framer-motion";
import Experience from "./Experience";
import Education from "./Education";

const SELECTED_OPTION = {
  EXPERIENCE: "experience",
  EDUCATION: "education",
};

function About() {
  const [selected, setSelected] = useState(SELECTED_OPTION.EXPERIENCE);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
      name="about"
      id="about_page"
      className="py-24 md:py-32 px-6"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-widest">
            Get to know me
          </span>
          <h2 className="section-title mt-3">
            About Me
          </h2>
        </motion.div>

        {/* About Content */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
        >
          {/* Main About Card */}
          <div className="md:col-span-2 glass p-8">
            <h3 className="text-lg font-display font-medium text-white mb-4">
              Building with purpose
            </h3>
            <p className="text-base-400 leading-relaxed mb-4">
              I'm a full-stack developer focused on crafting digital solutions 
              that make a real impact. From mobile apps to web platforms, I 
              prioritize clean code and seamless user experiences.
            </p>
            <p className="text-base-400 leading-relaxed">
              My work spans fintech, social media, e-commerce, and humanitarian 
              tech—each project teaching me something new about solving real-world 
              problems through thoughtful engineering.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-col gap-4">
            <div className="glass p-6 flex-1 flex flex-col justify-center items-center text-center">
              <span className="text-3xl font-display font-bold text-accent">4+</span>
              <span className="text-base-500 text-sm mt-1">Years Experience</span>
            </div>
            <div className="glass p-6 flex-1 flex flex-col justify-center items-center text-center">
              <span className="text-3xl font-display font-bold text-white">10+</span>
              <span className="text-base-500 text-sm mt-1">Projects Completed</span>
            </div>
          </div>
        </motion.div>

        {/* Experience/Education Toggle */}
        <motion.div variants={itemVariants} className="flex justify-center mb-12">
          <div className="glass p-1.5 inline-flex gap-1">
            <button
              onClick={() => setSelected(SELECTED_OPTION.EXPERIENCE)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                selected === SELECTED_OPTION.EXPERIENCE
                  ? "bg-accent text-base-950"
                  : "text-base-400 hover:text-white"
              }`}
            >
              <HiBriefcase />
              Experience
            </button>
            <button
              onClick={() => setSelected(SELECTED_OPTION.EDUCATION)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                selected === SELECTED_OPTION.EDUCATION
                  ? "bg-accent text-base-950"
                  : "text-base-400 hover:text-white"
              }`}
            >
              <HiAcademicCap />
              Education
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {selected === SELECTED_OPTION.EXPERIENCE ? <Experience /> : <Education />}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
