import React, { useState } from "react";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi2";
import { motion } from "framer-motion";
import Experience from "./Experience";
import Education from "./Education";

const SELECTED_OPTION = {
  EXPERIENCE: "experience",
  EDUCATION: "education",
};

const recentTech = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React / React Native",
  "Node.js / Express",
  "Python / Django",
  "Go",
  "Rust",
  "PHP / Laravel",
  "PostgreSQL",
  "Firebase",
  "Docker",
  "Electron",
  "Deno",
  "Webman",
  "Selenium",
  "Machine Learning",
];

function About() {
  const [selected, setSelected] = useState(SELECTED_OPTION.EXPERIENCE);

  return (
    <section name="about" id="about_page" className="py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="flex items-center gap-2 font-display font-semibold text-2xl md:text-[28px] text-base-200 whitespace-nowrap">
            <span className="font-mono font-normal text-accent text-lg md:text-xl">
              01.
            </span>
            About Me
          </h2>
          <div className="h-px bg-base-800 flex-1 max-w-[300px]" />
        </div>

        <div className="max-w-2xl mb-20">
          <p className="text-base-400 leading-relaxed mb-4">
            I turn complex business problems into clean, production-ready web
            and mobile products.
          </p>
          <p className="text-base-400 leading-relaxed mb-4">
            I care about speed, scalability, and maintainable systems that hold
            up under real usage.
          </p>
          <p className="text-base-400 leading-relaxed mb-4">
            Core technologies I use regularly:
          </p>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2 mt-5 max-w-lg">
            {recentTech.map((tech) => (
              <li
                key={tech}
                className="flex items-center gap-2 text-[13px] text-base-400 font-mono"
              >
                <span className="text-accent text-xs">▹</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex gap-2 mb-10">
            <button
              onClick={() => setSelected(SELECTED_OPTION.EXPERIENCE)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm rounded transition-all duration-200 ${
                selected === SELECTED_OPTION.EXPERIENCE
                  ? "text-accent bg-accent/[0.08] border border-accent/20"
                  : "text-base-500 border border-transparent hover:text-base-300"
              }`}
            >
              <HiBriefcase className="text-base" />
              <span className="font-mono text-xs">Experience</span>
            </button>
            <button
              onClick={() => setSelected(SELECTED_OPTION.EDUCATION)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm rounded transition-all duration-200 ${
                selected === SELECTED_OPTION.EDUCATION
                  ? "text-accent bg-accent/[0.08] border border-accent/20"
                  : "text-base-500 border border-transparent hover:text-base-300"
              }`}
            >
              <HiAcademicCap className="text-base" />
              <span className="font-mono text-xs">Education</span>
            </button>
          </div>

          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {selected === SELECTED_OPTION.EXPERIENCE ? (
              <Experience />
            ) : (
              <Education />
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
