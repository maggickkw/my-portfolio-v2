import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { TeckStack } from "../common/data";
import StackIcon from "../common/StackIcon";

function Hero() {
  return (
    <section
      name="home"
      className="max-w-5xl h-screen w-full mx-auto flex flex-col justify-center justify-items-center items-center">
      <div className="px-6 py-6 flex justify-between items-center ">
        <div className="h-full text-center mx-auto mt-6">
          <div className="font-Poppins max-w-2xl">
            <p className="text-base xs:text-lg md:text-xl lg:text-2xl  font-bold  dark:text-white">
              <span className="animate-bounce pr-1">👋</span>
              Hello I'm
            </p>
            <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl  font-black dark:text-white">
              Wilberforce Sedem Haibor
            </h2>
            <p className="text-base xs:text-l md:text-xl lg:text-2xl   text-gray-600 my-5 dark:text-gray-200">
              A Full Stack Mobile & Web Engineer, Automations Engineer & Machine Learning Enthusiast
              conversant with the evolvment of technology
            </p>
          </div>
          <div className="mt-6 flex flex-row items-center justify-center font-Poppins">
            <a
              href="./Wilberforce_Sedem_Haibor.pdf"
              download={true}
              target="__blank"
              className="mx-4 border-2 text-base xs:text-lg md:text-xl lg:text-2xl gap-x-2 border-black dark:border-white p-1 px-6 xs:px-6 md:px-6 rounded-3xl flex flex-row items-center bg-black text-white  hover:bg-white hover:text-black transition ease-in-out duration-300">
              <span> Download CV</span>
              <FaCloudDownloadAlt />
            </a>

            {/* <button className="mx-4 border-2 text-base xs:text-lg md:text-xl lg:text-2xl  border-black dark:border-white p-1 px-6 xs:px-6 md:px-6 rounded-3xl flex flex-row items-center bg-black text-white  hover:bg-white hover:text-black transition ease-in-out duration-300">
              Chat me
              <span className="px-2">
                <FaWhatsapp />
              </span>
            </button> */}
          </div>
        </div>
      </div>
      <div className="font-Poppins mt-20   flex flex-col md:flex-row items-center justify-center justify-items-center">
        <h3 className=" text-xl  md:font-bold  text-center md:text-2xl  md:border-r-2 md:mr-4 border-black dark:border-white  w-48 dark:text-white">
          Tech Stack
        </h3>
        <div className="w-full  my-4 flex flex-wrap gap-2 px-10 md:px-0">
          {TeckStack?.map((stack, index) => {
            return (
              <div
                className="hover:scale-125 duration-300 "
                key={index}
                title={stack?.name}>
                <StackIcon className="" stack={stack.name} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
