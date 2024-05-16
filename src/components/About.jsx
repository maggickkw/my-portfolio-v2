import React, { useState } from "react";
import { PiGraduationCapDuotone } from "react-icons/pi";
import { BsDashLg } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import Experience from "./Experience";
import Education from "./Education";

const SELECTED_OPTION = {
  EXPEERIENCE: "experience",
  EDUCATION: "education",
};

function About() {
  const [selected, setSelected] = useState(SELECTED_OPTION.EXPEERIENCE);

  return (
    <section
      name="about"
      className="max-w-5xl px-6 md:px-6 py-2 md:py-4 mx-auto  mt-2 md:mt-6 min-h-screen"
      id="about_page"
    >
      <div className="font-Poppins text-center">
        <p className="text-sm  md:text-base lg:text-lg flex text-center items-center  justify-center text-gray-400  dark:text-gray-200">
          <BsDashLg className="text-gray-400 text-2xl dark:text-gray-300" /> Get
          to Know more
        </p>
        <h2 className="page-title">About Me</h2>
        <p className="text-sm xs:text-base md:text-lg lg:text-xl  xm:leading-6  md:leading-10 text-center pt-4 text-gray-600  dark:text-gray-200">
          Passionate mobile and front-end engineer dedicated to crafting
          seamless digital experiences that captivate users and drive
          innovation. With a keen eye for design and a knack for translating
          creative visions into code, I'm on a mission to bring the future to
          your fingertips. Whether it's optimizing user interfaces for a
          pixel-perfect display or diving into the world of responsive web
          design, I thrive on the challenges of the ever-evolving tech
          landscape. Join me on this exciting journey of code, creativity, and
          constant learning, as we shape the digital world together. #MobileDev
          📱✨ #FrontEndWizard 🖥️
        </p>
      </div>
      <div className="mt-10 flex flex-row mx-auto justify-center">
        <button
          className={
            selected === SELECTED_OPTION.EXPEERIENCE
              ? "btn-select btn-active"
              : "btn-select btn-inActive"
          }
          onClick={() => setSelected(SELECTED_OPTION.EXPEERIENCE)}
        >
          Experience{" "}
          <span className="px-2">
            {" "}
            <SlBadge />{" "}
          </span>
        </button>
        <button
          className={
            selected === SELECTED_OPTION.EDUCATION
              ? "btn-select  btn-active"
              : "btn-select btn-inActive"
          }
          onClick={() => setSelected(SELECTED_OPTION.EDUCATION)}
        >
          Education{" "}
          <span className="px-2">
            <PiGraduationCapDuotone />
          </span>
        </button>
      </div>
      <div>
        {selected === SELECTED_OPTION.EXPEERIENCE ? (
          <Experience />
        ) : (
          <Education />
        )}
      </div>
    </section>
  );
}

export default About;

// With over three years of dedicated experience in the field of software
//           development, I have established myself as a proficient and skilled
//           professional. my journey began with a degree in Computer Science,
//           which equipped me with a solid foundation in theoretical concepts and
//           problem-solving skills. As a Mobile Developer/Front-End Developer, I
//           have adeptly woven technical expertise into crafting innovative and
//           user-friendly applications. My comprehensive understanding of mobile
//           platforms and front-end technologies has enabled me to create seamless
//           user experiences that blend functionality with aesthetics. With a
//           proven track record of successful projects, I continue to demonstrate
//           my commitment to delivering high-quality software solutions that cater
//           to both user needs and industry standards.
