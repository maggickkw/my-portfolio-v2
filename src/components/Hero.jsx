import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Hero() {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: "easeOut" },
    },
  });

  return (
    <motion.section
      name="home"
      className="min-h-screen flex items-center py-24"
      initial="hidden"
      animate="visible"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <motion.p
            variants={fadeUp(0.1)}
            className="text-accent font-mono text-sm mb-5"
          >
            HI, MY NAME IS
          </motion.p>

          <motion.h1
            variants={fadeUp(0.2)}
            className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-base-200 leading-[1.1]"
          >
            WILBERFORCE SEDEM HAIBOR.
          </motion.h1>

          <motion.h2
            variants={fadeUp(0.3)}
            className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-base-500 leading-[1.1] mt-3"
          >
            I build fast, scalable products.
          </motion.h2>

          <motion.p
            variants={fadeUp(0.4)}
            className="text-base-400 max-w-lg mt-6 text-base md:text-lg leading-relaxed"
          >
            Full-stack web and mobile engineer focused on clean architecture,
            high-performance APIs, and shipping reliable products with speed.
          </motion.p>

          <motion.div variants={fadeUp(0.5)} className="mt-12">
            <Link
              to="project"
              smooth={true}
              offset={-80}
              duration={500}
              className="btn-primary"
            >
              VIEW PROJECTS
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp(0.4)}
          className="flex justify-center lg:justify-end order-first lg:order-last"
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl border-2 border-accent/30 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] rounded-2xl overflow-hidden bg-accent/[0.04] border border-base-700/60">
              <img
                src="/bitmoji.png"
                alt="WILBERFORCE SEDEM HAIBOR bitmoji"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
