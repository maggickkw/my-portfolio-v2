import React from "react";
import TimeLine from "./Time-line";
import { experience_data } from "../common/data";

function Experience() {
  return (
    <div className="w-full h-full my-6 transition duration-300">
      <TimeLine data={experience_data} type={"experience"} />
    </div>
  );
}

export default Experience;
