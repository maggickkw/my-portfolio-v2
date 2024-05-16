import React from "react";
import { BsCloudMoonFill, BsBriefcaseFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-scroll";
import useTheme, { themeType } from "hooks/useTheme";

function Nav() {
  const { theme, changeTheme } = useTheme();

  return (
    <nav className="py-3 px-5 z-20 font-Poppins fixed top-0 w-screen bg-white dark:bg-black">
      <div className="md:max-w-5xl mx-auto flex flex-row justify-between align-center">
        <Link
          to="home"
          smooth={true}
          offset={50}
          duration={500}
          className="text-lg xs:text-xl md:text-2xl lg:text-3xl  dark:text-white font-semibold cursor-pointer hover:scale-105 duration-200"
        >
          MAGGICK
        </Link>
        <div className="hidden md:block">
          <ul className="flex flex-row gap-x-2 text-lg xs:text-xl md:text-xl lg:text-2xl  dark:text-white">
            <li className="mx-3  hover:border-b-2 hover:border-b-black hover:cursor-pointer dark:hover:border-b-white">
              <Link to="about" smooth={true} offset={-70} duration={500}>
                About
              </Link>
            </li>
            <li className="mx-3 hover:border-b-2 hover:border-b-black x-3  dark:hover:border-b-white">
              <Link
                to="project"
                smooth={true}
                offset={-70}
                duration={500}
                href="#project"
              >
                Project
              </Link>
            </li>
            <li className="mx-3  hover:border-b-2 hover:border-b-black x-3 dark:hover:border-b-white">
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                href="#contact"
              >
                Contact
              </Link>
            </li>
            <li
              onClick={changeTheme}
              className="mx-3 ml-8   cursor-pointer text-2xl hover:scale-110 duration-300"
            >
              {theme === themeType.DARK ? <LuSunMoon /> : <BsCloudMoonFill />}
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <ul className="flex flex-row gap-x-4 py-1 text-lg xm:text-2xl items-center justify-center dark:text-white">
            <li className="hover:border-b-2 hover:border-b-black   dark:hover:border-b-white">
              <Link to="about" smooth={true} offset={-70} duration={500}>
                <FaUserTie />
              </Link>
            </li>
            <li className=" hover:border-b-2 hover:border-b-black x-3  dark:hover:border-b-white">
              <Link
                to="project"
                smooth={true}
                offset={-70}
                duration={500}
                href="#project"
              >
                <BsBriefcaseFill />
              </Link>
            </li>
            <li className="hover:border-b-2 hover:border-b-black x-3  dark:hover:border-b-white">
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                href="#contact"
              >
                <RiContactsFill />
              </Link>
            </li>
            <li onClick={changeTheme} className="ml-4  cursor-pointer">
              {theme === themeType.DARK ? <LuSunMoon /> : <BsCloudMoonFill />}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
