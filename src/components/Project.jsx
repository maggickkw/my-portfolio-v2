import React from "react";
import { ProjectType } from "../common/data";
import { BsBrowserChrome, BsGithub } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

function Project({ project, index }) {
  return (
    <div className="mx-5 sm:mx-10 md:mx-0 grid grid-cols-1 md:grid-cols-2 gap-x-12 my-12 md:my-20 items-center">
      <div className="mb-4 md:mb-0">
        <img
          className="rounded-lg  h-30 w-30 bg-slate-300"
          src={project?.projectImage}
          alt={project?.name}
          srcSet=""
        />
      </div>
      <div>
        <h4 className="text-base xs:text-xl md:text-xl lg:text-2xl font-semibold dark:text-white">
          {project?.name}
        </h4>
        <p className="text-base xs:text-base md:text-xl lg:text-xl text-gray-600 dark:text-gray-300">
          {project?.description}
        </p>
        <div className="flex gap-2 my-3 flex-wrap">
          {project?.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="inline-flex items-center rounded-xl bg-white px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-black"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="font-Poppins text-xl flex gap-x-8 my-2 mt-5">
          {project?.link !== "" ? (
            <a
              href={project?.link}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              {project?.type === ProjectType.WEB ? (
                <span className="text-black text-base xs:text-base md:text-xl lg:text-xl dark:text-white  flex gap-x-2 items-center">
                  <BsBrowserChrome />
                  <p>View</p>
                </span>
              ) : (
                <span className="text-black text-base xs:text-base md:text-xl lg:text-xl dark:text-white flex gap-x-2 items-center">
                  <FaDownload />
                  <p>Download</p>
                </span>
              )}
            </a>
          ) : (
            ""
          )}

          {project?.repo !== "" ? (
            <a
              href={project?.repo}
              target="_blank"
              rel="noreferrer"
              className={project?.repo === "" ? "cursor-not-allowed" : ""}
              onClick={(event) => event.preventdefault()}
            >
              <span
                className={
                  project?.repo !== ""
                    ? "text-black text-base xs:text-base md:text-xl lg:text-xl dark:text-white flex gap-x-2 items-center"
                    : "text-gray-400 text-base xs:text-base md:text-xl lg:text-xl dark:text-gray-500 flex gap-x-2 items-center"
                }
              >
                <BsGithub />
                {project?.repo === "" ? <p>Private</p> : <p>Code</p>}
              </span>
            </a>
          ) : (
            <button
              className={"cursor-not-allowed"}
              onClick={(event) => event.preventdefault()}
            >
              <span
                className={
                  project?.repo !== ""
                    ? "text-black text-base xs:text-base md:text-xl lg:text-xl dark:text-white flex gap-x-2 items-center"
                    : "text-gray-400 text-base xs:text-base md:text-xl lg:text-xl dark:text-gray-500 flex gap-x-2 items-center"
                }
              >
                <BsGithub />
                {project?.repo === "" ? <p>Private</p> : <p>Code</p>}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
