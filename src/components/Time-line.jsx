import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const Item = ({ item, type }) => {
  return (
    <div className="col-span-4 w-full h-full">
      <div className="w-full h-full p-4 font-Poppins ">
        <p className="text-base xs:text-lg md:text-xl lg:text-xl text-gray-500 dark:text-gray-200">
          {item?.company}
        </p>
        <p className="text-base xs:text-base md:text-lg lg:text-xl font-semibold py-1  dark:text-white">
          {type === "experience" ? "💼" : "🎓"} {item?.title}
        </p>
        <p className="text-xs xs:text-sm md:text-base lg:text-lg text-gray-600 py-1  dark:text-gray-200">
          {type === "experience" ? (
            <>
              📆 <span>{item?.from}</span> - <span>{item?.to}</span>
            </>
          ) : (
            <>
              📆 <span>{item?.to}</span>
            </>
          )}
        </p>
        <p className="text-sm xs:text-sm md:text-base lg:text-lg  text-gray-500 dark:text-gray-200">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

const EmptySide = ({ index, type }) => {
  // const className = `dark:text-black`;
  // const className = `animate-ping delay-[${100 * index}]`;

  return (
    <>
      <div className="relative  col-span-1 w-full h-full hidden md:flex justify-center items-center">
        <div className="h-full w-1 bg-gray-800  dark:bg-white"></div>
        <div className="absolute w-10 h-10 rounded-full z-10 bg-gray-800text-center bg-black dark:bg-white flex items-center justify-center">
          <span className="text-white dark:text-black hover:scale-110 duration-300">
            {type === "education" ? <FaUserGraduate /> : <MdWork />}
          </span>
        </div>
      </div>
    </>
  );
};

const RightSide = ({ item, index, type }) => {
  return (
    <>
      <div className="col-span-4 w-full h-full hidden md:block"></div>
      <EmptySide index={index} type={type} />
      <Item item={item} type={type} />
    </>
  );
};

const LeftSide = ({ item, index, type }) => {
  return (
    <>
      {/* first stack */}
      <Item item={item} type={type} />
      <EmptySide index={index} type={type} />
      <div className="col-span-4  hidden md:block w-full h-full"></div>
    </>
  );
};

function TimeLine({ data, type }) {
  return (
    <div className="max-w-6xl mx-auto w-full md:grid grid-cols-9">
      {data?.map((item, index) => {
        if (index % 2 === 0) {
          return <LeftSide item={item} key={index} index={index} type={type} />;
        } else {
          return (
            <RightSide item={item} key={index} index={index} type={type} />
          );
        }
      })}
    </div>
  );
}

export default TimeLine;
