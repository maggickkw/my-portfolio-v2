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
      className="max-w-4xl px-6 md:px-6 py-2 md:py-4 mx-auto  mt-2 md:mt-6 min-h-screen"
      id="about_page">
      <div className="font-Poppins text-center">
        <p className="text-sm  md:text-base lg:text-lg flex text-center items-center  justify-center text-gray-400  dark:text-gray-200">
          <BsDashLg className="text-gray-400 text-2xl dark:text-gray-300" />
          What I can tell you
        </p>
        <h2 className="page-title">About Me</h2>
        <p className="text-sm xs:text-base md:text-lg lg:text-xl  xm:leading-6  md:leading-10 text-center pt-4 text-gray-600  dark:text-gray-200">
          Passionate full-stack web and mobile developer with a year of hands-on
          experience, committed to architecting seamless digital solutions that
          enchant users and propel innovation forward. Equipped with a profound
          understanding of both frontend and backend technologies, I am
          dedicated to orchestrating captivating user experiences that transcend
          expectations. With a flair for design and a mastery of cutting-edge
          development tools, I transform creative concepts into functional code,
          ensuring every pixel aligns with the vision. From crafting responsive
          web interfaces to optimizing backend architectures, I thrive in the
          dynamic realm of technology. Driven by an insatiable curiosity for
          machine learning, I eagerly explore its applications to enhance user
          interactions and uncover new insights. Join me on this exhilarating
          journey of code, creativity, and continuous growth, as we shape the
          digital landscape together. #FullStackDeveloper 🌐📱
          #MachineLearningEnthusiast 🤖✨
        </p>
      </div>
      <div className="mt-10 flex flex-row mx-auto justify-center">
        <button
          className={
            selected === SELECTED_OPTION.EXPEERIENCE
              ? "btn-select btn-active"
              : "btn-select btn-inActive"
          }
          onClick={() => setSelected(SELECTED_OPTION.EXPEERIENCE)}>
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
          onClick={() => setSelected(SELECTED_OPTION.EDUCATION)}>
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
