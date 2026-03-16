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
            className="text-accent font-mono text-sm mb-4"
          >
            HI, MY NAME IS
          </motion.p>

          <motion.h1
            variants={fadeUp(0.2)}
            className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight"
          >
            WILBERFORCE
            <br />
            SEDEM
            <br />
            HAIBOR.
          </motion.h1>

          <motion.h2
            variants={fadeUp(0.3)}
            className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-base-100 leading-[1.15] mt-6"
          >
            I design reliable systems where correctness matters.
          </motion.h2>

          <motion.p
            variants={fadeUp(0.4)}
            className="text-base-400 max-w-xl mt-6 text-base md:text-lg leading-relaxed"
          >
            I build the infrastructure money moves through — payment gateways,
            lending systems, double-entry ledgers, and settlement engines. Go and
            Rust primarily. I've shipped checkout and loan management
            systems in production fintech environments.
          </motion.p>

          <motion.p
            variants={fadeUp(0.4)}
            className="text-accent/90 font-medium text-sm md:text-base mt-5 mb-4 max-w-xl"
          >
            Currently building a multi-provider payment orchestration layer for
            African markets.
          </motion.p>

          <motion.p
            variants={fadeUp(0.4)}
            className="text-base-500 text-sm max-w-xl"
          >
            Built payment gateways, checkout systems, and lending platforms used
            in production.
          </motion.p>

          <motion.div variants={fadeUp(0.5)} className="mt-10">
            <Link
              to="project"
              smooth={true}
              offset={-80}
              duration={500}
              className="btn-primary px-8 py-3.5 font-semibold"
            >
              View Selected Projects
            </Link>
            <p className="text-base-600 text-xs font-mono mt-4 tracking-wide">
              Go • TypeScript • Rust • Python • PHP
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp(0.4)}
          className="flex justify-center lg:justify-end order-first lg:order-last"
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl border-2 border-accent/30 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-2xl overflow-hidden bg-accent/[0.04] border border-accent/20 shadow-[0_0_40px_rgba(107,140,199,0.15)]">
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
