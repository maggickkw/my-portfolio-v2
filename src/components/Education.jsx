import React from "react";
import TimeLine from "./Time-line";
import { education_data } from "../common/data";

function Education() {
  return (
    <div className="w-full h-full my-6 transition duration-300">
      <TimeLine data={education_data} type={"education"} />
    </div>
  );
}

export default Education;
