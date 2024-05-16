import React from "react";
import { Project_data } from "common/data";
import { BsDashLg } from "react-icons/bs";
import Project from "./Project";

function Projects() {
  return (
    <section
      name="project"
      id="project"
      className="max-w-5xl my-24 md:my-48 px-6 py-4 mx-auto min-h-screen font-Poppins"
    >
      <div>
        <h3 className="page-title">My Projects</h3>
        <p className="text-sm  md:text-base lg:text-lg flex text-center items-center  justify-center text-gray-400  dark:text-gray-200">
          <BsDashLg className="text-gray-400 text-2xl dark:text-gray-300" />
          Some of my recent projects i have worked on
        </p>
      </div>
      <div>
        {Project_data?.map((project, index) => (
          <Project key={index} index={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
