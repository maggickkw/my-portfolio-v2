import React, { useEffect } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { TeckStack } from "../common/data"; // Ensure the spelling is correct
import StackIcon from "../common/StackIcon";
import { motion, useAnimation } from "framer-motion";

function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Trigger the staggered animation after 3 seconds
      controls.start({
        opacity: 1,
        transition: { staggerChildren: 0.5 }, // Stagger child animations by 0.5 seconds
      });
    }, 5000); // Delay for 3 seconds

    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <motion.section
      name="home"
      className="max-w-5xl h-screen w-full mx-auto flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="px-6 py-6 flex justify-between items-center">
        <div className="h-full text-center mx-auto mt-6">
          <div className="font-Poppins max-w-2xl">
            <p className="text-base xs:text-lg md:text-xl lg:text-2xl font-bold dark:text-white">
              <span className="animate-bounce pr-1">👋</span>
              Hello I'm
            </p>
            <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-black dark:text-white">
              Wilberforce Sedem Haibor
            </h2>
            <p className="text-base xs:text-l md:text-xl lg:text-2xl text-gray-600 my-5 dark:text-gray-200">
              A Full Stack Mobile & Web Engineer, Automations Engineer & Machine Learning Enthusiast conversant with the evolvement of technology
            </p>
          </div>
          <div className="mt-6 flex flex-row items-center justify-center font-Poppins">
            <a
              href="./Wilberforce_Sedem_Haibor.pdf"
              download={true}
              target="__blank"
              className="mx-4 border-2 text-base xs:text-lg md:text-xl lg:text-2xl gap-x-2 border-black dark:border-white p-1 px-6 rounded-3xl flex flex-row items-center bg-black text-white hover:bg-white hover:text-black transition ease-in-out duration-300"
            >
              <span> Download CV</span>
              <FaCloudDownloadAlt />
            </a>
          </div>
        </div>
      </div>

      <div
        className="font-Poppins mt-20 flex flex-col md:flex-row items-center justify-center"
        initial={{ opacity: 0 }}
        animate={controls}
      >
        <h3 className="text-xl md:font-bold text-center md:text-2xl md:border-r-2 md:mr-4 border-black dark:border-white w-48 dark:text-white">
          Tech Stack
        </h3>
        <div className="w-full my-4 flex flex-wrap gap-2 px-10 md:px-0">
          {TeckStack?.map((stack, index) => (
            <motion.div
              key={index}
              title={stack?.name}
              initial={{ opacity: 0 }} // Icons start invisible
              animate={{ opacity: 1 }} // Icons fade in
              transition={{ duration: 1, delay: index * 0.5 }} // Delay for each icon based on its index
            >
              <StackIcon stack={stack.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
