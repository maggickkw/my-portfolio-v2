import React from "react";
import { HiArrowDown } from "react-icons/hi2";
import { TeckStack } from "../common/data";
import StackIcon from "../common/StackIcon";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      name="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 pt-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-900/50 border border-base-800/50 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-highlight animate-pulse" />
          <span className="text-sm text-base-400">
            Available for opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Wilberforce</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-base-400 font-display font-medium mb-4"
        >
          Full Stack Engineer
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-base-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I craft seamless mobile and web applications with modern technologies.
          Passionate about clean code, great UX, and meaningful digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            to="project"
            smooth={true}
            offset={-80}
            duration={500}
            className="btn-primary cursor-pointer"
          >
            View My Work
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            className="btn-outline cursor-pointer"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={itemVariants}
          className="glass p-6 md:p-8 max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:border-r md:border-base-700/50 md:pr-6 text-center md:text-left">
              <h3 className="font-display font-medium text-white text-base">
                Tech Stack
              </h3>
              <p className="text-base-500 text-sm">Tools I use</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {TeckStack?.slice(0, 12).map((stack, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className="p-2.5 rounded-xl bg-base-800/30 hover:bg-base-800/50 transition-colors cursor-pointer"
                  title={stack?.name}
                >
                  <StackIcon stack={stack.name} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <Link
            to="about"
            smooth={true}
            offset={-80}
            duration={500}
            className="inline-flex flex-col items-center gap-2 cursor-pointer group"
          >
            <span className="text-xs text-base-500 group-hover:text-base-400 transition-colors uppercase tracking-widest">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-base-500 group-hover:text-accent transition-colors"
            >
              <HiArrowDown />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
